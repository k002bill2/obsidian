---
title: "[개발도구] ccusage - Claude Code 사용량 분석 CLI 도구"
source: https://rudaks.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EB%8F%84%EA%B5%AC-ccusage-Claude-Code-%EC%82%AC%EC%9A%A9%EB%9F%89-%EB%B6%84%EC%84%9D-CLI-%EB%8F%84%EA%B5%AC
author:
  - "[[루닥스]]"
published: 2025-06-14
created: 2025-06-22
description: "ccusage(claude-code-usage) 로컬 JSONL 파일에서 Claude Code 사용량을 분석하는 CLI 도구입니다.Claude Code 사용량 비용 추적에 관한 이 글에서 영감을 받았습니다.ccusage란 무엇인가개발 동기Claude Code의 Max 플랜은 무제한 사용을 제공하지만, 사용량 기반 요금제를 사용한다면 얼마나 지불하게 될지 궁금하지 않으신가요?이 도구는 실제 사용량의 동등한 비용을 계산하여 구독에서 얻는 가치를 이해하는 데 도움을 줍니다. 얼마나 절약하고 있는지 확인하고 훌륭한 가치를 얻고 있다는 만족감을 느껴보세요! 😊주요 기능📊 일일 리포트: 날짜별로 집계된 토큰 사용량 및 비용 보기📅 월별 리포트: 월별로 집계된 토큰 사용량 및 비용 보기 💬 세션 리포트:.."
tags:
  - clippings
---
> **ccusage(claude-code-usage)**

로컬 JSONL 파일에서 Claude Code 사용량을 분석하는 CLI 도구입니다.

