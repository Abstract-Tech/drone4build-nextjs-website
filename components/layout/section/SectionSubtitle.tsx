import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionSubtitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionSubtitle({
  children,
  className,
}: SectionSubtitleProps) {
  return (
    <p
      className={cn(
        "mt-2 text-base leading-relaxed text-[var(--brand-blue)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
