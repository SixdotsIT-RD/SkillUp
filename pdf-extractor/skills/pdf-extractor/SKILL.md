---
name: pdf-extractor
description: Extracts structured text, tables, and fields from PDF files and outputs clean Markdown or JSON. Use when the user wants to pull data out of a PDF, parse an invoice/report, or convert a PDF to structured text.
license: MIT
metadata:
  version: "1.0.3"
  publisher: Sixdots
---

# PDF Extractor

## 用途
從 PDF 擷取**結構化**內容(文字、表格、欄位),輸出乾淨的 Markdown 或 JSON。

## 流程
1. 先確認目標:整份轉文字、抽特定欄位(如發票號/金額/日期)、還是把表格轉成資料。
2. 保留結構:標題層級、清單、表格(用 Markdown table 或二維陣列)。
3. 抽欄位時附「出處」(頁碼/區塊),方便人工核對。
4. 遇到掃描件(圖片型 PDF)提醒需要 OCR,並說明可行工具。

## 輸出
- 預設 Markdown;要餵程式時輸出 JSON(欄位→值)。
- 不確定的值標 `null` 並註明原因,不亂猜。
