import FactoryTourPage from "@/components/factory-tour/FactoryTourPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "zwiedzanieManufaktury");

export default function Page() {
  return <FactoryTourPage language="FR" />;
}
