import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "artysci");

export default function Page() {
  return <EditorialPage locale="fr" page="artysci" />;
}
