import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { SignupForm } from "@/components/baiohack/SignupForm";
import { pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/early-access")({
  head: () => buildPageHead(pages.earlyAccess),
  component: EarlyAccessPage,
});

function EarlyAccessPage() {
  return (
    <PageLayout>
      <section className="bg-background px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
          <Reveal className="col-span-4 lg:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]">06 / Early access</p>
            <h1 className="mt-10 font-display text-6xl font-semibold leading-[0.9] md:text-8xl">
              Join the
              <br />
              <span className="italic text-sage">early wave.</span>
            </h1>
          </Reveal>
          <Reveal className="col-span-4 self-end lg:col-span-5 lg:col-start-8" delay={0.08}>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Help shape BaioHack’s first version and be among the first to try a calmer way of
              doing health.
            </p>
            <SignupForm />
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Free beta access · No data sales · Unsubscribe anytime
            </p>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
