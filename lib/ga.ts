import ReactGA from "react-ga4";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;

export const initGA = () => {
  if (!GA_ID) return;
  ReactGA.initialize(GA_ID);
};

export const trackPageView = (url: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: url,
  });
};

export const trackClick = (label: string) => {
  ReactGA.event({
    category: "engagement",
    action: "click",
    label,
  });
};
