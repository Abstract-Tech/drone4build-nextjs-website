import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl text-[var(--brand-blue)]", className)}>
      {children}
    </h2>
  );
}
