import CraftPage from "@/components/craft/CraftPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("it", "rzemioslo");

export default function Page() {
  return <CraftPage language="IT" />;
}
