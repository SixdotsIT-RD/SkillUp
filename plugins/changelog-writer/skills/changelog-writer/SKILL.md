---
name: changelog-writer
description: Turns a set of code changes or commit messages into clear, user-facing changelog and release notes. Use when the user asks to draft a changelog, release notes, or a "what's new" summary, or mentions updating CHANGELOG.md.
license: MIT
metadata:
  version: "1.4.0"
  publisher: Sixdots
---

# Changelog Writer

## 用途
把技術性的變更(commit 訊息、PR 標題、diff 摘要)整理成**給使用者看**的變更說明。

## 撰寫原則
1. 以使用者視角描述「這對他有什麼影響」,而非「改了哪個函式」。
2. 分類為 `新增` / `改善` / `修正` / `重大變更`。
3. 每條一句話、動詞開頭。
4. 重大變更(breaking changes)獨立標明並附遷移方式。

## 輸出格式
```markdown
## [版本] - 年-月-日
### 新增
- …
### 改善
- …
### 修正
- …
```
