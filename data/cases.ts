export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  pitch: string;
  meta: { label: string; value: string }[];
  tags: string[];
  hero: {
    title: string;
    description: string;
    points: string[];
  };
  artifact?: {
    title?: string;
    subtitle?: string;
    flow?: string;
    layout: "wide-figure" | "image-grid";
    cols?: 2 | 3 | 4;
    aspect?: "9/16" | "4/3";
    items: {
      src: string;
      alt: string;
      captionTitle?: string;
      caption?: string;
    }[];
  };
  tabs: {
    id: string;
    label: string;
  }[];
}

export const cases: CaseStudy[] = [
  {
    slug: "liangye-7eleven",
    title: "良野豆乳冰品 × 7-Eleven 全國通路 PM Case Study",
    subtitle: "B2C 食品品牌通路開發實戰｜讓大型通路主動找上門的拉式策略",
    pitch: "一個豆漿基底的純素冰品品牌，如何用「讓通路主動來找」的拉式策略進入 7-Eleven 全國通路，用每支產品的成本與退貨結構反推產品決策。",
    meta: [
      { label: "期間", value: "2017/09 至 2023/01" },
      { label: "角色", value: "創辦人" },
      { label: "通路", value: "7-Eleven 全國 + 19 縣市" },
      { label: "團隊", value: "3 名員工 + 外部夥伴" },
    ],
    tags: ["通路開發策略", "B2C 消費品", "單位成本效益", "純素 Vegan", "拉式策略"],
    hero: {
      title: "這個案例展現的是商業判斷，不只是創業經歷。",
      description: "我用拉式策略取得大型通路合作，用單位成本與退貨結構反推產品決策。",
      points: [
        "能把市場定位轉成通路進入策略",
        "能協調通路、供應鏈、包裝、冷鏈與活動檔期",
        "能用成本結構判斷產品與營運風險",
        "能在成長訊號出現時仍維持範圍與風險紀律",
      ],
    },
    artifact: {
      title: "通路與包裝實證",
      subtitle: "7-Eleven 全國通路冰櫃實品與正式上架包裝。",
      layout: "image-grid",
      cols: 2,
      aspect: "4/3",
      items: [
        {
          src: "/assets/liangye-7eleven-freezer.jpg",
          alt: "良野豆乳雪糕在 7-Eleven 冰櫃中陳列，價卡標示品名與售價",
          captionTitle: "7-Eleven 冰櫃與價卡",
          caption: "可看到「良野頂級熟韻豆乳雪糕」與售價，產品實際進入門市冰櫃販售場景。",
        },
        {
          src: "/assets/liangye-final-packaging.jpg",
          alt: "良野豆乳雪糕正式包裝於冰櫃中陳列",
          captionTitle: "正式包裝",
          caption: "被通路質疑包裝後，兩週內補上正式包裝版本，讓雪糕系列通過上架評估。",
        },
      ],
    },
    tabs: [
      { id: "overview", label: "總覽" },
      { id: "strategy", label: "市場與策略" },
      { id: "play", label: "7-Eleven 上架攻防" },
      { id: "ops", label: "營運與成本" },
      { id: "decisions", label: "關鍵決策" },
      { id: "reflection", label: "反思" },
    ],
  },
  {
    slug: "insurance-bot",
    title: "保險續保 LINE Bot PM Case Study",
    subtitle: "B2B 工具 PM 實戰｜PRD 假設驗證與需求校準",
    pitch: "為台灣小型產險經紀辦公室打造的續保管理系統。這份 case study 的重點不是最終的 PRD，而是中間那次關鍵的自我校準，以及修正所依據的判斷邏輯。",
    meta: [
      { label: "期程", value: "2026/04" },
      { label: "交付", value: "3 Persona · 10 功能 · 3 ADR" },
      { label: "客戶", value: "台灣小型產險經紀辦公室" },
      { label: "市場規模", value: "NT$ 10 至 33M / 年" },
    ],
    tags: ["NestJS", "Supabase", "LINE Bot SDK", "PostgreSQL", "The Mom Test"],
    hero: {
      title: "這不是單純做 LINE Bot，而是把模糊的續保提醒需求校準成責任流轉系統。",
      description: "我的重點放在需求訪談、產品定位、MVP 範圍、資費估算與 ADR 決策。",
      points: [
        "用《The Mom Test》修正 PRD v1.0 假設",
        "把功能範圍切成 Phase 1 MVP 與非目標",
        "建立 Persona、資料模型、技術棧與導測時程",
        "用 ADR 留下決策背景、取捨與後果",
      ],
    },
    artifact: {
      layout: "wide-figure",
      items: [
        {
          src: "/assets/insurance-bot-line-mockup.png",
          alt: "保險續保 LINE Bot 的 Admin、Agent 與 Staff 實際操作截圖，敏感資訊已模糊處理",
          captionTitle: "實際運作的 LINE Bot",
          caption: "Admin 全局入口、Agent 案件領取、Staff 表單同步預覽（敏感資訊已模糊處理）。這是物證，不是產品介紹：用來證明本案的責任流轉設計真的跑得起來。",
        },
      ],
    },
    tabs: [
      { id: "overview", label: "總覽" },
      { id: "research", label: "用戶研究" },
      { id: "positioning", label: "產品定位" },
      { id: "prd", label: "PRD 摘要" },
      { id: "adrs", label: "關鍵決策" },
      { id: "reflections", label: "反思" },
    ],
  },
  {
    slug: "toeic-snack",
    title: "TOEIC Snack PM Case Study",
    subtitle: "AI 協作產品實驗｜從個人痛點到 MVP 交付與產品取捨",
    pitch: "一個多益閱讀練習 App，如何從「碎片時間練閱讀」的個人痛點出發，收斂成限時練習 MVP，再用實機試用、iOS QA、風險 register 與 AI agent 交付機制驗證產品假設。",
    meta: [
      { label: "期間", value: "3.5 個月 / 約 25 天實作" },
      { label: "角色", value: "Solo PM / AI Agent Orchestrator" },
      { label: "交付", value: "13 screens · 172 tests · iOS QA" },
      { label: "狀態", value: "MVP demo 可用，商業驗證前暫緩上架" },
    ],
    tags: ["PM Case Study", "AI Collaboration", "React Native", "NestJS", "Supabase"],
    hero: {
      title: "這個案例展現的是 PM 視角的產品取捨，不只是技術交付。",
      description: "我從個人痛點出發收斂出 MVP 範圍，用實機 QA、handoff 文件與風險清單控管交付品質。",
      points: [
        "從個人痛點到 MVP 範圍的收斂",
        "用實機 QA、handoff、風險清單控管交付品質",
        "能透過 AI agent 完成需求拆解與技術交付",
        "判斷何時不該急著上架，把資源留給更高優先序的驗證",
      ],
    },
    artifact: {
      title: "MVP 實機畫面：閱讀練習核心循環",
      subtitle: "這個 MVP 已能支援練習入口、限時作答、結果回饋與歷史追蹤等頁面與功能。",
      flow: "入口 → 作答 → 結果 → 留存",
      layout: "image-grid",
      cols: 4,
      aspect: "9/16",
      items: [
        {
          src: "/assets/toeic-snack-screen-home.png",
          alt: "TOEIC Snack 首頁，顯示等級、連續天數、正確率、今日目標與練習時間選擇",
          captionTitle: "練習入口",
          caption: "用等級、連續天數、正確率與 5/10/15/20 分鐘選項，把碎片練習轉成可啟動的任務。",
        },
        {
          src: "/assets/toeic-snack-screen-practice.png",
          alt: "TOEIC Snack 作答畫面，顯示 Part 5 題目、進度、計時器與四個選項",
          captionTitle: "限時作答",
          caption: "保留 TOEIC Part、題目進度、倒數計時與選項狀態，對應閱讀速度訓練。",
        },
        {
          src: "/assets/toeic-snack-screen-result.png",
          alt: "TOEIC Snack 結果畫面，顯示正確率、答題時間、時間銀行、連續天數與錯題回顧",
          captionTitle: "結果回饋",
          caption: "把正確率、答題時間、連續天數與錯題回顧收束成一次練習的可行動回饋。",
        },
        {
          src: "/assets/toeic-snack-screen-history.png",
          alt: "TOEIC Snack 歷史紀錄畫面，顯示總練習次數、本週練習、平均正確率與多筆練習紀錄",
          captionTitle: "歷史追蹤",
          caption: "用 session 紀錄、週期篩選與平均正確率，支撐回訪與持續練習動機。",
        },
      ],
    },
    tabs: [
      { id: "summary", label: "PM 摘要" },
      { id: "problem", label: "問題與假設" },
      { id: "validation", label: "驗證策略" },
      { id: "scope", label: "範圍取捨" },
      { id: "delivery", label: "交付流程" },
      { id: "next", label: "下一步與聯絡" },
    ],
  },
];
