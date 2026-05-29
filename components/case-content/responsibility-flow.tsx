import { cn } from "@/lib/utils";
import { ArrowUpRight, AlertTriangle, CheckCircle2 } from "lucide-react";

type Tone = "own" | "system" | "handoff" | "done" | "warn" | "escalate";

interface FlowNode {
  /** 角色泳道索引（對應 lanes） */
  lane: number;
  /** 時間關卡索引（對應 gates） */
  gate: number;
  label: string;
  note?: string;
  tone?: Tone;
}

interface ResponsibilityFlowProps {
  lanes: string[];
  gates: string[];
  nodes: FlowNode[];
  /** 標成警戒色的關卡索引（先手盡失分水嶺） */
  dangerGate?: number;
  dangerLabel?: string;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  own: "bg-brand-teal-50 border-brand-teal-200 text-brand-teal-900",
  system: "bg-brand-teal-100 border-brand-teal-200 text-brand-teal-800",
  handoff: "bg-white border-brand-teal text-brand-teal-900 ring-1 ring-brand-teal",
  done: "bg-brand-forest-100 border-brand-forest-200 text-brand-forest-700",
  warn: "bg-amber-100 border-amber-200 text-amber-700",
  escalate: "bg-amber-100 border-amber-300 text-amber-800",
};

const toneIcon: Partial<Record<Tone, React.ReactNode>> = {

  warn: <AlertTriangle className="h-3.5 w-3.5 shrink-0" />,
  done: <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />,
};

export function ResponsibilityFlow({
  lanes,
  gates,
  nodes,
  dangerGate,
  dangerLabel,
  className,
}: ResponsibilityFlowProps) {
  const nodesAt = (lane: number, gate: number) =>
    nodes.filter((n) => n.lane === lane && n.gate === gate);

  const gridTemplateColumns = `minmax(120px, 150px) repeat(${gates.length}, minmax(150px, 1fr))`;

  return (
    <figure className={cn("my-8", className)}>
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          <div className="grid gap-2" style={{ gridTemplateColumns }}>
            {/* 標頭列：左上角空格 + 時間關卡 */}
            <div className="sticky left-0 z-10 bg-white" />
            {gates.map((gate, g) => {
              const isDanger = g === dangerGate;
              return (
                <div
                  key={`gate-${g}`}
                  className={cn(
                    "rounded-lg px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.14em]",
                    isDanger
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-slate-100 text-slate-600",
                  )}
                >
                  {gate}
                </div>
              );
            })}

            {/* 角色泳道 */}
            {lanes.map((lane, l) => (
              <div key={`lane-${l}`} className="contents">
                <div className="sticky left-0 z-10 flex items-center bg-white">
                  <div className="flex w-full items-center gap-2 rounded-lg border-l-2 border-brand-teal bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900">
                    {lane}
                  </div>
                </div>
                {gates.map((_, g) => {
                  const cellNodes = nodesAt(l, g);
                  const isDanger = g === dangerGate;
                  return (
                    <div
                      key={`cell-${l}-${g}`}
                      className={cn(
                        "flex min-h-[56px] flex-col gap-2 rounded-lg p-1.5",
                        isDanger ? "bg-red-50/40" : "bg-slate-50/60",
                      )}
                    >
                      {cellNodes.map((node, i) => {
                        const tone = node.tone ?? "own";
                        return (
                          <div
                            key={i}
                            className={cn(
                              "rounded-lg border px-3 py-2 text-xs leading-relaxed",
                              toneStyles[tone],
                            )}
                          >
                            <div className="flex items-center gap-1.5 font-bold">
                              {toneIcon[tone]}
                              <span>{node.label}</span>
                            </div>
                            {node.note && (
                              <div className="mt-1 font-medium opacity-80">
                                {node.note}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {dangerLabel && dangerGate !== undefined && (
        <div className="mt-3 flex items-center gap-2 text-xs text-red-700">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
          <span>
            <span className="font-bold">{gates[dangerGate]}</span>：{dangerLabel}
          </span>
        </div>
      )}

      <figcaption className="mt-2 text-xs text-slate-500 md:hidden">
        可左右滑動查看完整責任流轉
      </figcaption>
    </figure>
  );
}
