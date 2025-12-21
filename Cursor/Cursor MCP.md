

claude mcp add magic --scope user --env API_KEY="46bf91cf451d79ea7cf46724968d3638ffe9bba7befb005322b07e62ec09835b" -- npx -y @21st-dev/magic@latest
  

- playwright - Browser automation & E2E testing Cross-browser testing, performance monitoring, visual testing 

- task-master-ai - Project task management Task tracking, PRD parsing, complexity analysis, workflow automation 

- filesystem - File system operations Read/write files, directory operations (access to ~/Users/younghwankang) 

- sequential-thinking - Complex multi-step reasoning Structured problem-solving, deep analysis workflows 

- context7-mcp - Library documentation lookup Up-to-date docs and code examples for frameworks/libraries 

- mcp-server-firecrawl - Advanced web scraping Single page scraping, batch operations, website mapping, search 

- obsidian-mcp - Obsidian vault integration Note management, search, tagging for your iCloud Obsidian vault 

- magicuidesign-mcp - UI component library Modern UI components, design systems, animations


```

{
  "mcpServers": {
    "Sequential Thinking Tools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@xinzhongyouhai/mcp-sequentialthinking-tools",
        "--key",
        "7ac701af-bf6a-4031-8577-beccf2b31ca8"
      ],
      "env": {}
    },
    "TaskManager": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@kazuph/mcp-taskmanager",
        "--key",
        "7ac701af-bf6a-4031-8577-beccf2b31ca8"
      ],
      "env": {}
    },
    "shrimp-task-manager": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-shrimp-task-manager"
      ],
      "env": {
        "DATA_DIR": "shrimp-data",
        "TEMPLATES_USE": "en",
        "ENABLE_GUI": "false"
      }
    },
    "Firecrawl Web Scraping Server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@Krieg2065/firecrawl-mcp-server",
        "--key",
        "7ac701af-bf6a-4031-8577-beccf2b31ca8",
        "--profile",
        "afraid-ptarmigan-4gXnmH"
      ],
      "env": {}
    },
    "Talk to Figma MCP": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@sonnylazuardi/cursor-talk-to-figma-mcp",
        "--key",
        "7ac701af-bf6a-4031-8577-beccf2b31ca8"
      ],
      "env": {}
    },
    "cursor-talk-to-figma-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@sonnylazuardi/cursor-talk-to-figma-mcp",
        "--key",
        "7ac701af-bf6a-4031-8577-beccf2b31ca8"
      ]
    },
    "html.to.design": {
      "url": "https://h2d-mcp.divriots.com/be3ccd4c-7ce8-418c-a6a7-8aab1bb0ab8d/sse"
    },
    "GitKraken": {
      "command": "/Users/002billmac_home/Library/Application Support/Cursor/User/globalStorage/eamodio.gitlens/gk",
      "type": "stdio",
      "name": "GitKraken",
      "args": [
        "mcp",
        "--host=cursor",
        "--source=gitlens",
        "--scheme=cursor"
      ],
      "env": {}
    },
    "tavily-remote-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.tavily.com/mcp/?tavilyApiKey=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"
      ],
      "env": {}
    },
    "shadcn-ui": {
      "command": "npx",
      "args": [
        "@jpisnice/shadcn-ui-mcp-server",
        "--github-api-key",
        "ghp_your_token_here"
      ]
    },
    "magicui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@magicuidesign/mcp@latest"
      ]
    }
  }
}
```
