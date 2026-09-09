"use client";

import Chip from "@/components/ui/chip";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { ProjectPageMessages } from "./types";

type ProjectWorkPackagesSectionProps = {
  workPackages: ProjectPageMessages["workPackages"];
};

export default function ProjectWorkPackagesSection({
  workPackages,
}: ProjectWorkPackagesSectionProps) {
  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{workPackages.title}</SectionTitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {workPackages.items.map((item) => (
          <ContentCard
            key={item.label}
            titleRowClassName="items-start"
            icon={
              <Chip variant="orange" size="sm" className="min-w-14">
                {item.label}
              </Chip>
            }
            title={
              <div>
                <div className="text-xl uppercase tracking-wide text-(--brand-blue)">
                  {item.title}
                </div>
                <div className="mt-1 text-sm font-semibold text-(--brand-orange)">
                  {item.lead}
                </div>
              </div>
            }
            description={item.description}
            titleClassName="flex-1"
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
}
