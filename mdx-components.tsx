import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/badge";
import {
  Callout,
  InfoTable,
  DataCard,
  KPIGrid,
  Timeline,
  Comparison,
  PersonaCard,
  DecisionLog,
  PullQuote,
  EvidenceGrid,
} from "@/components/case-content";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h2 className="font-heading text-2xl font-bold text-slate-900 mt-8 mb-4">{children}</h2>
    ),
    h2: ({ children }) => (
      <h3 className="font-heading text-xl font-bold text-slate-900 mt-8 mb-3">{children}</h3>
    ),
    h3: ({ children }) => (
      <h4 className="font-heading text-lg font-bold text-slate-900 mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-base text-slate-600 leading-relaxed my-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 space-y-2 text-slate-600 leading-relaxed list-disc pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 space-y-2 text-slate-600 leading-relaxed list-decimal pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
    a: ({ children, href }) => (
      <a href={href} className="text-ai-purple-700 underline underline-offset-4 hover:text-ai-purple-900" target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    ),
    hr: () => <hr className="my-8 border-slate-200" />,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-slate-300 bg-slate-50 rounded-r-lg p-4 italic text-slate-700">
        {children}
      </blockquote>
    ),
    Badge,
    Callout,
    InfoTable,
    DataCard,
    KPIGrid,
    Timeline,
    Comparison,
    PersonaCard,
    DecisionLog,
    PullQuote,
    EvidenceGrid,
    ...components,
  };
}
