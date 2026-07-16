---
name: sql-optimizer
description: Analyzes slow SQL queries and suggests indexes, rewrites, and execution-plan improvements. Use when the user shares a slow query, asks to optimize SQL, tune a database, or mentions EXPLAIN / query performance.
license: MIT
metadata:
  version: "2.0.1"
  publisher: Sixdots
---

# SQL Optimizer

## 用途
分析慢查詢,提出**具體、可驗證**的優化建議。當使用者貼出慢 SQL、或問「這條怎麼變快」時觸發。

## 流程
1. 先請使用者提供:查詢語句、資料表結構(欄位/型別)、現有索引、資料量級,若有請附 `EXPLAIN`。
2. 找出瓶頸:全表掃描、缺索引、隱式型別轉換、`SELECT *`、N+1、排序/暫存表。
3. 給建議並排序影響大小:
   - 索引:哪個欄位、複合索引順序、覆蓋索引。
   - 改寫:拆子查詢、避免函式包欄位(破壞索引)、分頁改 keyset。
4. 每條建議都說明「為什麼會變快」與「預期代價」(寫入變慢、空間)。

## 注意
不臆測資料分佈;不確定時請對方提供 `EXPLAIN (ANALYZE)` 再判斷。
