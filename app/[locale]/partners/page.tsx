import { getMessages } from "next-intl/server";
import PartnersCollaborationSection from "./_components/PartnersCollaborationSection";
import PartnersConsortiumSection from "./_components/PartnersConsortiumSection";
import PartnersHeroSection from "./_components/PartnersHeroSection";
import type { PartnersPageMessages } from "./_components/types";

export default async function Page() {
  const messages = await getMessages();
  const partners = messages.partnersPage as PartnersPageMessages;

  return (
    <main className="drone-page min-h-screen">
      <PartnersHeroSection hero={partners.hero} />
      <PartnersConsortiumSection consortium={partners.consortium} />
      <PartnersCollaborationSection
        collaboration={partners.collaboration}
      />
    </main>
  );
}
