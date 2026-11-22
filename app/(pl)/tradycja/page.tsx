import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pl", "tradycja");

export default function Page() {
  return <EditorialPage locale="pl" page="tradycja" />;
}
