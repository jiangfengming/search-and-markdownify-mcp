import { teleman } from 'teleman'
import { LRUCache } from 'lru-cache'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'
import type { Params$Resource$Cse$List, Schema$Search } from './cse.types.js'

if (!process.env.GOOGLE_API_KEY) {
  throw new Error('Missing required environment variable: GOOGLE_API_KEY')
}

if (!process.env.GOOGLE_SEARCH_ENGINE_ID) {
  throw new Error(
    'Missing required environment variable: GOOGLE_SEARCH_ENGINE_ID'
  )
}

const cache = new LRUCache<string, string>({
  max: 100
})

interface SearchParams {
  q: string
  num?: number
  start?: number
}

export default async function search({
  q,
  num = 5,
  start = 1
}: SearchParams): Promise<CallToolResult> {
  const cacheKey = JSON.stringify({ q, num, start })
  const cached = cache.get(cacheKey)
  if (cached) {
    return {
      content: [
        {
          type: 'text',
          text: cached
        }
      ]
    }
  }

  const response = await teleman.get<Schema$Search>(
    'https://customsearch.googleapis.com/customsearch/v1',
    {
      q,
      num,
      start,
      key: process.env.GOOGLE_API_KEY,
      cx: process.env.GOOGLE_SEARCH_ENGINE_ID
    } as Params$Resource$Cse$List
  )

  let text = response.items
    ?.map(item => `* [${item.title}](${item.link})  \n  ${item.snippet}\n\n`)
    .join('')

  if (text) {
    const start = response.queries?.nextPage?.[0]?.startIndex
    if (start) {
      text += `Next Page Parameters: \`${JSON.stringify({ q, num, start })}\``
    } else {
      text += 'No more pages available.'
    }

    cache.set(cacheKey, text)
  }

  return {
    content: [
      {
        type: 'text',
        text: text || 'No results found.'
      }
    ]
  }
}
