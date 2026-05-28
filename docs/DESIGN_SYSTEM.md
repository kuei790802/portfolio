# Portfolio v4 設計系統

本文件鎖定 portfolio v4 的視覺與內容區塊規範，供後續內容遷移 subagent 與 UI 調整使用。

## 設計定位

- 觀眾：台灣 AI 新創與軟體公司 PM 主管、HR
- 風格：Trust & Authority 為底，疊加 AI 屬性 accent
- 主題：light mode only（dark mode token 保留但不啟用切換）
- 字型：Manrope（heading）+ Inter（body）→ Minimal Swiss 風格，適合 dashboard / enterprise / 求職場景
- 不採用：Archivo + Space Grotesk 等 designer-portfolio 字型（過於設計感、削弱 PM 信任 affordance）

## Color Tokens

所有顏色定義於 `app/globals.css` 的 `:root`，並透過 `@theme inline` 暴露成 Tailwind 4 utility。

### Brand accent
- `ai-purple` 主：`#6366f1`，scale 50/100/200/500/600/700/900
  - 場景：CTA、品牌字、focus ring、重要 badge、AI Multi-Agent 賣點
- `trust-blue` 副：`#0ea5e9`，scale 同上
  - 場景：proof point、互補 gradient、secondary CTA

### Neutral surface
- 沿用 shadcn base-nova 預設：`background` 純白 / `foreground` 近黑 / `slate-50 至 slate-900` 漸層
- 灰階主導，accent 點綴比例約 5%（不超過 10%）

### Semantic
- success：`emerald-100 / emerald-700`（Callout success variant、可展現能力 badge）
- warn：`amber-100 / amber-700`
- danger：`red-100 / red-700`
- info：`blue-50 / blue-800`

### 使用原則
- Component 內**不寫 hex**，一律 Tailwind class 或 `var(--token)`
- accent 出現在每屏最多 3 處（CTA + heading 一字 + 一個 badge）

## Typography Hierarchy

| 階層 | Tailwind | 用途 |
|---|---|---|
| Display | `font-heading text-5xl sm:text-6xl font-extrabold tracking-tight` | hero 名字 |
| H1 | `font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight` | case study title |
| H2 | `font-heading text-3xl font-bold` | section heading |
| H3 | `font-heading text-xl font-bold` | subsection、card title |
| H4 | `font-bold text-base sm:text-lg` | callout title、persona name |
| Body | `text-base leading-relaxed text-slate-600` | 段落 |
| Caption | `text-xs uppercase tracking-[0.2em] font-bold text-slate-500` | 區塊 eyebrow label |
| Code | `font-mono text-sm` | inline code |

- 行高一律 `leading-relaxed`（1.625）或 `leading-snug`（標題）
- 中文行高比 Tailwind 預設稍寬，避免擠
- 強調用 `<strong>` + `text-slate-900`，**不要**用顏色變化做強調

## Spacing Rhythm

採 Tailwind 預設 4 / 8 系統。

| 場景 | Class |
|---|---|
| section vertical | `py-16 lg:py-24`（小段 `py-12`，大段 `py-20 lg:py-32`） |
| section 間距 | `gap-12` 或 `gap-16`（flex-col） |
| container | `container mx-auto px-4` |
| card padding | `p-6`（緊湊）`p-8`（標準）`p-12`（重點 card） |
| grid gap | `gap-4`（緊）`gap-6`（標準）`gap-8`（鬆） |
| inline gap | `gap-2`（icon+text）`gap-3`（list item） |

## Motion Guidelines

CSS 變數：`--motion-duration-fast: 150ms` / `--motion-duration-base: 200ms` / `--motion-duration-slow: 300ms` / `--motion-ease-out`

### 規則
- 預設 transition：`transition-all duration-200`（200ms）
- hover scale 或 translate：擇一不並用
- entrance（進場）：ease-out；exit：ease-in
- 一個 view 最多 2 個 key 元素有動畫
- 無限動畫只用於 loader
- `prefers-reduced-motion` 已在 globals.css 全域處理

### 允許的 hover 模式
- `hover:-translate-y-1`（card lift）
- `hover:shadow-xl`（card elevate）
- `hover:bg-{color}-100`（subtle bg）
- `group-hover:translate-x-1`（arrow nudge）

### 不允許
- bounce / spin / pulse 在 decoration 元素
- duration 大於 500ms 的 UI 過場
- animate-* 套在 5 個以上元素

## Accessibility Checklist

每屏完成前確認：

