import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition",
  {
    variants: {
      variant: {
        orange: "bg-[var(--brand-orange)] text-white",
        light: "border border-slate-200 bg-slate-50 text-[var(--brand-blue)]",
      },
      size: {
        sm: "px-3 py-1 text-xs uppercase tracking-wide",
        md: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  },
);

export type ChipVariant = NonNullable<
  VariantProps<typeof chipVariants>["variant"]
>;

function Chip({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof chipVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="chip"
      className={cn(chipVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export default Chip;
