# Portfolio v4 重構交接 · 2026-05-29

> 新 session 第一個讀這份。讀完跟 Josh 確認狀態,再開始工作。
> 本檔只談 portfolio repo 內部的重構工作。求職投遞工作流另見 `~/Desktop/轉職準備/HANDOFF.md`,兩邊互不交集。

## 專案背景

`portfolio` 是 PM 求職用作品集 repo。歷史:
- v3:靜態 HTML,master 分支,已上線 `https://kuei790802.github.io/portfolio/`,HR 可訪問
- v4:Next.js 16 + React 19 + Tailwind 4 + shadcn base-nova 翻新版,`feat/full-modernization` 分支進行中

Gemini 先用 ui-ux-pro-max + shadcn skills 開了 Next.js 骨架,做到一半停手(18 個 tab 內容只完成 2 個),留下幾個結構性洞。2026-05-28 本 session 把骨架補穩、設計系統鎖好、MDX 機制接通,留下 16 個 tab 內容由下個 session 派 subagent 完成。

線上 v3 仍在 master 分支運作,**v4 重構期間不影響線上**。

## 目前進度(feat/full-modernization 分支)

### Phase 0 環境驗證與部署設定 完成
- `next.config.ts` 補 `output: "export"` + `basePath: "/portfolio"` + `trailingSlash: true` + `images.unoptimized: true`
- `app/page.tsx` instructor section 路徑修正(`/public/src` 改 `/src`),移除 inline 重複定義的 cn 改 import `@/lib/utils`
- `.gitignore` 補 `.npm-cache/`
- `pnpm build` 乾淨通過,`out/` 7 頁 SSG export 完整
- Commit: `chore: stabilize Next.js 16 + Tailwind 4 build for GH Pages export`

### Phase 1 設計系統正規化 完成
- `app/globals.css` 補 ai-purple / trust-blue scale (50/100/200/500/600/700/900) 與 motion tokens (`--motion-duration-fast/base/slow`, `--motion-ease-out`)
- 補 a11y:`:focus-visible` 用 ai-purple outline、全域 `prefers-reduced-motion`、`.skip-link` utility、`scroll-behavior: smooth`
- `docs/DESIGN_SYSTEM.md` 鎖規格:設計定位 (Trust & Authority + AI accent)、typography hierarchy、spacing rhythm、motion guidelines、a11y checklist、8 元件 API 規格、寫作規則 (零破折號、台灣用語、揚善、AI Multi-Agent 賣點)
- Commit: `design: lock case study design tokens and content block API spec`

### Phase 2 內容區塊元件庫 完成
- `components/case-content/` 新增 7 個元件 + 補完 1 個空檔(DataCard 原本是空檔):
  - DataCard、KPIGrid、Timeline、Comparison、PersonaCard、DecisionLog、PullQuote、EvidenceGrid
- 原有 Callout、InfoTable 保留
- 加 `components/case-content/index.ts` barrel export
- TypeScript 嚴格型別、套 globals.css 的 ai-purple / trust-blue / slate token、對 MDX 友善
- Commit: `feat(case-content): add reusable content block primitives for MDX-driven case studies`

### Phase 3 MDX 載入機制 完成
- 安裝 `@next/mdx@16.2.6`、`@mdx-js/loader`、`@mdx-js/react`、`@types/mdx`
- `next.config.ts` 套上 `withMDX`,加 `pageExtensions: ["ts", "tsx", "md", "mdx"]`
- `mdx-components.tsx` 全域註冊 8 個內容區塊元件 + Badge,並設定 p/h1/h2/h3/ul/strong/blockquote/a/hr 預設樣式
- `mdx.d.ts` 補 mdx 模組型別宣告
- `content/{slug}/{tabId}.mdx` 結構建立,`content/toeic-snack/summary.mdx` 與 `problem.mdx` 已從 render-content.tsx 轉成 mdx 作為遷移範本
- `content/index.ts` 靜態 import map(目前 2 筆 import + 16 筆 undefined,subagent 加 mdx 時補一行 import)
- `app/cases/[slug]/page.tsx` 改用 `getContent` 動態取 mdx 元件,未填寫的 tab 顯示「本章節內容即將上線」placeholder
- 廢除 `components/case-content/render-content.tsx`
- 簡化 `data/cases.ts`:移除 `tabs[].content: any` 占位型別
- 驗證:`pnpm build` 通過、`out/cases/toeic-snack/index.html` 確認 mdx 內容真實渲染(KPIGrid、Comparison、Callout 都正常)、其他 16 個 tab 顯示 placeholder
- Commit: `refactor(case-content): migrate tab content to MDX for content/component separation`

### Phase 4 三案 18 tab 內容遷移 完成(2026-05-29)
- 策略:liangye 先做 pilot,沉澱 component-selection heuristic,再並行派 toeic + insurance 兩個 subagent
- Round 1 (liangye-7eleven 6 tab):commit `95dc82b6`
- Round 2 (toeic-snack 剩 4 tab + insurance-bot 6 tab):commit `45aa73e8`
- 圖片 basePath 修補(Next 16 `images.unoptimized: true` 不自動 prefix basePath,新增 `lib/asset-path.ts` helper 套在 EvidenceGrid 與 app/page.tsx 兩處):commit `8329fe29`
- Phase 4 沉澱的 7 條 component-selection heuristic(寫進 subagent prompt 大幅降低 design review 來回):
  1. 三柱敘事(catchphrase + tag + 描述)用 `KPIGrid cols={3}`,不疊 3 個 Callout
  2. 三個並列警示/問題用 1 個 warn Callout + markdown list,不疊 3 個同 variant Callout
  3. Climax / signature 段落用 plain h3 + 段落,不包進 Callout(text-sm 會壓縮 climax 份量)
  4. PullQuote 每 tab 最多 1 次,只留最金的單句,長版本留在 DecisionLog consequences 或 prose
  5. EvidenceGrid 當 scene-setter 放 tab intro 之後,不塞進敘事 subsection 中間
  6. DecisionLog status 只有 採納中/觀察中/已取代 三個會 styling,其他 fallback grey
  7. InfoTable 最末欄塞 Badge 走 shadcn API,key="N" 必填(`bg-emerald-100 text-emerald-700` 可展現、`bg-blue-100 text-blue-700` 早期驗證、`bg-amber-100 text-amber-700` 持續強化)
