import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { Rhythm } from "@/components/baiohack/Rhythm";
import { pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/rhythm")({
  head: () => buildPageHead(pages.rhythm),
  component: RhythmPage,
});

function RhythmPage() {
  return (
    <PageLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1600px] flex-col px-5 py-8 md:px-10 md:py-10 lg:py-12">
          <Reveal className="mb-10 shrink-0 grid grid-cols-4 gap-4 md:mb-12 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em]">
              01 / Your rhythm
            </p>
            <h1 className="col-span-4 mt-6 font-display text-5xl font-semibold leading-[0.95] md:col-span-6 md:col-start-3 md:mt-0 md:text-7xl lg:col-span-8 lg:text-8xl">
              Your health is a rhythm, <span className="italic text-sage">not a checklist.</span>
            </h1>
          </Reveal>
          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <Rhythm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
