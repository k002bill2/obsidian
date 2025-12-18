---
title: "프로젝트 관리 MCP: Task Master AI -> Github 프로젝트"
source: https://davinci-ai.tistory.com/71
author:
  - "[[HarimKang]]"
published: 2025-05-14
created: 2025-07-01
description: "프로젝트 Task 관리 위한 AI 에이전트 활용: 두 가지 강력한 MCP 서버 소개최근 AI 에이전트 기술이 발전하면서, 개발 초기의 설정을 돕고 개발 워크플로우의 생산성을 혁신할 수 있는 강력한 도구들이 등장하고 있습니다. AI 에이전트가 단순한 정보 제공을 넘어 실제 개발 환경에서 여러분을 돕기 위해서는 외부 시스템과 상호작용할 수 있는 방법이 필요합니다. 바로 이 상호작용을 가능하게 하는 핵심 프로토콜이 MCP(Model Control Protocol) 입니다. MCP를 통해 AI는 단순히 대화하는 것을 넘어, GitHub와 같은 개발 도구나 작업 관리 시스템과 직접 소통하며 작업을 수행할 수 있게 됩니다. 이러한 도구들 중에 저는 오늘 프로젝트 관리와 관련된 도구 소개와 환경 세팅을 공유하고자 합.."
tags:
  - clippings
---
## 상세 컨텐츠

### 본문 제목

프로젝트 관리 MCP: Task Master AI -> Github 프로젝트

by HarimKang

### 본문

![](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FGGokE%2FbtsNXsuzs86%2FAAAAAAAAAAAAAAAAAAAAAKEWY1iiD_LjuyRA7BlCZabbVYxpEFsTnKE-jHxoeKzM%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3DhdTdodKSlsD7xq6Mmw1PpXhFlM8%253D)

### 프로젝트 Task 관리 위한 AI 에이전트 활용: 두 가지 강력한 MCP 서버 소개

최근 AI 에이전트 기술이 발전하면서, 개발 초기의 설정을 돕고 개발 워크플로우의 생산성을 혁신할 수 있는 강력한 도구들이 등장하고 있습니다. AI 에이전트가 단순한 정보 제공을 넘어 실제 개발 환경에서 여러분을 돕기 위해서는 외부 시스템과 상호작용할 수 있는 방법이 필요합니다. 바로 이 상호작용을 가능하게 하는 핵심 프로토콜이 MCP(Model Control Protocol) 입니다. MCP를 통해 AI는 단순히 대화하는 것을 넘어, GitHub와 같은 개발 도구나 작업 관리 시스템과 직접 소통하며 작업을 수행할 수 있게 됩니다. 이러한 도구들 중에 저는 오늘 **프로젝트 관리와 관련된 도구 소개와 환경 세팅을 공유** 하고자 합니다.

### 바이브 코딩의 어려움: 프로젝트 관리가 중요하고, Agent도 진행사항을 잘 알아야 한다..

Vibe Coding을 제가 2-3개월정도 해보면서 느낀 점은, **Task 관리를 하기 어렵다는 점. 문서 또는 추가적인 메모리를 통해 현재까지의 진행사항과 앞으로 해야할 일을 관리** 하면서 진행해야 최대한 문제를 일으키지 않는다는 점이었습니다. 하지만 이것도 여전히 어려운 점은 많습니다. 체계적인 관리를 위해 **문서화에 시간을 쏟아야하며, 이것을 각 IDE의 Agent 룰로 잘 작성해놔야합니다**. Rule로 잘 작성해놔도, Agent는 매우 자주 까먹어버립니다. 또한 IDE의 Agent와 주로 소통하면서 많은 일들을 빠르게 해나가다보니까, 그 **빠른 속도 속에서, 진행사항에 대한 업데이트가 소홀** 해지고, 꽤 큰 범위의 프로젝트의 경우, 진행사항 업데이트가 중간에 끊어지거나 길을 잃는 경우도 많이 보입니다. 오늘 저는 두가지의 MCP를 사용하여 **프로젝트의 Task를 잘 관리하면서 개발을 진행하는 환경** 을 소개하고자 합니다. 최종적으로는 **로컬에서의 Task 관리와 Github의 Project 기능을 이용한 Task 관리가 가능하도록 환경을 구성** 합니다.

