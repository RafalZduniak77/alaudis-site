import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon-alaudis-transparent-v4.png", sizes: "1024x1024", type: "image/png" }],
    apple: "/apple-touch-icon-alaudis-transparent-v4.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
