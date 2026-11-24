import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es", "aktualnosci");

export default function Page() {
  return <EditorialPage locale="es" page="aktualnosci" />;
}
