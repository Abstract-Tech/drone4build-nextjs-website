import InspireSection from "./_components/InspireSection";
import AboutSection from "./_components/AboutSection";
import AddressingCriticalChallengesSection from "./_components/AddressingCriticalChallengesSection";
import InnovationMatrixSection from "./_components/InnovationMatrixSection";
import ProjectObjectivesSection from "./_components/ProjectObjectivesSection";
import WorkPackagesSection from "./_components/WorkPackagesSection";
import ImpactSection from "./_components/ImpactSection";
import GetInvolvedSection from "./_components/GetInvolvedSection";
import PartnersSection from "./_components/PartnersSection";
import SocialSection from "./_components/SocialSection";
import ConnectSection from "./_components/ConnectSection";

export default function Home() {
  return (
    <main className="drone-page">
      <div className="drone-main">
        <InspireSection />
        <AboutSection />
        <AddressingCriticalChallengesSection />
        <ProjectObjectivesSection />
        <InnovationMatrixSection />
        <WorkPackagesSection />
        <ImpactSection />
        <GetInvolvedSection />
        <PartnersSection />
        <SocialSection />
        <ConnectSection />
      </div>
    </main>
  );
}
