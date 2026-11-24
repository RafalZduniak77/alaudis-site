import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("it", "artysci");

export default function Page() {
  return <EditorialPage locale="it" page="artysci" />;
}
