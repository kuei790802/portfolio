import type { ComponentType } from "react";

import ToeicSummary from "./toeic-snack/summary.mdx";
import ToeicProblem from "./toeic-snack/problem.mdx";

type CaseContentMap = Record<string, Record<string, ComponentType | undefined>>;

export const contentMap: CaseContentMap = {
  "toeic-snack": {
    summary: ToeicSummary,
    problem: ToeicProblem,
    validation: undefined,
    scope: undefined,
    delivery: undefined,
    next: undefined,
  },
  "insurance-bot": {
    overview: undefined,
    research: undefined,
    positioning: undefined,
    prd: undefined,
    adrs: undefined,
    reflections: undefined,
  },
  "liangye-7eleven": {
    overview: undefined,
    strategy: undefined,
    play: undefined,
    ops: undefined,
    decisions: undefined,
    reflection: undefined,
  },
};

export function getContent(slug: string, tabId: string): ComponentType | null {
  return contentMap[slug]?.[tabId] ?? null;
}
