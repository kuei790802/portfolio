import { cn } from "@/lib/utils";
import { Target, AlertCircle } from "lucide-react";

interface PersonaCardProps {
  name: string;
  role: string;
  summary?: string;
  pains?: string[];
  goals?: string[];
}

export function PersonaCard({ name, role, summary, pains, goals }: PersonaCardProps) {
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="bg-slate-900 text-white p-6">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-trust-blue mb-1">Persona</div>
        <div className="font-heading text-xl font-bold">{name}</div>
        <div className="text-sm text-slate-300 mt-1">{role}</div>
        {summary && (
          <div className="text-sm text-slate-400 mt-3 leading-relaxed border-t border-white/10 pt-3">
            {summary}
          </div>
        )}
      </div>
      <div className={cn("grid gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200", pains && goals ? "md:grid-cols-2" : "")}>
        {pains && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">痛點</div>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              {pains.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-amber-600 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {goals && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-600" />
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">目標</div>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              {goals.map((g, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-emerald-600 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
