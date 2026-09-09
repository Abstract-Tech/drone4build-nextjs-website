"use client";

import type { ReactNode } from "react";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollRevealSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  duration?: number;
  offsetY?: number;
} & Omit<HTMLMotionProps<"section">, "children" | "className">;

function ScrollRevealSection({
  className,
  contentClassName,
  duration = 0.7,
  offsetY = 30,
  children,
  viewport = { once: true, amount: 0.05 },
  ...props
}: ScrollRevealSectionProps) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  return (
    <motion.section
      className={cn(
        "border-b border-slate-200 px-4 py-10 md:px-6",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={sectionVariants}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl", contentClassName)}>
        {children}
      </div>
    </motion.section>
  );
}

export { ScrollRevealSection };
