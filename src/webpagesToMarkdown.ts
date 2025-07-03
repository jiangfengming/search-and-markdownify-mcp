import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'
import TurndownService from 'turndown'
import { LRUCache } from 'lru-cache'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'

const cache = new LRUCache<string, string>({
  max: 100
})

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
})

export default async function webpagesToMarkdown({
  urls
}: {
  urls: string[]
}): Promise<CallToolResult> {
  const contents = await Promise.all(urls.map(webpageToMarkdown))

  return {
    content: contents.map(content => ({
      type: 'text',
      text: content
    }))
  }
}

async function webpageToMarkdown(url: string): Promise<string> {
  try {
    const cached = cache.get(url)
    if (cached) {
      return cached
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
      }
    })

    if (!response.ok) {
      throw new Error(`${response.statusText}`)
    }

    const markdown = htmlToMarkdown(await response.text())
    cache.set(url, markdown)
    return markdown
  } catch (e) {
    return `Failed to fetch ${url}. ${e}`
  }
}

export function htmlToMarkdown(html: string) {
  const dom = new JSDOM(html)

  dom.window.document
    .querySelectorAll('[data-nosnippet]')
    .forEach(node => node.remove())

  dom.window.document
    .querySelectorAll('.overflow-hidden')
    .forEach(el => el.classList.remove('overflow-hidden'))

  dom.window.document.querySelectorAll('code:has(> *)').forEach(node => {
    for (const child of node.childNodes) {
      if (
        child.nodeType === dom.window.Node.TEXT_NODE &&
        child.textContent?.trim()
      ) {
        return
      }
    }

    ;[...node.childNodes].forEach(child => {
      if (child.nodeType !== dom.window.Node.ELEMENT_NODE) {
        if (
          child.nodeType !== dom.window.Node.TEXT_NODE ||
          child.previousSibling?.nodeType !== dom.window.Node.ELEMENT_NODE ||
          child.nextSibling?.nodeType !== dom.window.Node.ELEMENT_NODE
        ) {
          node.removeChild(child)
        } else {
          child.nodeValue = '\n'
        }
      }
    })
  })

  const reader = new Readability(dom.window.document, {
    // @ts-ignore missing definition
    linkDensityModifier: 1
  })
  const article = reader.parse()
  return turndownService.turndown(article?.content || '')
}
