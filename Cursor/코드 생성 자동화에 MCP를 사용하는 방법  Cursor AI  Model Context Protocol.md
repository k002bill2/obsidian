---
title: 코드 생성 자동화에 MCP를 사용하는 방법 | Cursor AI | Model Context Protocol
source: https://www.youtube.com/watch?v=IOfn0MGzYd4
author:
  - "[[공원나연]]"
published: 2025-04-21
created: 2025-06-05
description: 🤖AI+안녕하세요. 모션디자이너 김그륜입니다.이제 AI로 뮤직비디오까지 제작할 수 있는 시대가 되었습니다.가수 HYNN(박혜원)님의 신곡 '영하' 뮤직비디오 제작에 AI를 적극 활용하여 주요 장면을 직접 제작하였습니다.촬영 없이 AI로 만들어진 장면들이 과연 실무에서 활용될 수 ...
tags:
  - clippings
---
![](https://www.youtube.com/watch?v=IOfn0MGzYd4)  

📍더 알아보기 :  
https://smithery.ai/server/mcp-tavily  
https://smithery.ai/server/@sinco-lab/mcp-youtube-transcript  
  
💡 Agent 실무 적용, 어떻게 해야 할지 막막하셨다면?  
그래서 요즘 핫한 MCP부터 GraphRAG까지, 실전 중심으로 강의에 모두 담았습니다  
🚨 여러분께만 드리는 20% 특별 쿠폰 코드  
: 공원나연you  
🚨 강의 보러가기  
: https://fastcampus.info/42wyiBw  
  
## 영상 요약

이 영상은 코드 편집기인 "커서(Cursor)"에서 MCP(Model Context Protocol)와 다양한 에이전트 기반 도구를 실제로 연동해 사용하는 방법을 실습 중심으로 설명합니다[1].

**주요 내용 요약**

- **MCP와 커서 소개**
  - MCP는 클라이언트, 호스트, 서버로 구성되며, 커서는 MCP 클라이언트 역할을 하는 코드 편집기입니다.
  - 커서 내에서 MCP 서버(예: 웹 검색용 MCP 태빌리, 유튜브 스크립트 추출용 MCP 유튜브 트랜스크립트)를 연동해 사용할 수 있습니다.

- **커서 기본 사용법**
  - 워크스페이스에 접속해 채팅 창에서 에이전트에게 자연어로 명령을 내릴 수 있습니다.
  - 예시로, "덧셈, 뺄셈, 곱셈, 나눗셈 기능이 있는 계산기 프로그램을 만들어 주세요"라고 입력하면, 에이전트가 파이썬 코드를 자동 생성합니다.
  - 생성된 코드는 바로 파일로 저장하거나, 일부 기능만 남기도록 수정 요청도 가능합니다.

- **MCP 서버 연동 실습**
  - MCP 서버(태빌리, 유튜브 트랜스크립트)를 설치하고 커서에 연동하는 방법을 단계별로 보여줍니다.
  - MCP 태빌리는 웹 검색, 답변 생성, 뉴스 검색 등 세 가지 툴을 제공합니다.
  - MCP 유튜브 트랜스크립트는 유튜브 영상 URL을 입력하면 해당 영상의 스크립트를 추출해줍니다.

- **에이전트와 MCP 활용 예시**
  - MCP 태빌리 웹서치를 이용해 "랭그래프에 대해 찾아 주세요"와 같은 명령을 실행하고, 그 결과를 마크다운 파일로 자동 정리합니다.
  - 유튜브 영상 URL을 입력해 스크립트를 추출하고, 이 내용을 이모티콘을 섞어 마크다운 파일로 정리해달라고 요청할 수 있습니다.
  - 결과 파일은 디렉토리에 자동 저장되고, 필요에 따라 바로 적용할 수 있습니다.

- **활용 팁**
  - MCP와 커서를 함께 사용하면 코드 작성, 파일 관리, 외부 정보 검색, 영상 스크립트 추출 등 다양한 업무를 자동화·효율화할 수 있습니다.
  - 커서는 단순 코드 편집기를 넘어, 다양한 MCP 서버와 연동하여 실질적인 생산성 도구로 활용할 수 있습니다.

###결론
- 영상은 커서와 MCP, 그리고 에이전트 기반 자동화 도구의 실제 연동 및 활용법을 실습 위주로 상세히 안내합니다. 실무에서 AI 기반 자동화와 정보 수집을 빠르게 적용하고 싶은 개발자나 실무자에게 유용한 내용입니다[1].

출처
[1] watch?v=IOfn0MGzYd4 https://www.youtube.com/watch?v=IOfn0MGzYd4
[2] 유튜브 영상 요약 AI 다 써본 끝판왕 사용 후기 https://brunch.co.kr/@donland/41
[3] ChatGPT로 유튜브 요약: 무료 온라인 비디오 요약 도구 - Monica https://monica.im/ko/features/youtube-summary-with-chatgpt
[4] 유튜브영상을 요약하는 3가지 방법! - YouTube https://www.youtube.com/watch?v=JQ7Qj77GHwY
[5] 무료 온라인 YouTube 비디오 요약기 [AI-Powered] - Notta https://www.notta.ai/ko/tools/youtube-video-summarizer
[6] 유튜브 영상요약 -뤼튼AI, 제미나이, 릴리즈 - 블로그 https://blog.naver.com/khs4504724/223720131558?fromRss=true&trackingCode=rss
[7] 유튜브 영상 요약 릴리스(Lilys)로 10가지 영상 요약해본 후기(사용 ... https://ai-hook.tistory.com/entry/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%98%81%EC%83%81-%EC%9A%94%EC%95%BD-%EB%A6%B4%EB%A6%AC%EC%8A%A4Lilys%EB%A1%9C-10%EA%B0%80%EC%A7%80-%EC%98%81%EC%83%81-%EC%9A%94%EC%95%BD%ED%95%B4%EB%B3%B8-%ED%9B%84%EA%B8%B0%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%82%AC%EC%9A%A9
[8] 휴대폰으로 긴~ 유튜브 영상 핵심만 요약해서 보세요. | lilys ai 사용법 https://www.youtube.com/watch?v=nkZXDOhyCJ4
[9] 유튜브 영상을 글로 요약해주는 프로그램- 한국인 필수! https://healerj37.tistory.com/14

  
#mcp #modelcontextprotocol #cursor