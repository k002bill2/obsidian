

---

name: kiips-brand-guidelines

description: KiiPS (Korea Innovation Investment & Partnership System) 공식 브랜드 컬러 및 타이포그래피 가이드. 금융 투자 관리 플랫폼의 비주얼 아이덴티티와 디자인 표준을 정의합니다.

license: KiiPS Project - Internal Use Only

project: KiiPS Financial Investment Platform

version: 1.0

date: 2025-10-24

based-on: KiiPS-UI/src/main/resources/static/css/sass/config/_variables.scss

---

  

# KiiPS 브랜드 스타일 가이드

  

## 개요

  

KiiPS (Korea Innovation Investment & Partnership System) 금융 투자 관리 플랫폼의 공식 브랜드 아이덴티티 및 스타일 리소스를 정의합니다.

  

**기반 파일**: `KiiPS-UI/src/main/resources/static/css/sass/config/_variables.scss`

  

**키워드**: 브랜딩, 기업 아이덴티티, 비주얼 아이덴티티, 금융 UI, 스타일링, 브랜드 컬러, 타이포그래피, KiiPS 브랜드, 디자인 시스템, NexonLv2Gothic

  

## 브랜드 컬러 팔레트

  

### 주요 컬러 (Primary Colors)

  

**SCSS 변수**: `$color-primary`, `$theme-color`

  

- **Primary Blue**: `#007bff` (Bootstrap Primary)

- RGB: (0, 123, 255)

- SCSS: `$color-primary`, `$color-blue`, `$theme-color`

- 용도: 주요 버튼, 링크, 강조 요소, 브랜드 대표 컬러

- 변형:

- Lighten: `#4da3ff` (`$color-primary-lighten`)

- Darken: `#003d80` (`$color-primary-darken`)

  

- **Tertiary Blue**: `#3b4bb0`

- RGB: (59, 75, 176)

- SCSS: `$color-tertiary`

- 용도: 보조 강조, 서브 액션

  

- **Init Blue**: `#4E5DBF`

- RGB: (78, 93, 191)

- SCSS: `$color-init`

- 용도: 초기 상태, 신규 항목

  

### 상태 컬러 (State Colors)

  

**SCSS 변수**: `$states` 리스트

  

**Success (성공):**

- **Color**: `#47a447`

- RGB: (71, 164, 71)

- SCSS: `$color-success`

- 용도: 펀드 운용 정상, 투자 승인, 처리 완료

  

**Warning (경고):**

- **Color**: `#FF9F43`

- RGB: (255, 159, 67)

- SCSS: `$color-warning`

- 용도: 투자한도 근접, 주의 필요, 검토 대기

  

**Danger (위험):**

- **Color**: `#d2322d`

- RGB: (210, 50, 45)

- SCSS: `$color-danger`

- 용도: 한도 초과, 시스템 오류, 거부 상태

  

**Required (필수):**

- **Color**: `#de2f2f`

- RGB: (222, 47, 47)

- SCSS: `$color-required`

- 용도: 필수 입력 항목 표시

  

**Info (정보):**

- **Color**: `#44b5bc`

- RGB: (68, 181, 188)

- SCSS: `$color-info`

- 용도: 시스템 공지, 도움말, 안내 메시지

  

**Info Light:**

- **Color**: `#d0f2f3`

- RGB: (208, 242, 243)

- SCSS: `$color-info-light`

- 용도: 정보성 배경, 하이라이트

  

### 보조 컬러 (Secondary Colors)

  

**SCSS 변수**: `$colors-list`

  

**Secondary Gray:**

- **Color**: `#a5a5a5`

- RGB: (165, 165, 165)

- SCSS: `$color-secondary`

- 용도: 비활성 요소, 보조 텍스트

  

**Quaternary Purple:**

- **Color**: `#734BA9`

- RGB: (115, 75, 169)

- SCSS: `$color-quaternary`

- 용도: 특별 상태, 프리미엄 기능

  

### 중립 컬러 (Neutral Colors)

  

**Dark Tones:**

- **Dark**: `#171717` (`$color-dark`)

- 용도: 진한 텍스트, 헤더

  

- **Black**: `#333` (`$color-black`)

- 용도: 본문 텍스트, 기본 폰트

  

- **Sidebar**: `#33363F` (`$sidebar-color`)

- 용도: 사이드바 배경

  

**Light Tones:**

