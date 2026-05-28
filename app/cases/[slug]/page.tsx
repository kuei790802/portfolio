import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases } from "@/data/cases";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, FileEdit } from "lucide-react";
import { getContent } from "@/content";
import { CaseArtifact } from "@/components/case-artifact";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);
  if (!caseStudy) return {};

  const title = caseStudy.title;
  const description = caseStudy.pitch;
  const ogTitle = `${caseStudy.title}｜${caseStudy.subtitle}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Case Header */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="container px-4">
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-brand-teal font-bold tracking-tight">
                {caseStudy.subtitle}
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-brand-teal/20 shadow-sm border-l-4 border-l-brand-teal">
              <p className="text-slate-600 leading-relaxed italic">
                {caseStudy.pitch}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.meta.map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                  <div className="text-sm font-bold text-slate-700">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-slate-200/50 text-slate-600 border-none font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Artifact (hero proof) */}
      {caseStudy.artifact && <CaseArtifact {...caseStudy.artifact} />}

      {/* Case Brief Section */}
      <section className="container px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <Card className="lg:col-span-2 border-slate-200 shadow-sm bg-gradient-to-br from-white to-slate-50">
            <CardHeader>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal mb-2">Case Brief</div>
              <CardTitle className="text-2xl font-bold text-slate-900 leading-snug">
                {caseStudy.hero.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {caseStudy.hero.description}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-forest" /> PM 能力證據
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {caseStudy.hero.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="container px-4">
        <Tabs defaultValue={caseStudy.tabs[0].id} className="space-y-8">
          <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md py-4 -mx-4 px-4 overflow-x-auto border-b border-slate-100">
            <TabsList className="bg-slate-100/50 p-1 h-auto flex w-max sm:w-full">
              {caseStudy.tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-brand-teal data-[state=active]:shadow-sm transition-all"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {caseStudy.tabs.map((tab) => {
            const Content = getContent(caseStudy.slug, tab.id);
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-0 focus-visible:outline-none">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8 md:p-12 min-h-[400px]">
                  {Content ? (
                    <Content />
                  ) : (
                    <div className="min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <FileEdit className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-slate-900">本章節內容即將上線</h3>
                        <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                          {caseStudy.slug}/{tab.id} 正在從 v3 完整稿轉成模組化內容區塊，預計同批次內補齊。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return cases.map((c) => ({
    slug: c.slug,
  }));
}
