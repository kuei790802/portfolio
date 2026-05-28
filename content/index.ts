import type { ComponentType } from "react";

import ToeicSummary from "./toeic-snack/summary.mdx";
import ToeicProblem from "./toeic-snack/problem.mdx";
import ToeicValidation from "./toeic-snack/validation.mdx";
import ToeicScope from "./toeic-snack/scope.mdx";
import ToeicDelivery from "./toeic-snack/delivery.mdx";
import ToeicNext from "./toeic-snack/next.mdx";
import InsuranceOverview from "./insurance-bot/overview.mdx";
import InsuranceResearch from "./insurance-bot/research.mdx";
import InsurancePositioning from "./insurance-bot/positioning.mdx";
import InsurancePRD from "./insurance-bot/prd.mdx";
import InsuranceADRs from "./insurance-bot/adrs.mdx";
import InsuranceReflections from "./insurance-bot/reflections.mdx";
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
    validation: ToeicValidation,
    scope: ToeicScope,
    delivery: ToeicDelivery,
    next: ToeicNext,
  },
  "insurance-bot": {
    overview: InsuranceOverview,
    research: InsuranceResearch,
    positioning: InsurancePositioning,
    prd: InsurancePRD,
    adrs: InsuranceADRs,
    reflections: InsuranceReflections,
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
