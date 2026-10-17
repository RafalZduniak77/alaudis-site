import type { Metadata } from "next";
import Link from "next/link";
import { galleryProjectId } from "@/lib/gallery/config";
import GalleryStudio from "@/components/gallery/GalleryStudio";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Panel galerii ALAUDIS — wersja próbna", robots: { index: false, follow: false } };

export default function StudioPage() {
  if (galleryProjectId) return <GalleryStudio />;
  return <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white"><div className="mx-auto max-w-2xl">
    <p className="text-xs uppercase tracking-[.25em] text-[#d3bd8b]">ALAUDIS · panel galerii</p>
    <h1 className="mb-6 mt-8 text-3xl font-light">Panel oczekuje na połączenie z Sanity.</h1>
    <p className="mb-6 leading-8 text-white/70">Podgląd wyglądu galerii już działa. Dodawanie zdjęć i publikowanie albumów wymaga jeszcze jednorazowego połączenia konta CMS. Ta strona nie zapisuje plików i nie zastępuje gotowego panelu.</p>
    <ol className="ml-5 list-decimal space-y-4 text-sm leading-7 text-white/80"><li>Zaloguj się w Sanity i utwórz bezpłatny projekt „ALAUDIS Galeria”.</li><li>Utwórz publiczny zestaw danych <code>gallery_preview</code>.</li><li>Połącz identyfikator projektu i zezwól na logowanie z adresu tego podglądu.</li></ol>
    <p className="my-7 text-sm leading-7 text-white/65">Po podłączeniu w tym miejscu pojawi się logowanie Sanity, a za nim polski panel z albumami, przesyłaniem wielu zdjęć, wyborem okładki i publikacją. Dane próbne pozostaną oddzielone od strony alaudis.eu.</p>
    <div className="flex flex-wrap gap-4"><a className="rounded-full border border-white/40 px-6 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4" href="https://www.sanity.io/manage" target="_blank" rel="noreferrer">Otwórz Sanity</a><Link className="rounded-full border border-white/40 px-6 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4" href="/galeria">Obejrzyj galerię</Link></div>
  </div></main>;
}
