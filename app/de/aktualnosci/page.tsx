import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("de", "aktualnosci");

export default function Page() {
  return <EditorialPage locale="de" page="aktualnosci" />;
}
