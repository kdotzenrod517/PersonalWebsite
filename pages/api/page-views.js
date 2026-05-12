import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Returns the total Google Analytics 4 page-view count for the site.
//
// Required env vars (set in Vercel / .env.local):
//   GA4_PROPERTY_ID      - numeric GA4 property id (e.g. 123456789)
//   GOOGLE_CLIENT_EMAIL  - service-account email with GA4 read access
//   GOOGLE_PRIVATE_KEY   - service-account private key (PEM; \n-escaped is fine)
//
// If credentials are missing or the API errors, responds with { pageViews: 0 }
// so the footer counter degrades gracefully instead of breaking the page.
export default async function handler(req, res) {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const startDate = req.query.startDate || "2020-01-01";

  if (!propertyId || !clientEmail || !privateKey) {
    return res.status(200).json({ pageViews: 0, configured: false });
  }

  try {
    const client = new BetaAnalyticsDataClient({
      credentials: { client_email: clientEmail, private_key: privateKey },
    });

    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      metrics: [{ name: "screenPageViews" }],
    });

    const pageViews = Number(
      response?.rows?.[0]?.metricValues?.[0]?.value ?? 0
    );

    // Cache at the edge for an hour; GA data isn't real-time anyway.
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    return res.status(200).json({ pageViews });
  } catch (err) {
    console.error("page-views error:", err.message);
    return res.status(200).json({ pageViews: 0, error: err.message });
  }
}
