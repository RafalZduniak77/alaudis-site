import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "tradycja");

export default function Page() {
  return <EditorialPage locale="en" page="tradycja" />;
}
