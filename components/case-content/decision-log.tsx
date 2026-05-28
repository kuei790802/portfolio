import { cn } from "@/lib/utils";

interface DecisionLogProps {
  id: string;
  title: string;
  context: React.ReactNode;
  decision: React.ReactNode;
  consequences: React.ReactNode;
  status?: string;
}

const statusVariant: Record<string, string> = {
  採納中: "bg-brand-forest-100 text-brand-forest-700 border-brand-forest-200",
  觀察中: "bg-amber-100 text-amber-700 border-amber-200",
  已取代: "bg-slate-200 text-slate-600 border-slate-300",
};

export function DecisionLog({ id, title, context, decision, consequences, status }: DecisionLogProps) {
  const statusClass = status ? statusVariant[status] ?? "bg-slate-100 text-slate-700 border-slate-200" : "";

  return (
    <article className="my-6 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <header className="flex items-start justify-between gap-4 p-6 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal-700">{id}</div>
          <h4 className="font-heading text-lg font-bold text-slate-900 leading-snug">{title}</h4>
        </div>
        {status && (
          <span className={cn("shrink-0 inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-bold", statusClass)}>
            {status}
          </span>
        )}
      </header>
      <dl className="divide-y divide-slate-100">
        <div className="p-6 grid md:grid-cols-[120px_1fr] gap-2 md:gap-6">
          <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 pt-1">背景</dt>
          <dd className="text-sm text-slate-600 leading-relaxed">{context}</dd>
        </div>
        <div className="p-6 grid md:grid-cols-[120px_1fr] gap-2 md:gap-6">
          <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 pt-1">決策</dt>
          <dd className="text-sm text-slate-800 leading-relaxed font-medium">{decision}</dd>
        </div>
        <div className="p-6 grid md:grid-cols-[120px_1fr] gap-2 md:gap-6">
          <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 pt-1">後果</dt>
          <dd className="text-sm text-slate-600 leading-relaxed">{consequences}</dd>
        </div>
      </dl>
    </article>
  );
}
