import {
  ScrollRevealSection,
  SectionTitle,
} from "@/components/layout/section";
import type { ResultsPageMessages } from "./types";

type ResultsTimelineSectionProps = {
  timeline: ResultsPageMessages["timeline"];
};

export default function ResultsTimelineSection({
  timeline,
}: ResultsTimelineSectionProps) {
  return (
    <ScrollRevealSection className="border-b-0 bg-white">
      <SectionTitle>{timeline.title}</SectionTitle>

      <div className="relative mt-8">
        {timeline.events.map((event, index) => {
          const isLast = index === timeline.events.length - 1;

          return (
            <div
              key={`${event.date}-${event.label}`}
              className={
                isLast
                  ? "relative flex items-start gap-2.5"
                  : "relative flex items-start gap-2.5 pb-5"
              }
            >
              <div className="relative flex w-8 shrink-0 justify-center self-stretch">
                <div
                  className={
                    event.completed
                      ? "z-10 mt-1 h-3.5 w-3.5 rounded-full bg-(--brand-orange) ring-4 ring-white"
                      : "z-10 mt-1 h-3.5 w-3.5 rounded-full border-2 border-slate-300 bg-white ring-4 ring-white"
                  }
                />
                {!isLast && (
                  <div className="absolute -bottom-5 left-1/2 top-5 -translate-x-1/2 border-l border-slate-200" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-(--brand-orange)">
                  {event.date}
                </p>
                <p className="mt-1 text-base leading-relaxed text-(--brand-blue)">
                  {event.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollRevealSection>
  );
}
