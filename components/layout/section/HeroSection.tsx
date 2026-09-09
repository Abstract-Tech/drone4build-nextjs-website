import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollRevealSection } from "./ScrollRevealSection";
import SectionSubtitle from "./SectionSubtitle";

type HeroSectionProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  description: ReactNode;
  descriptionClassName?: string;
  eyebrow?: ReactNode;
  eyebrowClassName?: string;
  title: ReactNode;
  titleClassName?: string;
};

export default function HeroSection({
  children,
  className,
  contentClassName,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
}: HeroSectionProps) {
  return (
    <ScrollRevealSection
      className={cn("bg-white py-12 md:py-16", className)}
      contentClassName={contentClassName}
    >
      <div>
        {eyebrow ? (
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.2em] text-(--brand-orange)",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
        ) : null}

        <h1
          className={cn(
            "mt-3 text-4xl text-(--brand-blue) md:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h1>

        <SectionSubtitle
          className={cn(
            "mt-5 max-w-3xl text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </SectionSubtitle>

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </ScrollRevealSection>
  );
}
