import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export const CONTACT_EMAIL = "info@abstract-technology.de";

type LinkedTextReplacement = {
  text: string;
  href: string;
  className?: string;
};

const defaultLinkClass =
  "font-semibold text-[var(--brand-orange)] underline";

function renderLink(
  replacement: LinkedTextReplacement,
  key: string,
): ReactNode {
  const className = replacement.className ?? defaultLinkClass;

  if (replacement.href.startsWith("/")) {
    return (
      <Link key={key} href={replacement.href} className={className}>
        {replacement.text}
      </Link>
    );
  }

  return (
    <a key={key} href={replacement.href} className={className}>
      {replacement.text}
    </a>
  );
}

export function renderLinkedText(
  text: string,
  replacements: LinkedTextReplacement[] = [
    {
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
  ],
) {
  let nodes: ReactNode[] = [text];

  replacements.forEach((replacement, replacementIndex) => {
    nodes = nodes.flatMap((node, nodeIndex) => {
      if (typeof node !== "string" || !node.includes(replacement.text)) {
        return [node];
      }

      const parts = node.split(replacement.text);

      return parts.flatMap((part, partIndex) => {
        const output: ReactNode[] = [];

        if (part) {
          output.push(part);
        }

        if (partIndex < parts.length - 1) {
          output.push(
            renderLink(
              replacement,
              `${replacement.text}-${replacementIndex}-${nodeIndex}-${partIndex}`,
            ),
          );
        }

        return output;
      });
    });
  });

  return <>{nodes}</>;
}