이 글에서는 프로젝트 요구 명세서가 작성되었다고 가정한 상태, 즉 아이디어는 있는 상태에서 개발을 위해 프로젝트 환경을 구성을 할 때 많은 도움이 될만한 내용을 정리해보고자 합니다. 그러므로 프로젝트 구상은 어느정도 된 상태 + 개발을 시작하는 세팅에서 도움이 될거라 생각됩니다 **Cursor IDE를 기준** 으로 작성하였으며, **Mac OS 환경** 에서 진행했습니다.~~처음에는 Windows WSL Ubuntu 환경에서 환경을 꾸려보다가 글에서 소개하려는 Task Master AI MCP가 아직 WSL환경에서 불안하다는 이슈를 발견하여 맥 환경으로 옮기게 되었습니다.~~

### 1\. Task Master AI: AI 기반 개발을 위한 작업 관리 🚀

**Task Master AI** 는 AI 기반 개발을 위해 특별히 설계된 AI 기반 **작업 관리 시스템** 입니다. 프로젝트 명세서가 있다면 해당 명세서를 sub-tasks로 나누어서 task를 관리하고, 현재 진행사항 및 남은 task등을 관리할 수 있게 됩니다. 또한 MCP로 제공하여, 개발 Agent가 "다음 task는 뭐야?" 와 같은 질문에 체계적으로 답변할 수 있습니다.

