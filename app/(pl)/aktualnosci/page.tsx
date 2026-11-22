import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pl", "aktualnosci");

export default function Page() {
  return <EditorialPage locale="pl" page="aktualnosci" />;
}