- **White**: `#FFFFFF` (`$color-white`, `$body-color`)

- 용도: 카드 배경, 본문 배경

  

- **Light**: `#f0f0f0` (`$color-light`)

- 용도: 구분선, 비활성 배경

  

- **Gray**: `#CCC` (`$color-gray`, `$color-muted`)

- 용도: 경계선, 보조 요소

  

- **Blue Gray**: `#DAE0E5` (`$color-blue-gray`)

- 용도: 서브 배경, 패널

  

- **Theme BG**: `#f7f7f7` (`$theme-color-bg`)

- 용도: 전체 배경색

  

### 다크 모드 컬러 (Dark Version)

  

**SCSS 변수**: `$dark-` 접두사

  

- **Base**: `#1d2127` (`$dark-bg`, `$dark-color-1`)

- **Text**: `#eeeeee` (`$dark-default-text`)

- **Variants**:

- Color 2: `#20242a` (lighten 2%)

- Color 3: `#242931` (lighten 5%)

- Color 4: `#282e38` (lighten 8%)

  

## 타이포그래피

  

### 폰트 패밀리

  

**SCSS 변수**: `$font-primary`, `$font-secondary`

  

**Primary Font (기본 폰트):**

```scss

$font-primary: "NexonLv2Gothic", "Open Sans", Tahoma, Verdana, Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;

```

  

**적용 CSS:**

```css

/* 본문 및 대부분의 UI 요소 */

font-family: "NexonLv2Gothic", "Open Sans", Tahoma, Verdana, Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;

  

/* 챗봇 이름 (1.5rem 크기) */

font: 500 1.5rem/1.3rem "NexonLv2Gothic", "Open Sans", Tahoma, Verdana, Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;

  

/* 메시지 텍스트 (0.75rem 크기) */

font: 500 0.75rem/1.3rem "NexonLv2Gothic", "Open Sans", Tahoma, Verdana, Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;

```

  

**Secondary Font (보조 폰트):**

```scss

$font-secondary: "Shadows Into Light", cursive;

```

- 용도: 특수 효과, 손글씨 스타일 필요 시

  

**기타 폰트:**

```css

/* Work Sans - 챗봇 타임스탬프 */

font-family: work-Sans, sans-serif;

  

/* Montserrat - 컴포넌트 특수 용도 */

font-family: 'Montserrat', Helvetica, Arial, serif;

```

  

### 폰트 크기 (Font Sizes)

  

**SCSS 변수**: `$body-font-size`, `$root-font-size`, `$menu-font-size`

  

**기본 크기:**

```scss

$body-font-size: 13; // 본문 텍스트

$root-font-size: 14; // 루트 요소

$menu-font-size: 14; // 메뉴 항목

$body-line-height: 22; // 본문 라인 높이

```

  

**텍스트 계층:**

```css

/* Root */

html: 14px (base)

  

/* 본문 */

body: 13px - 일반 텍스트, 기본 UI 요소

  

/* 메뉴 */

menu: 14px - 네비게이션, 메뉴 항목

  

/* 챗봇 이름 */

chat-name: 1.5rem (21px) - 대화방 사용자 이름

  

/* 챗봇 메시지 */

chat-message: 0.75rem (10.5px) - 메시지 본문

  

/* 작은 텍스트 */

small: 12px - 타임스탬프, 캡션, 주석

```

  

### 폰트 굵기 (Font Weights)

  

**SCSS 변수**: `$font-weight-*`

  

```scss

$font-weight-light: 300; // 가벼운 텍스트

$font-weight-normal: 500; // 일반 텍스트 (기본값)

$font-weight-semibold: 600; // 중간 굵기

$font-weight-bold: 600; // 굵은 텍스트

$font-weight-extra-bold: 600; // 더 굵은 텍스트

$font-weight-black: 700; // 가장 굵은 텍스트

```

  

**사용 예:**

```css

/* 일반 본문 */

font-weight: 500;

  

/* 강조 텍스트, 레이블 */

font-weight: 600;

  

/* 제목, 헤더 */

font-weight: 700;

```

  

### 라인 높이 (Line Height)

  

```scss

$body-line-height: 22; // 본문 라인 높이

```

  

**적용:**

```css

/* 본문 텍스트 */

body { line-height: 22px; }

  

/* 챗봇 이름 (1.3rem 기준) */

.chat-name { line-height: 1.3rem; }

  

/* 챗봇 메시지 (1.3rem 기준) */

.chat-message { line-height: 1.3rem; }

```

  

