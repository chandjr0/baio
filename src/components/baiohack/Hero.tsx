import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { earlyAccessPath } from "@/data/navigation";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);

  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden border-b border-border">
      <div className="mx-auto grid min-h-[calc(92svh-4.5rem)] max-w-[1600px] grid-cols-4 px-5 md:grid-cols-8 md:px-10 lg:grid-cols-12">
        <div className="col-span-full flex flex-col justify-between py-10 md:py-14">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] md:col-span-3">
              BaioHack / Intelligent wellness
              <br />
              Private beta · 2026
            </p>
            <p className="col-span-2 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] md:col-span-3 md:col-start-6 lg:col-start-10">
              Learn. Adapt. Evolve.
              <br />
              Your rhythm, understood.
            </p>
          </div>

          <div className="relative my-12 grid grid-cols-4 items-center gap-4 md:grid-cols-8 lg:grid-cols-12">
            <motion.div
              style={reduceMotion ? {} : { y: orbY }}
              className="absolute right-[8%] top-1/2 size-[42vw] max-h-[430px] max-w-[430px] -translate-y-1/2 rounded-full bg-soft-sage opacity-80 blur-[1px]"
              aria-hidden="true"
            />
            <motion.div
              animate={
                reduceMotion
                  ? false
                  : { scale: [0.94, 1.04, 0.94], borderRadius: ["50%", "46% 54% 48% 52%", "50%"] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[12%] top-1/2 size-[34vw] max-h-[350px] max-w-[350px] -translate-y-1/2 border border-foreground/30"
              aria-hidden="true"
            />
            <h1 className="relative z-10 col-span-full max-w-[1200px] font-display text-[clamp(3.35rem,9.4vw,9rem)] font-semibold uppercase leading-[0.84]">
              The calm layer
              <br />
              <span className="ml-[8vw] italic text-sage">beneath</span>
              <br />
              the noise
            </h1>
          </div>

          <div className="grid grid-cols-4 items-end gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-5">
              <p className="font-display text-2xl leading-tight md:text-4xl">
                Wellness, intelligently personalised.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A calm companion that adapts as your body and life change — without turning your
                life into a lab.
              </p>
            </div>
            <div className="col-span-4 flex flex-col gap-3 sm:flex-row md:col-start-5 lg:col-span-5 lg:col-start-8 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="group h-13 rounded-none px-6 font-mono text-[10px] tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Link to={earlyAccessPath}>
                  Join the early wave
                  <ArrowRight
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-13 rounded-none border-foreground bg-transparent px-6 font-mono text-[10px] tracking-[0.14em] transition-colors duration-200 hover:bg-foreground hover:text-background"
              >
                <Link to="/how-it-works">
                  How it works
                  <ArrowDown
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
