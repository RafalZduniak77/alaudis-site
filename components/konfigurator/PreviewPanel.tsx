//
// ==========================================================
// PREVIEW PANEL
// ==========================================================
// To jest lewy panel podglądu w konfiguratorze.
//
// Za co odpowiada ten plik:
// 1. pokazuje tło całej lewej części ekranu
// 2. pokazuje główne zdjęcie aktualnego podglądu
// 3. robi płynne przejście między zdjęciami
// 4. pokazuje przycisk powrotu do właściwej strony głównej języka
// 5. pokazuje logo Alaudis u góry
// ==========================================================

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

// ----------------------------------------------------------
// PROPSY KOMPONENTU
// ----------------------------------------------------------
type Props = {
  imageSrc: string;
};

// ----------------------------------------------------------
// POMOCNICZA FUNKCJA
// ----------------------------------------------------------
function getHomeHref(pathname: string): "/" | "/en" | "/de" | "/fr" {
  if (pathname === "/en/konfigurator" || pathname.startsWith("/en/konfigurator")) {
    return "/en";
  }

  if (pathname === "/de/konfigurator" || pathname.startsWith("/de/konfigurator")) {
    return "/de";
  }

  if (pathname === "/fr/konfigurator" || pathname.startsWith("/fr/konfigurator")) {
    return "/fr";
  }

  return "/";
}

export default function PreviewPanel({ imageSrc }: Props) {
  const pathname = usePathname() || "/";
  const homeHref = useMemo(() => getHomeHref(pathname), [pathname]);
  const labels = {
    "/": {
      back: "Powrót do strony głównej",
      preview: "Podgląd wybranej opcji Alaudis",
      loading: "Wczytywanie zdjęcia…",
      unavailable: "Zdjęcie tej opcji jest niedostępne.",
    },
    "/en": {
      back: "Back to homepage",
      preview: "Preview of the selected Alaudis option",
      loading: "Loading photo…",
      unavailable: "A photo of this option is unavailable.",
    },
    "/de": {
      back: "Zurück zur Startseite",
      preview: "Vorschau der gewählten Alaudis-Option",
      loading: "Foto wird geladen…",
      unavailable: "Für diese Option ist kein Foto verfügbar.",
    },
    "/fr": {
      back: "Retour à l’accueil",
      preview: "Aperçu de l’option Alaudis sélectionnée",
      loading: "Chargement de la photo…",
      unavailable: "La photo de cette option n’est pas disponible.",
    },
  }[homeHref];

  // Keep the previous photo visible until the selected photo has loaded.
  const [current, setCurrent] = useState(imageSrc);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const isLoading = imageSrc !== current;
  const hasError = failedImage === imageSrc;
  const imageSizes =
    "(min-width: 640px) and (max-width: 1023px) and (max-height: 599px) 40vw, (max-width: 1023px) min(calc(100vw - 32px), 760px), (max-width: 1360px) calc(100vw - 600px), 760px";

  // Stable handlers prevent Next/Image from restarting requests on each render.
  const handleCurrentError = useCallback(() => setFailedImage(current), [current]);
  const handleNextError = useCallback(() => setFailedImage(imageSrc), [imageSrc]);
  const handleNextLoad = useCallback(() => {
    setCurrent(imageSrc);
    setFailedImage(null);
  }, [imageSrc]);

  return (
    <>
      {/* ====================================================
          TŁO CAŁEJ LEWEJ STRONY
         ==================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_45%,#272219_0%,#111111_60%,#0a0a0a_100%)]"
      />

      {/* ====================================================
          GŁÓWNY OBSZAR PODGLĄDU
         ==================================================== */}
      <div className="configurator-preview relative z-10 flex w-full items-center justify-center border-b border-white/10 px-4 pb-4 pt-20 sm:px-6 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[calc(100%-520px)] lg:border-0 lg:px-10 lg:py-0">
        <div className="relative aspect-[4/3] max-h-[30svh] w-full max-w-[760px] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl lg:max-h-none">
          {/* AKTUALNE ZDJĘCIE */}
          <Image
            src={encodeURI(current)}
            alt={labels.preview}
            fill
            priority
            sizes={imageSizes}
            onError={handleCurrentError}
            className={`object-contain transition-opacity duration-300 ${
              hasError ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Preload the selected photo before replacing the current one. */}
          {isLoading && (
            <Image
              key={imageSrc}
              src={encodeURI(imageSrc)}
              alt=""
              aria-hidden="true"
              fill
              loading="eager"
              sizes={imageSizes}
              onLoad={handleNextLoad}
              onError={handleNextError}
              className="object-contain opacity-0"
            />
          )}

          {/* DELIKATNA POŚWIATA NA DOLE */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/4 to-transparent" />

          {hasError ? (
            <p role="status" className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/85">
              {labels.unavailable}
            </p>
          ) : isLoading ? (
            <p role="status" className="absolute inset-x-0 bottom-0 bg-black/75 px-3 py-2 text-center text-xs text-white/85">
              {labels.loading}
            </p>
          ) : null}
        </div>
      </div>

      {/* ====================================================
          PRZYCISK POWROTU
         ==================================================== */}
      <Link
        href={homeHref}
        aria-label={labels.back}
        className="absolute left-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg lg:top-10 lg:h-12 lg:w-12"
      >
        ←
      </Link>

      {/* ====================================================
          LOGO U GÓRY
         ==================================================== */}
      <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2 lg:left-[calc((100%-520px)/2)] lg:top-10">
        <Image
          src="/logo-alaudis.png"
          alt="Logo Alaudis"
          width={77}
          height={25}
          priority
          className="h-auto w-[58px] object-contain opacity-95 sm:w-[60px] md:w-[77px]"
        />
      </div>
    </>
  );
}
