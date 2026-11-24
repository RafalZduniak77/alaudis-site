// ==========================================================
// PAGE - RZEMIOSŁO (wspólna dla PL / EN / DE / FR)
// ==========================================================
// Filmy z produkcji w dużych kartach (po dwie w rzędzie),
// a pod nimi jasny panel: zwiedzanie manufaktury + „Odkryj”.
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";
import SeoJsonLd from "@/components/SeoJsonLd";
import CraftHero from "./CraftHero";
import CraftVideoCard from "./CraftVideoCard";
import { getCraftVideos } from "@/lib/gallery/server";
import { craftContent, craftPoster, type CraftLanguage, type CraftVideo } from "./videos";

const UI: Record<CraftLanguage, {
  heroCta: string; pause: string; play: string;
  fullscreen: string;
  tour: { eyebrow: string; title: string; text: string; cta: string; alt: string };
  discover: string;
  cards: { title: string; href: string; image: string }[];
}> = {
  PL: {
    heroCta: "Zobacz filmy", pause: "Zatrzymaj film", play: "Odtwórz film",
    fullscreen: "Pełny ekran",
    tour: { eyebrow: "Manufaktura · Kalisz", title: "Zobacz to na własne oczy", text: "Bezpłatne, około czterogodzinne oprowadzanie po manufakturze ALAUDIS — od drewna po ostatnią intonację.", cta: "Zwiedzanie manufaktury", alt: "Fortepiany w atelier ALAUDIS w Kaliszu" },
    discover: "Odkryj",
    cards: [
      { title: "Obejrzyj modele w 3D", href: "/odkryj-modele?model=178", image: "/galeria-home/10.jpg" },
      { title: "Skonfiguruj swój fortepian", href: "/konfigurator", image: "/galeria-home/11.jpg" },
      { title: "Posłuchaj brzmienia", href: "/galeria?dzial=video", image: "/rzemioslo/brzmienie-leszek-mozdzer-gala.jpg" },
    ],
  },
  EN: {
    heroCta: "Watch the films", pause: "Pause the film", play: "Play the film",
    fullscreen: "Full screen",
    tour: { eyebrow: "Manufactory · Kalisz", title: "See it with your own eyes", text: "A free guided tour of the ALAUDIS manufactory, about four hours long — from the wood to the final voicing.", cta: "Manufactory tour", alt: "Grand pianos in the ALAUDIS atelier in Kalisz" },
    discover: "Discover",
    cards: [
      { title: "View the models in 3D", href: "/en/odkryj-modele?model=178", image: "/galeria-home/10.jpg" },
      { title: "Configure your piano", href: "/en/konfigurator", image: "/galeria-home/11.jpg" },
      { title: "Hear the sound", href: "/en/galeria?dzial=video", image: "/rzemioslo/brzmienie-leszek-mozdzer-gala.jpg" },
    ],
  },
  DE: {
    heroCta: "Filme ansehen", pause: "Film anhalten", play: "Film abspielen",
    fullscreen: "Vollbild",
    tour: { eyebrow: "Manufaktur · Kalisz", title: "Erleben Sie es mit eigenen Augen", text: "Eine kostenlose, etwa vierstündige Führung durch die ALAUDIS Manufaktur — vom Holz bis zur letzten Intonation.", cta: "Manufakturführung", alt: "Flügel im ALAUDIS Atelier in Kalisz" },
    discover: "Entdecken",
    cards: [
      { title: "Modelle in 3D ansehen", href: "/de/odkryj-modele?model=178", image: "/galeria-home/10.jpg" },
      { title: "Ihren Flügel konfigurieren", href: "/de/konfigurator", image: "/galeria-home/11.jpg" },
      { title: "Den Klang hören", href: "/de/galeria?dzial=video", image: "/rzemioslo/brzmienie-leszek-mozdzer-gala.jpg" },
    ],
  },
  FR: {
    heroCta: "Voir les films", pause: "Mettre le film en pause", play: "Lire le film",
    fullscreen: "Plein écran",
    tour: { eyebrow: "Manufacture · Kalisz", title: "Voyez-le de vos propres yeux", text: "Une visite guidée gratuite de la manufacture ALAUDIS, d’environ quatre heures — du bois jusqu’à l’harmonisation finale.", cta: "Visite de la manufacture", alt: "Pianos à queue dans l’atelier ALAUDIS à Kalisz" },
    discover: "Découvrir",
    cards: [
      { title: "Voir les modèles en 3D", href: "/fr/odkryj-modele?model=178", image: "/galeria-home/10.jpg" },
      { title: "Configurer votre piano", href: "/fr/konfigurator", image: "/galeria-home/11.jpg" },
      { title: "Écouter le son", href: "/fr/galeria?dzial=video", image: "/rzemioslo/brzmienie-leszek-mozdzer-gala.jpg" },
    ],
  },
};

