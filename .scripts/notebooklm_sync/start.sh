#!/bin/bash
# NotebookLM → Obsidian 동기화 시작 스크립트

# 현재 스크립트 디렉토리로 이동
cd "$(dirname "$0")"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  NotebookLM → Obsidian 동기화 시작"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Python 실행
python3 sync.py
