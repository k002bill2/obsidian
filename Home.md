
## 📰 오늘의 뉴스

> [[RSS/GoogleNews/📰 뉴스 대시보드|📊 전체 뉴스 대시보드 보기]]

### 🔥 헤드라인
```dataview
TABLE WITHOUT ID
  link(file.link, regexreplace(file.name, " - .*$", "")) as "제목"
FROM "RSS/GoogleNews/헤드라인"
SORT file.ctime DESC
LIMIT 5
```

### 💰 경제 · 🔬 IT/과학
```dataview
TABLE WITHOUT ID
  link(file.link, regexreplace(file.name, " - .*$", "")) as "제목",
  choice(contains(file.folder, "경제"), "💰", "🔬") as "분류"
FROM "RSS/GoogleNews/경제" OR "RSS/GoogleNews/IT과학"
SORT file.ctime DESC
LIMIT 5
```

---

## 🆕 최신 노트 (Top 10)

```dataview
LIST
FROM ""
WHERE file.name != "Home" AND !contains(file.folder, "RSS")
SORT file.cday DESC
LIMIT 10
```
