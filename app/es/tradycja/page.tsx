import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es", "tradycja");

export default function Page() {
  return <EditorialPage locale="es" page="tradycja" />;
}
