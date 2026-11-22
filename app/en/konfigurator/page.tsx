import { Suspense } from "react";
import KonfiguratorFallback from "@/components/konfigurator/KonfiguratorFallback";
import KonfiguratorShell from "@/components/konfigurator/KonfiguratorShell";

export default function KonfiguratorPage() {
  return (
    <Suspense fallback={<KonfiguratorFallback locale="en" />}>
      <KonfiguratorShell />
    </Suspense>
  );
}
