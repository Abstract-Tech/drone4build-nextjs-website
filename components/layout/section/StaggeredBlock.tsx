"use client";

import type { ReactNode } from "react";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

type MotionElement = keyof typeof motion;

type StaggeredBlockProps = {
  as?: MotionElement;
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function StaggeredBlock({
  as = "div",
  staggerChildren = 0.18,
  ...props
}: StaggeredBlockProps) {
  const blockVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
      },
    },
  };

  const MotionComponent = motion[as] as typeof motion.div;

  return <MotionComponent variants={blockVariants} {...props} />;
}
