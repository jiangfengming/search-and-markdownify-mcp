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

    const html = await response.text()
    const dom = new JSDOM(html)
    dom.window.document
      .querySelectorAll('[data-nosnippet]')
      .forEach(node => node.remove())
    const reader = new Readability(dom.window.document, {
      // @ts-ignore missing definition
      linkDensityModifier: 1
    })
    const article = reader.parse()
    const markdown = turndownService.turndown(article?.content || '')
    cache.set(url, markdown)
    return markdown
  } catch (e) {
    return `Failed to fetch ${url}. ${e}`
  }
}
