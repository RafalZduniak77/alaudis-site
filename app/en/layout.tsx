import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
