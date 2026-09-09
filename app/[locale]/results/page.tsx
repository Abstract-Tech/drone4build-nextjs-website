import { getMessages } from "next-intl/server";
import ResultsComingNextSection from "./_components/ResultsComingNextSection";
import ResultsHeroSection from "./_components/ResultsHeroSection";
import ResultsPublishedSection from "./_components/ResultsPublishedSection";
import ResultsTimelineSection from "./_components/ResultsTimelineSection";
import ResultsWorkshopsSection from "./_components/ResultsWorkshopsSection";
import type { ResultsPageMessages } from "./_components/types";

export default async function Page() {
  const messages = await getMessages();
  const results = messages.resultsPage as ResultsPageMessages;

  return (
    <main className="drone-page min-h-screen">
      <ResultsHeroSection hero={results.hero} />
      <ResultsPublishedSection published={results.published} />
      <ResultsWorkshopsSection workshops={results.inProgress} />
      <ResultsComingNextSection comingNext={results.comingNext} />
      <ResultsTimelineSection timeline={results.timeline} />
    </main>
  );
}
