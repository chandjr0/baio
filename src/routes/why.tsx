import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { audiences, audienceCopy } from "@/data/audience";
import { features } from "@/data/features";
import { pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/why")({
  head: () => buildPageHead(pages.why),
  component: WhyPage,
});

function WhyPage() {
  return (
    <PageLayout>
      <section className="bg-background px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-20 grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em]">
              03 / Why BaioHack
            </p>
            <h1 className="col-span-4 mt-8 font-display text-5xl font-semibold md:col-span-5 md:col-start-4 md:mt-0 md:text-7xl">
              Less noise.
              <br />
              More signal.
            </h1>
          </Reveal>
          <div className="border-t border-foreground">
            {features.map((feature) => (
              <Reveal
                key={feature.number}
                className="group grid grid-cols-4 gap-6 border-b border-foreground py-10 transition-colors duration-300 hover:bg-muted/40 md:grid-cols-8 lg:grid-cols-12 lg:py-14"
              >
                <p className="font-mono text-xs">{feature.number}</p>
                <h2 className="col-span-3 font-display text-3xl font-semibold md:col-span-3 md:text-4xl">
                  {feature.title}
                </h2>
                <p className="col-span-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:col-start-5 lg:col-span-5 lg:col-start-8">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
          <Reveal className="col-span-4 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]">
              04 / The quiet health tool
            </p>
            <h2 className="mt-10 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              Signal
              <br />
              <span className="italic text-sage">over noise.</span>
            </h2>
          </Reveal>
          <Reveal className="col-span-4 lg:col-span-5 lg:col-start-8" delay={0.08}>
            <p className="text-xl leading-relaxed md:text-2xl">
              No tracking marathons. Just a few simple check-ins around sleep, meals, light,
              movement, and meds.
            </p>
            <div className="my-12 h-px bg-border" role="separator" />
            <p className="text-base leading-relaxed text-muted-foreground">
              Only gentle, high-signal nudges when timing really matters — always with a clear{" "}
              <strong className="font-medium text-foreground">“why this now”</strong> so you feel
              calmer, not judged.
            </p>
            <div className="mt-12 border-l-2 border-sage pl-6 transition-shadow duration-300 hover:shadow-[4px_0_0_0_var(--sage)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                Today / 18:40
              </p>
              <p className="mt-3 font-display text-2xl">
                A short walk after dinner may help your sleep settle tonight.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Why this now → Your last three evenings ran later than usual.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage px-5 py-24 text-primary-foreground md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em]">
              05 / Who it’s for
            </p>
            <p className="col-span-4 font-display text-4xl font-medium leading-tight md:col-span-6 md:col-start-3 md:text-6xl lg:col-span-8">
              {audienceCopy}
            </p>
          </Reveal>
          <div className="mt-20 border-t border-primary-foreground/40">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience}
                className="group grid grid-cols-[3rem_1fr_auto] items-center border-b border-primary-foreground/40 py-5 transition-colors duration-300 hover:bg-primary-foreground/[0.06]"
              >
                <span className="font-mono text-[10px]">0{index + 1}</span>
                <span className="font-display text-3xl md:text-5xl">{audience}</span>
                <ArrowRight
                  className="size-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
