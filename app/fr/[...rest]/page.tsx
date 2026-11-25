import { notFound } from "next/navigation";

// Każdy adres, którego nie ma w tej wersji językowej, pokazuje naszą stronę
// „nie znaleziono” (not-found.tsx obok) — z menu, stopką i we właściwym języku.
export default function UnknownPage() {
  notFound();
}