## UI 컴포넌트 스타일

  

### 간격 시스템 (Spacing)

  

**SCSS 변수**: `$spacement-*`

  

```scss

$spacement-increment: 5px;

$spacement-xs: 5px; // Extra Small

$spacement-sm: 10px; // Small

$spacement-md: 15px; // Medium

$spacement-lg: 20px; // Large

$spacement-xl: 25px; // Extra Large

$spacement-xlg: 30px; // Extra Extra Large

```

  

### 테두리 (Borders)

  

**SCSS 변수**: `$border-*`

  

```scss

$border-thin: 1px; // 얇은 테두리

$border-normal: 2px; // 일반 테두리

$border-thick: 3px; // 두꺼운 테두리

  

$border-radius: var(--border-radius); // 둥근 모서리

```

  

### 버튼 (Buttons)

  

**SCSS 기반 버튼 컬러 (States 리스트 적용):**

  

```scss

// Primary Button - 주요 액션

.btn-primary {

background-color: $color-primary; // #007bff

border-color: $color-primary;

color: $color-primary-inverse; // #FFF

}

  

// Success Button - 승인/완료

.btn-success {

background-color: $color-success; // #47a447

border-color: $color-success;

color: $color-success-inverse; // #FFF

}

  

// Warning Button - 경고/주의

.btn-warning {

background-color: $color-warning; // #FF9F43

border-color: $color-warning;

color: $color-warning-inverse; // #FFF

}

  

// Danger Button - 삭제/취소

.btn-danger {

background-color: $color-danger; // #d2322d

border-color: $color-danger;

color: $color-danger-inverse; // #FFF

}

  

// Secondary Button - 보조 액션

.btn-secondary {

background-color: $color-secondary; // #a5a5a5

border-color: $color-secondary;

color: $color-secondary-inverse; // #FFF

}

  

// Tertiary Button - 서브 액션

.btn-tertiary {

background-color: $color-tertiary; // #3b4bb0

border-color: $color-tertiary;

color: $color-tertiary-inverse; // #FFF

}

  

// Info Button - 정보

.btn-info {

background-color: $color-info; // #44b5bc

border-color: $color-info;

color: $color-info-inverse; // #242424

}

  

// Required Button - 필수

.btn-required {

background-color: $color-required; // #de2f2f

border-color: $color-required;

color: $color-required-inverse; // #FFF

}

```

  

### 테이블 & 그리드 (RealGrid)

  

**RealGrid 기본 스타일:**

  

```css

/* 헤더 배경 */

.grid-header {

background-color: #f3f4f6;

color: #1f2937;

font-weight: 600;

}

  

/* 홀수/짝수 행 */

.grid-row-odd {

background-color: #ffffff;

}

  

.grid-row-even {

background-color: #f9fafb;

}

  

/* 선택된 행 */

.grid-row-selected {

background-color: #dbeafe;

color: #1e3a8a;

}

  

/* 포커스된 셀 */

.grid-cell-focused {

border: 2px solid #3b82f6;

}

  

/* 금액 셀 (우측 정렬, 천단위 구분) */

.grid-cell-amount {

text-align: right;

font-family: 'Nanum Gothic Coding', monospace;

color: #1f2937;

}

  

/* 음수 금액 (빨간색) */

.grid-cell-negative {

color: #ef4444;

}

```

  

### 폼 요소 (Form Elements)

  

**Bootstrap 폼 스타일:**

  

```css

/* 입력 필드 */

.form-control {

border-color: #d1d5db;

border-radius: 0.375rem;

font-size: 14px;

}

  

.form-control:focus {

border-color: #3b82f6;

box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);

}

  

/* 필수 입력 표시 */

.form-label.required::after {

content: " *";

color: #ef4444;

}

  

/* 읽기 전용 */

.form-control[readonly] {

background-color: #f3f4f6;

color: #6b7280;

}

  

/* 비활성화 */

.form-control:disabled {

background-color: #e5e7eb;

cursor: not-allowed;

}

```

  

### 카드 & 패널

  

```css

/* 카드 컨테이너 */

.card {

border-radius: 0.5rem;

border: 1px solid #e5e7eb;

box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

}

  

/* 카드 헤더 */

.card-header {

background-color: #f9fafb;

border-bottom: 1px solid #e5e7eb;

color: #1f2937;

font-weight: 600;

}

  

/* 카드 본문 */

.card-body {

padding: 1.5rem;

background-color: #ffffff;

}

```

  

