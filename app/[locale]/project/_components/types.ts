export type GlanceItem = {
  label: string;
  value: string;
};

export type WorkPackageItem = {
  label: string;
  title: string;
  lead: string;
  description: string;
};

export type ProjectPageMessages = {
  hero: {
    heading: string;
    subheading: string;
  };
  glance: {
    title: string;
    items: GlanceItem[];
  };
  why: {
    title: string;
    paragraphs: string[];
  };
  workPackages: {
    title: string;
    items: WorkPackageItem[];
  };
  priorities: {
    title: string;
    description: string;
  };
};
