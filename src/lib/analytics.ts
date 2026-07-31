/**
 * MANI Analytics & Tracking Event Helper
 * Grounded in Section 24 of docs.md
 * Integrates Google Analytics, Klaviyo CRM, Meta Pixel, and Search Console
 */

export interface TrackEventPayload {
  eventName:
    | "page_view"
    | "collection_view"
    | "product_view"
    | "add_to_cart"
    | "remove_from_cart"
    | "checkout_initiated"
    | "purchase"
    | "newsletter_signup"
    | "community_signup"
    | "beta_signup"
    | "video_play"
    | "video_completion"
    | "video_category_filter"
    | "app_page_visit";
  properties?: Record<string, any>;
}

export const trackEvent = ({ eventName, properties = {} }: TrackEventPayload) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[MANI Analytics Event]: ${eventName}`, properties);
  }

  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }

  if (typeof window !== "undefined" && (window as any)._learnq) {
    (window as any)._learnq.push(["track", eventName, properties]);
  }

  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  trackEvent({ eventName: "page_view", properties: { page_url: url } });
};

export const trackAddToCart = (product: { id: string; name: string; price: string | number }) => {
  trackEvent({ eventName: "add_to_cart", properties: product });
};

export const trackBetaSignup = (email: string) => {
  trackEvent({ eventName: "beta_signup", properties: { email } });
};

export const trackCommunitySignup = (email: string) => {
  trackEvent({ eventName: "community_signup", properties: { email } });
};

export const trackVideoView = (title: string, category: string) => {
  trackEvent({ eventName: "video_play", properties: { title, category } });
};
