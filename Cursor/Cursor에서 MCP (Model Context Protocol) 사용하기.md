---
title: Cursor에서 MCP (Model Context Protocol) 사용하기
source: https://dytis.tistory.com/114
author:
  - "[[pfldy2850]]"
published: 2025-04-03
created: 2025-06-05
description: Cursor는 개발자들이 생산적으로 코드를 작성하고 협업할 수 있도록 돕는 강력한 AI 기반 코드 편집기입니다. 최근 Cursor가 MCP(Model Context Protocol)를 지원하면서, 사용자는 더욱 향상된 코드 작성 환경을 경험할 수 있게 되었습니다. 이번 글에서는 Cursor에서 MCP를 어떻게 설정하고 활용하는지 살펴보겠습니다.MCP와 관련된 내용은 지난 블로그 글에서 다루었으니, 참고하시기 바랍니다! MCP(Model Context Protocol)이 뭐길래?인공지능(AI) 기술의 발전과 함께, AI 시스템이 외부 데이터와 효과적으로 연동되는 것이 점점 더 중요한 이슈로 떠오르고 있습니다. 기존에는 AI 모델이 내부적으로 훈련된 데이터만을 기반으로dytis.tistory.com  MCP..
tags:
  - clippings
---
Cursor는 개발자들이 생산적으로 코드를 작성하고 협업할 수 있도록 돕는 강력한 AI 기반 코드 편집기입니다. 최근 Cursor가 MCP(Model Context Protocol)를 지원하면서, 사용자는 더욱 향상된 코드 작성 환경을 경험할 수 있게 되었습니다. 이번 글에서는 Cursor에서 MCP를 어떻게 설정하고 활용하는지 살펴보겠습니다.

MCP와 관련된 내용은 지난 블로그 글에서 다루었으니, 참고하시기 바랍니다!

