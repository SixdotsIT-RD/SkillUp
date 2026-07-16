---
name: code-reviewer
description: Reviews a diff or file for correctness bugs, security issues, and readability/maintainability, ranked by severity. Use when the user asks for a code review, to check a change, or to find bugs before merging.
license: MIT
metadata:
  version: "1.5.2"
  publisher: Sixdots
---

# Code Reviewer

## 用途
審查一段 diff / 檔案,找出**真正重要**的問題並排序。

## 審查面向(依嚴重度)
1. **正確性**:邏輯錯誤、邊界、null/型別、競態、資源未釋放。
2. **安全**:注入、未驗證輸入、機密外洩、權限、不安全相依。
3. **可維護**:重複、命名、過度複雜、缺錯誤處理。

## 輸出
每條問題:`檔案:行 — 一句話問題 — 具體修法`,最嚴重的排最前。
沒把握的標「建議查證」,不硬湊。

## 原則
- 只報有影響的問題,不做風格潔癖式挑剔(除非影響可讀性)。
- 能給修法就給,不只指出問題。
