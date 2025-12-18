---
title: 깃 토큰 인증(Git Personal Access Token)
source: https://whoyoung90.tistory.com/25
author:
  - "[[whoyoung90]]"
published: 2022-02-12
created: 2025-06-25
description: "작년 21년 8월 13일자로 Git에서 패스워드 기반 인증(password authentication) 대신 PAT(personal access token) 방식을 사용하도록 변경되었다. 그 이후로 지금까지 나는 토큰을 90일마다 새로 인증 받으며 회사 업무를 진행하고 있는 중인데 90일 간격마다 다른 블로그를 참고하는 것보단 직접 블로그에 정리해 놓는게 나을 것 같아서 이제라도 작성해본다 :) 내 방식은 mac기준이라 윈도우에서는 해당되지 않는다. 에러 상황 토큰 사용 가능한 날짜가 경과된 후 git push / pull / clone 등등 명령어를 입력하면 터미널에 아래와 같은 내용이 나오게 된다. remote: Support for password authentication was removed o.."
tags:
  - clippings
---
[[]]GitHub

작년 21년 8월 13일자로 Git에서 패스워드 기반 인증(password authentication) 대신

**PAT(personal access token)** 방식을 사용하도록 변경되었다.

그 이후로 지금까지 나는 토큰을 90일마다 새로 인증 받으며 회사 업무를 진행하고 있는 중인데

90일 간격마다 다른 블로그를 참고하는 것보단 직접 블로그에 정리해 놓는게 나을 것 같아서 이제라도 작성해본다:)

내 방식은 mac기준이라 윈도우에서는 해당되지 않는다.

#### 에러 상황

토큰 사용 가능한 날짜가 경과된 후 git push / pull / clone 등등 명령어를 입력하면

터미널에 아래와 같은 내용이 나오게 된다.

```bash
remote: Support for password authentication was removed on August 13, 2021. 
Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/
for more information.
```

해결 과정을 세가지로 요약하면 다음과 같다.

1. Personal Access Token 발급
2. git의 credential.helper로 키체인을 사용하도록 설정
3. 키체인에 personal access token을 사용하는 항목을 추가

(기존에 credential-osxkeychain을 사용하고 있다면, 바로 **3-2** 로 가서 새로 생성한 token만 바꿔주면 된다!)

## 1\. Personal Access Token 발급

