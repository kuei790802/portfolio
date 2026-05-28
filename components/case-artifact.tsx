import Image from "next/image";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";

interface CaseArtifactItem {
  src: string;
  alt: string;
  captionTitle?: string;
  caption?: string;
}

export interface CaseArtifactData {
  title?: string;
  subtitle?: string;
  flow?: string;
  layout: "wide-figure" | "image-grid";
  cols?: 2 | 3 | 4;
  aspect?: "9/16" | "4/3";
  items: CaseArtifactItem[];
}

const colMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const aspectMap: Record<"9/16" | "4/3", string> = {
  "9/16": "aspect-[9/16]",
  "4/3": "aspect-[4/3]",
};

const objectFitMap: Record<"9/16" | "4/3", string> = {
  "9/16": "object-contain",
  "4/3": "object-cover",
};

export function CaseArtifact({ title, subtitle, flow, layout, cols = 4, aspect = "4/3", items }: CaseArtifactData) {
  if (layout === "wide-figure") {
    const item = items[0];
    if (!item) return null;
    return (
      <section className="container px-4">
        <figure className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(item.src)}
            alt={item.alt}
            className="w-full h-auto block"
          />
          {(item.captionTitle || item.caption) && (
            <figcaption className="p-6 border-t border-slate-100 space-y-2">
              {item.captionTitle && (
                <div className="font-heading text-lg font-bold text-slate-900">{item.captionTitle}</div>
              )}
              {item.caption && (
                <p className="text-sm text-slate-600 leading-relaxed">{item.caption}</p>
              )}
            </figcaption>
          )}
        </figure>
      </section>
    );
  }

  return (
    <section className="container px-4">
      <div className="space-y-6">
        {(title || subtitle || flow) && (
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            {(title || subtitle) && (
              <div className="space-y-2">
                {title && (
                  <h2 className="font-heading text-2xl font-bold text-slate-900">{title}</h2>
                )}
                {subtitle && (
                  <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{subtitle}</p>
                )}
              </div>
            )}
            {flow && (
              <div className="font-heading text-sm font-bold text-brand-teal-700 tracking-wider whitespace-nowrap">
                {flow}
              </div>
            )}
          </div>
        )}
        <div className={cn("grid grid-cols-1 gap-6", colMap[cols])}>
          {items.map((item, i) => (
            <figure
              key={i}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            >
              <div className={cn("relative bg-slate-100", aspectMap[aspect])}>
                <Image
                  src={assetPath(item.src)}
                  alt={item.alt}
                  fill
                  className={objectFitMap[aspect]}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              {(item.captionTitle || item.caption) && (
                <figcaption className="p-4 border-t border-slate-100 space-y-1">
                  {item.captionTitle && (
                    <div className="text-sm font-bold text-slate-900">{item.captionTitle}</div>
                  )}
                  {item.caption && (
                    <p className="text-xs text-slate-600 leading-relaxed">{item.caption}</p>
                  )}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
