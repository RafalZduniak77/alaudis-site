import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "artysci");

export default function Page() {
  return <EditorialPage locale="en" page="artysci" />;
}