Claude Code 사용량 비용 추적에 관한 [이 글](https://milliondev.com/claude-code-usage-costs) 에서 영감을 받았습니다.

## ccusage란 무엇인가

![](https://blog.kakaocdn.net/dn/bpWZlO/btsOMrAidrJ/H0LxzauMdJYTE5AiFJJOu1/img.png)

## 개발 동기

Claude Code의 Max 플랜은 무제한 사용을 제공하지만, 사용량 기반 요금제를 사용한다면 얼마나 지불하게 될지 궁금하지 않으신가요?

이 도구는 실제 사용량의 동등한 비용을 계산하여 구독에서 얻는 가치를 이해하는 데 도움을 줍니다. 얼마나 절약하고 있는지 확인하고 훌륭한 가치를 얻고 있다는 만족감을 느껴보세요! 😊

## 주요 기능

- 📊 **일일 리포트**: 날짜별로 집계된 토큰 사용량 및 비용 보기
- 📅 **월별 리포트**: 월별로 집계된 토큰 사용량 및 비용 보기
- 💬 **세션 리포트**: 대화 세션별로 그룹화된 사용량 보기
- 🤖 **모델 추적**: 사용 중인 Claude 모델 확인 (Opus, Sonnet 등)
- 📊 **모델 분석**: `--breakdown` 플래그로 모델별 비용 분석 보기
- 📅 **날짜 필터링**: `--since` 및 `--until` 을 사용하여 날짜 범위로 리포트 필터링
- 📁 **사용자 정의 경로**: 사용자 정의 Claude 데이터 디렉토리 위치 지원
- 🎨 **아름다운 출력**: 컬러풀한 테이블 형식 디스플레이
- 📄 **JSON 출력**: `--json` 으로 구조화된 JSON 형식으로 데이터 내보내기
- 💰 **비용 추적**: 각 일/월/세션별 USD 비용 표시
- 🔄 **캐시 토큰 지원**: 캐시 생성 및 캐시 읽기 토큰을 별도로 추적 및 표시

## 중요한 면책 조항

⚠️ **이것은 공식 Claude 도구가 아닙니다** - 로컬에 저장된 사용량 데이터를 분석하는 독립적인 커뮤니티 프로젝트입니다.

**비용 계산은 추정치일 뿐** 이며 실제 청구서를 반영하지 않을 수 있습니다:

- 표시된 비용은 토큰 수와 모델 가격 데이터를 기반으로 한 가상/추정 비용입니다
- 가격 변경, 특별 요금 또는 청구 조정으로 인해 실제 비용이 다를 수 있습니다
- 계산된 비용의 정확성을 보장하지 않습니다
- 공식 청구 정보는 항상 Claude 계정 대시보드를 참조하세요

## 제한 사항

이 도구는 Claude Code에서 생성된 로컬 JSONL 파일만 읽습니다. 여러 기기에서 Claude Code를 사용하는 경우 JSONL 파일이 기기 간에 동기화되어야 합니다.

웹 검색, 코드 실행, 이미지 분석과 같은 도구의 API 사용량은 토큰 사용량 리포트에 포함되지 않습니다. 이 도구는 언어 모델 토큰 사용량만 추적합니다.

## 설치

### 빠른 시작 (권장)

설치 없이 직접 실행:

```bash
# npx 사용
npx ccusage@latest

# bunx 사용  
bunx ccusage

# pnpm 사용
pnpm dlx ccusage

# 보안 플래그와 함께 Deno 사용
deno run -E -R=$HOME/.claude/projects/ -S=homedir -N='raw.githubusercontent.com:443' npm:ccusage@latest
```

### 로컬 설치

```bash
# npm으로 전역 설치
npm install -g ccusage

# bun으로 전역 설치
bun install -g ccusage

# 실행
ccusage daily
```

### 개발 설정

```bash
# 저장소 클론
git clone https://github.com/ryoppippi/ccusage.git
cd ccusage

# 의존성 설치
bun install

# 도구 실행
bun run report [subcommand] [options]
```

## 사용법

### 일일 리포트 (기본값)

날짜별로 집계된 토큰 사용량 및 비용 표시:

```bash
# 모든 일일 사용량 표시
ccusage daily
# 또는: ccusage
# 또는: npx ccusage@latest daily  
# 또는: bunx ccusage daily

# 날짜 범위로 필터링
ccusage daily --since 20250525 --until 20250530

# 사용자 정의 Claude 데이터 디렉토리 사용
ccusage daily --path /custom/path/to/.claude

# JSON 형식으로 출력
ccusage daily --json

# 비용 계산 모드 제어
ccusage daily --mode auto        # 가능한 경우 costUSD 사용, 그렇지 않으면 계산 (기본값)
ccusage daily --mode calculate   # 항상 토큰에서 비용 계산
ccusage daily --mode display     # 항상 사전 계산된 costUSD 값 표시

# 정렬 순서 제어
ccusage daily --order asc        # 오래된 날짜부터 표시
ccusage daily --order desc       # 최신 날짜부터 표시 (기본값)

# 모델별 비용 분석 표시
ccusage daily --breakdown        # 모델별 비용 분석 표시 (opus-4, sonnet-4 등)
```

`ccusage` 는 `ccusage daily` 의 별칭이므로 하위 명령을 지정하지 않고 실행할 수 있습니다.

### 월별 리포트

월별로 집계된 토큰 사용량 및 비용 표시:

```bash
# 모든 월별 사용량 표시
ccusage monthly

# 날짜 범위로 필터링
ccusage monthly --since 20250101 --until 20250531

# 사용자 정의 Claude 데이터 디렉토리 사용
ccusage monthly --path /custom/path/to/.claude

# JSON 형식으로 출력
ccusage monthly --json

# 비용 계산 모드 제어
ccusage monthly --mode auto        # 가능한 경우 costUSD 사용, 그렇지 않으면 계산 (기본값)
ccusage monthly --mode calculate   # 항상 토큰에서 비용 계산
ccusage monthly --mode display     # 항상 사전 계산된 costUSD 값 표시

# 정렬 순서 제어
ccusage monthly --order asc        # 오래된 월부터 표시
ccusage monthly --order desc       # 최신 월부터 표시 (기본값)

# 모델별 비용 분석 표시
ccusage monthly --breakdown        # 모델별 비용 분석 표시
```

### 세션 리포트

대화 세션별로 그룹화된 사용량을 비용순으로 정렬하여 표시:

```bash
# 모든 세션 표시
ccusage session

# 마지막 활동 날짜로 세션 필터링
ccusage session --since 20250525

# 필터 조합
ccusage session --since 20250525 --until 20250530 --path /custom/path

# JSON 형식으로 출력
ccusage session --json

# 비용 계산 모드 제어
ccusage session --mode auto        # 가능한 경우 costUSD 사용, 그렇지 않으면 계산 (기본값)
ccusage session --mode calculate   # 항상 토큰에서 비용 계산
ccusage session --mode display     # 항상 사전 계산된 costUSD 값 표시

# 정렬 순서 제어
ccusage session --order asc        # 오래된 세션부터 표시
ccusage session --order desc       # 최신 세션부터 표시 (기본값)

# 모델별 비용 분석 표시
ccusage session --breakdown        # 모델별 비용 분석 표시
```

## 옵션

모든 명령은 다음 옵션을 지원합니다:

- `-s, --since <date>`: 날짜부터 필터링 (YYYYMMDD 형식)
- `-u, --until <date>`: 날짜까지 필터링 (YYYYMMDD 형식)
- `-p, --path <path>`: Claude 데이터 디렉토리의 사용자 정의 경로 (기본값: `~/.claude`)
- `-j, --json`: 테이블 대신 JSON 형식으로 결과 출력
- `-m, --mode <mode>`: 비용 계산 모드: `auto` (기본값), `calculate`, 또는 `display`
- `-o, --order <order>`: 정렬 순서: `desc` (최신 우선, 기본값) 또는 `asc` (오래된 것 우선)
- `-b, --breakdown`: 모델별 비용 분석 표시 (Opus, Sonnet 등으로 사용량 분할)
- `-d, --debug`: 디버깅을 위한 가격 불일치 정보 표시
- `--debug-samples <number>`: 디버그 출력에서 표시할 불일치 샘플 수 (기본값: 5)
- `-h, --help`: 도움말 메시지 표시
- `-v, --version`: 버전 표시

## 비용 계산 모드

- **`auto`** (기본값): 사용 가능한 경우 사전 계산된 `costUSD` 값을 사용하고, 그렇지 않으면 모델 가격을 사용하여 토큰 수에서 비용을 계산합니다
- **`calculate`**: 항상 모델 가격을 사용하여 토큰 수에서 비용을 계산하고, 사전 계산된 `costUSD` 값을 무시합니다
- **`display`**: 항상 사전 계산된 `costUSD` 값만 사용하고, 사전 계산된 비용이 없는 항목에 대해서는 $0.00을 표시합니다

## MCP (Model Context Protocol) 지원

다른 도구와의 통합을 위해 Model Context Protocol을 통해 사용량 데이터를 노출합니다:

```bash
# 로컬 통합을 위한 stdio 전송으로 MCP 서버 시작
ccusage mcp

# 원격 액세스를 위한 HTTP 스트림 전송으로 MCP 서버 시작
ccusage mcp --type http --port 8080

# 비용 계산 모드 제어
ccusage mcp --mode calculate
```

MCP 서버는 **stdio** 와 **HTTP 스트림** 전송을 모두 지원합니다:

- **stdio** (기본값): 클라이언트가 프로세스를 직접 생성하는 로컬 통합에 최적
- **HTTP 스트림**: 다른 머신이나 네트워크 위치에서 서버를 호출해야 하는 원격 액세스에 최적

사용 가능한 MCP 도구:

- `daily`: 일일 사용량 리포트 반환 (`since`, `until`, `mode` 매개변수 허용)
- `session`: 세션 사용량 리포트 반환 (`since`, `until`, `mode` 매개변수 허용)

### Claude Desktop 구성 예제

Claude Desktop에서 ccusage MCP를 사용하려면 Claude Desktop 구성 파일에 다음을 추가하세요:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
    "mcpServers": {
        "ccusage": {
            "command": "npx",
            "args": ["ccusage@latest", "mcp"],
            "env": {}
        }
    }
}
```

또는 ccusage를 전역으로 설치한 경우:

```json
{
    "mcpServers": {
        "ccusage": {
            "command": "ccusage",
            "args": ["mcp"],
            "env": {}
        }
    }
}
```

이 구성을 추가한 후 Claude Desktop을 다시 시작하세요. 그러면 Claude 내에서 ccusage 도구를 사용하여 사용량 데이터를 분석할 수 있습니다.

## 출력 예제

### 일일 리포트

```javascript
╭──────────────────────────────────────────╮
│                                          │
│  Claude Code Token Usage Report - Daily  │
│                                          │
╰──────────────────────────────────────────╯

┌──────────────┬──────────────────┬────────┬─────────┬──────────────┬────────────┬──────────────┬────────────┐
│ Date         │ Models           │ Input  │ Output  │ Cache Create │ Cache Read │ Total Tokens │ Cost (USD) │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│ 2025-05-30   │ opus-4, sonnet-4 │    277 │  31,456 │          512 │      1,024 │       33,269 │     $17.58 │
│ 2025-05-29   │ sonnet-4         │    959 │  39,662 │          256 │        768 │       41,645 │     $16.42 │
│ 2025-05-28   │ opus-4           │    155 │  21,693 │          128 │        512 │       22,488 │      $8.36 │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│ Total        │                  │ 11,174 │ 720,366 │          896 │      2,304 │      734,740 │    $336.47 │
└──────────────┴──────────────────┴────────┴─────────┴──────────────┴────────────┴──────────────┴────────────┘
```

`--breakdown` 플래그 사용 시:

```javascript
╭──────────────────────────────────────────╮
│                                          │
│  Claude Code Token Usage Report - Daily  │
│                                          │
╰──────────────────────────────────────────╯

┌──────────────┬──────────────────┬────────┬─────────┬──────────────┬────────────┬──────────────┬────────────┐
│ Date         │ Models           │ Input  │ Output  │ Cache Create │ Cache Read │ Total Tokens │ Cost (USD) │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│ 2025-05-30   │ opus-4, sonnet-4 │    277 │  31,456 │          512 │      1,024 │       33,269 │     $17.58 │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│   └─ opus-4  │                  │    100 │  15,000 │          256 │        512 │       15,868 │     $10.25 │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│   └─ sonnet-4│                  │    177 │  16,456 │          256 │        512 │       17,401 │      $7.33 │
├──────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┤
│ Total        │                  │ 11,174 │ 720,366 │          896 │      2,304 │      734,740 │    $336.47 │
└──────────────┴──────────────────┴────────┴─────────┴──────────────┴────────────┴──────────────┴────────────┘
```

### 세션 리포트

```bash
╭───────────────────────────────────────────────╮
│                                               │
│  Claude Code Token Usage Report - By Session  │
│                                               │
╰───────────────────────────────────────────────╯

┌────────────┬──────────────────┬────────┬─────────┬──────────────┬────────────┬──────────────┬────────────┬───────────────┐
│ Session    │ Models           │ Input  │ Output  │ Cache Create │ Cache Read │ Total Tokens │ Cost (USD) │ Last Activity │
├────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┼───────────────┤
│ session-1  │ opus-4, sonnet-4 │  4,512 │ 350,846 │          512 │      1,024 │      356,894 │    $156.40 │ 2025-05-24    │
├────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┼───────────────┤
│ session-2  │ sonnet-4         │  2,775 │ 186,645 │          256 │        768 │      190,444 │     $98.45 │ 2025-05-25    │
├────────────┼──────────────────┼────────┼─────────┼──────────────┼────────────┼──────────────┼────────────┼───────────────┤
│ Total      │                  │ 11,174 │ 720,445 │          768 │      1,792 │      734,179 │    $336.68 │               │
└────────────┴──────────────────┴────────┴─────────┴──────────────┴────────────┴──────────────┴────────────┴───────────────┘
```

## 요구 사항

- Claude Code 사용 기록 파일 (`~/.claude/projects/**/*.jsonl`)

## 라이선스

MIT

## 작성자

[@ryoppippi](https://github.com/ryoppippi)

## 영감

이 도구는 Claude Code 사용량 비용 추적에 관한 [@milliondev](https://github.com/milliondev) 의 [훌륭한 글](https://milliondev.com/claude-code-usage-costs) 에서 영감을 받았습니다. 이 글은 DuckDB를 사용하여 Claude Code의 로컬 JSONL 파일을 분석하여 토큰 사용 패턴과 비용을 이해하는 방법을 보여줍니다.

원래 접근 방식은 분석에 DuckDB를 사용하지만, 이 도구는 동일한 핵심 기능을 가진 더 접근하기 쉬운 CLI 인터페이스를 제공합니다 - Claude Code가 로컬에 저장하는 동일한 JSONL 파일을 분석하여 사용 패턴과 비용에 대한 통찰력을 제공합니다.

## 감사의 말

Claude Code 사용량 분석의 원래 개념과 접근 방식을 제공해 주신 [@milliondev](https://github.com/milliondev) 에게 감사드립니다.

---

**출처**: [https://github.com/ryoppippi/ccusage](https://github.com/ryoppippi/ccusage)

[저작자표시 (새창열림)](https://creativecommons.org/licenses/by/4.0/deed.ko)

- [![네이버 블로그 공유](https://tistory1.daumcdn.net/tistory/70948/skin/images/sns_naver.png)](https://rudaks.tistory.com/entry/#)
- [![네이버 밴드 공유](https://tistory1.daumcdn.net/tistory/70948/skin/images/naverband.png)](https://rudaks.tistory.com/entry/#)
- [![페이스북 공유](https://tistory1.daumcdn.net/tistory/70948/skin/images/sns_face.png)](https://rudaks.tistory.com/entry/#)
- [![카카오스토리 공유](https://tistory1.daumcdn.net/tistory/70948/skin/images/sns_kakao.png)](https://rudaks.tistory.com/entry/#)

[0](https://rudaks.tistory.com/entry/#rp)