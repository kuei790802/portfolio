import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Trophy, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";

const cases = [
  {
    slug: "liangye-7eleven",
    title: "良野豆乳冰品 × 7-Eleven",
    index: "01 · B2C / GTM",
    role: "創辦人",
    desc: "小品牌如何用拉式策略進入大型通路，並用成本結構反推產品與退出決策。",
    points: [
      { label: "問題", text: "缺乏大型通路資源，但需要建立市場可信度。" },
      { label: "決策", text: "先創造消費端拉力，再推進 7-Eleven 全國通路合作。" },
      { label: "證據", text: "全國通路、19 縣市、約 50 SKU、KPMG 社企輔導。" },
    ],
    tags: ["通路開發", "單位成本", "策略取捨"],
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    slug: "insurance-bot",
    title: "保險續保 LINE Bot",
    index: "02 · B2B / AI Tool",
    role: "產品 / 專案規劃",
    desc: "把「提醒工具」重新校準成「責任流轉系統」，讓小型保經辦公室能追蹤續保任務。",
    points: [
      { label: "問題", text: "續保流程分散，責任不清，容易漏追蹤。" },
      { label: "決策", text: "用訪談修正 Persona、PRD、MVP 與 Non-Goals。" },
      { label: "證據", text: "3 Persona、10 功能、3 ADR、資費與市場估算。" },
    ],
    tags: ["PRD", "ADR", "The Mom Test"],
    color: "from-emerald-500/10 to-emerald-600/10",
  },
  {
    slug: "toeic-snack",
    title: "TOEIC Snack",
    index: "03 · AI Delivery",
    role: "Spec / 架構 / Review",
    desc: "用 Claude Code、Gemini CLI 與自製交接協議，拆分 AI agent 任務並交付可測試 MVP。",
    points: [
      { label: "問題", text: "如何用 AI 加速產品交付，又維持品質與可追蹤性。" },
      { label: "決策", text: "我負責規格、架構、prompt、審查，實作拆給 agent。" },
      { label: "證據", text: "13 screens、172 tests、0 TS errors、QA bug flow。" },
    ],
    tags: ["AI Agent", "TDD", "QA"],
    color: "from-ai-purple/10 to-ai-purple/20",
  },
];

