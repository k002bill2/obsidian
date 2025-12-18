---
title: 커서 AI를 100개 이상의 MCP 서버에 연결하는 방법
source: https://yozm.wishket.com/magazine/detail/3125/
author:
  - "[[Yozm IT]]"
published: 2025-05-14
created: 2025-06-05
description: 오늘은 커서를 100개 이상의 MCP 서버와 연결하여, 몇 분 만에 IDE에서 복잡한 워크플로우를 자동화하는 방법에 대해 알아보겠습니다.
tags:
  - clippings
---
AWS 이용 중이라면 최대 700만 원 지원받으세요

몇 년차,어떤 스킬,어떤 직무 의 독자들이 봤을까요?

어떤 독자들이 봤을까요?

본문은 요즘IT와 번역가 David가 함께 안몰 바란왈(Anmol Baranwal)의 글 < [How to connect Cursor to 100+ MCP Servers within minutes](https://composio.dev/blog/how-to-connect-cursor-to-100-mcp-servers-within-minutes/) >을 번역한 글입니다. 필자는 인도 출신의 풀스택 개발자이며, 현재는 국제 스타트업을 위한 전문 기술 작가로 활동하고 있습니다. 본 글에서는 MCP라는 기술을 소개하며, Composio를 사용해 인증이 내장된 완전 관리형 MCP 서버에 연결하는 단계별 가이드와 실제 사용 사례를 제공합니다.

필자에게 허락을 받고 번역했으며, 글에 포함된 각주(\*표시)는 ‘번역자주’입니다. 글에 포함된 링크는 원문에 따라 표시했습니다.

MCP는 요즘 업계의 화제입니다. 만약 여러분이 이 글을 보고 계시다면, 아마도 인터넷에서 Cursor나 Claude의 뛰어난 활용 사례를 접해보셨을 겁니다. 오늘은 Cursor를 100개 이상의 MCP 서버와 연결하여, 몇 분 만에 IDE에서 복잡한 워크플로우를 자동화하는 방법에 대해 알아보겠습니다.  
  

#### 다룰 내용

다음 주제들을 자세히 다룰 예정입니다.

1. MCP(모델 컨텍스트 프로토콜)이란 무엇인가?
2. 자체 인증 기능을 갖춘 100개 이상의 완전 관리형 MCP 서버에 Cursor를 연결하는 단계별 가이드
3. 예제와 함께 보는 실용적인 사용 사례

여기서는 [MCP 서버](https://mcp.composio.dev/?_gl=1*16rixix*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjAxMTUxNi41LjEuMTc0NjAxMTg0NC40My4wLjkxNzgxNjY5MQ..*_ga_J9WD56TEBS*MTc0NjAxMTUxNi41LjEuMTc0NjAxMTg0NC4wLjAuMA..&utm_source=devto&utm_medium=blog&utm_campaign=mcp-101) 로 Composio를 사용할 것입니다. Composio는 내장 인증 기능이 있으며 완전 관리형 서버로 제공되기 때문입니다.

### 1\. MCP(모델 컨텍스트 프로토콜)이란 무엇인가?

[MCP](https://modelcontextprotocol.io/introduction) 는 애플리케이션이 LLM에 컨텍스트와 도구를 제공하는 방식을 표준화하는 새로운 개방형 프로토콜입니다. AI를 위한 범용 커넥터라고 생각하시면 됩니다. MCP는 Cursor의 플러그인 시스템으로 작동하여 다양한 데이터 소스와 도구에 연결함으로써 에이전트의 기능을 확장할 수 있게 해줍니다.

![](https://www.wishket.com/media/news/3125/1_pic.png)

<출처: Greg Isenburg 의 유튜브>

MCP는 LLM 위에 에이전트와 복잡한 워크플로우를 구축하는 데 도움을 줍니다. 예를 들어, Obsidian용 MCP 서버는 AI 어시스턴트가 Obsidian 볼트에서 메모를 검색하고 읽을 수 있도록 도와줍니다.

이제 AI 에이전트는 다음과 같은 작업을 수행할 수 있습니다.

- Gmail을 통해 이메일 전송
- Linear에서 작업 생성
- Notion에서 문서 검색
- Slack에서 메시지 전송
- Salesforce의 레코드 업데이트

이 모든 것을 자연스럽게 대화하면서 할 수 있습니다. 이것이 생산성에 미칠 영향을 생각해 보세요. 이전에는 5개 이상의 앱 사이를 오가며 컨텍스트 전환이 필요했던 작업들이 이제는 AI 에이전트와의 대화만으로 이루어질 수 있습니다.

![](https://www.wishket.com/media/news/3125/2_gif.gif)

핵심적으로 MCP는 호스트 애플리케이션이 여러 서버에 연결할 수 있는 클라이언트-서버 아키텍처를 따릅니다.

![](https://www.wishket.com/media/news/3125/3_pic.png)

MCP의 아키텍처, 라이프사이클, 프로토콜, 단점 및 내부 작동 방식을 심층적으로 [설명하는 글](https://composio.dev/blog/what-is-model-context-protocol-mcp-explained/) 이 있습니다. 완벽한 비디오를 찾고 있으시거나, MCP가 왜 중요한지 이해하고 싶다면, 위 글을 읽어보세요.

#### MCP 서버가 아닌 것

많은 사람들이 혼동하고 있으므로 몇 가지 사항을 명확히 해보겠습니다.

- API를 대체할 수 없음: MCP는 API를 사용할 수 있지만, 표준화된 인터페이스일 뿐이며 특정 API 기능의 대체제가 아닙니다.
- 생성하기 복잡하지 않음: 개발자는 간단한 프로토콜을 사용하여 MCP 서버를 만들 수 있습니다. 인터넷에서 템플릿, 비디오 및 기타 리소스를 쉽게 찾을 수 있습니다.
- 직접 DB가 아님: MCP 서버는 직접 데이터를 저장하지 않고 브릿지 역할을 합니다.

또한 원격 서버에만 국한되지 않습니다. 로컬에서도 운영할 수 있습니다.

### 2\. 자체 인증 기능을 갖춘 100개 이상의 완전 관리형 MCP 서버에 Cursor를 연결하는 단계별 가이드

이 섹션에서는 Cursor를 MCP 서버와 연결하는 방법을 살펴보겠습니다. Cursor 내에서 사용자 정의 MCP 서버를 추가하고 사용하는 방법을 알아보려면 공식 문서를 읽어보세요.

#### 1단계: 사전 요구 사항

Node.js를 설치하고 현재 환경에서 npx를 사용할 수 있는지 확인합니다.

#### 2단계: Cursor에서 MCP 서버 활성화

*Ctrl(윈도우) 또는 Cmd(맥) + Shift + P* 로 Cursor의 명령 팔레트를 열고 cursor settings를 입력합니다.

![](https://www.wishket.com/media/news/3125/4_pic.png)

사이드바에서 MCP 옵션을 찾을 수 있습니다.

![](https://www.wishket.com/media/news/3125/5_pic.png)

#### 3단계: 사전 정의된 MCP 서버 사용

Composio는 사전 구축된 MCP 서버를 제공합니다. 목록은 [mcp.composio.dev](https://mcp.composio.dev/?_gl=1*1wfaujq*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjQyNTcwMC42LjEuMTc0NjQyNTc2Ni41NC4wLjkwMTUyNDkxMA..*_ga_J9WD56TEBS*MTc0NjQyNTcwMC42LjEuMTc0NjQyNTc2Ni4wLjAuMA..) 에서 확인할 수 있습니다. Claude, Windsurf 및 OpenAI Agents SDK와 같은 다른 MCP 클라이언트도 사용할 수 있습니다.

- 내장된 인증 및 인가는 OAuth, API 키, JWT 및 기본 인증 및 인가를 지원합니다. 이는 자체 로그인 시스템을 만들 필요가 없다는 것을 의미합니다.
- 완전 관리형 서버는 복잡한 설정 없이도 Gmail, Slack, Notion, Linear 및 기타 도구와 AI 에이전트를 쉽게 통합할 수 있습니다.
- 향상된 도구 호출 정확도를 통해 AI 에이전트가 통합된 앱과 원활하게 상호 작용할 수 있습니다.

또한 다운타임과 유지 관리 문제가 줄어듭니다. 자세한 내용은 [링크](https://composio.dev/mcp/?utm_source=website&utm_medium=header&utm_campaign=explore) 에서 확인할 수 있습니다. 코드를 작성하지 않고도 유용한 MCP 서버를 쉽게 통합할 수 있죠.

![](https://www.wishket.com/media/news/3125/6_pic.png)

각 옵션은 총 활성 사용자 수, 현재 버전, 최근 업데이트된 시기 및 사용 가능한 모든 작업을 보여줍니다. 또한 Claude(MacOS), Windsurf(MacOS), 타입스크립트 및 파이썬 중에서 통합을 위한 선택지가 있습니다.

![](https://www.wishket.com/media/news/3125/7_pic.png)

Composio가 돋보이는 이유

- 내장 인증이 포함된 완전 관리형 서버
- Slack, Notion, Gmail, Linear, Salesforce와 같은 250개 이상의 도구 지원
- 코딩 없이 빠른 통합을 위한 20,000개 이상의 사전 구축된 API 작업 제공
- 필요에 따라 로컬 또는 원격으로 작동 가능
- Composio는 AI 에이전트와 호환되므로 단일 대화 내에서 이메일 전송, 작업 생성 또는 티켓 관리와 같은 작업을 위해 AI 에이전트를 도구에 연결할 수 있습니다.

처음부터 직접 만들고 싶다면 아래와 같이 할 수 있습니다. 다음 명령을 사용하여 SDK 패키지를 설치해야 합니다.

shell

```
npm install @modelcontextprotocol/sdk
```

계산기 도구와 일부 데이터를 노출하는 간단한 MCP 서버를 만드는 방법입니다.

js

```javascript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// MCP 서버 생성
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// 덧셈 도구 추가
server.tool("add",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// 동적 리소스 추가
server.resource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
```

위 코드를 이해하는 데 도움이 될 몇 가지 핵심 개념은 다음과 같습니다.

- 서버: McpServer는 MCP 프로토콜에 대한 핵심 인터페이스입니다. 연결 관리, 프로토콜 준수 및 메시지 라우팅을 처리합니다.
- 리소스: LLM에 데이터를 노출하는 방법입니다. REST API의 GET 엔드포인트와 유사합니다.
- 도구: 도구를 통해 LLM이 서버를 통해 작업을 수행할 수 있습니다. 리소스와 달리 도구는 계산을 수행하고 부작용을 일으킬 것으로 예상됩니다.
- 프롬프트: 프롬프트는 LLM이 서버와 쉽게 상호 작용할 수 있도록 도와주는 재사용 가능한 템플릿입니다.

stdio(명령줄 도구 또는 직접 통합용) 및 SSE가 포함된 HTTP(원격 서버용)를 사용하여 서버를 실행할 수 있습니다.

MCP의 공식 웹사이트인 [modelcontextprotocol.io](http://modelcontextprotocol.io/) 에서는 타입스크립트 SDK, 파이썬 SDK, 자바 SDK 및 코틀린 SDK를 찾을 수 있으며, 저장소에 방문하면 README에 모든 필요한 세부 정보가 있습니다.

![](https://www.wishket.com/media/news/3125/8_pic.png)

좋은 블로그를 찾고 계시다면, [링크](https://composio.dev/blog/mcp-server-step-by-step-guide-to-building-from-scrtch/) 를 확인해 보세요.

#### 4단계: MCP 서버 통합

이제 Cursor와 하나를 통합할 시간입니다. 여기서는 Hackernews MCP 서버를 사용하겠습니다. 모르시는 분들을 위해 말씀드리자면, Hacker News는 Y Combinator에서 운영하는 기술 중심의 뉴스 집계 사이트입니다. 사용자가 등록한 스타트업, 프로그래밍 및 멋진 프로젝트에 관한 이야기와 토론이 특징입니다.

Cursor는 며칠 전에 이 방법을 변경했습니다. 혼란을 피하기 위해 새로운 방법과 이전 방법을 모두 설명하겠습니다.

**최신 버전**

터미널 명령을 생성해야 합니다. 이 [링크](https://mcp.composio.dev/hackernews/thundering-petite-vulture-guyWBb?_gl=1*1qtlrlx*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjQzMDU5OS43LjEuMTc0NjQzMDY3NS42MC4wLjEwMjA4MjUzNQ..*_ga_J9WD56TEBS*MTc0NjQzMDU5OS43LjEuMTc0NjQzMDY3NS4wLjAuMA..) 에서 자신의 명령을 생성할 수 있죠. 그럼 다음과 같이 보일 겁니다.

shell

```
npx @composio/mcp@latest setup "https://mcp.composio.dev/hackernews/xyzxyz..." --client cursor
```

용례에 따라 이 구성을 두 위치에 배치할 수 있습니다.

1. 프로젝트 디렉토리에 파일을 만들어 해당 프로젝트를 위한 특정한 도구를 정의합니다. 이렇게 하면 해당 프로젝트 내에서만 사용할 수 있는 MCP 서버를 정의할 수 있습니다.
2. 모든 프로젝트에서 사용하고 싶은 도구를 위해 홈 디렉토리에 파일을 만듭니다. 이렇게 하면 모든 Cursor 작업 공간에서 MCP 서버를 사용할 수 있게 됩니다.
![](https://www.wishket.com/media/news/3125/9_pic.png)

필요한 작업과 성공적으로 통합되었음을 나타내는 녹색 점 상태가 표시됩니다.

![](https://www.wishket.com/media/news/3125/10_pic.png)

JSON 데이터 파일은 다음과 같이 보입니다(SSE, 파이썬 CLI, Node.js CLI 순서대로).

json

```javascript
// 이 예제는 SSE 형식을 사용하는 MCP 서버를 보여줍니다
// 사용자는 수동으로 서버를 설정하고 실행해야 합니다
// 다른 사람들도 접근할 수 있도록 네트워크화될 수 있습니다
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

// CLI 서버 파이썬을 사용하는 경우
// 이 예제는 stdio 형식을 사용하는 MCP 서버를 보여줍니다
// Cursor가 자동으로 이 프로세스를 실행합니다
// \`python\`으로 실행되는 파이썬 서버를 사용합니다
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

// CLI 서버 Node.js를 사용하는 경우
// 이 예제는 stdio 형식을 사용하는 MCP 서버를 보여줍니다
// Cursor가 자동으로 이 프로세스를 실행합니다
// \`npx\`로 실행되는 Node.js 서버를 사용합니다
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
```

샘플 서버 및 구현 목록은 [링크](https://modelcontextprotocol.io/examples) 를 통해 확인할 수 있습니다.

**이전 버전**

보안 MCP URL을 생성해야 합니다. 이 [링크](https://mcp.composio.dev/hackernews/thundering-petite-vulture-guyWBb?_gl=1*h9hyrs*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni42MC4wLjEwMjA4MjUzNQ..*_ga_J9WD56TEBS*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni4wLjAuMA..) 에서 본인의 URL을 생성할 수 있습니다. 서버 URL을 삽입할 수 있는 유형이 있는지 확인하세요.

![](https://www.wishket.com/media/news/3125/11_pic.png)

필요한 작업과 성공적으로 통합되었음을 나타내는 녹색 점 상태가 표시됩니다.

![](https://www.wishket.com/media/news/3125/12_pic.png)

#### 5단계: Agent 내에서 직접 서버 사용하기

Ctrl(윈도우) 또는 Cmd(맥) + I 명령을 사용하여 채팅 탭을 열고 닫을 수 있습니다. "오늘의 해커뉴스 인기 게시물 찾기"와 같이 Hackernews와 관련된 질문을 할 수 있습니다.

![](https://www.wishket.com/media/news/3125/13_pic.png)

**최신 버전**

![](https://www.wishket.com/media/news/3125/14_pic.png)

**이전 버전**

보시다시피, 적절한 MCP 서버(여러 개가 있는 경우)를 호출하고 프롬프트에 맞는 작업을 사용합니다. 수락을 클릭하여 응답을 생성할 수 있습니다. 100점에 도달한 게시물(인기 게시물 기준)이 없었기 때문에 최신 게시물 10개를 가져오는 다른 프롬프트를 시도해 보았습니다.

![](https://www.wishket.com/media/news/3125/15_pic.png)

축하합니다! 이렇게 간단하게 원하는 MCP 서버를 사용할 수 있습니다. Hackernews는 간단한 사례였지만, 개인 토큰이 필요한 깃헙과 같은 다른 서비스의 경우 “composio mcp라는 이름의 새 저장소를 만들고 mcp 서버에 대한 간략한 정보가 포함된 README를 추가해 주세요."와 같이 조금 더 자세한 프롬프트를 입력해야 합니다.

이제 MCP 서버를 Cursor에 통합하는 방법을 알게 되었으니, 다음 섹션에서는 많은 실제 예제를 살펴보겠습니다.

### 3\. 예제와 함께 보는 실용적인 사용 사례

이를 활용하여 획기적인 것들을 구축할 수 있으며, 그중 몇 가지 눈에 띄는 사례를 살펴보겠습니다. 이 중 일부는 소스코드(깃헙 저장소)를 포함하고 있습니다.

- [**LinkedIn MCP 서버**](https://mcp.composio.dev/linkedin/old-damaged-thailand-X5G8GA?_gl=1*1ea336n*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni42MC4wLjEwMjA4MjUzNQ..*_ga_J9WD56TEBS*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni4wLjAuMA..)

Cursor MCP 서버 목록에 이것을 추가한 후에는 많은 옵션이 표시됩니다. 그러나 일부는 입력 응답의 과부하를 방지하기 위해 연결을 시작해야 합니다.

이제 브라우저에서 OAuth URL을 복사하여 인증합니다.

![](https://www.wishket.com/media/news/3125/16_pic.png)

완료되면 확인 메시지가 표시됩니다.

![](https://www.wishket.com/media/news/3125/17_pic.png)

서버의 작업을 기반으로 이것을 확인할 수도 있습니다. 보시다시피, 연결이 활성화되어 있습니다.

![](https://www.wishket.com/media/news/3125/18_pic.png)

![](https://www.wishket.com/media/news/3125/19_pic.png)

- [**Linear MCP 서버**](https://mcp.composio.dev/linear/green-famous-lighter-8Ba3fu)

코딩 워크플로우를 강화할 수 있는 또 다른 흥미로운 서버입니다. 해당 서버를 사용하면 티켓을 가져오고, 만들고, 업데이트하는 등의 작업을 할 수 있습니다. Cursor 에이전트에게 작업을 요청하여 티켓을 쉽게 가져올 수 있습니다. 작업이 완료되면 티켓을 업데이트해야 합니다.

Cursor에서 Linear로 작업하는 방법을 알아보려면 아래 비디오를 참고하세요.

![](https://www.youtube.com/watch?v=sw3u-sd6pXw)
- [**Notion MCP 서버**](https://mcp.composio.dev/notion/green-famous-lighter-8Ba3fu)

Notion은 개발자로서 자주 사용하면 삶의 질을 높여주는 또 다른 서비스입니다. Notion에서 PRD를 가져와 Cursor 에이전트와 직접 기능을 구축할 수 있습니다. 티켓 관리를 위해 Linear 서버를 추가하여 한 단계 더 나아갈 수 있습니다.

이전과 동일한 단계를 따르세요.

1. Notion 서버로 인증 시작
2. OAuth 완료 및 권한 부여
3. 작업 요청

이것들은 몇 가지 예시일 뿐이며, [Composio MCP 서버](https://mcp.composio.dev/?_gl=1*e02wq5*_ga*Mzg5MTU2NjU1LjE3NDQ4Njk1NDA.*_ga_YKMWVQS9W0*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni42MC4wLjEwMjA4MjUzNQ..*_ga_J9WD56TEBS*MTc0NjQzMDU5OS43LjEuMTc0NjQzMjQ1Ni4wLjAuMA..) 로 더 많은 작업을 수행할 수 있습니다.

---

<원문>

[How to connect Cursor to 100+ MCP Servers within minutes](https://composio.dev/blog/how-to-connect-cursor-to-100-mcp-servers-within-minutes/)

©위 번역글의 원 저작권은 Anmol Baranwal에게 있으며, 저작권법의 보호를 받는 바, 무단 전재와 복사, 배포 등을 금합니다

댓글 0

[로그인](https://auth.wishket.com/login?next=/magazine/detail/3125/) 하고 자유롭게 의견을 남겨주세요.