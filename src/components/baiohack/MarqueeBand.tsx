import { motion, useReducedMotion } from "motion/react";

export function MarqueeBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-y border-border bg-soft-accent py-10"
      aria-label="Calm. evolving. Foundational."
    >
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-flex font-display text-[clamp(4rem,12vw,12rem)] font-semibold leading-none"
          animate={reduceMotion ? false : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <span>
            CALM. <i>evolving.</i> Foundational. &nbsp; CALM. <i>evolving.</i> Foundational. &nbsp;
          </span>
          <span aria-hidden="true">
            CALM. <i>evolving.</i> Foundational. &nbsp; CALM. <i>evolving.</i> Foundational. &nbsp;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
