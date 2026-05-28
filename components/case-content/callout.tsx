import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  variant?: "default" | "warn" | "danger" | "success";
  title?: string;
}

export function Callout({ children, variant = "default", title }: CalloutProps) {
  const icons = {
    default: Info,
    warn: TriangleAlert,
    danger: AlertCircle,
    success: CheckCircle2,
  };
  const Icon = icons[variant];

  const variants = {
    default: "bg-blue-50 border-blue-200 text-blue-800",
    warn: "bg-amber-50 border-amber-200 text-amber-800",
    danger: "bg-red-50 border-red-200 text-red-800",
    success: "bg-brand-forest-50 border-brand-forest-200 text-brand-forest-800",
  };

  return (
    <div className={cn("p-6 rounded-xl border-l-4 my-6 flex gap-4", variants[variant])}>
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="space-y-1 text-sm leading-relaxed">
        {title && <div className="font-bold">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
