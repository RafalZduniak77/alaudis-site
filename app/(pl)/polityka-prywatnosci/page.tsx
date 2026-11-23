import PrivacyPolicyPage from "@/components/privacy/PrivacyPolicyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pl", "politykaPrywatnosci");

export default function Page() {
  return <PrivacyPolicyPage locale="pl" />;
}
