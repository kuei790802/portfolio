import { cn } from "@/lib/utils";

interface DataCardProps {
  value: string | number;
  label: string;
  hint?: string;
  variant?: "default" | "accent";
}

export function DataCard({ value, label, hint, variant = "default" }: DataCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 flex flex-col gap-2 transition-colors",
        variant === "accent"
          ? "bg-brand-teal-50 border-brand-teal-200"
          : "bg-white border-slate-200 hover:bg-slate-50",
      )}
    >
      <div
        className={cn(
          "font-heading text-3xl font-extrabold tracking-tight",
          variant === "accent" ? "text-brand-teal-700" : "text-slate-900",
        )}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-slate-700">{label}</div>
      {hint && <div className="text-xs text-slate-500 leading-relaxed">{hint}</div>}
    </div>
  );
}
