import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import search from './search'
import webpagesToMarkdown from './webpagesToMarkdown'
import pkgInfo from '../package.json' with { type: 'json' }

const server = new McpServer({
  name: 'search-and-markdownify-mcp',
  version: pkgInfo.version
})

server.registerTool(
  'google-search',
  {
    description:
      'Searches Google for a given query and returns a list of search results formatted as Markdown. Each result includes a title, a URL, and a snippet from the webpage.',
    inputSchema: {
      q: z
        .string()
        .describe(
          'The search query for Google. Supports advanced operators like "site:".'
        ),
      num: z
        .number()
        .optional()
        .describe('The maximum number of results to return. Defaults to 5.'),
      start: z
        .number()
        .optional()
        .describe(
          'Starting index for results (1-based, for pagination). Default: 1.'
        )
    }
  },
  search
)

server.registerTool(
  'webpages-to-markdown',
  {
    description:
      'Fetches the content of the given webpages and converts them into clean, readable Markdown.',
    inputSchema: {
      urls: z
        .array(z.string())
        .describe(
          'A list of URLs for the webpages to be converted to Markdown.'
        )
    }
  },
  webpagesToMarkdown
)

const transport = new StdioServerTransport()
await server.connect(transport)
