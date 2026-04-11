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
import { useEffect, useMemo, useState } from "react";

// ----------------------------------------------------------
// PROPSY KOMPONENTU
// ----------------------------------------------------------
type Props = {
  imageSrc: string;
};

// ----------------------------------------------------------
// POMOCNICZA FUNKCJA
// ----------------------------------------------------------
function getHomeHref(pathname: string) {
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

  // --------------------------------------------------------
  // current = aktualnie widoczne zdjęcie
  // next    = nowe zdjęcie, które wchodzi płynnie na ekran
  // --------------------------------------------------------
  const [current, setCurrent] = useState(imageSrc);
  const [next, setNext] = useState<string | null>(null);

  // --------------------------------------------------------
  // PŁYNNA ZMIANA ZDJĘCIA
  // --------------------------------------------------------
  useEffect(() => {
    if (imageSrc !== current) {
      setNext(imageSrc);

      const timeout = setTimeout(() => {
        setCurrent(imageSrc);
        setNext(null);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [imageSrc, current]);

  return (
    <>
      {/* ====================================================
          TŁO CAŁEJ LEWEJ STRONY
         ==================================================== */}
      <Image src="/hero.png" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      {/* ====================================================
          GŁÓWNY OBSZAR PODGLĄDU
         ==================================================== */}
      <div className="absolute left-0 top-0 flex h-full w-[60%] items-center justify-center px-10">
        <div className="relative aspect-[4/3] w-full max-w-[650px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          {/* AKTUALNE ZDJĘCIE */}
          <Image
            src={current}
            alt=""
            fill
            className={`object-contain transition-opacity duration-300 ${
              next ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* NOWE ZDJĘCIE - tylko podczas przejścia */}
          {next && (
            <Image
              src={next}
              alt=""
              fill
              className="object-contain opacity-100 transition-opacity duration-300"
            />
          )}

          {/* DELIKATNA POŚWIATA NA DOLE */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* ====================================================
          PRZYCISK POWROTU
         ==================================================== */}
      <Link
        href={homeHref}
        className="absolute left-6 top-10 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg"
      >
        ←
      </Link>

      {/* ====================================================
          LOGO U GÓRY
         ==================================================== */}
      <div className="absolute left-[30%] top-10 z-30 -translate-x-1/2">
        <Image src="/logo-alaudis.png" alt="" width={120} height={50} />
      </div>
    </>
  );
}
