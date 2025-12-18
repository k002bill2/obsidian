ㅑ# AI Agent Context & Memory Management Guidelines

## Overview

This document outlines best practices for managing context and memory when working with AI coding agents across multiple sessions. The goal is to maintain project continuity while minimizing context window consumption.

---

## 1. Externalize Requirements & Feature Lists

**Problem:** Keeping requirements in conversation history bloats context and risks information loss between sessions.

**Solution:**
- Store requirements and feature specifications in dedicated files (e.g., `spec.json`, `tasks.md`, `requirements.yaml`)
- At session start, the agent reads these files and loads only a **summary** into context
- Full details remain accessible on-demand via file read operations

**Example Structure:**
```
project/
├── docs/
│   ├── spec.json          # Feature specifications
│   ├── tasks.md           # Task breakdown
│   └── requirements.yaml  # System requirements
```

---

## 2. Track Changes via Git, Not Conversation

**Problem:** Discussing every code change in conversation creates redundant, hard-to-navigate history.

**Solution:**
- Use Git commit messages and branch names to encode task context
- Include task IDs explicitly in commits (e.g., `[TASK-042] Add user auth middleware`)
- Agent retrieves only "last N commits summary + current task" for context

**Commit Convention:**
```
[TASK-ID] Brief description

- Detailed change 1
- Detailed change 2

Related: #issue-number
```

**Branch Naming:**
```
feature/TASK-042-user-authentication
bugfix/TASK-051-login-redirect
```

---

## 3. Session Cycle: Small Goals → Summarize → Commit → Exit

**Problem:** Long sessions accumulate detailed conversation that becomes stale and consumes context.

**Solution:** Adopt a structured micro-session workflow:

### Session Workflow

```
┌─────────────────────────────────────────────────┐
│  1. LOAD CONTEXT                                │
│     - Read spec.json / tasks.md                 │
│     - Fetch last N git commits                  │
│     - Identify 1-3 small goals for session      │
├─────────────────────────────────────────────────┤
│  2. EXECUTE                                     │
│     - Complete targeted goals only              │
│     - Keep scope minimal and focused            │
├─────────────────────────────────────────────────┤
│  3. SUMMARIZE & PERSIST                         │
│     - Append structured summary to status file  │
│     - Update tasks.md with progress             │
│     - Commit changes with task ID               │
├─────────────────────────────────────────────────┤
│  4. EXIT                                        │
│     - Discard detailed conversation history     │
│     - Structured summaries carry forward        │
└─────────────────────────────────────────────────┘
```

### Summary Format (append to `session-log.json`)

```json
{
  "session_id": "2024-12-01-001",
  "timestamp": "2024-12-01T14:30:00Z",
  "goals_completed": [
    "TASK-042: Implemented JWT validation",
    "TASK-043: Added refresh token endpoint"
  ],
  "goals_deferred": [
    "TASK-044: Token revocation (blocked by DB schema)"
  ],
  "key_decisions": [
    "Using RS256 for JWT signing",
    "Refresh tokens expire in 7 days"
  ],
  "next_session_focus": [
    "TASK-044: Resolve DB schema, implement revocation"
  ]
}
```

---

## 4. Memory Reduction Strategy

| What to Keep | What to Discard |
|--------------|-----------------|
| Structured summaries | Detailed back-and-forth dialogue |
| Task IDs and status | Exploration/debugging conversations |
| Key decisions with rationale | Intermediate failed attempts |
| Git commit references | Repeated explanations |

---

## 5. Implementation Checklist

- [ ] Create `docs/` directory with spec files
- [ ] Establish commit message convention with task IDs
- [ ] Set up `session-log.json` for session summaries
- [ ] Define "session goal limit" (recommend: 1-3 goals max)
- [ ] Create session start script/prompt that loads minimal context
- [ ] Agree on summary format for session handoff

---

## Benefits

1. **Reduced Context Usage** — Only summaries and current tasks consume tokens
2. **Better Continuity** — Structured data survives session boundaries
3. **Auditable History** — Git + session logs provide complete trail
4. **Faster Session Start** — No need to re-read lengthy conversations
5. **Cleaner Collaboration** — Multiple agents/humans can pick up work seamlessly

---

## Quick Reference

```
Session Start:
  → Read spec.json, tasks.md
  → Get last 5 commits
  → Pick 1-3 goals

Session End:
  → Append to session-log.json
  → Update tasks.md
  → Git commit with [TASK-ID]
  → Exit (discard conversation)
```