### 알림 & 메시지

  

```css

/* Success Alert */

.alert-success {

background-color: #d1fae5;

border-color: #10b981;

color: #065f46;

}

  

/* Warning Alert */

.alert-warning {

background-color: #fef3c7;

border-color: #f59e0b;

color: #92400e;

}

  

/* Error Alert */

.alert-danger {

background-color: #fee2e2;

border-color: #ef4444;

color: #991b1b;

}

  

/* Info Alert */

.alert-info {

background-color: #cffafe;

border-color: #06b6d4;

color: #164e63;

}

```

  

## 차트 & 데이터 시각화 (AmCharts)

  

### 차트 컬러 팔레트

  

**SCSS 변수 기반 차트 컬러:**

  

**순차 데이터 (Sequential Data):**

```javascript

// KiiPS 테마 컬러 (SCSS 변수 적용)

const chartColors = [

"#007bff", // Primary Blue ($color-primary)

"#3b4bb0", // Tertiary Blue ($color-tertiary)

"#4E5DBF", // Init Blue ($color-init)

"#734BA9", // Quaternary Purple ($color-quaternary)

"#47a447", // Success Green ($color-success)

"#44b5bc", // Info Cyan ($color-info)

"#FF9F43", // Warning Orange ($color-warning)

"#d2322d" // Danger Red ($color-danger)

];

```

  

**상태 표시 (Status Indicators):**

```javascript

// 긍정 지표: 녹색 계열

positiveColors: ["#47a447", "#3d8b3d", "#337233"] // Success Green variants

  

// 부정 지표: 빨간색 계열

negativeColors: ["#d2322d", "#b82a26", "#9e241f"] // Danger Red variants

  

// 중립 지표: 회색 계열

neutralColors: ["#a5a5a5", "#8c8c8c", "#737373"] // Secondary Gray variants

  

// 정보 지표: 청록 계열

infoColors: ["#44b5bc", "#3a9aa0", "#307f84"] // Info Cyan variants

```

  

**위젯 태스크 컬러 (Sidebar Widgets):**

```scss

// SCSS 변수

$widget-tasks-colors: #D64B4B, #0090D9, #4DD79C, #D9A300, #C926FF, #FFFF26;

```

  

```javascript

// JavaScript 적용

const widgetColors = [

"#D64B4B", // Red - 긴급

"#0090D9", // Blue - 진행중

"#4DD79C", // Green - 완료

"#D9A300", // Gold - 검토

"#C926FF", // Purple - 대기

"#FFFF26" // Yellow - 주의

];

```

  

## 레이아웃 & 그리드 시스템

  

### 반응형 브레이크포인트

  

**SCSS 변수**: `$screen-*`, `$grid-breakpoints`

  

```scss

// Media Query Breakpoints

$screen-xs: 576px; // Extra Small (portrait phones)

$screen-sm: 768px; // Small (landscape phones)

$screen-md: 992px; // Medium (tablets)

$screen-lg: 1200px; // Large (desktops)

$screen-xl: 1600px; // Extra Large (large desktops)

  

// Grid Breakpoints

$grid-breakpoints: (

xs: 0,

sm: 576px,

md: 768px,

lg: 992px,

xl: 1200px

);

  

// Breakpoints for responsive design

$breakpoints: (

xs: 0,

sm: 576px,

md: 768px,

lg: 992px,

xl: 1200px

);

```

  

### 뷰포트 컨테이너

  

**SCSS 변수**: `$viewports`, `$enable-*`

  

```scss

// Viewport sizes for each breakpoint

$viewports: (

sm: 510px,

md: 700px,

lg: 920px,

xl: 1140px

);

  

// Container options

$enable-semantic-container: false; // <header>, <main>, <footer> 컨테이너

$enable-class-container: true; // .container, .container-fluid 활성화

$enable-viewport: true; // 중앙 정렬 뷰포트

$enable-responsive-spacings: true; // 반응형 간격

$enable-responsive-typography: true; // 반응형 타이포그래피

```

  

**적용:**