- [ ] 文字對背景對比 ≥ 4.5:1（用 [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 抽查）
- [ ] 所有 `<Image>` 有 `alt`，裝飾性圖用 `alt=""`
- [ ] icon-only 按鈕加 `aria-label`
- [ ] heading 順序 h1 → h2 → h3，不跳級
- [ ] focus-visible 用 ai-purple outline（globals.css 已設）
- [ ] 互動元件 keyboard tab 可達
- [ ] 不靠顏色單獨傳遞訊息（badge 同時用文字 + 顏色）
- [ ] mobile 寬度 375px 無橫向捲動

## 內容區塊元件 API

供 case study mdx 引用。實作於 `components/case-content/`。

### Callout（已實作）
```mdx
<Callout variant="success" title="PM 定位">
完整走到 MVP 的產品實驗。
</Callout>
```
- `variant`: default / warn / danger / success
- 4.5:1 對比、左 4px 色條、Lucide icon

### InfoTable（已實作）
```mdx
<InfoTable
  headers={["PM 能力", "本案證據", "成熟度"]}
  rows={[["問題定義", "...", <Badge>可展現</Badge>]]}
/>
```
- 第三欄常放 Badge（emerald = 可展現、blue = 早期驗證、amber = 持續強化）

### DataCard（待實作）
```mdx
<DataCard value="13" label="screens" hint="iOS first MVP" />
```
- 大數字 + label + 可選 hint
- 用於單一 KPI 強調

### KPIGrid（待實作）
```mdx
<KPIGrid cols={4} items={[
  { value: "13", label: "screens" },
  { value: "172", label: "tests" },
  { value: "0", label: "TS errors" },
  { value: "11", label: "QA bugs fixed" },
]} />
```
- 包 N 個 DataCard，預設 2x2 或 4 colmn
- card 背景 slate-50，hover slate-100

### Timeline（待實作）
```mdx
<Timeline items={[
  { mark: "T-90d", title: "識別到期名單", desc: "..." },
  { mark: "T-60d", title: "首次提醒", desc: "..." },
]} />
```
- 直式時間軸，左邊 mark（日期或里程碑）、右邊 title + desc
- 用於保險 Bot 到期前流程、TOEIC Snack delivery milestones

### Comparison（待實作）
```mdx
<Comparison
  before={{ title: "推式策略", items: ["..." , "..."] }}
  after={{ title: "拉式策略", items: ["...", "..."] }}
/>
```
- 兩欄對比，before 灰、after ai-purple accent
- 用於良野策略對比、PRD v1 vs v2 校準

### PersonaCard（待實作）
```mdx
<PersonaCard
  name="陳大姊"
  role="保經業務員"
  pains={["客戶到期前資訊散亂", "..."]}
  goals={["一頁看完所有續保任務", "..."]}
/>
```
- 用於保險 Bot 3 Persona

### DecisionLog（待實作）
```mdx
<DecisionLog
  id="ADR-001"
  title="採用 LINE Bot 而非自建 App"
  context="..."
  decision="..."
  consequences="..."
  status="採納中"
/>
```
- ADR 風格卡片
- status: 採納中 / 觀察中 / 已取代

### PullQuote（待實作）
```mdx
<PullQuote source="The Mom Test">
別問用戶他們會不會用，問他們現在怎麼解決這件事。
</PullQuote>
```
- 大字引述、左 ai-purple 4px 邊
- 用於 case study 反思區

### EvidenceGrid（可選，視需要）
```mdx
<EvidenceGrid cols={3} images={[
  { src: "/assets/liangye-cup-product.jpg", alt: "...", caption: "..." }
]} />
```
- 用於展示產品圖、screenshot

## 寫作規則（CLAUDE.md 同步）

每個 case study mdx 必須遵守：

- **零破折號**：絕對不用 U+2014（—）或 U+2013（–）。替代：句號分句、頓號、冒號、括號
- **零 emoji**：純文字內容不放 emoji（icon 走 lucide）
- **台灣用語**：「軟體」不是「软件」、「網路」不是「网络」、「資安」不是「网络安全」
- **不用 AI 常見詞**：賦能、助力、賽道、對標、錨定、拉齊、深入淺出、一站式、閉環、顆粒度
- **揚善為主**：寫 case 是展現判斷，不是自我批判。承認 limit 是為了凸顯紀律
- **AI Multi-Agent 是賣點**：TOEIC Snack 的 delivery tab 必須明確點出 Claude Code × Gemini CLI 工作流
- **三 case 不互引**：除非刻意 throughline（良野收手 / TOEIC 停 MVP / 保險 bot 砍範圍 的 PM 簽名串連）
- **無營收絕對值**：良野案不寫真實年營收與 SKU 成本
- **第一人稱**：用「我」不用「筆者」

## Page Patterns

### 首頁區塊順序
1. Hero（名字 + 定位 + 快速定位 sidebar）
2. Proof grid（4 數據點）
3. Selected case studies（3 cards）
4. Capability matrix（6 capabilities）
5. Instructor proof
6. Target roles / PM 主軸 final note

### Case study 頁面區塊
1. Case header（title + subtitle + pitch + meta + tags）
2. Case brief（hero card + PM 能力證據 dark card）
3. Tabs（6 tabs，sticky top）
4. Tab content（每個 tab 一個 mdx）

## 變更紀錄

- 2026-05-28：v4 baseline 鎖定（feat/full-modernization 分支 Phase 1 commit）
