#!/bin/bash
# NotebookLM → Obsidian 동기화 설치 스크립트

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  NotebookLM → Obsidian 동기화 설치"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 현재 스크립트 디렉토리로 이동
cd "$(dirname "$0")"

# Python 버전 확인
echo "1. Python 버전 확인..."
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3가 설치되어 있지 않습니다."
    echo "   Homebrew로 설치: brew install python3"
    exit 1
fi

PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')
echo "✓ Python $PYTHON_VERSION 발견"
echo ""

# pip 확인
echo "2. pip 확인..."
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3가 설치되어 있지 않습니다."
    exit 1
fi
echo "✓ pip3 발견"
echo ""

# 패키지 설치
echo "3. 필요한 패키지 설치..."
pip3 install -r requirements.txt --quiet
if [ $? -eq 0 ]; then
    echo "✓ 패키지 설치 완료"
else
    echo "❌ 패키지 설치 실패"
    exit 1
fi
echo ""

# 실행 권한 부여
echo "4. 실행 권한 설정..."
chmod +x sync.py
echo "✓ 실행 권한 부여 완료"
echo ""

# NotebookLM 폴더 생성
echo "5. Obsidian 대상 폴더 생성..."
OBSIDIAN_VAULT="$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/icloud Obsidian"
TARGET_FOLDER="$OBSIDIAN_VAULT/NotebookLM"
mkdir -p "$TARGET_FOLDER"
echo "✓ 폴더 생성: $TARGET_FOLDER"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  설치 완료!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 다음 단계:"
echo "   1. config.yaml 파일을 확인하고 필요시 수정하세요"
echo "   2. 동기화 시작: ./start.sh"
echo "   3. 또는 직접 실행: python3 sync.py"
echo ""
echo "📖 자세한 사용법은 README.md를 참고하세요"
echo ""
