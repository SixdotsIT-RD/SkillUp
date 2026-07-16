---
name: dockerfile-builder
description: Generates a production-ready, multi-stage Dockerfile for a project, optimized for small image size, layer caching, and security. Use when the user asks to containerize an app, write a Dockerfile, or improve an existing one.
license: MIT
metadata:
  version: "1.0.0"
  publisher: Sixdots
---

# Dockerfile Builder

## 用途
為專案產生**正式可用**的 Dockerfile,兼顧小體積、快取效率與安全。

## 流程
1. 先確認:語言/框架、建置指令、執行指令、對外埠、環境變數。
2. 產生 **multi-stage** Dockerfile:
   - build 階段:裝相依、編譯。
   - runtime 階段:只複製產物,用精簡 base(如 `-slim` / `alpine` / `distroless`)。
3. 最佳化:
   - 先複製相依清單再 `install`,善用 layer 快取。
   - 用 `.dockerignore` 排除 node_modules、.git 等。
   - 以**非 root** 使用者執行;固定 base image 版本。
4. 附一段 build / run 指令範例。

## 原則
- 不把祕密寫進 image;用 build args / runtime env。
- 標明最終 image 大約大小與可再瘦身之處。
