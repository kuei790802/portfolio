import { cn } from "@/lib/utils";
import { DataCard } from "./data-card";

interface KPIGridItem {
  value: string | number;
  label: string;
  hint?: string;
  variant?: "default" | "accent";
}

interface KPIGridProps {
  cols?: 2 | 3 | 4;
  items: KPIGridItem[];
}

const colMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export function KPIGrid({ cols = 4, items }: KPIGridProps) {
  return (
    <div className={cn("my-6 grid grid-cols-1 gap-4", colMap[cols])}>
      {items.map((item, i) => (
        <DataCard key={i} {...item} />
      ))}
    </div>
  );
}