const highlights = [
  { icon: Users, value: "9+ 年", label: "客戶溝通、通路營運、跨部門協調" },
  { icon: Zap, value: "300+", label: "台灣菸酒通路客戶維護" },
  { icon: Trophy, value: "7-Eleven", label: "自有品牌進入全國通路" },
  { icon: CheckCircle2, value: "PMP", label: "PMP, PSM I, Google PM" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-ai-purple/30 bg-ai-purple/5 px-3 py-1 text-sm font-medium text-ai-purple">
                PM / Business Analyst Portfolio
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                歸維邦 <span className="text-ai-purple">Josh Kuei</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Operations-driven PM / BA. 我把通路營運與跨部門協調經驗，轉化成可追蹤、可溝通、可交付的數位專案。
              </p>
              <div className="flex flex-wrap gap-2">
                {["數位專案管理", "Business Analyst", "產品營運", "系統導入", "AI 工具應用"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white border-slate-200 text-slate-700 font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-ai-purple" /> 快速定位
              </h3>
              <ul className="space-y-4">
                {[
                  "9 年以上客戶溝通、通路營運與跨部門協調經驗",
                  "曾推進自有品牌進入 7-Eleven 全國通路",
                  "具 PMP、PSM I，能用 PM 語言整理需求與交付物",
                  "能運用 AI 工具拆任務、審查成果並推進產品原型",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Grid */}
      <section className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm flex flex-col items-center text-center gap-3">
              <item.icon className="w-6 h-6 text-ai-purple" />
              <div>
                <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container px-4 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-ai-purple">Selected Case Studies</div>
          <h2 className="font-heading text-3xl font-bold text-slate-900">三個可深入閱讀的 PM Case Study</h2>
          <p className="text-lg text-slate-600">
            每個案例都不是只展示「做了什麼」，而是展示我如何判斷問題、設定範圍、協調資源，並在不確定中做取捨。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <Link key={item.slug} href={`/cases/${item.slug}`} className="group h-full">
              <Card className={cn("h-full border-slate-200 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden", item.color)}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.index}</span>
                    <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-ai-purple/20 text-ai-purple text-[10px] font-bold">完整個案</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-ai-purple transition-colors">{item.title}</CardTitle>
                  <CardDescription className="font-medium text-slate-600">角色：{item.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <div className="space-y-3">
                    {item.points.map((pt, i) => (
                      <div key={i} className="text-xs leading-relaxed">
                        <strong className="text-slate-900">{pt.label}：</strong>
                        <span className="text-slate-600">{pt.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/40 border border-slate-200 text-slate-600 font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-ai-purple group-hover:translate-x-1 transition-transform">
                    查看完整個案 <ArrowRight className="w-4 h-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container px-4 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-trust-blue">Capability Matrix</div>
            <h2 className="font-heading text-3xl font-bold">我想讓招募方快速看到的能力</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "需求釐清與規格化", desc: "能把現場問題、客戶語言與營運流程整理成 PRD、流程、驗收條件與非目標。" },
              { title: "跨部門與外部協作", desc: "熟悉通路、物流、客戶、工程與外部合作窗口之間的時程與責任控管。" },
              { title: "營運與成本判斷", desc: "能從單位成本、供應鏈、使用者行為與商業可行性回推產品範圍。" },
              { title: "PM artifacts", desc: "實作過 WBS、Gantt、ADR、Risk Register、Non-Goals、測試與迭代紀錄。" },
              { title: "AI 協作導入", desc: "能把 AI 工具當成協作角色，拆任務、寫 spec、控品質、做交接與審查。" },
              { title: "教育訓練與轉譯", desc: "曾任政府創業課程講師，能把政策、技術或流程轉成可理解的教材與溝通內容。" },
            ].map((cap, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <h3 className="font-heading text-lg font-bold mb-3 group-hover:text-trust-blue transition-colors">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="container px-4 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-ai-purple">Facilitation</div>
          <h2 className="font-heading text-3xl font-bold text-slate-900">講師經驗：把政策轉成行動方案</h2>
        </div>
        <Card className="overflow-hidden border-slate-200 shadow-xl shadow-slate-200/50">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <Image 
                src={assetPath("/assets/instructor-classroom.jpg")} 
                alt="政府創業課程授課現場" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">公開授課現場</h3>
                <p className="text-slate-600 leading-relaxed">
                  面對非技術與創業初期學員，將政策、創業準備、風險評估與資源運用轉成可執行的課程內容。
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none font-bold">官方紀錄</Badge>
                  <span className="text-sm font-bold text-slate-900">政府創業課程授課紀錄</span>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  課程主題包含創業準備、商機選擇、產業趨勢、風險評估、適性評量、政府資源運用與貸款說明。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/src/微型創業鳳凰-課程查詢.png" target="_blank" className="text-sm font-bold text-ai-purple hover:underline underline-offset-4">微型創業鳳凰查詢 →</Link>
                  <Link href="/src/屏東縣政府全球資訊網-活動行事曆.pdf" target="_blank" className="text-sm font-bold text-ai-purple hover:underline underline-offset-4">縣政府行事曆 →</Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Target Roles & Final Note */}
      <section className="container px-4 py-20 bg-ai-purple/5 rounded-3xl text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl font-bold text-slate-900">我的 PM 主軸</h2>
          <p className="text-xl text-slate-600 font-medium">
            真正難的不是知道要做什麼，而是知道什麼時候該停。良野、保險 Bot、TOEIC Snack 都在呈現同一種紀律：有意識地選擇不做某些事，讓專案能被交付。
          </p>
        </div>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          我能勝任的 role：數位專案 PM、Business Analyst、產品營運、系統導入 PM、AI 應用 PM。
        </p>
      </section>
    </div>
  );
}
