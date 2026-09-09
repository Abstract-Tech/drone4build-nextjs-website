import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Card from "../Card";

type AccentBarCardContentTextProps = {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  titleClassName?: string;
};

type AccentBarCardProps = {
  accent?: ReactNode;
  accentClassName?: string;
  bodyClassName?: string;
  children: ReactNode;
  className?: string;
  title: string;
  titleClassName?: string;
} & Omit<HTMLMotionProps<"article">, "children" | "className">;

export function AccentBarCardContentText({
  children,
  className,
  title,
  titleClassName,
}: AccentBarCardContentTextProps) {
  return (
    <>
      {title && (
        <p
          className={cn(
            "font-semibold text-(--brand-blue)",
            titleClassName,
          )}
        >
          {title}
        </p>
      )}
      <p
        className={cn(
          "mt-1 text-base leading-relaxed text-(--brand-blue)",
          !title && "mt-0",
          className,
        )}
      >
        {children}
      </p>
    </>
  );
}

export default function AccentBarCard({
  accent,
  accentClassName,
  bodyClassName,
  children,
  className,
  title,
  titleClassName,
  ...props
}: AccentBarCardProps) {
  return (
    <Card
      className={cn(
        "grid grid-cols-1 overflow-hidden rounded-md bg-white p-0 md:grid-cols-[50px_minmax(0,1fr)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center bg-(--brand-orange) px-4 py-3",
          accentClassName,
        )}
      >
        {accent}
      </div>
      <div
        className={cn(
          "border-t border-brand-orange border-slate-200 px-5 py-4 text-base leading-relaxed text-(--brand-blue) md:border-l md:border-t-0",
          bodyClassName,
        )}
      >
        <h3
          className={cn(
            "mb-2 text-2xl text-(--brand-orange)",
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
