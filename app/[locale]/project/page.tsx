import { getMessages } from "next-intl/server";
import ProjectAtAGlanceSection from "./_components/ProjectAtAGlanceSection";
import ProjectHeroSection from "./_components/ProjectHeroSection";
import ProjectPrioritiesSection from "./_components/ProjectPrioritiesSection";
import ProjectWhySection from "./_components/ProjectWhySection";
import ProjectWorkPackagesSection from "./_components/ProjectWorkPackagesSection";
import type { ProjectPageMessages } from "./_components/types";

export default async function Page() {
  const messages = await getMessages();
  const project = messages.projectPage as ProjectPageMessages;

  return (
    <main className="drone-page min-h-screen">
      <ProjectHeroSection hero={project.hero} />
      <ProjectAtAGlanceSection glance={project.glance} />
      <ProjectWhySection why={project.why} />
      <ProjectWorkPackagesSection workPackages={project.workPackages} />
      <ProjectPrioritiesSection priorities={project.priorities} />
    </main>
  );
}
