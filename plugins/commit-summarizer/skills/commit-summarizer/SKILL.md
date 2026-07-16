---
name: commit-summarizer
description: Condenses a set of commits or a diff into a concise, readable summary of what changed and why. Use when the user asks to summarize commits, describe a branch's changes, or write a PR description.
license: MIT
metadata:
  version: "1.1.0"
  publisher: Sixdots
---

# Commit Summarizer

## 用途
把一堆 commit / 一份 diff 濃縮成**精簡好讀**的摘要。適合寫 PR 描述、站會回報、發版摘要。

## 產出
1. **一句話總結**這批變更做了什麼。
2. **重點分點**(3–6 條),依重要性排序,每條動詞開頭。
3. 若有**風險/需注意**(相依變更、資料遷移、breaking)獨立標出。
4. 需要時附「測試建議」:這批變更該驗哪些地方。

## 原則
- 講「意圖與影響」,不是逐條複述 commit 訊息。
- 合併瑣碎 commit(typo、格式)成一句帶過。
