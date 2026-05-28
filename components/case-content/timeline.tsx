import { cn } from "@/lib/utils";

interface TimelineItem {
  mark: string;
  title: string;
  desc?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("my-6 relative border-l-2 border-ai-purple-100 pl-6 space-y-6", className)}>
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-white border-2 border-ai-purple" />
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-ai-purple-700">
            {item.mark}
          </div>
          <div className="mt-1 font-heading text-base font-bold text-slate-900">
            {item.title}
          </div>
          {item.desc && (
            <div className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</div>
          )}
        </li>
      ))}
    </ol>
  );
}