[

MCP(Model Context Protocol)이 뭐길래?

인공지능(AI) 기술의 발전과 함께, AI 시스템이 외부 데이터와 효과적으로 연동되는 것이 점점 더 중요한 이슈로 떠오르고 있습니다. 기존에는 AI 모델이 내부적으로 훈련된 데이터만을 기반으로

dytis.tistory.com

](https://dytis.tistory.com/112)[

MCP(Model Context Protocol)이 뭐길래? 실습편

지난 포스트에서는 MCP(Model Context Protocol)이 무엇인지, 그리고 MCP가 최근 화제가 되는 이유에 대해서 다뤘습니다.해당 내용에 대해서 관심 있으신 분들은 지난 포스트 글을 참고해주시기 바랍니

dytis.tistory.com

](https://dytis.tistory.com/113)

## Cursor에서 MCP 설정하기

MCP를 사용하면 Cursor를 외부 시스템 및 데이터 소스에 연결할 수 있습니다. 즉, Cursor에게 여러분들의 프로젝트에서 코드 외의 프로젝트 구조를 알려줄 필요 없이 기존 도구 및 인프라와 통합할 수 있습니다.

### MCP Server 설정

Claude Desktop과 마찬가지로 Cursor도 mcpServers에 대한 configuration을 작성합니다. 이에 대한 인터페이스는 MCP에 의해 규격화되어서 모든 호스트 어플리케이션에서 동일한 내용으로 사용할 수 있습니다. 실행할 수 있는 MCP 서버도 Node.js나 python 스크립트를 실행하거나, SSE 서버에 연동하는 등의 다양한 기능을 제공합니다.

CLI Server - Node.js

```javascript
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "mcp-server"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
```

CLI Server - Python

```python
{
  "mcpServers": {
    "server-name": {
      "command": "python",
      "args": ["mcp-server.py"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
```

SSE Server

```python
{
  "mcpServers": {
    "server-name": {
      "url": "http://localhost:3000/sse",
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
```

Cursor에서는 이러한 설정파일을 프로젝트별 / 전역의 두가지로 설정할 수 있도록 제공합니다. 프로젝트별 configuration은 프로젝트 폴더 내의.cursor/mcp.json에 작성할 수 있습니다. 전역 설정은 \\~/.cursor/mcp.json 파일에 작성합니다.

## 실습: MCP 서버 적용하기

### Naver OpenAPI

지난 실습에 이어서 Cursor에도 Naver OpenAPI MCP를 적용해보겠습니다.

[https://github.com/pfldy2850/py-mcp-naver](https://github.com/pfldy2850/py-mcp-naver)

API 발급을 위한 사전작업은 지난 블로그글을 참고해주세요.

[

MCP(Model Context Protocol)이 뭐길래? 실습편

지난 포스트에서는 MCP(Model Context Protocol)이 무엇인지, 그리고 MCP가 최근 화제가 되는 이유에 대해서 다뤘습니다.해당 내용에 대해서 관심 있으신 분들은 지난 포스트 글을 참고해주시기 바랍니

dytis.tistory.com

](https://dytis.tistory.com/113)

시작하기에 앞서, Cursor에 들어가 Cursor Settings를 열어봅니다.

![](https://blog.kakaocdn.net/dn/bFhaEv/btsM5rKquOY/kKHVfxuYfSM5VB7bJsO7n1/img.png)

현재는 MCP Servers에 아무것도 등록이 되지 않은 것을 확인할 수 있습니다.

#### 설치

해당 프로젝트에 작업이 많이 되어, PyPi로 쉽게 설치하여 사용할 수 있게 되었습니다. 먼저 mcp-naver를 설치합니다.

```python
uv pip install mcp-naver
```

패키지가 정상적으로 설치되었다면, mcp-naver 에서 제공하는 스크립트를 활용하여 cursor에 해당 mcp 서버를 등록합니다.

```bash
uv run python -m mcp-naver.hosts.claude_desktop \
  -e NAVER_CLIENT_ID=<YOUR NAVER CLIENT ID> \
  -e NAVER_CLIENT_SECRET=<YOUR NAVER CLIENT SECRET>
```

정상적으로 설치되었다면, 아래처럼 Cursor Settings에 Naver OpenAPI MCP 서버가 등록된 것을 확인할 수 있습니다.

![](https://blog.kakaocdn.net/dn/bhQrxd/btsM6YfMnsP/Z9UFV2z6RtqGuz0ZkLahz1/img.png)

MCP Server에서 개별 MCP 서버에서 사용할 수 있는 Tools나 서버를 실행하기 위한 command를 확인할 수 있습니다. 우측 상단에서는 해당 MCP 서버를 사용하지 않도록 설정할 수 있고, 내용을 편집 할 수 있습니다.

\\~/.cursor/mcp.json 파일을 들어가보면, 위에서 소개해드린 mcpServers에 Naver OpenAPI라는 MCP 서버가 설정된 것을 확인할 수 있습니다.

![](https://blog.kakaocdn.net/dn/bc3JY4/btsM5Zmohzo/2YoINkBWrubQtXt2dbIM8K/img.png)

### 실행하기

그럼 이제 Agent를 통해서 MCP를 실행해보겠습니다. 간단하게 오늘 날씨가 어떤지 물어보겠습니다.

![](https://blog.kakaocdn.net/dn/rmxb2/btsM6ghbYwG/0hxolzNvO8yWBEwSTvck9K/img.png)

Agent는 스크린샷처럼 오늘 날씨 어때? 라는 질문에 맞는 MCP 서버를 탐색하고, 직접 입력을 생성하여 전달하기 위한 준비를 합니다. Cursor에서는 command + enter를 눌러 Tool을 실행하도록 할 수 있습니다.

![](https://blog.kakaocdn.net/dn/IK0Qr/btsM43iHqEe/0NZZ7Ak3kkP7QyU3NS1ImK/img.png)

이번 질문에서는 Agent 스스로 네이버 블로그와 네이버 뉴스에 오늘 날씨와 관련된 내용을 검색해서 정보를 찾아왔습니다.

찾은 정보를 토대로 질문에 맞는 답변을 잘 생성한 것을 확인할 수 있습니다.

![](https://blog.kakaocdn.net/dn/cZm3Id/btsM5svRdb0/3gO96F4hte6hqtsWkKQv40/img.png)

### Yolo Mode

Yolo 모드를 활성화하면 Agent가 승인 없이도 MCP 도구를 자동으로 실행할 수 있습니다.

![](https://blog.kakaocdn.net/dn/bIjvDA/btsM5UZF4cm/rCKLosdOBtn4Br7ipY2U6k/img.png)

공식 문서에서는 Yolo Mode라고 되어 있는데, 제 Cursor 앱에서는 Enable auto-run mode로 설정되어 있습니다. 도구 호출에 대한 승인 없이 자동으로 호출하게 하려면 해당 설정을 On 하면 됩니다. 설정을 활성화하고 실행하면 아래처럼 도구가 바로 수행됩니다.

![](https://blog.kakaocdn.net/dn/egkVbb/btsM5A8etwY/g07QIzLEbTUQkGnOJxjrr1/img.png)

### Cursor MCP의 한계

#### Tool Quantity

일부 MCP 서버 또는 여러 MCP 서버를 활성화한 사용자는 Cursor가 사용할 수 있는 도구가 많을 수 있습니다. 현재는 Cursor가 첫 40개의 도구 목록만 Agent에 전달합니다.

#### Remote Development

Cursor는 stdio를 통해 직접 또는 sse를 사용한 네트워크를 통해 로컬 머신에서 MCP 서버와 직접 통신합니다. 따라서 MCP 서버는 SSH 또는 다른 개발 환경을 통해 Cursor에 액세스할 때 제대로 작동하지 않을 수 있습니다.

#### MCP Resources

MCP 서버는 도구와 리소스라는 두 가지 주요 기능을 제공합니다. Tools는 현재 Cursor에서 사용할 수 있지만 Cursor에서는 아직 Resources가 지원되지 않습니다. 향후 릴리스에서 리소스 지원을 추가하기를 바라고 있습니다.

## 맺음 말

이번 글에서는 인기있는 AI 기반 코드 편집기인 Cursor에 MCP 서버를 설치하여 사용하는 법에 대해서 정리하였습니다.

MCP 자체가 규격을 말하는 것이기 때문에 mcpServers와 같은 공통 설정에 대한 약속이 있어서, Claude Desktop이나 Cursor와 같은 여러 호스트 어플리케이션에 MCP를 손쉽게 적용해볼 수 있는 것이 개인적으로 굉장히 좋았습니다.

최근 MCP에 대한 관심과 함께 관련 생태계가 점점 커지고 있습니다. 뿐만 아니라 PulseMCP 등의 여러 MCP를 탐색하여 활용하고자 하는 관심사도 많아지고 있는 것 같습니다. 앞으로 더 다양한 MCP 서버들이 개발되어 보다 풍부하고 강력한 에이전트 경험을 할 수 있는 시대가 오기를 기대합니다.

[저작자표시 (새창열림)](https://creativecommons.org/licenses/by/4.0/deed.ko)

#### ' > ' 카테고리의 다른 글

| [MCP(Model Context Protocol)이 뭐길래? 실습편](https://dytis.tistory.com/113) (3) | 2025.03.21 |
| --- | --- |
| [MCP(Model Context Protocol)이 뭐길래?](https://dytis.tistory.com/112)(5) | 2025.03.20 |
| [LangChain을 활용한 Tool Calling # 4](https://dytis.tistory.com/99) (3) | 2024.11.29 |
| [LangChain을 활용한 Tool Calling # 3](https://dytis.tistory.com/98) (0) | 2024.11.29 |
| [LangChain을 활용한 Tool Calling # 2](https://dytis.tistory.com/97) (3) | 2024.11.29 |