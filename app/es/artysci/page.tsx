import EditorialPage from "@/components/EditorialPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es", "artysci");

export default function Page() {
  return <EditorialPage locale="es" page="artysci" />;
}
