"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cardHoverMotion = {
  y: -2,
  scale: 1.01,
  boxShadow: "0 18px 35px rgba(15, 23, 42, 0.12)",
  transition: {
    duration: 0.3,
  },
};

type CardProps = {
  className?: string;
} & Omit<HTMLMotionProps<"article">, "className">;

function Card({ className, ...props }: CardProps) {
  return (
    <motion.article
      data-slot="card"
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-5 shadow-soft",
        className,
      )}
      variants={cardVariants}
      whileHover={cardHoverMotion}
      {...props}
    />
  );
}

export default Card;
