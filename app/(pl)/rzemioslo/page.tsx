import CraftPage from "@/components/craft/CraftPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pl", "rzemioslo");

export default function Page() {
  return <CraftPage language="PL" />;
}
