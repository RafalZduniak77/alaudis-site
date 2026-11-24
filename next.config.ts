import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },

  // Photos, films and 3D frames from /public rarely change: let browsers keep them
  // for a week (and refresh in the background) instead of asking again on every visit.
  async headers() {
    const longLived = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }];
    return [
      "/hero/:path*", "/historia/:path*", "/historia-video-web/:path*", "/galeria-home/:path*",
      "/konfigurator/:path*", "/kontakt/:path*", "/rzemioslo/:path*", "/spins/:path*", "/models/:path*",
      "/logo-alaudis.png", "/favicon-48.png", "/favicon-192.png", "/favicon.ico", "/og-alaudis.jpg",
    ].map((source) => ({ source, headers: longLived }));
  },
};

export default nextConfig;
