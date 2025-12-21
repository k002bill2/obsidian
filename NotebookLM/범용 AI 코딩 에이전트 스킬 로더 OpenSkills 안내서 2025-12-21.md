---
created: 2025-12-21 11:58:48
source: NotebookLM
tags: [notebooklm, imported]
---

# 범용 AI 코딩 에이전트 스킬 로더 OpenSkills 안내서

OpenSkills의 기본 설치 대상은 **AI 코딩 에이전트(AI coding agents)**입니다.

OpenSkills는 Anthropic의 스킬 시스템을 모방하여 **Claude Code, Cursor, Windsurf, Aider**와 같은 모든 AI 코딩 에이전트에서 스킬을 로드하고 사용할 수 있도록 설계된 **범용 스킬 로더(Universal skills loader)**입니다.

OpenSkills를 사용하는 주요 목적은 다음과 같습니다:
1. **Anthropic의 스킬 시스템 제공:** Claude Code 외의 에이전트(Cursor, Windsurf, Aider)에서도 Claude Code의 스킬 시스템을 보편적으로 사용할 수 있게 합니다.
2. **스킬 설치 및 관리:** GitHub 저장소, 로컬 경로, 개인 Git 저장소 등 어디서든 스킬을 설치하고 에이전트 간에 공유하며, 버전 관리를 할 수 있도록 돕습니다.
3. **호환성:** OpenSkills는 Claude Code의 스킬 시스템과 100% 호환되도록 설계되었으며, 동일한 프롬프트 형식(`available_skills` XML), 마켓플레이스, 폴더 구조(`.claude/skills/`), `SKILL.md` 형식을 사용합니다.

설치 시 기본적으로 스킬은 **프로젝트 디렉터리 내의** `.claude/skills/`에 설치됩니다.

---

## 📚 인용 정보

> 이 문서에는 **11개**의 인용이 포함되어 있습니다.
> NotebookLM에서 각 번호를 클릭하면 상세 출처를 확인할 수 있습니다.
