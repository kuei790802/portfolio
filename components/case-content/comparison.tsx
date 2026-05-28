import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ComparisonColumn {
  title: string;
  items: React.ReactNode[];
  variant?: "default" | "accent";
}

interface ComparisonProps {
  before: ComparisonColumn;
  after: ComparisonColumn;
  beforeLabel?: string;
  afterLabel?: string;
}

function Column({ column, label }: { column: ComparisonColumn; label?: string }) {
  const isAccent = column.variant === "accent";
  return (
    <div
      className={cn(
        "rounded-xl border p-6",
        isAccent ? "bg-brand-teal-50 border-brand-teal-200" : "bg-slate-50 border-slate-200",
      )}
    >
      {label && (
        <div
          className={cn(
            "text-xs font-bold uppercase tracking-[0.2em] mb-2",
            isAccent ? "text-brand-teal-700" : "text-slate-500",
          )}
        >
          {label}
        </div>
      )}
      <div
        className={cn(
          "font-heading text-lg font-bold mb-4",
          isAccent ? "text-brand-teal-900" : "text-slate-900",
        )}
      >
        {column.title}
      </div>
      <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
        {column.items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className={cn("mt-2 h-1 w-1 rounded-full shrink-0", isAccent ? "bg-brand-teal" : "bg-slate-400")} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Comparison({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: ComparisonProps) {
  const afterColumn = { ...after, variant: after.variant ?? "accent" } as ComparisonColumn;
  return (
    <div className="my-6 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
      <Column column={before} label={beforeLabel} />
      <div className="hidden md:flex items-center justify-center text-slate-400">
        <ArrowRight className="w-6 h-6" />
      </div>
      <Column column={afterColumn} label={afterLabel} />
    </div>
  );
}
