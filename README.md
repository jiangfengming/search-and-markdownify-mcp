# Google Search & Webpage Markdownify MCP Server

An MCP (Model Context Protocol) server that provides Google search capabilities and converts webpage content to clean, readable Markdown.

[![NPM Version](https://img.shields.io/npm/v/search-and-markdownify-mcp.svg)](https://www.npmjs.com/package/search-and-markdownify-mcp)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Tools](#available-tools)
  - [`google-search`](#google-search)
  - [`webpages-to-markdown`](#webpages-to-markdown)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Google Search**: Perform Google searches using advanced operators.
- **Web Content Conversion**: Fetch content from webpages and convert it to clean Markdown.
- **Batch Processing**: Convert multiple webpages to Markdown in a single request.

## Prerequisites

- Node.js (v18 or higher)
- A Google Cloud Platform account with the Custom Search API enabled.
- A [Custom Search Engine ID](https://programmablesearchengine.google.com/controlpanel/all).
- A [Google API Key](https://console.cloud.google.com/apis/credentials).

## Getting Started

To use the server, add the following entry to your MCP configuration file. Remember to replace the placeholder values with your actual Google API Key and Search Engine ID.

```json
{
  "mcpServers": {
    "search-and-markdownify": {
      "command": "npx",
      "args": ["search-and-markdownify-mcp"],
      "env": {
        "GOOGLE_API_KEY": "your-google-api-key",
        "GOOGLE_SEARCH_ENGINE_ID": "your-custom-search-engine-id"
      }
    }
  }
}
```

## Available Tools

This MCP server provides the following tools:

### `google-search`

Searches Google for a given query and returns a list of search results formatted as Markdown. Each result includes a title, a URL, and a snippet from the webpage.

**Arguments:**

| Parameter | Type   | Description                                                              | Default |
| --------- | ------ | ------------------------------------------------------------------------ | ------- |
| `q`       | string | The search query for Google. Supports advanced operators like `"site:"`. | (req)   |
| `num`     | number | The maximum number of results to return.                                 | `5`     |
| `start`   | number | The starting index for results (1-based, for pagination).              | `1`     |

**Response:**

- A Markdown-formatted string of search results, including title, link, and snippet for each.

### `webpages-to-markdown`

Fetches the content of the given webpages and converts them into clean, readable Markdown.

**Arguments:**

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `urls`    | string[] | A list of URLs for the webpages to be converted to Markdown. |

**Response:**

- An array of Markdown strings, with each string representing the content of a corresponding webpage.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
