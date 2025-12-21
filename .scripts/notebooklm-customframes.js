/**
 * NotebookLM to Obsidian - Custom Frames Edition
 * 
 * Obsidian Custom Frames 플러그인에서 사용하는 순수 JavaScript 스크립트
 * Tampermonkey API 없이 fetch()로 Obsidian Local REST API 통신
 * 
 * @version 1.0.0
 * @author Claude Code
 */

(function() {
    'use strict';

    // ========================================
    // 설정
    // ========================================
    const CONFIG = {
        obsidianApiUrl: 'http://127.0.0.1:27123',
        obsidianApiKey: '171c9f4842fe5b6476229473af33bfe4392514641d6fd98fa55283bb04e36db2',
        targetFolder: 'NotebookLM',
        autoTags: ['notebooklm', 'imported'],
        showNotification: true
    };

    console.log('[NotebookLM→Obsidian CF] 스크립트 시작 (Custom Frames v1.0.0)');
    console.log('[NotebookLM→Obsidian CF] iframe 환경:', window !== window.top);

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
     * NotebookLM 노트 내용 추출
     */
    function extractNotebookContent() {
        console.log('[NotebookLM→Obsidian CF] 🔍 콘텐츠 추출 시작');

        // NOTE-EDITOR 찾기
        let noteEditor = document.querySelector('.note-editor');
        if (!noteEditor) {
            noteEditor = document.querySelector('.artifact-content');
        }
        if (!noteEditor) {
            noteEditor = document.querySelector('labs-tailwind-doc-viewer');
        }
        if (!noteEditor) {
            noteEditor = document.querySelector('note-editor');
        }

        console.log('[NotebookLM→Obsidian CF] NOTE-EDITOR:', noteEditor ? '✅' : '❌');

        if (!noteEditor) {
            return { title: '무제 노트', content: '' };
        }

        // 제목 추출
        let title = '무제 노트';
        let titleInput = document.querySelector('input.note-header__editable-title') || 
                         noteEditor.querySelector('input.note-header__editable-title');
        if (!titleInput) {
            titleInput = document.querySelector('input.artifact-title');
        }

        if (titleInput && titleInput.value) {
            title = titleInput.value.trim();
        } else {
            const pageTitle = document.title.replace(' - NotebookLM', '').trim();
            if (pageTitle && pageTitle !== 'NotebookLM') {
                title = pageTitle;
            }
        }

        console.log('[NotebookLM→Obsidian CF] 제목:', title);

        // 본문 추출
        let content = noteEditor.innerText.trim();

        // HTML table을 마크다운으로 변환
        content = convertHTMLTablesToMarkdown(noteEditor, content);

        // 인용 정보 추가
        const citationButtons = noteEditor.querySelectorAll('button.citation-marker');
        const citationCount = citationButtons.length;

        if (citationCount > 0) {
            content += '\n\n---\n\n## 📚 인용 정보\n\n';
            content += `> 이 문서에는 **${citationCount}개**의 인용이 포함되어 있습니다.\n`;
            content += `> NotebookLM에서 각 번호를 클릭하면 상세 출처를 확인할 수 있습니다.\n`;
        }

        // 제목 제거 (중복 방지)
        if (title !== '무제 노트') {
            const lines = content.split('\n');
            if (lines[0].trim() === title.trim()) {
                lines.shift();
                content = lines.join('\n').trim();
            }
        }

        console.log('[NotebookLM→Obsidian CF] 내용 길이:', content.length);

        return { title, content };
    }

    /**
     * HTML table을 마크다운 테이블로 변환
     */
    function convertHTMLTablesToMarkdown(noteEditor, content) {
        const tables = noteEditor.querySelectorAll('table');
        
        if (tables.length === 0) {
            return content;
        }

        console.log(`[NotebookLM→Obsidian CF] ${tables.length}개의 table 발견`);

        tables.forEach((table, index) => {
            const markdownTable = convertTableToMarkdown(table);
            const tableText = table.innerText;
            content = content.replace(tableText, markdownTable);
            console.log(`[NotebookLM→Obsidian CF] Table ${index + 1} 변환 완료`);
        });

        return content;
    }

    /**
     * 단일 HTML table을 마크다운으로 변환
     */
    function convertTableToMarkdown(table) {
        const rows = Array.from(table.querySelectorAll('tr'));
        
        if (rows.length === 0) {
            return '';
        }

        const tableData = rows.map(tr => {
            const cells = Array.from(tr.querySelectorAll('th, td'));
            return cells.map(cell => cell.innerText.trim().replace(/\n/g, ' '));
        });

        const filteredData = tableData.filter(row => row.some(cell => cell));

        if (filteredData.length === 0) {
            return '';
        }

        const maxColumns = Math.max(...filteredData.map(row => row.length));

        const normalizedData = filteredData.map(row => {
            while (row.length < maxColumns) {
                row.push('');
            }
            return row;
        });

        const header = normalizedData[0];
        const dataRows = normalizedData.slice(1);

        const headerLine = '| ' + header.join(' | ') + ' |';
        const separatorLine = '| ' + header.map(() => '---').join(' | ') + ' |';
        const dataLines = dataRows.map(row => '| ' + row.join(' | ') + ' |');

        return '\n' + [headerLine, separatorLine, ...dataLines].join('\n') + '\n';
    }

    /**
     * Markdown 파일 생성
     */
    function createMarkdown(title, content) {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0];

        const frontmatter = `---
created: ${dateStr} ${timeStr}
source: NotebookLM
tags: [${CONFIG.autoTags.join(', ')}]
---

`;

        return frontmatter + `# ${title}\n\n${content}`;
    }

    /**
     * Obsidian에 저장 (fetch 사용)
     */
    async function saveToObsidian(title, markdown) {
        const now = new Date();
        const timestamp = now.toISOString().replace(/[:.]/g, '-').split('T')[0];
        const filename = `${title.replace(/[/\\:*?"<>|]/g, '_')} ${timestamp}.md`;
        const filepath = `${CONFIG.targetFolder}/${filename}`;

        const url = `${CONFIG.obsidianApiUrl}/vault/${encodeURIComponent(filepath)}`;

        console.log('[NotebookLM→Obsidian CF] 저장 URL:', url);

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${CONFIG.obsidianApiKey}`,
                    'Content-Type': 'text/markdown'
                },
                body: markdown
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            console.log('[NotebookLM→Obsidian CF] ✅ 저장 성공:', filename);
            return filename;

        } catch (error) {
            console.error('[NotebookLM→Obsidian CF] ❌ 저장 실패:', error);
            throw error;
        }
    }

    /**
     * 메인 저장 함수
     */
    async function handleSaveToObsidian() {
        try {
            showNotification('📝 NotebookLM 내용 추출 중...', 'info');

            const { title, content } = extractNotebookContent();

            if (!content || content.length < 10) {
                showNotification('❌ 추출할 내용이 없습니다.', 'error');
                return;
            }

            const markdown = createMarkdown(title, content);

            showNotification('💾 Obsidian에 저장 중...', 'info');
            const filename = await saveToObsidian(title, markdown);

            showNotification(`✅ 저장 완료: ${filename}`, 'success');

        } catch (error) {
            console.error('[NotebookLM→Obsidian CF] 오류:', error);
            showNotification(`❌ 저장 실패: ${error.message}`, 'error');
        }
    }

    // ========================================
    // 버튼 추가
    // ========================================

    /**
     * Obsidian 저장 버튼 추가
     */
    function addObsidianButton() {
        if (document.querySelector('#obsidian-save-btn-cf')) {
            return;
        }

        const button = document.createElement('button');
        button.id = 'obsidian-save-btn-cf';
        button.textContent = '📓 Obsidian에 저장';
        button.style.cssText = `
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

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        });

        button.addEventListener('click', handleSaveToObsidian);

        document.body.appendChild(button);
        console.log('[NotebookLM→Obsidian CF] 저장 버튼 추가됨');
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

    // 페이지 로드 후 버튼 추가
    function init() {
        console.log('[NotebookLM→Obsidian CF] 초기화 시작');
        
        // 버튼 추가
        addObsidianButton();

        // MutationObserver로 동적 변경 감지
        const observer = new MutationObserver(() => {
            addObsidianButton();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log('[NotebookLM→Obsidian CF] ✅ 초기화 완료');
    }

    // 페이지 로드 완료 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // 이미 로드된 경우 약간 지연 후 실행
        setTimeout(init, 1000);
    }

})();
