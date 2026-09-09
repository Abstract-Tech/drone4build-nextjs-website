import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "@/components/ui/link";
import Card from "../Card";

type ContentCardAction = {
  className?: string;
  component?: ElementType;
  href: string;
  label: string;
  onClick?: () => void;
  rel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

type ContentCardProps = {
  action?: ContentCardAction;
  className?: string;
  title: ReactNode;
  description: ReactNode;
  descriptionClassName?: string;
  icon?: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  titleRowClassName?: string;
  titleClassName?: string;
};

function ContentCard({
  action,
  className,
  title,
  description,
  descriptionClassName,
  icon,
  iconSrc,
  iconAlt = "",
  titleRowClassName,
  titleClassName,
}: ContentCardProps) {
  const resolvedIcon =
    icon ??
    (iconSrc ? (
      <div className="flex h-15 w-15 shrink-0 items-center justify-center">
        <div
          aria-label={iconAlt || undefined}
          role={iconAlt ? "img" : undefined}
          className="h-full w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${iconSrc})` }}
        />
      </div>
    ) : null);

  return (
    <Card className={cn("flex flex-col px-5 pb-4 pt-4", className)}>
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          titleRowClassName,
        )}
      >
        {resolvedIcon}
        <h3
          className={cn(
            "text-2xl text-(--brand-orange)",
            titleClassName,
          )}
        >
          {title}
        </h3>
      </div>
      <div
        className={cn(
          "text-base leading-relaxed text-[var(--brand-blue)]",
          descriptionClassName,
        )}
      >
        {description}
      </div>
      {action && (
        <Link
          component={action.component}
          href={action.href}
          size="sm"
          target={action.target}
          rel={action.rel}
          onClick={action.onClick}
          className={cn("mt-4", action.className)}
        >
          {action.label}
        </Link>
      )}
    </Card>
  );
}

export default ContentCard;
