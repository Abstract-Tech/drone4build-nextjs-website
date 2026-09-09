import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Card from "../Card";

type SplitIconCardContentTextProps = {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  titleClassName?: string;
};

type SplitIconCardProps = {
  bodyClassName?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconAlt?: string;
  iconBlockClassName?: string;
  iconSrc?: string;
  title: string;
  titleClassName?: string;
} & Omit<HTMLMotionProps<"article">, "children" | "className">;

export function SplitIconCardContentText({
  children,
  className,
  title,
  titleClassName,
}: SplitIconCardContentTextProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-[var(--brand-blue)]",
        className,
      )}
    >
      {title && (
        <>
          <span
            className={cn(
              "font-semibold text-[var(--brand-blue)]",
              titleClassName,
            )}
          >
            {title}
          </span>
          <br />
        </>
      )}
      {children}
    </p>
  );
}

export default function SplitIconCard({
  bodyClassName,
  children,
  className,
  icon,
  iconAlt = "",
  iconBlockClassName,
  iconSrc,
  title,
  titleClassName,
  ...props
}: SplitIconCardProps) {
  const resolvedIcon =
    icon ??
    (iconSrc ? (
      <div
        aria-label={iconAlt || undefined}
        role={iconAlt ? "img" : undefined}
        className="h-full w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${iconSrc})` }}
      />
    ) : null);

  return (
    <Card
      className={cn("flex flex-col overflow-hidden p-0", className)}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center border-b border-slate-200 bg-white px-5 py-4",
          iconBlockClassName,
        )}
      >
        <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white/80">
          {resolvedIcon}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col bg-white px-5 pb-4 pt-4",
          bodyClassName,
        )}
      >
        <h3
          className={cn(
            "mb-2 text-2xl text-[var(--brand-orange)]",
            titleClassName,
          )}
        >
          {title}
        </h3>
        {children}
      </div>
    </Card>
  );
}