```css

/* Extra small devices (portrait phones, <576px) */

.container { max-width: 100%; }

  

/* Small devices (≥576px) */

@media (min-width: 576px) {

.container { max-width: 510px; }

}

  

/* Medium devices (≥768px) */

@media (min-width: 768px) {

.container { max-width: 700px; }

}

  

/* Large devices (≥992px) */

@media (min-width: 992px) {

.container { max-width: 920px; }

}

  

/* Extra large devices (≥1200px) */

@media (min-width: 1200px) {

.container { max-width: 1140px; }

}

```

  

## 아이콘 시스템

  

### Font Awesome 5

  

**주요 아이콘 매핑:**

```javascript

// 금융 도메인 아이콘

fund: "fas fa-landmark" // 펀드

investor: "fas fa-user-tie" // 투자자

portfolio: "fas fa-briefcase" // 포트폴리오

accounting: "fas fa-file-invoice-dollar" // 회계

payment: "fas fa-credit-card" // 결제

report: "fas fa-chart-line" // 보고서

document: "fas fa-file-alt" // 문서

logout: "fas fa-sign-out-alt" // 로그아웃

  

// 액션 아이콘

add: "fas fa-plus"

edit: "fas fa-edit"

delete: "fas fa-trash"

save: "fas fa-save"

search: "fas fa-search"

filter: "fas fa-filter"

download: "fas fa-download"

upload: "fas fa-upload"

  

// 상태 아이콘

success: "fas fa-check-circle"

warning: "fas fa-exclamation-triangle"

error: "fas fa-times-circle"

info: "fas fa-info-circle"

```

  

## 접근성 (Accessibility)

  

### WCAG 2.1 AA 준수

  

**색상 대비 비율:**

- 일반 텍스트: 4.5:1 이상

- 큰 텍스트 (18pt+): 3:1 이상

- UI 컴포넌트: 3:1 이상

  

**키보드 네비게이션:**

- Tab 순서: 논리적 순서 유지

- Focus 표시: 명확한 포커스 인디케이터

- Skip Links: 메인 컨텐츠 바로가기

  

**스크린 리더:**

- ARIA 라벨 사용

- 대체 텍스트 제공

- 의미있는 링크 텍스트

  

## 기술 구현

  

### JSP 환경 스타일 적용

  

```jsp

<%-- 페이지 헤더에 포함 --%>

<link rel="stylesheet" href="/resources/css/bootstrap.min.css">

<link rel="stylesheet" href="/resources/css/kiips-brand.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  

<%-- 브랜드 컬러 클래스 예시 --%>

<div class="btn btn-primary">주요 버튼</div>

<div class="alert alert-success">성공 메시지</div>

<span class="text-primary-navy">강조 텍스트</span>

```

  

### jQuery 이벤트 스타일링

  

```javascript

// 동적 스타일 적용

$('.dynamic-element').addClass('btn-primary');

  

// 상태에 따른 스타일 변경

if (status === 'success') {

$('#statusIndicator').removeClass().addClass('alert alert-success');

} else if (status === 'error') {

$('#statusIndicator').removeClass().addClass('alert alert-danger');

}

  

// 호버 효과

$('.custom-button').hover(

function() { $(this).css('background-color', '#1e40af'); },

function() { $(this).css('background-color', '#1e3a8a'); }

);

```

  

### RealGrid 테마 적용

  

```javascript

// RealGrid 스타일 설정

gridView.setStyles({

header: {

background: "#f3f4f6",

foreground: "#1f2937",

fontBold: true

},

body: {

background: "#ffffff",

foreground: "#1f2937",

oddBackground: "#f9fafb"

},

selection: {

background: "#dbeafe",

foreground: "#1e3a8a"

}

});

```

  

## 브랜드 사용 가이드라인

  

### 해야 할 것 (Do's)

  

✅ 정의된 컬러 팔레트 사용

✅ 일관된 타이포그래피 적용

✅ Bootstrap 4 그리드 시스템 활용

✅ 접근성 기준 준수

✅ 금융 도메인 컨텍스트 반영

✅ 한글/영문 폰트 구분 사용

✅ 데이터 시각화 표준 컬러 사용

  

### 하지 말아야 할 것 (Don'ts)

  

❌ 정의되지 않은 임의의 컬러 사용

❌ 과도한 애니메이션 효과

❌ 비표준 폰트 무분별 사용

❌ 색상 대비 기준 무시

❌ 브랜드 아이덴티티 훼손

❌ 일관성 없는 UI 컴포넌트

❌ 모바일 반응형 무시

  

## 메뉴 스타일 (Menu)

  

### 메뉴 간격

  

