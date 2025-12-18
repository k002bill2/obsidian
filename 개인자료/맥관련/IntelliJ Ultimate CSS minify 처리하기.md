---
title: IntelliJ Ultimate CSS minify 처리하기
source: https://dev-gabriel.tistory.com/entry/IntelliJ-Ultimate-CSS-minify-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0#gsc.tab=0
author:
  - "[[거대한 개발자]]"
published: 2021-11-25
created: 2025-07-03
description: "- 개요 웹 사이트의 성능 향상을 위해서 CSS 파일을 minify 처리하기로 하여 구글링 중 Jetbrains 사이트에 실시간으로 처리할 수 있는 방법이 있길래 이미지를 포함하여 정리해 보았습니다. - 적용 순서 1. Node.js 설치 2. CSS 플러그인 설정 ( 인텔리j ) 3. File Watchers 플러그인 설치 4. csso-cli globally 설치 ( node.js npm 사용 ) 5. csso file Watcher 생성 6. 적용 확인 ※ 필수 플러그인 : CSS (인텔리j Ultimate에서만 지원), File Watchers - Node.js 설치 1. https://nodejs.org/en/ 홈페이지 접속 후 원하는 설치 파일을 다운로드 합니다. 2. 다운로드한 파일을 설치합.."
tags:
  - clippings
