import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Keep server reads and the browser-based Studio on the same dataset.
  env: { NEXT_PUBLIC_GALLERY_ENVIRONMENT: process.env.VERCEL_ENV || "development" },

  // Old or mistyped addresses lead to the right page instead of „404”.
  async redirects() {
    return [
      // www.alaudis.eu → alaudis.eu (one address for visitors and for Google).
      { source: "/:path*", has: [{ type: "host", value: "www.alaudis.eu" }], destination: "https://alaudis.eu/:path*", permanent: true },
      // Polish has no /pl prefix.
      { source: "/pl", destination: "/", permanent: true },
      { source: "/pl/:path*", destination: "/:path*", permanent: true },
      // „/fortepiany” alone has no page: the models are presented on the home page.
      { source: "/fortepiany", destination: "/", permanent: true },
      { source: "/:locale(en|de|fr|es|it)/fortepiany", destination: "/:locale", permanent: true },
      // Album with a typo in its address („facory”): the old links lead to the corrected one.
      { source: "/galeria/mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-facory", destination: "/galeria/mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-factory", permanent: true },
      { source: "/:locale(en|de|fr|es|it)/galeria/mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-facory", destination: "/:locale/galeria/mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-factory", permanent: true },
    ];
  },

  // Photos, films and 3D frames from /public rarely change: let browsers keep them
  // for a week (and refresh in the background) instead of asking again on every visit.
  // „:path+” (at least one segment) on purpose: „:path*” would also match the pages
  // /historia, /konfigurator, /kontakt and /rzemioslo and freeze their HTML for a week.
  async headers() {
    const longLived = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }];
    // Basic protection for every address: no MIME guessing, no embedding on foreign sites
    // (the gallery panel must not be framed), short referrer, no access to device sensors.
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
    ];
    return [
      { source: "/:path*", headers: security },
      ...[
        "/hero/:path+", "/historia/:path+", "/historia-video-web/:path+", "/galeria-home/:path+",
        "/konfigurator/:path+", "/kontakt/:path+", "/rzemioslo/:path+", "/spins/:path+", "/models/:path+",
        "/logo-alaudis.png", "/favicon-48.png", "/favicon-192.png", "/favicon.ico", "/og-alaudis.jpg",
      ].map((source) => ({ source, headers: longLived })),
    ];
  },
};

export default nextConfig;
