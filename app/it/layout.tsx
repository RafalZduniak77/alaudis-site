import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("it");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="it">{children}</RootShell>;
}
