#!/usr/bin/env node
/**
 * update-notice.mjs — SessionStart hook:在 session 開始時提醒有 skill 可更新
 *
 * 建立:2026-08-03 11:54:33 CST
 *
 * 【這個檔的紀律,每一條都是安全或體驗的硬要求】
 *   1. **零網路**。它跑在使用者 session 的啟動路徑上,任何網路請求都會讓工具「感覺變慢」,
 *      斷網時更會直接卡住。所以它只讀本機快取(由 skillup 指令實際使用時順手寫下)。
 *   2. **零寫入**。hook 是自動執行的碼 —— 如果它能寫檔,市集一旦被攻破就等於
 *      每個使用者每次開 session 都在執行攻擊者的指令。它只讀,只印。
 *   3. **零相依**。不 import 專案的任何模組,只用 Node 內建。這樣它跟主程式版本脫鉤,
 *      主程式改壞也不會讓使用者連 session 都開不起來。
 *   4. **永不失敗**。任何錯誤都靜默結束(exit 0)。提醒是加分功能,
 *      絕不能因為它而干擾使用者原本要做的事。
 *
 * 對應 docs/DELIVERY-ARCHITECTURE.md 的 B4。
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/** 快取由 SkillUp 在列清單/同步時寫入,格式見 src/infrastructure/local-install/update-cache.ts。 */
const CACHE = path.join(os.homedir(), ".skillup", "update-cache.json");

/** 提醒過期天數。太舊的資料寧可不提,避免講出早就不成立的事。 */
const MAX_AGE_DAYS = 7;

try {
  const raw = fs.readFileSync(CACHE, "utf8");
  const cache = JSON.parse(raw);
  const updatable = Array.isArray(cache.updatable) ? cache.updatable : [];

  if (updatable.length > 0 && isFresh(cache.checkedAt)) {
    // 輸出會出現在 session 開頭。刻意只有一行、講清楚「有什麼」與「怎麼做」。
    const names = updatable.slice(0, 3).join("、");
    const more = updatable.length > 3 ? ` 等 ${updatable.length} 個` : "";
    console.log(
      `SkillUp:${names}${more} 有新版可更新。` +
        `跟我說「更新我的 skill」,或執行 skillup companion sync --yes。`,
    );
  }
} catch {
  // 檔案不存在(還沒用過 SkillUp)、格式壞掉、權限不足 —— 全部靜默略過。
}

/** 快取是否夠新。取不到或解析失敗都當作「不夠新」,寧可不提醒。 */
function isFresh(checkedAt) {
  const time = Date.parse(checkedAt ?? "");
  if (Number.isNaN(time)) {
    return false;
  }
  const ageDays = (Date.now() - time) / 86_400_000;
  return ageDays <= MAX_AGE_DAYS;
}
