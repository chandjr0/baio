import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { rhythms } from "@/data/brand";

export function Rhythm() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const rhythm = rhythms[active] ?? rhythms[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-6 lg:gap-y-4">
      <div className="lg:col-span-5">
        <div className="relative mx-auto aspect-square max-w-[min(100%,18rem)] sm:max-w-xs lg:max-w-md">
          <motion.div
            className="absolute inset-[7%] rounded-full border border-sage/60"
            animate={reduceMotion ? false : { scale: [0.94, 1, 0.94], rotate: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            key={rhythm.name}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-[19%] grid place-items-center rounded-full bg-sage text-center text-primary-foreground"
          >
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em]">{rhythm.phase}</span>
              <p className="mt-3 font-display text-4xl font-semibold md:text-5xl">{rhythm.name}</p>
            </div>
          </motion.div>
          {rhythms.map((item, index) => {
            const angle = (index / rhythms.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <span
                key={item.name}
                className="absolute size-2 rounded-full bg-foreground"
                style={{
                  left: `${50 + 47 * Math.cos(angle)}%`,
                  top: `${50 + 47 * Math.sin(angle)}%`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <div className="border-t border-foreground/30">
          {rhythms.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className="grid w-full grid-cols-[2rem_minmax(0,1fr)_auto] items-center border-b border-foreground/30 py-3 text-left transition-[color,background-color,padding] duration-200 hover:bg-muted/30 hover:pl-2 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:py-3.5"
              aria-pressed={active === index}
            >
              <span className="font-mono text-[10px] opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl font-medium sm:text-2xl">{item.name}</span>
              <span
                className={`size-2 rounded-full transition-colors ${active === index ? "bg-sage" : "bg-transparent"}`}
              />
            </button>
          ))}
        </div>
        <p
          className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:mt-8 lg:text-lg"
          aria-live="polite"
        >
          {rhythm.detail}
        </p>
      </div>
    </div>
  );
}
