---
name: api-docs-generator
description: Reads source code and comments to generate REST API reference docs (endpoints, params, responses, examples). Use when the user asks to document an API, generate OpenAPI/Swagger, or write endpoint reference docs.
license: MIT
metadata:
  version: "1.2.0"
  publisher: Sixdots
---

# API Docs Generator

## 用途
從程式碼(路由、handler、型別、註解)自動產生 REST API 參考文件。

## 產出內容(每個端點)
- 方法 + 路徑、簡述。
- 路徑/查詢/主體參數:名稱、型別、必填、預設、說明。
- 回應:狀態碼、結構(欄位型別)、範例 JSON。
- 認證需求、錯誤碼。
- 一個可直接跑的 `curl` 範例。

## 原則
1. 以「呼叫者」視角寫,不是「實作者」。
2. 型別與必填從程式碼推,不臆測;推不出來就標「待補」。
3. 可輸出成 Markdown 或 OpenAPI 3 YAML(依使用者要求)。
