import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("it", "tradycja");

export default function Page() {
  return <EditorialPage locale="it" page="tradycja" />;
}