- 政策決定備忘(Round 2):
  - 「閉環」例外保留(insurance-bot 跟 toeic delivery 場景下意義精準,不算 AI 套話)
  - 三案不互引嚴格執行,只有 liangye-reflection 那段三案 throughline 是例外
  - Insurance Persona 改 (虛構名 + 姊夫改老闆):陳大姊 / 阿哲 / 老闆,不暴露真實家族關係

### Phase 0 至 4 commit 一覽
```
8329fe29 fix(images): prefix basePath manually for unoptimized next/image
45aa73e8 feat(content): migrate toeic-snack and insurance-bot case studies to MDX
95dc82b6 feat(content): migrate liangye-7eleven case study to MDX
6517847  refactor(case-content): migrate tab content to MDX for content/component separation
fc577b8  feat(case-content): add reusable content block primitives for MDX-driven case studies
54f4419  design: lock case study design tokens and content block API spec
5c94ae2  chore: scaffold Next.js 16 + shadcn portfolio v4 baseline with build fixes
```

## 剩餘工作

### Phase 5 視覺 polish 與 SEO(完工前 2 至 3h)
- 用 `design-review` skill 跑視覺 QA:spacing、hierarchy、AI slop pattern
- 補 og image、favicon、SEO meta
- mobile 響應式驗證(iPhone 寬度無橫向捲動)
- dark mode 不做完整實作,但保留 token 讓未來能切

### Phase 6 部署(2h)
- GitHub Actions workflow:pnpm build → 上傳 out/ → GH Pages
- 部署到 `kuei790802.github.io/portfolio/`(覆蓋 v3,因為 master 分支 git history 有 v3 可回溯,不需並存)
- 用 browse skill 跑 smoke test 確認三個 case 18 tab 內容完整
- merge `feat/full-modernization` 回 master

## 起點檔案(新 session 開頭要讀)

1. **本檔**:`~/GitHub/portfolio/HANDOFF.md`
2. **全域設定**:`~/.claude/CLAUDE.md`(Josh 身份、寫作規則:零破折號、不主動匯出 PDF)
3. **設計系統**:`~/GitHub/portfolio/docs/DESIGN_SYSTEM.md`
4. **內容映射**:`~/GitHub/portfolio/content/index.ts`(18 tab 已全部接通)
5. **遷移完成的 MDX**:`~/GitHub/portfolio/content/{toeic-snack,insurance-bot,liangye-7eleven}/`
6. **內容來源(legacy,僅供 Phase 5/6 比對視覺差異用)**:`~/GitHub/portfolio/legacy/{insurance-bot,toeic-snack-pm,liangye-7eleven}.html`
   - 注意:toeic 的對齊版本是 `toeic-snack-pm.html`(6 tab PM 視角),不是 `toeic-snack.html`(舊 8 tab WBS/Gantt 版本)
7. **完整 Phase 計畫**:`/Users/wei-pangkuei/.claude/plans/fuzzy-snuggling-deer.md`(2026-05-28 寫,Josh 已批准)

## 寫作規矩(務必遵守,跟 DESIGN_SYSTEM.md 同步)

- 中文輸出**零破折號**(U+2014、U+2013)
- **揚善為主,不要自我批判**(過去 portfolio 已校準完這個方向)
- 改 portfolio 前**先列給 Josh 看,點頭再動手**
- **不主動匯出 PDF**,HTML 列印按鈕由 Josh 自己存
- AI 協作工作流(Claude Code × Gemini CLI)是 Josh **賣點**,不要藏
- 三個 case study **互不主動引用**(只有刻意 throughline 例外:良野收手 / TOEIC 停 MVP / 保險 bot 砍範圍 的 PM 簽名串連)
- 無營收絕對值(良野案不寫真實年營收與 SKU 成本)

## 已知會被質疑、要在 case study 內準備答案的點

- 「無正式 PM 職稱」→ 用 9 年實戰商業經驗 + PMP/PSM I + 兩個數位產品專案應對
- 「親手寫 0 行產品 code」→ 已校準成「有意識的角色選擇:聚焦 spec、架構、審查」,有資展 582 小時 Java 養成班底氣
- 「TOEIC Snack 沒上架」→ 是 capacity 主動取捨,不是失敗
- 「為什麼結束良野創業」→ 婉拒 300 萬投資 + 三個清醒判斷(護城河、純素市場現實、個人永續性)
- 「保險 bot 沒做正式訪談 vs 無引導試用」→ 已校準,無引導試用是更強的可用性證據

## 新 session 該怎麼開頭

Josh 開新 context 時,**第一句話**貼這段就好:

> 我要繼續 portfolio v4 重構。請依序讀:
> 1. ~/.claude/CLAUDE.md(全域)
> 2. ~/GitHub/portfolio/HANDOFF.md(本檔)
> 3. ~/GitHub/portfolio/docs/DESIGN_SYSTEM.md(設計系統)
>
> 讀完跟我確認你掌握的狀態,然後我們從 Phase 5 開始。

## 完工後請更新這份檔案

每個 Phase 收尾後,請更新本檔的「目前進度」與「剩餘工作」段落,讓下一次 session 可以無縫接上。
