import { Callout } from "./callout";
import { InfoTable } from "./info-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RenderContentProps {
  slug: string;
  tabId: string;
}

export function RenderContent({ slug, tabId }: RenderContentProps) {
  // TOEIC Snack rendering
  if (slug === "toeic-snack") {
    if (tabId === "summary") {
      return (
        <div className="space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-50 border-none shadow-none p-6">
              <h4 className="font-bold text-slate-900 mb-2">我想解的問題</h4>
              <p className="text-sm text-slate-600">多益閱讀考生不是只缺題目，而是缺一個能在碎片時間練習、同時保留時間壓迫感的工具。</p>
            </Card>
            <Card className="bg-slate-50 border-none shadow-none p-6">
              <h4 className="font-bold text-slate-900 mb-2">我做的 MVP</h4>
              <p className="text-sm text-slate-600">5/10/15/20 分鐘閱讀練習、placement test、歷史紀錄、設定與基本離線容錯。</p>
            </Card>
            <Card className="bg-slate-50 border-none shadow-none p-6">
              <h4 className="font-bold text-slate-900 mb-2">我最後的決策</h4>
              <p className="text-sm text-slate-600">暫緩上架。先把重點放在核心練習流程、題庫品質與使用情境驗證，避免過早進入營運成本。</p>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">這份 case 想證明的 PM 能力</h3>
            <InfoTable 
              headers={["PM 能力", "本案證據", "成熟度"]}
              rows={[
                ["問題定義", "從個人痛點、論壇二手研究、競品掃描，收斂到「限時閱讀練習」這個切角。", <Badge key="1" className="bg-emerald-100 text-emerald-700">可展現</Badge>],
                ["範圍收斂", "完成 MVP 後重新檢視功能驗證價值，後續專案已改成先列不做事項。", <Badge key="2" className="bg-emerald-100 text-emerald-700">可展現</Badge>],
                ["驗證意識", "5 位家人同事試用、自己使用約 10 次，並安排 iOS QA 找出 11 個問題。", <Badge key="3" className="bg-blue-100 text-blue-700">早期驗證</Badge>],
                ["風險判斷", "清楚列出下一階段要補的成果指標、題庫品質與畫面層級測試。", <Badge key="4" className="bg-emerald-100 text-emerald-700">可展現</Badge>],
                ["技術協作", "把需求拆到 AI agent 可執行，透過 handoff 文件與 QA 控制交付品質。", <Badge key="5" className="bg-emerald-100 text-emerald-700">可展現</Badge>],
              ]}
            />
          </div>

          <Callout variant="success" title="PM 定位">
            完整走到 MVP 的產品實驗，呈現從模糊痛點到假設、再到 MVP 交付與下一步驗證節奏的完整決策鏈。
          </Callout>
        </div>
      );
    }
    
    if (tabId === "problem") {
      return (
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">起點：我自己的痛點，但不把 n=1 當市場</h3>
            <p>我聽力接近滿分，閱讀相對弱。平常會讀英文新聞與社群，但考試時容易抓不到時間節奏。傳統題本厚重，不適合通勤、午休、等飯這些零碎時段。</p>
            <p>這是一個真實痛點，但一開始只是 <strong>n=1 的個人經驗</strong>。因此我先做二手研究與競品掃描，確認問題是否有機會擴大。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">二手研究</h4>
              <p className="text-sm">從 PTT、Dcard 觀察到部分考生有類似情境：聽力高於閱讀、閱讀做不完、需要時間節奏訓練。</p>
            </Card>
            <Card className="p-6 border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">競品掃描</h4>
              <p className="text-sm">多數 App 偏單字、文法或綜合練習，較少聚焦「限時閱讀衝刺」與碎片時間使用。</p>
            </Card>
          </div>
        </div>
      );
    }
  }

  // Fallback
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
        ?
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-slate-900">內容正在遷移中</h3>
        <p className="text-sm text-slate-500 max-w-xs mx-auto">
          此章節 ({slug}/{tabId}) 的內容正在轉化為現代化組件，敬請期待。
        </p>
      </div>
    </div>
  );
}
