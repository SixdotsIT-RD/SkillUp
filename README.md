# Sixdots Skills

六點資訊科技的 Agent Skills 商店(Claude Code / Codex plugin marketplace)。

## 怎麼安裝

### Claude Code
```bash
claude plugin marketplace add SixdotsIT-RD/SkillUp
claude plugin install sixdots-cheer@sixdots-skills
```
(在 Claude 對話中也可用 `/plugin marketplace add SixdotsIT-RD/SkillUp`、`/plugin install sixdots-cheer@sixdots-skills`。)

### Codex
```bash
codex plugin marketplace add https://github.com/SixdotsIT-RD/SkillUp
```
之後在 Codex 的「外掛程式 → 個人」分頁即可看到並安裝。

## 收錄的 Skill

| Skill | 版本 | 說明 |
|-------|------|------|
| api-docs-generator | 1.2.0 | 從程式碼自動產生 REST API 文件 |
| changelog-writer | 1.4.0 | 把變更整理成使用者看的變更說明 |
| code-reviewer | 1.5.2 | 依嚴重度審查程式碼 |
| commit-summarizer | 1.1.0 | 把一組 commit 濃縮成摘要 |
| dockerfile-builder | 1.0.0 | 產生正式可用的 multi-stage Dockerfile |
| pdf-extractor | 1.0.3 | 從 PDF 擷取結構化文字/表格 |
| sixdots-cheer | 1.0.0 | 回應「六點資訊科技好棒 !!」 |
| sql-optimizer | 2.0.1 | 分析慢查詢並建議優化 |
| unit-test-writer | 2.3.0 | 為函式/模組寫單元測試 |

---
© Sixdots
