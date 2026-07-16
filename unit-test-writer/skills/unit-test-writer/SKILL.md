---
name: unit-test-writer
description: Writes focused unit tests for a given function or module, covering happy path, edge cases, and failure modes. Use when the user asks to write tests, add test coverage, or mentions a testing framework like Jest, Vitest, or pytest.
license: MIT
metadata:
  version: "2.3.0"
  publisher: Sixdots
---

# Unit Test Writer

## 用途
為指定的函式/模組寫**聚焦、可讀**的單元測試。

## 流程
1. 先辨識:輸入、輸出、副作用、相依(要 mock 的)。
2. 依測試框架慣例(Jest / Vitest / pytest…)產生測試。
3. 覆蓋三類:
   - **正常路徑**:典型輸入 → 預期輸出。
   - **邊界**:空值、極大/極小、邊界索引、Unicode。
   - **失敗**:錯誤輸入 → 應丟出/回傳錯誤。
4. 每個 test 命名清楚描述「在什麼情況下、預期什麼」。

## 原則
- 一個 test 只驗一件事;斷言明確。
- 只 mock 外部相依,不 mock 被測邏輯本身。
- 不寫「為了覆蓋率而覆蓋」的空測試。