function Arrow() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-black">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
    </span>
  );
}

// Films come from the gallery panel (section „Rzemiosło”); the bundled list is the fallback.
async function loadVideos(language: CraftLanguage): Promise<CraftVideo[]> {
  const locale = language.toLowerCase() as "pl" | "en" | "de" | "fr";
  const cms = await getCraftVideos().catch(() => []);
  if (!cms.length) return craftContent[language].videos;
  return cms.map((video) => ({
    src: video.src,
    // Sanity image CDN: sharp but light first frame.
    poster: `${video.poster}?w=1600&fit=max&auto=format&q=80`,
    posterSource: video.poster,
    title: video.title[locale]?.trim() || video.title.pl || "",
    text: video.description?.[locale]?.trim() || video.description?.pl || "",
  }));
}

export default async function CraftPage({ language }: { language: CraftLanguage }) {
  const copy = craftContent[language];
  const ui = UI[language];
  const prefix = language === "PL" ? "" : `/${language.toLowerCase()}`;
  const locale = language.toLowerCase() as "pl" | "en" | "de" | "fr";
  // The final-voicing film opens the page as a banner; the rest fill the grid.
  const allVideos = await loadVideos(language);
  const hero = allVideos[allVideos.length - 1];
  const videos = allVideos.slice(0, -1);

  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale={locale} page="rzemioslo" />
      {/* The banner shows this still first: the browser fetches it straight away. */}
      <link rel="preload" as="image" href={hero.poster ?? craftPoster(hero.src)} fetchPriority="high" />
      <ModelPageTopBar backHref={prefix || "/"} activeLanguage={language} />

      {/* BANER: ostatni film (intonacja) na cały ekran */}
      <CraftHero video={hero} eyebrow={copy.eyebrow} title={copy.title} cta={ui.heroCta} pauseLabel={ui.pause} playLabel={ui.play} />

      {/* FILMY */}
      <section id="filmy" className="scroll-mt-24 px-4 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-[1520px]">
          <p className="max-w-3xl leading-8 text-white/92 sm:text-[17px]">{copy.intro}</p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-7">
            {videos.map((video, index) => (
              <CraftVideoCard key={video.src} video={video} index={index} total={videos.length} fullscreenLabel={ui.fullscreen} locale={locale} wide={videos.length % 2 === 1 && index === videos.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* JASNY PANEL: ZWIEDZANIE + ODKRYJ */}
      <section className="px-3 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 text-[#111] shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-[32px] bg-[#0b0b0b] text-white lg:grid-cols-2 lg:rounded-[40px]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                <Image src="/galeria-home/Salonik 1.jpg" alt={ui.tour.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#d3bd8b]">{ui.tour.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">{ui.tour.title}</h2>
                <p className="mt-5 max-w-md leading-8 text-white/92">{ui.tour.text}</p>
                <Link href={`${prefix}/zwiedzanie-manufaktury`} className="mt-9 inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm uppercase tracking-[0.2em] text-black transition hover:bg-[#d3bd8b]">
                  {ui.tour.cta}
                </Link>
              </div>
            </div>

            <h2 className="mt-20 text-center text-4xl font-light tracking-[-0.02em] sm:text-5xl">{ui.discover}</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ui.cards.map((card) => (
                <Link key={card.href} href={card.href} prefetch={false} className="group relative isolate flex aspect-square items-end overflow-hidden rounded-[32px] bg-[#0b0b0b] text-white">
                  <Image src={card.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="-z-10 object-cover transition duration-700 group-hover:scale-105" />
                  <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-black/70" />
                  <span className="flex w-full items-end justify-between gap-4 p-7 sm:p-8">
                    <span className="text-2xl font-light leading-tight">{card.title}</span>
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
