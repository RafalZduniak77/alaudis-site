import CraftPage from "@/components/craft/CraftPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "rzemioslo");

export default function Page() {
  return <CraftPage language="FR" />;
}
