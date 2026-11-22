import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "tradycja");

export default function Page() {
  return <EditorialPage locale="fr" page="tradycja" />;
}