[Taskmaster AI - The PM for your AI agent](https://www.task-master.dev/)

[

Taskmaster AI - The PM for your AI agent

www.task-master.dev

](https://www.task-master.dev/)

#### 주요한 특징

Task Master AI는 프로젝트의 작업 관리를 AI의 도움을 받아 수행할 수 있게 합니다.

- **PRD(제품 요구사항 문서) 분석 및 작업 생성:**PRD와 같은 문서를 AI가 분석하여 개발 태스크 목록을 자동으로 생성할 수 있습니다.
- **다음 작업 추천:**현재 진행 상황을 바탕으로 AI가 다음에 진행해야 할 작업을 추천해 줍니다.
- **작업 구현 및 확장 지원:**특정 작업을 구현하거나 기존 작업을 더 상세하게 확장하는 과정에서 AI의 도움을 받을 수 있습니다.

이는 복잡한 프로젝트를 진행할 때 작업 흐름을 체계화하고, 개발자가 다음 단계에 집중할 수 있도록 지원합니다.

![](https://blog.kakaocdn.net/dna/GGokE/btsNXsuzs86/AAAAAAAAAAAAAAAAAAAAAKEWY1iiD_LjuyRA7BlCZabbVYxpEFsTnKE-jHxoeKzM/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=hdTdodKSlsD7xq6Mmw1PpXhFlM8%3D)

프로젝트 진행도 관리 및 Task 상태 관리

#### 환경 세팅: MCP 또는 Command Line

Task Master AI는 MCP를 통해 에디터에 통합하거나, 커맨드 라인 인터페이스(CLI)로 직접 사용할 수 있습니다. 이 글에서는 MCP 위주로 설명드리겠습니다.

아래의 명령어를 사용하여 간단하게 설치할 수 있습니다.

```coffeescript
npm install -g task-master-ai # 전역 설치
npm install task-master-ai # 로컬 설치
```
1. **MCP 설정:**VS Code 등 사용 중인 에디터의 MCP 설정에 Task Master AI 설정을 추가합니다. **Anthropic API 키는 필수 요구 사항** 이며, Perplexity, OpenAI 등 다른 API 키도 선택적으로 설정할 수 있습니다.
	- YOUR\_ANTHROPIC\_API\_KEY\_HERE등에 해당 API 키를 입력합니다.
		```json
		{
		  "mcpServers": {
		    "taskmaster-ai": {
		      "command": "npx",
		      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
		      "env": {
		        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
		        "PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
		        "MODEL": "claude-3-7-sonnet-20250219",
		        "PERPLEXITY_MODEL": "sonar-pro",
		        "MAX_TOKENS": 64000,
		        "TEMPERATURE": 0.2,
		        "DEFAULT_SUBTASKS": 5,
		        "DEFAULT_PRIORITY": "medium"
		      }
		    }
		  }
		}
		```
2. **AI에게 초기화 요청:**에디터의 AI 어시스턴트에게 "Can you please initialize taskmaster-ai into my project?" 와 같이 요청하여 Task Master를 초기화합니다.![](https://blog.kakaocdn.net/dna/mMrdl/btsNX2hNTHc/AAAAAAAAAAAAAAAAAAAAANz--RqIqDre9HlcWFBejYFNkSYccGnaGX1EWIaw64lx/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=X%2BtIYBKBzR3F0IPcQ0CLwIBIdsI%3D)
3. **명령어 사용:**초기화 후, AI 어시스턴트에게 "Can you parse my PRD at scripts/prd.txt?", "What's the next task I should work on?" 와 같은 명령어를 통해 작업 관리를 수행할 수 있습니다. **중요!: 이때 우리는 잘 작성된 prd.txt가 필요합니다.** 초기화 이후에 scripts 폴더내에 prd 예제 파일이 생성되는데 해당 내용에 필요한 것들을 채우는 방식으로 작성할 수 있습니다. 이 글에서는 일단 prd는 최대한 잘 구성되어있다고 가정하겠습니다.~~(저는 gpt와 함께 잘 작성했습니다 ㅎ)~~
![](https://blog.kakaocdn.net/dna/cS6YKD/btsNWdEWhYq/AAAAAAAAAAAAAAAAAAAAANvoGy3ZWThzf1PK7ureIuQQRpBnAcd3GW3coJi-75AH/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=NgncpPONYhwWRepTmJkDgMol068%3D)

위의 초기화 및 PRD를 분석하여 tasks를 파싱하면, tasks/ 폴더안에 나누어진 여러 task들이 생성됩니다. 해당 프로젝트 완료를 위해 생긴 task들이며, 이 파일들을 바탕으로 진행도를 파악하고 다음 task를 파악합니다.

#### Option | Command Line:

1. **설치:**npm을 사용하여 Task Master AI를 전역 또는 로컬 프로젝트에 설치합니다.
2. **프로젝트 초기화:**프로젝트의 루트 경로에서task-master init또는npx task-master init명령을 사용하여 프로젝트를 초기화합니다. 프로젝트 세부 정보를 입력하라는 메시지가 표시되며 필요한 파일 및 구조가 설정됩니다.
3. **공통 명령어 사용:**
	- 프로젝트 초기화:task-master init
	- PRD 분석 및 작업 생성:task-master parse-prd your-prd.txt
	- 모든 작업 목록 보기:task-master list
	- 다음 작업 보기:task-master next
	- 작업 파일 생성:task-master generate

위의 Task-Master-AI를 통해서도 **로컬 환경의 프로젝트 관리는 가능** 하며, 꽤나 유용합니다. 하지만 task-master-ai는 초기화시 여러 파일들을 생성하는데 여러 파일을 관리해야 똑같은 tasks를 관리하면서 협업이 가능하다는 단점이 있습니다. 물론 이 설정 파일들도 공유하면서 (레포에 함께 올려서 공유하는 방식) 환경을 똑같이 구성하면 되지만 **프로젝트 관리의 목적에서는 개발자가 아닌 사람도 있을수 있습니다**. 그러한 경우(협업 또는 멀티 환경 개발)에 task 진행사항을 어떻게 공유할지에 대해서 고민을 해봤습니다. 그러다가 Github의 Projects라는 기능을 사용해볼 수 있지 않을까 생각했습니다. 그래서 일단은 가능성을 열어두고 Github MCP를 연동해보았습니다.

### 2\. GitHub MCP Server: AI 에이전트를 위한 Github 도구 활용 ✅

**GitHub MCP Server** 는 이름에서 알 수 있듯이 GitHub에서 공식적으로 제공하는 MCP 서버입니다. 이 서버는 AI 에이전트가 GitHub API와 원활하게 통합될 수 있도록 설계되었습니다. 개발의 핵심인 소스코드 저장소와 직접 소통할 수 있게 되는 것이죠.

[github/github-mcp-server: GitHub's official MCP Server](https://github.com/github/github-mcp-server)

[

GitHub - github/github-mcp-server: GitHub's official MCP Server

GitHub's official MCP Server. Contribute to github/github-mcp-server development by creating an account on GitHub.

github.com

](https://github.com/github/github-mcp-server)

GitHub MCP Server의 가장 큰 장점은 AI 에이전트가 GitHub 생태계 내에서 다양한 작업을 수행할 수 있게 한다는 것입니다.

- **GitHub 워크플로우 및 프로세스 자동화:** 이슈 생성, 풀 리퀘스트 관리, 코드 변경 등 반복적인 작업을 AI에게 맡길 수 있습니다.
- **GitHub 저장소 데이터 추출 및 분석:** 저장소의 파일 내용, 커밋 기록, 이슈/PR 목록 등을 AI가 분석하여 유용한 인사이트를 제공받을 수 있습니다.
- **GitHub 생태계와 상호작용하는 AI 기반 도구 및 애플리케이션 구축:** AI가 GitHub와 연동하여 코드 검토, 문서 업데이트, 보안 분석 등의 고급 작업을 수행하는 애플리케이션을 만들 수 있습니다.

이 서버는 저장소 관련 도구(파일 작업, 브랜치, 커밋), 이슈 관련 도구(생성, 조회, 업데이트, 댓글), 사용자 관련 도구, 풀 리퀘스트 관련 도구(생성, 병합, 검토), 코드 보안 도구(코드 스캐닝 알림) 등 다양한 기능을 제공합니다. 이 글에서는 이슈 관련 도구를 유용하게 사용할 예정입니다.

#### MCP 세팅법

1. **GitHub Personal Access Token 생성:** GitHub API에 접근하기 위해 Personal Access Token이 필요합니다. AI 도구에 허용할 권한을 신중하게 설정해야 합니다. **Github > Settings > Developer Settings > Personal Access Token > Fine-grained tokens** 에서 토큰을 발급 받으면 됩니다.![](https://blog.kakaocdn.net/dna/dm6dkX/btsNYqJtPFP/AAAAAAAAAAAAAAAAAAAAAFs_3k86gfeoK1evDZiGBDR0-nkawaA4ARAmNu1QYEKD/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=sLxvWUMV%2FTpSiLhk1exdVSSK%2BJA%3D)
	권한의 경우, 프로젝트가 이미 레포지토리로 존재한다면, 해당 레포에 대한 여러 권한을 주시면 됩니다. 이 글에서는 **Issue 관련 write 권한** 이 있어야합니다.
2. **MCP 설정 추가:** 사용 중인 에디터의 설정 파일에 아래와 같이 MCP 설정을 추가합니다. Docker를 사용하는 방법이 권장됩니다.
	- `YOUR_TOKEN` 부분에 발급받은 GitHub Personal Access Token을 입력합니다.
```bash
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

설정 후, IDE의 MCP 세팅을 통해 성공적으로 연결이 되었는지 확인합니다.

![](https://blog.kakaocdn.net/dna/q1Mmj/btsNWHyFUpB/AAAAAAAAAAAAAAAAAAAAAHCG74kupoYHhS1p6h0SzBgQXZjb4jgaYeQx83PBc6fg/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=90jbJ3afKNGw%2Bk2IL%2Btl11FO4lg%3D)

그 이후에 AI 어시스턴트를 통해 "내 GitHub 저장소의 이슈 목록을 보여줘", "~~이슈를 하나 만들어줘" 와 같은 명령을 실행하도록 요청하여 동작이 잘 되는지 확인해야합니다.

### Task Master AI가 생성한 Task를 Github 프로젝트로 관리하기 ⭐️

우리는 앞선 Task Master AI 세팅을 통해, 관리가 가능한 Task를 로컬에서 사용가능하도록 얻었습니다. 하지만 팀으로 프로젝트를 하거나, 저와 같이 여러 환경에서 해야하는 상황의 경우 생성된 tasks 파일을 계속 공유하면서 환경도 구성해줘야합니다. 레포에서 해당 파일들을 관리하는 방식도 좋지만 Github의 Project에서 관리하는 방식을 생각해보았습니다. 또한 이 방식을 반대로 생각하면, 누군가 issue를 올리면 로컬의 Task Master AI의 task에 추가를 할 수도 있습니다. 우선은 로컬의 Task -> Github Task로 옮기는 방식을 해보겠습니다.

로컬에서는 Task Master AI가 생성한 Task들 (tasks/)의 정보를 알수 있고, Github에는 Project라는 프로젝트 관리 툴이 존재합니다. 프로젝트는 레포지토리와는 별개로 생성해야하며, 특정 레포와 link를 하여 연결시킬수 있고, Task를 이슈와 매핑시켜서 관리할 수 있습니다.

#### 세팅 순서

1\. Github > Projects에서 프로젝트를 하나 생성합니다. 이 프로젝트는 일단 레포와는 별개입니다.

![](https://blog.kakaocdn.net/dna/RIyuM/btsNXY0OVoM/AAAAAAAAAAAAAAAAAAAAAPlCeEggtMGMqC8I7mj-_dQgj7BMqlCe7xkhBa3v-1Ge/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=5%2F6BAGm3pbQtV3045Pcz9Rh5n4o%3D)

2\. 그 다음으로, 작업하는 레포지토리의 Project 탭에서 link를 시켜줍니다. -> 여기까지가 일단 Github쪽에서 Project에 대한 세팅입니다.

![](https://blog.kakaocdn.net/dna/5bcXF/btsNWRH66mC/AAAAAAAAAAAAAAAAAAAAAKw6C5iGqfwDY1nnE50-jTQ1b9wY1D7pJebYd7KazwuI/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=XpIvwe63ABaOzdGar%2FCkHaBhgy4%3D)

3\. 이제 IDE의 Agent에게 Task Master가 생성한 현재 로컬의 task를 레포지토리의 **Issue** 로 생성해달라고 요청합니다. Agent는 로컬의 Task-Master-ai가 생성한 이슈를 살펴보고 각 Task를 Github 레포의 1개의 Issue와 매핑이 되도록 생성해줍니다.

![](https://blog.kakaocdn.net/dna/GslR7/btsNX47NqLd/AAAAAAAAAAAAAAAAAAAAAGcC123Y4--Hn8oiMLw3Mm0v_0PWb8Z903BJrKYp711W/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=XHrzj8cTzylTX6Rj%2F5Ko1LFyJnA%3D)

그러면 아래와 같이 레포지토리에 Task와 매핑되는 이슈들이 등록됩니다. 해당 이슈들은 적절한 설명과 우선순위 등 다양한 정보를 가지고 있습니다.

![](https://blog.kakaocdn.net/dna/wuRLs/btsNY0KgpVS/AAAAAAAAAAAAAAAAAAAAAKpmPKCNfmMsy1bITF5YoXB1znHlA39B7sgtvpTf3JjJ/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=sgFD%2FJNVEH3GYntRSIw66MyPcAY%3D)

4\. 이제 이 이슈가 Project와 연결되도록 확인해야합니다. 각 이슈들에 Projects가 세팅되어있는지 확인합니다. (왼쪽에 보면, Projects가 링크되어있는 것을 볼 수 있고 해당 Task의 Status도 세팅할 수 있습니다.)

![](https://blog.kakaocdn.net/dna/csRZUB/btsNYBcWEqp/AAAAAAAAAAAAAAAAAAAAAIAJpLaCrxo5sSw0eSX1TqqoY9bVVjPiFFGTMoUimVMk/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=LuFCYkxhaqLvtklM%2B72vsLJ9vu8%3D)

5\. 그러면 이제 Github의 Project 화면에 가면 Project의 여러 보드 기능을 활용하여 Task를 Sync할 수 있습니다.

![](https://blog.kakaocdn.net/dna/I0j8B/btsNYmG2ydP/AAAAAAAAAAAAAAAAAAAAAGsuRYLZSV_a1xKdJj7LzhhyoT2G_vM6SGjWvIHGaBJu/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=vmLNPC4TeBBTXenNP4S9zvbyyQs%3D)

참고로 Local의 Task Master AI가 생성하고 관리하는 Task와 Github 이슈는 **자동으로 Sync가 되지 않는다는 단점** 이 있습니다. (그러므로 로컬 Task 상태를 업데이트할때 Github 이슈의 상태도 같이 업데이트 해줘야하며, 위의 **두가지 MCP가 세팅되어있다면 Agent에게 부탁하면 됩니다**.) 아마 이것도 머리를 좀 더 굴리면 자동 Sync까지 시킬 수 있을거 같은데 저는 일단 Task의 상태를 업데이트해야할 때마다 IDE의 Agent에게 부탁하면 알아서 해주니까 아직까지는 큰 불편함은 없습니다. 또한 앞서 말한 것처럼 레포지토리에 새로운 이슈가 등록되고, 이것이 새로운 Task라면 Agent는 Github MCP를 통해 이것을 읽어오고 로컬의 Task에 추가할 수 있습니다.

---

프로젝트 개발 시작은 많은 고려 사항을 요구합니다. 저는 GPT와 아이디어를 명세서로 정리하고 구체화하였으며, 완성된 PRD 파일을 토대로 Task Master AI를 통해 PRD를 기반으로 작업을 체계화하고 적절한 단위로 나누었습니다. 또한 이것을 Github 레포지토리의 이슈 및 Project와 연동할 수 있도록 하여 프로젝트 관리를 Github에서도 가능하도록 구성하였습니다.

[저작자표시 변경금지 (새창열림)](https://creativecommons.org/licenses/by-nd/4.0/deed.ko)

#### ' > ' 카테고리의 다른 글

| [실시간 Style Transfer 프로젝트](https://davinci-ai.tistory.com/49) (0) | 2020.09.25 |
| --- | --- |
| [딥러닝 프로젝트 - Time Series Data Prediction (Matlab, LSTM)](https://davinci-ai.tistory.com/11) (0) | 2020.01.07 |
| [openCV - 줌(Zoom) 기능, 이미지 캡쳐, 동영상 녹화 기능 추가하기](https://davinci-ai.tistory.com/8) (7) | 2019.12.28 |

[DAVINCI - AI](https://davinci-ai.tistory.com/) [AI 엔지니어로서 다양한 트렌드를 정리하고자 합니다. Github: https://github.com/harimkang Email: harimkang4422@gmail.com Linkedin: https://www.linkedin.com/in/harim-kang-hk1129](https://davinci-ai.tistory.com/)