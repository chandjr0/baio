import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/baiohack/Hero";
import { MarqueeBand } from "@/components/baiohack/MarqueeBand";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { SignupForm } from "@/components/baiohack/SignupForm";
import { organizationJsonLd, pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead(pages.home, {
      scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationJsonLd) }],
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <MarqueeBand />

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
          <Reveal className="col-span-4 lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
              The next rhythm starts here
            </p>
            <h2 className="mt-8 font-display text-5xl font-semibold leading-[0.95] md:text-8xl">
              Ready for health that moves with you?
            </h2>
          </Reveal>
          <Reveal className="col-span-4 self-end lg:col-span-4 lg:col-start-9" delay={0.08}>
            <SignupForm inverse />
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
