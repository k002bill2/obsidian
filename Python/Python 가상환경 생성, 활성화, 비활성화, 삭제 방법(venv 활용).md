---
title: "[Python] 가상환경 생성, 활성화, 비활성화, 삭제 방법(venv 활용)"
source: https://www.blog.data101.io/295
author:
  - "[[DATA101]]"
published: 2022-02-02
created: 2025-06-24
description: 📌 Text 빅데이터분석 플랫폼 베타테스트 참가자 모집 중!(네이버페이 4만 원 전원 지급) 👋 안녕하세요, 코딩이 필요 없는 AI/빅데이터 분석 All in One 플랫폼  개발팀입니다.😊 저희 서비스를 사용해 보시고 경험담을 들려주세요 :)💸 참여해 주신 "모든" 분들께 네이버페이 4만 원 쿠폰을 지급해 드립니다.👨‍💻 참여 희망 시 카톡플러스친구 1:1 채팅 or 인스타그램 DM 부탁드립니다 :)📆 참여기간 : 11/25(월)~11/29(금) 11:00~21:00 중 택1 (1시간 1타임)👉 참여장소 : 강남역 인근 스터디카페 미팅Room📍 소요시간 : 총 40분 내외(서비스 체험 및 인터뷰 포함)✅ 참가조건 : Text 빅데이터 분석 업무 경험자👉 참가 가능일정 조회하기 : ht..
tags:
  - clippings
