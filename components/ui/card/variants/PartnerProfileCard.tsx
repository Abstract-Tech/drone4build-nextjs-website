import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Chip, { type ChipVariant } from "@/components/ui/chip";
import Card from "../Card";

type PartnerBadge = {
  label: string;
  tone?: ChipVariant;
};

type PartnerProfileCardProps = {
  className?: string;
  countryFlag: string;
  description: string;
  legalName: string;
  location: string;
  logoAlt: string;
  logoSrc: string;
  name: string;
  role: string;
  websiteHref: string;
  websiteLabel: string;
  badges?: PartnerBadge[];
};

function PartnerProfileCard({
  badges = [],
  className,
  countryFlag,
  description,
  legalName,
  location,
  logoAlt,
  logoSrc,
  name,
  role,
  websiteHref,
  websiteLabel,
}: PartnerProfileCardProps) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-6 md:border-b-0 md:border-r">
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex min-h-20 items-center justify-center">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={140}
                height={84}
                className="h-auto max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex max-w-full items-start justify-center gap-2 text-center text-sm leading-snug text-slate-500">
              <span className="shrink-0" aria-hidden="true">
                {countryFlag}
              </span>
              <span className="max-w-[9rem] text-balance">{location}</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl text-(--brand-blue)">{name}</h3>
              <p className="mt-1 text-sm italic text-slate-500">
                {legalName}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-(--brand-orange)">
                {role}
              </p>
            </div>

            {badges.length > 0 ? (
              <div className="flex flex-wrap justify-end gap-2">
                {badges.map((badge) => (
                  <Chip
                    key={badge.label}
                    size="sm"
                    variant={badge.tone ?? "light"}
                    className="uppercase tracking-wide"
                  >
                    {badge.label}
                  </Chip>
                ))}
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-base leading-relaxed text-(--brand-blue)">
            {description}
          </p>

          <a
            href={websiteHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-orange) transition hover:underline"
          >
            <span>{websiteLabel}</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default PartnerProfileCard;
