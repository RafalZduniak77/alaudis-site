import FactoryTourPage from "@/components/factory-tour/FactoryTourPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "zwiedzanieManufaktury");

export default function Page() {
  return <FactoryTourPage language="EN" />;
}
