// ==UserScript==
// @name         NotebookLM to Obsidian Auto-Saver
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  NotebookLM의 "메모에 저장" 버튼 클릭 시 Obsidian으로 자동 저장
// @author       Claude Code
// @match        https://notebooklm.google.com/*
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @connect      127.0.0.1
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // ========================================
    // 설정 - 필요시 수정하세요
    // ========================================
    const CONFIG = {
        obsidianApiUrl: 'http://127.0.0.1:27123',  // HTTPS → HTTP (자체 서명 인증서 문제 회피)
        obsidianApiKey: '68b243f4d0009646914570125cc8658dd677f26f0295d38b6d39d4106b27c7a4',
        targetFolder: 'NotebookLM',
        autoTags: ['notebooklm', 'imported'],
        autoSaveOnClick: true, // true: 버튼 클릭 시 자동 저장, false: 확인 후 저장
        showNotification: true
    };

    // ========================================
    // 유틸리티 함수
    // ========================================

    /**
     * 알림 표시
     */
    function showNotification(message, type = 'info') {
        if (!CONFIG.showNotification) return;

        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Google Sans', Arial, sans-serif;
            font-size: 14px;
            max-width: 350px;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    /**
     * 현재 페이지에서 NotebookLM 노트 내용 추출
     * NotebookLM의 실제 DOM 구조 기반 (2025-12-18 업데이트)
     */
    function extractNotebookContent() {
        console.log('[NotebookLM→Obsidian] 🔍 콘텐츠 추출 시작');

        // NotebookLM의 note viewer 찾기
        const viewer = document.querySelector('labs-tailwind-doc-viewer.note-editor');
        console.log('[NotebookLM→Obsidian] viewer 찾기:', viewer ? '✅ 발견' : '❌ 없음');

        if (!viewer) {
            console.error('[NotebookLM→Obsidian] Note viewer를 찾을 수 없습니다. 노트가 열려있는지 확인하세요.');
            return { title: '무제 노트', content: '' };
        }

        // 제목 추출: 첫 번째 heading 요소에서 추출
        let title = '무제 노트';
        const headingElement = viewer.querySelector('.paragraph.heading3, .paragraph.heading2, .paragraph.heading1');
        console.log('[NotebookLM→Obsidian] heading 찾기:', headingElement ? '✅ 발견' : '❌ 없음');

        if (headingElement) {
            const headingClone = headingElement.cloneNode(true);
            // 인용 버튼 제거
            headingClone.querySelectorAll('button.citation-marker').forEach(btn => btn.remove());
            title = headingClone.textContent.trim();
            console.log('[NotebookLM→Obsidian] 제목:', title);
        }

        // 본문 추출: 모든 paragraph 요소
        const paragraphs = viewer.querySelectorAll('.paragraph');
        console.log('[NotebookLM→Obsidian] paragraph 개수:', paragraphs.length);

        let content = '';

        paragraphs.forEach((para, index) => {
            // DOM 복사본 생성 (원본 변경 방지)
            const clone = para.cloneNode(true);

            // 불필요한 요소 제거
            clone.querySelectorAll('button.citation-marker').forEach(btn => btn.remove());

            const text = clone.textContent.trim();
            if (text) {
                // heading은 마크다운 형식으로 변환
                if (para.classList.contains('heading1')) {
                    content += `# ${text}\n\n`;
                } else if (para.classList.contains('heading2')) {
                    content += `## ${text}\n\n`;
                } else if (para.classList.contains('heading3')) {
                    content += `### ${text}\n\n`;
                } else {
                    content += text + '\n\n';
                }
            }
        });

        console.log('[NotebookLM→Obsidian] 추출된 내용 길이:', content.length, '자');
        console.log('[NotebookLM→Obsidian] 내용 미리보기:', content.substring(0, 100));

        return { title, content: content.trim() };
    }

    /**
     * Markdown 파일 생성
     */
    function createMarkdown(title, content) {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0];

        // Frontmatter 생성
        const frontmatter = `---
created: ${dateStr} ${timeStr}
source: NotebookLM
tags: [${CONFIG.autoTags.join(', ')}]
---

`;

        // Markdown 본문
        const markdown = frontmatter + `# ${title}\n\n${content}`;
        return markdown;
    }

    /**
     * Obsidian에 노트 저장
     */
    function saveToObsidian(title, markdown) {
        return new Promise((resolve, reject) => {
            // 파일명 생성 (날짜 포함하여 중복 방지)
            const now = new Date();
            const timestamp = now.toISOString().replace(/[:.]/g, '-').split('T')[0];
            const filename = `${title.replace(/[/\\:*?"<>|]/g, '_')} ${timestamp}.md`;
            const filepath = `${CONFIG.targetFolder}/${filename}`;

            GM_xmlhttpRequest({
                method: 'PUT',
                url: `${CONFIG.obsidianApiUrl}/vault/${encodeURIComponent(filepath)}`,
                headers: {
                    'Authorization': `Bearer ${CONFIG.obsidianApiKey}`,
                    'Content-Type': 'text/markdown'
                },
                data: markdown,
                onload: function(response) {
                    if (response.status >= 200 && response.status < 300) {
                        resolve(filename);
                    } else {
                        reject(new Error(`HTTP ${response.status}: ${response.statusText}`));
                    }
                },
                onerror: function(error) {
                    reject(new Error('네트워크 오류: Obsidian에 연결할 수 없습니다.'));
                },
                ontimeout: function() {
                    reject(new Error('시간 초과: Obsidian 응답이 없습니다.'));
                }
            });
        });
    }

    /**
     * 메인 저장 함수
     */
    async function handleSaveToObsidian() {
        try {
            showNotification('📝 NotebookLM 내용 추출 중...', 'info');

            // 노트 내용 추출
            const { title, content } = extractNotebookContent();

            if (!content || content.length < 10) {
                showNotification('❌ 추출할 내용이 없습니다.', 'error');
                return;
            }

            // Markdown 생성
            const markdown = createMarkdown(title, content);

            // Obsidian에 저장
            showNotification('💾 Obsidian에 저장 중...', 'info');
            const filename = await saveToObsidian(title, markdown);

            showNotification(`✅ Obsidian에 저장 완료: ${filename}`, 'success');

        } catch (error) {
            console.error('Obsidian 저장 오류:', error);
            showNotification(`❌ 저장 실패: ${error.message}`, 'error');
        }
    }

    // ========================================
    // 버튼 감지 및 자동 저장
    // ========================================

    /**
     * "메모에 저장" 버튼에 클릭 이벤트 추가
     */
    function addSaveButtonListener() {
        // NotebookLM의 "메모에 저장" 버튼 찾기
        // 사용자가 제공한 HTML 구조 기반
        const saveButton = document.querySelector('button[mat-stroked-button] .save-to-note-text');

        if (!saveButton) {
            console.log('[NotebookLM→Obsidian] "메모에 저장" 버튼을 찾을 수 없습니다.');
            return;
        }

        const button = saveButton.closest('button');

        // 이미 리스너가 추가되었는지 확인
        if (button.dataset.obsidianListener) {
            return;
        }

        console.log('[NotebookLM→Obsidian] "메모에 저장" 버튼 감지됨');

        // 클릭 이벤트 리스너 추가
        button.addEventListener('click', function(e) {
            console.log('[NotebookLM→Obsidian] 버튼 클릭 감지');

            if (CONFIG.autoSaveOnClick) {
                // 자동 저장
                setTimeout(() => handleSaveToObsidian(), 500);
            } else {
                // 확인 후 저장
                if (confirm('이 노트를 Obsidian에 저장하시겠습니까?')) {
                    setTimeout(() => handleSaveToObsidian(), 500);
                }
            }
        });

        button.dataset.obsidianListener = 'true';
    }

    /**
     * Obsidian 저장 버튼 추가 (옵션)
     */
    function addCustomObsidianButton() {
        // 이미 버튼이 있는지 확인
        if (document.querySelector('#obsidian-save-btn')) {
            return;
        }

        const customButton = document.createElement('button');
        customButton.id = 'obsidian-save-btn';
        customButton.textContent = '📓 Obsidian에 저장';  // innerHTML → textContent (Trusted Types 정책 준수)
        customButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            z-index: 9999;
            font-family: 'Google Sans', Arial, sans-serif;
            transition: transform 0.2s, box-shadow 0.2s;
        `;

        customButton.addEventListener('mouseenter', () => {
            customButton.style.transform = 'translateY(-2px)';
            customButton.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)';
        });

        customButton.addEventListener('mouseleave', () => {
            customButton.style.transform = 'translateY(0)';
            customButton.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        });

        customButton.addEventListener('click', handleSaveToObsidian);

        document.body.appendChild(customButton);
        console.log('[NotebookLM→Obsidian] 커스텀 저장 버튼 추가됨');
    }

    // ========================================
    // 초기화
    // ========================================

    // CSS 애니메이션 추가
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // 페이지 로드 시 버튼 감지
    function init() {
        console.log('[NotebookLM→Obsidian] 스크립트 시작');

        // 기존 버튼 감지
        addSaveButtonListener();

        // 커스텀 버튼 추가 (항상 표시)
        addCustomObsidianButton();

        // MutationObserver로 동적 버튼 감지
        const observer = new MutationObserver(() => {
            addSaveButtonListener();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log('[NotebookLM→Obsidian] 초기화 완료');
    }

    // 페이지 로드 완료 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
