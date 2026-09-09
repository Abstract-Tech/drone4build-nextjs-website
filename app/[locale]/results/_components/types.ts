export type ResultsFinding = {
  description: string;
  title: string;
};

export type ResultsTag = {
  label: string;
  variant?: "orange" | "light";
};

export type ResultsDeliverableSection = {
  title: string;
  summary: string;
  tags: ResultsTag[];
  cta?: {
    download?: string;
    href: string;
    label: string;
  };
  findings: ResultsFinding[];
};

export type ResultsUpcomingItem = {
  deliverable: string;
  expected: string;
  status: string;
  statusVariant?: "orange" | "light";
  description: string;
  tags?: ResultsTag[];
};

export type ResultsTimelineItem = {
  completed?: boolean;
  date: string;
  label: string;
};

export type ResultsCountry = {
  flag: string;
  label: string;
};

export type ResultsPageMessages = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  published: {
    sections: ResultsDeliverableSection[];
  };
  workshops: {
    title: string;
    description: string;
    countries: ResultsCountry[];
  };
  inProgress: ResultsDeliverableSection & {
    eyebrow: string;
    subtitle: string;
  };
  comingNext: {
    title: string;
    intro: string;
    items: ResultsUpcomingItem[];
  };
  timeline: {
    title: string;
    events: ResultsTimelineItem[];
  };
};