---
[본문 바로가기](https://www.blog.data101.io/#dkBody)

---

**관리 메뉴**
- [글쓰기](https://heytech.tistory.com/manage/entry/post "글쓰기")
- [방명록](https://heytech.tistory.com/guestbook "방명록")
- [관리](https://heytech.tistory.com/manage "관리")

## DATA101

## \[Python\] 가상환경 생성, 활성화, 비활성화, 삭제 방법(venv 활용) 본문

### \[Python\] 가상환경 생성, 활성화, 비활성화, 삭제 방법(venv 활용)

DATA101 2022. 2. 2. 18:53

## 📌 Text 빅데이터분석 플랫폼 베타테스트 참가자 모집 중!(네이버페이 4만 원 전원 지급)

![](https://blog.kakaocdn.net/dn/d49FLz/btsKDTuTgOb/4lA5PpcCR7WeJnAye2dTbK/img.png)

👋 안녕하세요, 코딩이 필요 없는 AI/빅데이터 분석 All in One 플랫폼 <DATA101> 개발팀입니다.  
😊 저희 서비스를 사용해 보시고 경험담을 들려주세요:)  
**💸 참여해 주신 "모든" 분들께 네이버페이 4만 원 쿠폰을 지급해 드립니다.**  
  
👨💻 참여 희망 시 카톡플러스친구 1:1 채팅 or 인스타그램 DM 부탁드립니다:)  
  
📆 참여기간: 11/25(월)~11/29(금) 11:00~21:00 중 택1 (1시간 1타임)  
👉 참여장소: 강남역 인근 스터디카페 미팅Room  
📍 소요시간: 총 40분 내외(서비스 체험 및 인터뷰 포함)  
✅ 참가조건: Text 빅데이터 분석 업무 경험자  
  
👉 참가 가능일정 조회하기: [https://url.kr/n8k8gu](https://url.kr/n8k8gu)  
\- 카톡플친: [http://pf.kakao.com/\_SxltHG/chat](http://pf.kakao.com/_SxltHG/chat)  
\- 인스타그램: [https://www.instagram.com/data101.official/](https://www.instagram.com/data101.official/)

---

본 포스팅에서는 **venv** 를 활용하여 **Python** **가상환경을 생성하는 방법부터 활성화/비활성화, 삭제하는 방법까지** 알아봅니다.

## 📚 목차

> 1\. 가상환경 필요성  
> 2\. 가상환경 생성  
> 3\. 가상환경 활성화  
> 4\. 가상환경 비활성화  
> 5\. 가상환경 삭제

## 1\. 가상환경 필요성

**가상 환경은 프로젝트마다 격리된 환경(즉, 가상 환경)을 생성함으로써 프로젝트별로 패키지를 관리하기 위함** 입니다.  
파이썬을 입문하기로 마음 먹으셨다면 지금부터라도 **가상 환경 사용을 권장** 해 드립니다.  
가상 환경의 필요성에 대한 상세한 설명 은 [이 포스팅](https://heytech.tistory.com/316) 을 참고해 주세요.

## 2\. 가상환경 생성

참고로, **Python 3.5 이후부터** 는 **venv가 파이썬 표준 라이브러리에 내장** 되어 있기 때문에 따로 설치할 필요가 없습니다.  
Terminal 혹은 cmd 창을 여셔서 가상 환경을 생성합니다.

```python
python -m venv 가상환경이름
```

위 코드가 제대로 실행되었다면 생성한 가상환경 이름으로 폴더가 생겼을 겁니다.

## 3\. 가상환경 활성화

이제 가상 환경을 활성화합니다. 운영체제에 따라 활성화 방법이 다릅니다.

### (1) MacOS 경우

```shell
source 가상환경이름/bin/activate
```

### (2) WindowOS 경우

```shell
source 가상환경이름/Scripts/activate
```

정상적으로 가상환경이 실행되었다면, 터미널에서 현재 디렉토리 맨 앞에 상환경 이름이 괄호 안에 출력됩니다.

## 4\. 가상환경 비활성화

가상 환경을 비활성화하는 방법입니다.

```python
deactivate
```

## 5\. 가상환경 삭제

생성했던 가상 환경을 삭제하는 방법입니다.

```python
sudo rm -rf 가상환경이름
```

## 참고할 만한 포스팅

> 1\. [\[Python\] 가상 환경 생성, 종료, 삭제 방법(](https://heytech.tistory.com/295)[venv](https://heytech.tistory.com/295) [활용)](https://heytech.tistory.com/295)  
> 2\. [\[Python\] 가상환경 내 패키지 관리 방법](https://heytech.tistory.com/296) [(](https://heytech.tistory.com/295)[venv](https://heytech.tistory.com/295) [활용)](https://heytech.tistory.com/295)

## 🎈맞춤형 데이터/통계 분석 서비스

저희 AI/BigData 분석 솔루션 전문 기업 <헤이테크>에서는  
맞춤형 데이터 수집부터 통계분석, 텍스트마이닝, AI 모델링, 논문작성을 지원해 드립니다:)  
자세한 내용은 아래 링크를 참고해 주세요!  
문의사항은 댓글 또는 [카톡플러스친구 @헤이테크](https://pf.kakao.com/_cxoMRn/chat) 로 연락주시길 바랍니다🙏.  
  
[https://kmong.com/gig/601647](https://kmong.com/gig/601647)

[

데이터분석, 통계분석, 논문작성 지원해 드립니다. - 크몽

데이터워너원DATA101 전문가의 IT·프로그래밍 서비스를 만나보세요. <p>Python, SPSS, Tableau를 활용해 <strong>...

kmong.com

](https://kmong.com/gig/601647)

[https://kmong.com/gig/601992](https://kmong.com/gig/601992)

[

텍스트 데이터 분석/텍스트마이닝NLP 도와드립니다. - 크몽

데이터워너원DATA101 전문가의 IT·프로그래밍 서비스를 만나보세요. <p>대기업 AI/빅데이터 연구원 출신으로 구성된 법인 주식회사 유에프5는 Py...

kmong.com

](https://kmong.com/gig/601992)

[https://kmong.com/gig/586088](https://kmong.com/gig/586088)

[

모바일 앱 리뷰 크롤링/구글 플레이 스토어 - 크몽

데이터워너원DATA101 전문가의 IT·프로그래밍 서비스를 만나보세요. <p><strong>구글 플레이 스토어 앱 리뷰 1시간 안에 수집해...

kmong.com

](https://kmong.com/gig/586088)

[https://kmong.com/gig/582649](https://kmong.com/gig/582649)

[

유튜브 댓글 원하는 만큼 수집해 드립니다/웹 크롤링 - 크몽

데이터워너원DATA101 전문가의 IT·프로그래밍 서비스를 만나보세요. <p><strong style="font-size: 24px;&q...

kmong.com

](https://kmong.com/gig/582649)

---

  
  
오늘은 venv를 활용하여 Python 가상환경을 생성하는 방법부터 활성화/비활성화, 삭제하는 방법까지 알아봤습니다.  
포스팅 내용에 오류가 있다면 아래에 👇👇👇 댓글 남겨주세요!  
그럼 즐거운 하루 보내시길 바랍니다.  
고맙습니다:)

[http://koreaitsecurity.co.kr](https://ader.naver.com/v1/1Cdq8Ga7W5Aq3bohFQOkKUnP7_EXWnvxirRaelj0dVRXAQdzREl67e7X6yVGqO4-jVDEZoV-xPEtpnudSGtoFv7BJtY-pGKFFDsMaorqEuxJi9B0VNSNc_Te3SBzkifd29vAow8d51O9im5--gv1P8e1lG4hxhV6zb_wL3Pv1UuSgUP8xQ6h68ldYxqNIge2BRxVPMHtcM86HXF8qPOy5OraXy5Sv0j9Q9DlwTJH-lOUeoOzRlhc6xXFY3FGXPbxcoxyseIZu5qC92hyw1S5IgbqI11dGMSNC7wTlxcBnaFQc-Ju4OA3MsMrJAvK7_dxqWsyIkI-CUJOl97CIuTQ9YDEIZf9ByUozKCdplPbz9o7M0bqr579L5QWpyPQJktz?c=tistory.ch1&t=0) 광고

[코리아IT아카데미 김범수 정보보안기사 준비 확실하게!](https://ader.naver.com/v1/1Cdq8Ga7W5Aq3bohFQOkKUnP7_EXWnvxirRaelj0dVRXAQdzREl67e7X6yVGqO4-jVDEZoV-xPEtpnudSGtoFv7BJtY-pGKFFDsMaorqEuxJi9B0VNSNc_Te3SBzkifd29vAow8d51O9im5--gv1P8e1lG4hxhV6zb_wL3Pv1UuSgUP8xQ6h68ldYxqNIge2BRxVPMHtcM86HXF8qPOy5OraXy5Sv0j9Q9DlwTJH-lOUeoOzRlhc6xXFY3FGXPbxcoxyseIZu5qC92hyw1S5IgbqI11dGMSNC7wTlxcBnaFQc-Ju4OA3MsMrJAvK7_dxqWsyIkI-CUJOl97CIuTQ9YDEIZf9ByUozKCdplPbz9o7M0bqr579L5QWpyPQJktz?c=tistory.ch1&t=0)[IT 공부 어디에서 할까? 고민말고 여기에서! 취업/이직 확실하게 도와드립니다. 운영체제 O/S 시스템 서버 관리자 및 엔지니어 리눅스마스터 자격증 취득!!](https://ader.naver.com/v1/1Cdq8Ga7W5Aq3bohFQOkKUnP7_EXWnvxirRaelj0dVRXAQdzREl67e7X6yVGqO4-jVDEZoV-xPEtpnudSGtoFv7BJtY-pGKFFDsMaorqEuxJi9B0VNSNc_Te3SBzkifd29vAow8d51O9im5--gv1P8e1lG4hxhV6zb_wL3Pv1UuSgUP8xQ6h68ldYxqNIge2BRxVPMHtcM86HXF8qPOy5OraXy5Sv0j9Q9DlwTJH-lOUeoOzRlhc6xXFY3FGXPbxcoxyseIZu5qC92hyw1S5IgbqI11dGMSNC7wTlxcBnaFQc-Ju4OA3MsMrJAvK7_dxqWsyIkI-CUJOl97CIuTQ9YDEIZf9ByUozKCdplPbz9o7M0bqr579L5QWpyPQJktz?c=tistory.ch1&t=0)

[![](https://searchad-phinf.pstatic.net/MjAyMDExMDNfMTY4/MDAxNjA0Mzk3ODU3Mjg0.BgVTcuWHw8WYYxj_O6HkcGeLDjQezWuBgoRB3c2iJNYg.pJycfCWH5NXtyqHsLEr6JTMM9mt0VNF8OaA2iOXcKmog.JPEG/2065151-a99b491f-ee47-436b-b491-8f5334930f61.jpg)](https://ader.naver.com/v1/uSQZPKGsTaMkAPutIaqsRmVd5NjHiX-LKLKW04CQhoQL6DiFIF2Kosg3bjed8qyHyjuWRkXVno3ugFxGrJ4Ax8ImFRAFXhEhnTre5EiUiyQXqnn79Ufz--CUod8RotKzXGIEHM7gulbTdx0WrKTa1pQCk29uRowNKF5Ze4eZNGNHMc0UO2tM-lOQ8U6pLvqtIFu68xqFo4iMuDN9H6ohUmFcTO_7hfTJZn9iDV0kUJdQHg4N5OcQ_qtYvl-4-pqBbmi6JEehvcWrBqiKN1yPxuo8HNLFd6mPCCSmFXmIk-XhogjnoRDeJPzx6p-Adu8DhmmUMFy3Vbx6_SvJ3Hl32Z8VJqHwbt_yJSqj4awj-GhIVwo31ChOzOyWETdE3xef?c=tistory.ch1&t=0)

[https://coloso.co.kr](https://ader.naver.com/v1/d2OVIBqNm7vJQ2Xhrzdjug9SYCFWZADKtgiSJwUrRQOyk75_MyeRwIh4l0iAq14c4__JXVM3dHrvzURrrIDV9dhbr5uECsohUo56M7N-rGhQtOryVPzlu3q07scKxRmd31W1u3sJGUzq0U4YdC0jsoqitCeskMd6uxaa6xtrPp3LdfVETLhWbU8bMzXnfn_ffcsoRRhNQ7NQ600NQg3kOcO9RTSwbzKNsIRtWadS1BGkkVrlZwLZXs0QC7EYBVfcPNMimPmeW8pUJIhVHqU6N0M_8l4gAtxM640gSz0R_qvF6USl_mUipzrDUfZ7AdyQc-MMwNB6bqmZ4UtqNvpRRQ==?c=tistory.ch1&t=0) 광고

[콜로소로 빠르게 실력 더블업](https://ader.naver.com/v1/d2OVIBqNm7vJQ2Xhrzdjug9SYCFWZADKtgiSJwUrRQOyk75_MyeRwIh4l0iAq14c4__JXVM3dHrvzURrrIDV9dhbr5uECsohUo56M7N-rGhQtOryVPzlu3q07scKxRmd31W1u3sJGUzq0U4YdC0jsoqitCeskMd6uxaa6xtrPp3LdfVETLhWbU8bMzXnfn_ffcsoRRhNQ7NQ600NQg3kOcO9RTSwbzKNsIRtWadS1BGkkVrlZwLZXs0QC7EYBVfcPNMimPmeW8pUJIhVHqU6N0M_8l4gAtxM640gSz0R_qvF6USl_mUipzrDUfZ7AdyQc-MMwNB6bqmZ4UtqNvpRRQ==?c=tistory.ch1&t=0) [기초부터 실무까지 업계 전문가에게 콜로소에서 배워보세요](https://ader.naver.com/v1/d2OVIBqNm7vJQ2Xhrzdjug9SYCFWZADKtgiSJwUrRQOyk75_MyeRwIh4l0iAq14c4__JXVM3dHrvzURrrIDV9dhbr5uECsohUo56M7N-rGhQtOryVPzlu3q07scKxRmd31W1u3sJGUzq0U4YdC0jsoqitCeskMd6uxaa6xtrPp3LdfVETLhWbU8bMzXnfn_ffcsoRRhNQ7NQ600NQg3kOcO9RTSwbzKNsIRtWadS1BGkkVrlZwLZXs0QC7EYBVfcPNMimPmeW8pUJIhVHqU6N0M_8l4gAtxM640gSz0R_qvF6USl_mUipzrDUfZ7AdyQc-MMwNB6bqmZ4UtqNvpRRQ==?c=tistory.ch1&t=0)

[![](https://searchad-phinf.pstatic.net/MjAyMzA2MjhfMjE3/MDAxNjg3OTMxOTUwNDQ5.imjw-XPOkW6KUohgxme-PE4L_wJgax3owB8AmJ1usaYg.TttDtLFSosBXUJ8Wb6ITOMMvBB0vUiIs6H778wXTnAIg.PNG/1572824-55d2a920-0fb0-4d88-bdb9-56732c0d1158.png)](https://ader.naver.com/v1/CoTgxdHUgjQ9Zs-WgNfXpeEizS52Llgyz99n6R_Cj85yWNPSGNvoLDbwN6zhBcPqywFivEDieDgaPiV3C_GxrEoflQQwF_1RfuYyu_6G6Q_zEO9pUjb-X0uXcVjB1omxWC5J6ZvcijMCKxsNseZaJ3xB8g0rMyPABLKDYfC9oEYYslJ9Du-oiOh3ySEf4J4lWURINOoXnk2V3QD83eWDzfDQeCI3gEi7lGn-2Vudx0nADw8-bJqh0W_Nd6Pk6cxqQQORUKk2gMe48nEdC9RMCozSsbYMBCDMG9lZLv4CLmsXE_teP4I77f_8jJgczL61v33DU4rMaHSSFVpnTGVNE0X-j7Y1Hka80XA4aMvOvfM=?c=tistory.ch1&t=0)

[저작자표시 동일조건 (새창열림)](https://creativecommons.org/licenses/by-sa/4.0/deed.ko)

#### ' > ' 카테고리의 다른 글

| [\[Python\] 에러메시지 분석: "UserWarning: Boolean Series key will be reindexed to match DataFrame index."](https://www.blog.data101.io/300) (2) | 2022.02.07 |
| --- | --- |
| [\[Python\] 가상환경 내 패키지 설치 및 관리 방법(venv 활용)](https://www.blog.data101.io/296) (0) | 2022.02.03 |
| [\[파이썬\] 데이터프레임 내 특정 단어가 포함된 데이터 조회(feat. pandas)](https://www.blog.data101.io/165) (2) | 2021.10.24 |
| [\[파이썬\] 영어 모든 알파벳 소문자, 대문자 정보 불러오기!](https://www.blog.data101.io/159)(0) | 2021.10.10 |
| [\[Python\] 아나콘다(Anaconda) 가상환경 생성, 삭제방법](https://www.blog.data101.io/135) (2) | 2021.08.19 |

Tag

, , , , , , ,

---

Blog is powered by [kakao](http://www.kakaocorp.com/) / Designed by [Tistory](http://www.tistory.com/)