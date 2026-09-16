import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { howItWorks } from "@/data/howItWorks";
import { pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/how-it-works")({
  head: () => buildPageHead(pages.howItWorks),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
          <Reveal className="grid grid-cols-4 gap-4 border-b border-primary-foreground/30 pb-16 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em]">
              02 / How it works
            </p>
            <h1 className="col-span-4 mt-8 font-display text-5xl font-semibold leading-[0.95] md:col-span-6 md:col-start-3 md:mt-0 md:text-7xl lg:col-span-8">
              Calm rhythms for lives that keep changing.
            </h1>
          </Reveal>
          {howItWorks.map((step) => (
            <Reveal
              key={step.number}
              className="group grid grid-cols-4 gap-6 border-b border-primary-foreground/30 py-14 transition-colors duration-300 hover:bg-primary-foreground/[0.03] md:grid-cols-8 lg:grid-cols-12 lg:py-20"
            >
              <p className="col-span-1 font-mono text-xs text-sage">{step.number}</p>
              <div className="col-span-3 md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                  {step.kicker}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                  {step.title}
                </h2>
              </div>
              <div className="col-span-4 md:col-span-4 md:col-start-5 lg:col-span-5 lg:col-start-8">
                <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/75">
                  {step.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                  {step.signals.map((signal) => (
                    <span
                      key={signal}
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                    >
                      + {signal}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
