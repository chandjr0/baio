import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageLayout } from "@/components/baiohack/PageLayout";
import { Reveal } from "@/components/baiohack/Reveal";
import { faq } from "@/data/faq";
import { faqJsonLd, pages } from "@/data/seo";
import { buildPageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/faq")({
  head: () =>
    buildPageHead(pages.faq, {
      scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageLayout>
      <section className="border-t border-border bg-background px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
          <Reveal className="col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]">07 / FAQ</p>
            <h1 className="mt-8 font-display text-5xl font-semibold md:text-7xl">
              A few things,
              <br />
              <span className="italic text-sage">made clear.</span>
            </h1>
          </Reveal>
          <Reveal className="col-span-4 lg:col-span-7 lg:col-start-6" delay={0.08}>
            <Accordion type="single" collapsible className="border-t border-foreground">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="border-foreground"
                >
                  <AccordionTrigger className="py-6 font-display text-xl font-medium transition-colors duration-200 hover:text-sage hover:no-underline md:text-2xl">
                    <span className="flex min-w-0 items-baseline gap-5 text-left">
                      <span className="shrink-0 font-mono text-[10px] opacity-50">
                        0{index + 1}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-10 pr-8 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
