import type { ComponentType } from "react";

import ToeicSummary from "./toeic-snack/summary.mdx";
import ToeicProblem from "./toeic-snack/problem.mdx";
import LiangyeOverview from "./liangye-7eleven/overview.mdx";
import LiangyeStrategy from "./liangye-7eleven/strategy.mdx";
import LiangyePlay from "./liangye-7eleven/play.mdx";
import LiangyeOps from "./liangye-7eleven/ops.mdx";
import LiangyeDecisions from "./liangye-7eleven/decisions.mdx";
import LiangyeReflection from "./liangye-7eleven/reflection.mdx";

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
    overview: LiangyeOverview,
    strategy: LiangyeStrategy,
    play: LiangyePlay,
    ops: LiangyeOps,
    decisions: LiangyeDecisions,
    reflection: LiangyeReflection,
  },
};

export function getContent(slug: string, tabId: string): ComponentType | null {
  return contentMap[slug]?.[tabId] ?? null;
}
