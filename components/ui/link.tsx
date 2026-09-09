import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-full bg-(--brand-orange) font-semibold uppercase tracking-wide text-white transition hover:opacity-90",
  {
    variants: {
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-5 py-3 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type LinkOwnProps = {
  children: ReactNode;
  className?: string;
  component?: ElementType;
} & VariantProps<typeof linkVariants>;

type LinkProps<C extends ElementType> = LinkOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof LinkOwnProps | "className">;

function Link<C extends ElementType = "a">({
  children,
  className,
  component,
  size,
  ...props
}: LinkProps<C>) {
  const Component = component ?? "a";

  return (
    <Component
      className={cn(linkVariants({ size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Link;