---
[본문 바로가기](https://dev-gabriel.tistory.com/entry/#dkBody)

---

**관리 메뉴**
- [글쓰기](https://dev-gabriel.tistory.com/manage/entry/post "글쓰기")
- [방명록](https://dev-gabriel.tistory.com/guestbook "방명록")
- [관리](https://dev-gabriel.tistory.com/manage "관리")

## 애매한 잡학사전

## IntelliJ Ultimate CSS minify 처리하기 본문

### IntelliJ Ultimate CSS minify 처리하기

거대한 개발자 2021. 11. 25. 15:23

### \- 개요

웹 사이트의 성능 향상을 위해서 CSS 파일을 minify 처리하기로 하여 구글링 중 Jetbrains 사이트에 실시간으로

처리할 수 있는 방법이 있길래 이미지를 포함하여 정리해 보았습니다.

### \- 적용 순서

1\. Node.js 설치

2\. CSS 플러그인 설정 ( 인텔리j )

3\. File Watchers 플러그인 설치

4\. csso-cli globally 설치 ( node.js npm 사용 )

5\. csso file Watcher 생성

6\. 적용 확인

※ 필수 플러그인: CSS (인텔리j Ultimate에서만 지원), File Watchers

### \- Node.js 설치

1\. [https://nodejs.org/en/](https://nodejs.org/en/) 홈페이지 접속 후 원하는 설치 파일을 다운로드 합니다.

![](https://dev-gabriel.tistory.com/entry/1.png)

2\. 다운로드한 파일을 설치합니다.

설치 과정에서의 특별한 사항은 없습니다.

### \- CSS 플러그인 설정 확인

![](https://dev-gabriel.tistory.com/entry/2.png)

1\. File > Settings > Plugins > Installed > CSS Enable 여부 확인 후 안되어 있으면 체크박스를 선택 후 OK 합니다.

해당 기능은 Intellij Ultimate 에서만 지원 합니다.

### \- File Watchers 플러그인 설치

![](https://dev-gabriel.tistory.com/entry/3.png)

1\. File > Settings > Plugins > Marketplace 에서 File Watchers 검색 후 플러그인을 설치합니다.

### \- csso-cli globally 설치

![](https://blog.kakaocdn.net/dna/F0FSV/btrl4YO1uoI/AAAAAAAAAAAAAAAAAAAAAGqQ9jDbAajB0ySLx5Jt7j1pOSM5JMbykKc_xvGcqHyh/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=xfZx%2B3r4iyroYAbfxX1nigX4%2BRs%3D)

1\. 설치된 Node.js 의 npm 을 이용해서 csso-cli globally 를 설치합니다.

명령어: npm install -g csso-cli

### \- csso file Watcher 생성

![](https://blog.kakaocdn.net/dna/oe7Sh/btrl8muGB9D/AAAAAAAAAAAAAAAAAAAAAGNDGUUFPf9Gjlx5n1t30jpHEkjqb2cVfbSWXXejAuHf/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=Duayj83XUfgnpkLQqmXrtBdoGKk%3D)

1\. File > Settings > Tools > File Watchers 의 플러스 버튼을 클릭합니다.

![](https://blog.kakaocdn.net/dna/mqyZc/btrl57SkP0E/AAAAAAAAAAAAAAAAAAAAAN1qTXyBz6x4uHuqHJw2NlPgo_Q6_pDkiNOBf2gcGlRp/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=Mv6XdCJiT1YrYv1x9VdnWxD1k4o%3D)

2\. CSSO css Optimizer 선택 합니다.

![](https://blog.kakaocdn.net/dna/cBXBxo/btrmacyj1XA/AAAAAAAAAAAAAAAAAAAAAP-srae0AW64YHXQhK4_a8kLnfdLCLDPC6qkZ4LX0Fiz/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=1PJ%2FEcSMfLg%2BTzAYdY%2BVPWui0LI%3D)

3\. Program 항목에 npm 으로 설치한 경로의 csso 파일을 선택합니다.

![](https://blog.kakaocdn.net/dna/bowIDp/btrl4ZNOHkm/AAAAAAAAAAAAAAAAAAAAAFSGgRUYrBza3cW_xPZ7uTZf0WBsCd4AbY8aNNhW6HaO/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=3%2BcoMQzTlDllS3To%2FrkOWYiMXXU%3D)

4\. Node.js 의 npm으로 설치할 경우 C:\\Users\\\[user name\]\\AppData\\Roaming\\npm\\ 위치에 설치 됩니다.

![](https://blog.kakaocdn.net/dna/bbonSt/btrmab7jJlP/AAAAAAAAAAAAAAAAAAAAAIyWVBBL3ZiUWzUTRA6dbZCL_nwNOUIL8exF1K7Bhd7D/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=qExFi9Zd23PO3W3yHcTvxxsgHH4%3D)

5\. 설정 완료

### \- 적용 확인

![](https://blog.kakaocdn.net/dna/b8v17W/btrl8mIeZN0/AAAAAAAAAAAAAAAAAAAAACG4QjpZ4l5IfXRiTE8HfbDynVMZV4ZoaiLTKKshkw4a/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=qCLUq7uiRndvm7WtDg5pPkicQX8%3D)

1\. File > Settings > Tools > Actions on Save 에 File Watcher: CSSO CSS Optimizer

체크가 되어 있으면 설정 완료 입니다.

![](https://blog.kakaocdn.net/dna/BrZRq/btrl4P5U53A/AAAAAAAAAAAAAAAAAAAAAKUUZw8fcmONKGz6p7vYdQJ1D-NdjWSSYzh6oRGEFLh2/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=RxxPsJQs2nXcKE0lKBs34TT0eho%3D)

2\. CSS 파일에서 수정 후 자동 저장 처리 되면서 \[css file name\].min.css 파일이 생성되는 것을 확인 할 수 있습니다.

![](https://blog.kakaocdn.net/dna/bCVxWv/btrl9Q99n0L/AAAAAAAAAAAAAAAAAAAAAKl__Mgff0Pyyw1CSdn_6l7kKn3EbdyNaZJnKzyzz5Hl/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=qS7s57edPxOgT1b1nPBEIOyTbk4%3D)

3\. 왼쪽이 원본 파일 (layout.css), 오른쪽이 minify 처리된 파일(layout.min.css) 내용입니다.

### \- 주의 사항

이 기능은 저장될때 자동으로 변환해 주는 기능입니다.

그런데 인텔리j는 보통 자동 저장으로 설정해서 사용하는데 css 파일 변경 후 1~2초 뒤에 변환 작업이 실행되기 때문에

변환 작업 중에 다시 css 파일을 작업하게 되면 충돌 메시지가 출력되니 주의해서 작성하시기 바랍니다.

![](https://blog.kakaocdn.net/dna/655Gp/btrl9kwGjCN/AAAAAAAAAAAAAAAAAAAAAMa2qlnjtF2ZXynTbP9QgdjCEZbjtJ2DKnfK9xx8wUYE/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=KbUA25ZZntF3DYeCmow0kjaKzuA%3D)

이상으로 Intellij 에서 CSS Auto Minify 설정을 마칩니다.

참고: [jetbrains.com](https://www.jetbrains.com/help/idea/compressing-css.html)

[저작자표시 비영리 동일조건 (새창열림)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)

#### ' > ' 카테고리의 다른 글

| [\[Intellij\] DB 접속 후 쿼리 실행 시 한글 깨지는 현상 해결](https://dev-gabriel.tistory.com/entry/Intellij-DB-%EC%A0%91%EC%86%8D-%ED%9B%84-%EC%BF%BC%EB%A6%AC-%EC%8B%A4%ED%96%89-%EC%8B%9C-%ED%95%9C%EA%B8%80-%EA%B9%A8%EC%A7%80%EB%8A%94-%ED%98%84%EC%83%81-%ED%95%B4%EA%B2%B0) (1) | 2023.01.11 |
| --- | --- |
| [개발(로컬) PC에 REDIS 테스트 환경 세팅](https://dev-gabriel.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EB%A1%9C%EC%BB%AC-PC%EC%97%90-REDIS-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85) (0) | 2022.06.27 |
| [인텔리j Artifacts Output directory 초기화 될때 설정](https://dev-gabriel.tistory.com/entry/%EC%9D%B8%ED%85%94%EB%A6%ACj-Artifacts-Output-directory-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%90%A0%EB%95%8C-%EC%84%A4%EC%A0%95) (0) | 2020.11.05 |
| [이클립스 단축기 정리](https://dev-gabriel.tistory.com/entry/%EC%9D%B4%ED%81%B4%EB%A6%BD%EC%8A%A4-%EB%8B%A8%EC%B6%95%EA%B8%B0-%EC%A0%95%EB%A6%AC) (0) | 2020.09.27 |
| [CSS 상속과 캐스케이딩](https://dev-gabriel.tistory.com/entry/CSS-%EC%83%81%EC%86%8D%EA%B3%BC-%EC%BA%90%EC%8A%A4%EC%BC%80%EC%9D%B4%EB%94%A9) (0) | 2020.09.27 |

**공유하기 링크**
- [페이스북](https://dev-gabriel.tistory.com/entry/#none)
- [카카오스토리](https://dev-gabriel.tistory.com/entry/#none)
- [트위터](https://dev-gabriel.tistory.com/entry/#none)

---

Blog is powered by [kakao](http://www.kakaocorp.com/) / Designed by [Tistory](http://www.tistory.com/)