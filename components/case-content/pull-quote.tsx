import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface PullQuoteProps {
  source?: string;
  children: React.ReactNode;
  className?: string;
}

export function PullQuote({ source, children, className }: PullQuoteProps) {
  return (
    <figure className={cn("my-8 border-l-4 border-brand-teal bg-brand-teal-50/50 rounded-r-xl p-6 flex gap-4", className)}>
      <Quote className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
      <div className="space-y-3 flex-1">
        <blockquote className="font-heading text-lg font-bold text-slate-900 leading-snug">
          {children}
        </blockquote>
        {source && (
          <figcaption className="text-sm font-medium text-brand-teal-700">
            {source}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
