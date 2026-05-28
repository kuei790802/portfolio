import Image from "next/image";
import { cn } from "@/lib/utils";

interface EvidenceItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface EvidenceGridProps {
  cols?: 2 | 3 | 4;
  items: EvidenceItem[];
}

const colMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export function EvidenceGrid({ cols = 3, items }: EvidenceGridProps) {
  return (
    <div className={cn("my-6 grid grid-cols-1 gap-4", colMap[cols])}>
      {items.map((item, i) => (
        <figure
          key={i}
          className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative aspect-[4/3] bg-slate-100">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          {item.caption && (
            <figcaption className="p-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
