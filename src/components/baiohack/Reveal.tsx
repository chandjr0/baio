import { motion, useReducedMotion } from "motion/react";

const sectionEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: sectionEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