**SCSS 변수**: `$menu-*`

  

```scss

// Main menu padding

$menu-item-padding-horizontal: 25px;

$menu-item-padding-vertical: 12px;

$menu-item-padding: 12px 25px;

  

// Children menu padding

$menu-children-padding-horizontal: 15px;

$menu-children-padding-vertical: 6px;

$menu-children-padding: 6px 15px 6px 40px;

$menu-children-level1-padding: 6px 15px 6px 40px;

$menu-children-level2-padding: 6px 15px 6px 29px;

  

// Arrow padding

$menu-item-arrow-padding: 14px 25px;

$menu-item-children-arrow-padding: 6px 25px;

```

  

**적용 예시:**

```css

/* 메인 메뉴 항목 */

.menu-item {

padding: 12px 25px;

font-size: 14px;

}

  

/* 서브 메뉴 (1차) */

.submenu-level1 {

padding: 6px 15px 6px 40px;

}

  

/* 서브 메뉴 (2차) */

.submenu-level2 {

padding: 6px 15px 6px 29px;

}

```

  

## SCSS 특수 기능

  

### 테마 컬러 필터

  

**SVG 색상 변경 필터:**

```scss

$theme-color-filter: brightness(0) saturate(100%) invert(67%) sepia(61%) saturate(7314%) hue-rotate(178deg) brightness(79%) contrast(163%);

```

  

**적용:**

```css

.icon-primary {

filter: brightness(0) saturate(100%) invert(67%) sepia(61%) saturate(7314%) hue-rotate(178deg) brightness(79%) contrast(163%);

}

```

  

### Primary Color Hue

  

```scss

$primary-color-hue: 172; // 청록색 계열 색상

```

  

## 버전 관리

  

### v1.0 (2025-10-24)

- 초기 KiiPS 브랜드 가이드라인 작성

- `_variables.scss` 기반 실제 컬러/폰트 시스템 반영

- **Primary Font**: NexonLv2Gothic (넥슨 레벨2 고딕)

- **Primary Color**: #007bff (Bootstrap Blue)

- **States Colors**: Success, Warning, Danger, Info, Required, Init

- JSP + Bootstrap 4 + jQuery + SCSS 환경 기준

- RealGrid, AmCharts 통합 스타일

- 금융 도메인 컬러 시스템 정의

- 반응형 브레이크포인트 표준화

- WCAG 2.1 AA 접근성 기준 포함

  

## 참고 자료

  

### 실제 프로젝트 파일

- **주요 변수**: `KiiPS-UI/src/main/resources/static/css/sass/config/_variables.scss`

- **테마 정의**: `KiiPS-UI/src/main/resources/static/css/sass/themes/default.scss`

- **메인 SCSS**: `KiiPS-UI/src/main/resources/static/css/sass/theme.scss`

  

### 외부 라이브러리

- Bootstrap 4: https://getbootstrap.com/docs/4.6/

- Font Awesome 5: https://fontawesome.com/v5/

- RealGrid: http://help.realgrid.com/

- AmCharts 4: https://www.amcharts.com/docs/v4/

- NexonLv2Gothic: https://www.nexon.com/font

  

### KiiPS 내부 문서

- [KIIPS_SYSTEM_PROMPT.md](./.claude/KIIPS_SYSTEM_PROMPT.md)

- [KiiPS Architecture Guide](./docs/architecture.md)

- [Frontend Development Guide](./docs/frontend.md)

  

## 적용 가이드

  

### SCSS 컴파일

  

```bash

# SCSS 컴파일 (개발)

npm run sass:watch

  

# SCSS 컴파일 (프로덕션)

npm run sass:build

```

  

### 커스텀 스타일 추가

  

```css

/* custom.css */

/* KiiPS 프로젝트 커스텀 스타일 */

  

/* SCSS 변수를 CSS 커스텀 프로퍼티로 사용 */

:root {

--kiips-primary: #007bff;

--kiips-success: #47a447;

--kiips-danger: #d2322d;

--kiips-font: "NexonLv2Gothic", "Open Sans", sans-serif;

}

  

/* 커스텀 클래스 */

.kiips-btn-primary {

background-color: var(--kiips-primary);

color: #fff;

font-family: var(--kiips-font);

}

```

  

---

  

**문의**: KiiPS 개발팀

**최종 업데이트**: 2025-10-24

**라이선스**: KiiPS Project - Internal Use Only