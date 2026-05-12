// GA4 Measurement ID. Override per-environment with NEXT_PUBLIC_GA_ID if needed
// (Vercel project settings / .env.local); otherwise the property below is used.
// The old Universal Analytics ID was retired — UA stopped collecting data in July 2024.
export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-MTX9H05FMN";

export const isGaEnabled =
  typeof GA_TRACKING_ID === "string" && GA_TRACKING_ID.startsWith("G-");

// https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications
export const pageview = (url, title) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: title,
  });
};

export const event = ({ action, category, label, value }) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