![](https://blog.kakaocdn.net/dna/AD0nr/btssCuffYzc/AAAAAAAAAAAAAAAAAAAAANUqczc_6Cw2QIaKI4HVUXfz5LpToAnt_DC79vDbMh1V/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1751295599&allow_ip=&allow_referer=&signature=ajc9wgeFEqljq08uUpSr3gdJjzs%3D)

personal access token은 github 웹사이트에서 발급받을 수 있다.

발급받는 방법은 git 공식문서를 참고하면 간단하다.

토큰을 발급받으면 안전한 장소에 토큰을 반드시 저장해야 한다! 잊어먹으면 새로 발급해야하니 주의!

## 2\. credential helper로 키체인을 사용하도록 설정

credential.helper 는 git의 계정 인증 정보를 매번 다시 입력하지 않도록 인증 정보를 관리하는 도구이다.  
osxkeychain 모드를 사용하면 Mac에서 제공하는 Keychain 시스템을 사용할 수 있다.

터미널에서 아래와 같이 입력한다.

```bash
$ git config --global credential.helper osxkeychain
```

잘 되었다면 다음과 같이 입력했을때, osxkeychain 이 출력될 것이다.

```bash
$ git config --global credential.helper
```

## 3-1. 키체인에 PAT(personal access token)을 사용하는 항목 추가

**방법1.**

가장 간단한 방법은 본인의 github계정으로 접근권한이 필요한 private repository를 clone해준다.  
그러면, username과 password를 입력하도록 진행된다.

여기서 만약, Support for password authentication was removed... 메시지가 다시 뜬다면  
**3-2** 와 같이 이미 저장된 목록에서 비밀번호를 PAT로 대체해줘야 한다.

**방법2.**

키체인에 추가하는 방법은 몇가지가 있는데 터미널에서 아래와같이 실행해준다.

```bash
$ git credential-osxkeychain store
```

이어서 다음 내용을 본인의 username과 personal acess token에 맞게 수정해서 입력해준다.  
\[USERNAME\], \[PERSONAL\_ACCESS\_TOKEN\] 부분은 본인의 github계정과 발급한 토큰으로 입력해야 한다.  
한줄씩 터미널에 입력한 다음 마지막에 엔터를 두번 치면 입력이 완료된다.  

```bash
host=github.com
protocol=https
username=[USERNAME]
password=[PERSONAL_ACCESS_TOKEN]
```

## 3-2. keychain access 목록 확인 및 수정 (기존 osxkeychain 사용자는 여기만 변경!)

기존에 credential-osxkeychain을 사용한적이 있다면

이미 추가되어 있을 수가 있어서 새로운 계정을 입력받도록 나타나지 않을 수 있다.  
이런 경우에는 기존에 저장된 키체인 항목에서 비밀번호를 PAT로 직접 바꿔주어야 한다.

mac에서 Spotlight를 실행하여(command + spacebar) 키체인 접근을 검색한다.

![](https://blog.kakaocdn.net/dna/pdmm9/btrs5yWPy5Z/AAAAAAAAAAAAAAAAAAAAAN2cWYeAjF-JhXW-5OSQ6kBB0eCY6ukAwiqFZXKa0hqK/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1751295599&allow_ip=&allow_referer=&signature=OikcenxKfN0zM7TQ1kle105WApQ%3D)

github.com을 검색하면 이름이 github.com 인 항목이 있을 것이다.

![](https://blog.kakaocdn.net/dna/cEgQ3j/btrs21LW7Rv/AAAAAAAAAAAAAAAAAAAAAFKJtqUb3KF05n79ZrRcM3XnuGxZnhdOmWFdmOquXFgc/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1751295599&allow_ip=&allow_referer=&signature=arx6UE4Sh9fqvsKCw0BayGXWjRQ%3D)

이름이 github.com 인 항목을 더블클릭해서 "접근 제어"를 선택한다.  
접근 허용 리스트에 git-credential-osxkeychain 이 있는 항목이 있는지 확인한다.  

없다면, 다른 키체인 항목을 다시 선택에서 있는 항목을 찾아야 한다.

![](https://blog.kakaocdn.net/dna/Ic3Hz/btrs4MOPAZZ/AAAAAAAAAAAAAAAAAAAAAOQ-eac_YByUFaXOQr9SdT5CZw2oaLVRT60D3OGSTnmk/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1751295599&allow_ip=&allow_referer=&signature=ssjhs39tnw78g0qnAnCQ4h2QpYw%3D)

다시 "속성" 탭으로 되돌아가서 비밀번호를 입력하는 칸에 Personal Access Token 을 입력해주고 변경사항을 저장한다.

![](https://blog.kakaocdn.net/dna/btyqz8/btrtajKD292/AAAAAAAAAAAAAAAAAAAAALFZjUomW5VTSxLD_b5PEje4gZRWYsManCy-WkUrMBiy/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1751295599&allow_ip=&allow_referer=&signature=PtjuYmNy0CMoNWXZV79HqevTZV0%3D)

위 진행 과정을 모두 마친 후 다시 github의 private repo를 clone하거나, push 등 작업을 수행해보면

같은 오류가 발생하지 않고 잘 진행되는 것을 확인할 수 있다.

---

## 220802 추가 코멘트

토큰을 갱신하려고 github 사이트에서 expired token 을 삭제했더니

**키체인 접근에서 github.com 인 항목이 사라지는 현상 발견!**

새 토큰을 발급받고  

2\. credential helper로 키체인을 사용하도록 설정 해주고 **(<- 담번에 이거 안하고 되는지 진행해봐야겠다)**

git push 등 작업을 수행하면

github에 연결하겠느냐는 문구와 함께 github.com이 재생성된다!

[저작자표시 (새창열림)](https://creativecommons.org/licenses/by/4.0/deed.ko)

#### '' 카테고리의 다른 글

| [git clone 시 Username for 'https://github.com' 물어볼 때](https://whoyoung90.tistory.com/105) (0) | 2023.09.22 |
| --- | --- |
| [\[SourceTree\] upstream 가져올 때 Repository not found 해결](https://whoyoung90.tistory.com/95) (0) | 2023.08.23 |
| [<botocore.awsrequest.AWSRequest object at > error Command failed with exit code 255](https://whoyoung90.tistory.com/39) (0) | 2022.06.27 |
| [원격 저장소 연결 및 끊기 (git remote)](https://whoyoung90.tistory.com/31) (0) | 2022.04.08 |
| [commit 안하고 브랜치 변경하기(git stash)](https://whoyoung90.tistory.com/9) (0) | 2021.08.11 |

---

1 / 5