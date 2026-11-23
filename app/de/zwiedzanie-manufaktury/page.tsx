import FactoryTourPage from "@/components/factory-tour/FactoryTourPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("de", "zwiedzanieManufaktury");

export default function Page() {
  return <FactoryTourPage language="DE" />;
}
