# 🚨 API 키 보안 조치 가이드

## ⚠️ 즉시 조치 필요!

API 키가 Git 히스토리 및 플러그인 설정 파일에 노출되어 있습니다. 아래 단계를 **즉시** 수행하세요.

---

## 📋 발견된 보안 문제

### 1. Git 히스토리 내 OpenAI API 키 노출
- **파일**: `Downloads/springboot-react-docker-chatbot-main/README.md`
- **커밋**: d7200f2 (2025-08-29)
- **노출된 키**: `sk-proj-xZldTidJqHYj22JuaIC...` (전체 키 노출됨)
- **상태**: Git 히스토리에 영구 저장됨

### 2. Anthropic API 키 노출
- **파일**: `.obsidian/plugins/smart-composer/data.json`
- **노출된 키**: `sk-ant-api03-6x_IOVXrL2HWg30UOH...`
- **상태**: ✅ 플레이스홀더로 교체 완료
- **조치 필요**: 즉시 재발급

### 3. Google Gemini API 키 노출
- **파일**: `.obsidian/plugins/smart-composer/data.json`
- **노출된 키**: `AIzaSyCv30lDO977Znny8yIombp3COd8L3Sb_00`
- **상태**: ✅ 플레이스홀더로 교체 완료
- **조치 필요**: 즉시 재발급

---

## 🔴 1단계: 즉시 API 키 재발급

### OpenAI API 키 재발급
1. https://platform.openai.com/api-keys 접속
2. 노출된 키 찾기: `sk-proj-xZldTidJqHYj22JuaIC...`
3. **"Revoke"** 버튼 클릭하여 키 삭제
4. **"Create new secret key"**로 새 키 발급
5. 새 키를 안전한 곳에 저장 (1Password, Bitwarden 등)

### Anthropic API 키 재발급
1. https://console.anthropic.com/settings/keys 접속
2. 노출된 키 찾기: `sk-ant-api03-6x_IOVXrL2HWg30UOH...`
3. 해당 키 삭제
4. **"Create Key"**로 새 키 발급
5. 새 키를 안전한 곳에 저장

### Google Gemini API 키 재발급
1. https://aistudio.google.com/app/apikey 또는 Google Cloud Console 접속
2. 노출된 키 찾기: `AIzaSyCv30lDO977Znny8yIombp3COd8L3Sb_00`
3. 해당 키 삭제
4. 새 API 키 생성
5. 새 키를 안전한 곳에 저장

---

## 🟡 2단계: 새 API 키 설정

### Obsidian Smart Composer 플러그인
1. Obsidian에서 **Settings** → **Smart Composer** 이동
2. 각 Provider 설정에서 새로 발급받은 API 키 입력:
   - **Anthropic**: 새 Anthropic API 키
   - **Gemini**: 새 Google Gemini API 키
   - **OpenAI**: 새 OpenAI API 키 (필요시)

**중요**: 플러그인 UI를 통해 입력하면 `data.json`에 자동으로 저장됩니다.

---

## 🟢 3단계: Git 히스토리 정리 (선택사항)

Git 히스토리에서 API 키를 완전히 제거하려면:

### 옵션 A: BFG Repo-Cleaner (권장)
```bash
# BFG 설치 (Homebrew 사용)
brew install bfg

# API 키가 포함된 파일 정리
bfg --replace-text <(echo 'sk-proj-xZldTidJqHYj22JuaIC...*==>***REMOVED***')

# 변경사항 적용
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### 옵션 B: git filter-branch
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch Downloads/springboot-react-docker-chatbot-main/README.md" \
  --prune-empty --tag-name-filter cat -- --all

git push origin --force --all
```

⚠️ **주의**: 이 작업은 Git 히스토리를 재작성합니다. 협업 중이라면 팀원들과 조율 필요!

---

## 📝 4단계: 보안 모범 사례 적용

### ✅ 완료된 조치
- [x] `.gitignore` 파일 생성
- [x] 플러그인 `data.json` 파일을 `.gitignore`에 추가
- [x] 노출된 API 키를 플레이스홀더로 교체

### 🔄 향후 권장 사항

1. **환경 변수 사용**
   - API 키를 `.env` 파일에 저장
   - `.env` 파일을 `.gitignore`에 추가
   - 플러그인이 환경 변수를 지원하는지 확인

2. **비밀 관리 도구 사용**
   - 1Password, Bitwarden, LastPass 등 사용
   - Obsidian 플러그인 연동 시 복사-붙여넣기

3. **정기적인 키 로테이션**
   - 3-6개월마다 API 키 재발급
   - 사용하지 않는 키는 즉시 삭제

4. **Git 커밋 전 체크**
   - `git diff`로 변경사항 확인
   - API 키, 비밀번호 등 민감 정보 포함 여부 확인
   - Pre-commit hook 설정 (선택사항)

---

## 🔍 보안 체크리스트

완료 후 아래 항목을 확인하세요:

- [ ] OpenAI API 키 재발급 완료
- [ ] Anthropic API 키 재발급 완료
- [ ] Google Gemini API 키 재발급 완료
- [ ] 기존 노출된 키 모두 삭제 완료
- [ ] Obsidian 플러그인에 새 키 설정 완료
- [ ] `.gitignore` 파일 추가 완료
- [ ] 플러그인 `data.json` 파일이 Git에서 제외되는지 확인
- [ ] (선택) Git 히스토리 정리 완료

---

## 📞 추가 도움이 필요한 경우

- **OpenAI 지원**: https://help.openai.com/
- **Anthropic 지원**: https://support.anthropic.com/
- **Google Cloud 지원**: https://cloud.google.com/support

---

## ⏰ 마지막 업데이트
- **작성일**: 2025-12-17
- **작성자**: Claude Code
- **버전**: 1.0

---

**다음 단계**: 위의 1-4단계를 순서대로 진행하세요. 질문이 있으면 언제든지 문의하세요!
