import { Suspense } from "react";
import KonfiguratorShell from "../../components/konfigurator/KonfiguratorShell";

export default function KonfiguratorPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <KonfiguratorShell />
    </Suspense>
  );
}
