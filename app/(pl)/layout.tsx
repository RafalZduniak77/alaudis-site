import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("pl");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pl">{children}</RootShell>;
}
