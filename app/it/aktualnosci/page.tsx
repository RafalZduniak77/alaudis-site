import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("it", "aktualnosci");

export default function Page() {
  return <EditorialPage locale="it" page="aktualnosci" />;
}
