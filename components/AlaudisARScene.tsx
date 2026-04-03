// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA POD SIRV 360 SPIN
// ----------------------------------------------------------
// Co zmieniono w tej wersji:
// 1. usunięto renderowanie model-viewer 3D
// 2. dodano ładowanie Sirv JS
// 3. dodano osadzenie gotowego spinu 360 z Sirv
// 4. zachowano własne tło zdjęciowe / video
// 5. zmieniono badge z "AR" na "360"
// 6. pozostawiono wygląd sekcji premium
//
// UWAGA:
// Ta wersja pokazuje GOTOWY SPIN 360 z Sirv:
// https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/ALAUDIS%20360%20WOJTEK.spin
//
// Jeśli później dodasz kolejne spiny, można tutaj zrobić mapowanie
// osobnych spinów do osobnych modeli.
// ==========================================================

"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_ROOM_IMAGE,
  MODEL_VIEWER_SETTINGS,
  type ModelOption,
} from "./alaudisArConfig";

// ----------------------------------------------------------
// DEKLARACJA DLA WINDOW.SIRV
// ----------------------------------------------------------
// Sirv po załadowaniu skryptu dodaje obiekt window.Sirv.
// Dzięki temu TypeScript nie będzie zgłaszał błędów.
declare global {
  interface Window {
    Sirv?: {
      start?: () => void;
    };
  }
}

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
// Ten komponent dalej przyjmuje te same propsy,
// żeby nie rozwalać reszty projektu.
type Props = {
  modelFile: string;
  modelLabel: string;
  roomImage: string | null;
  roomVideo: string | null;
  modelOptions: ModelOption[];
  selectedModelId: string;
  onChangeModel: (value: string) => void;
  autoRotateEnabled: boolean;
  onToggleAutoRotate: () => void;
};

// ----------------------------------------------------------
// STAŁY ADRES GOTOWEGO SPINU SIRV
// ----------------------------------------------------------
// To jest gotowy projekt 360 z wyciętych zdjęć.
const SIRV_SPIN_URL =
  "https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/ALAUDIS%20360%20WOJTEK.spin";

export default function AlaudisARScene({
  modelLabel,
  roomImage,
  roomVideo,
}: Props) {
  // --------------------------------------------------------
  // STAN GOTOWOŚCI SIRV
  // --------------------------------------------------------
  // false = skrypt Sirv jeszcze się ładuje
  // true  = można już renderować spin 360
  const [sirvReady, setSirvReady] = useState(false);

  // --------------------------------------------------------
  // ŁADOWANIE SKRYPTU SIRV
  // --------------------------------------------------------
  // Jeśli skrypt już jest na stronie - używamy go.
  // Jeśli nie - dokładamy go dynamicznie.
  useEffect(() => {
    let cancelled = false;

    const activateSirv = () => {
      if (cancelled) return;
      setSirvReady(true);

      // krótki delay, żeby div zdążył się wyrenderować
      window.setTimeout(() => {
        window.Sirv?.start?.();
      }, 0);
    };

    // jeśli Sirv już jest gotowy
    if (window.Sirv) {
      activateSirv();
      return () => {
        cancelled = true;
      };
    }

    // jeśli skrypt już istnieje w DOM
    const existingScript = document.querySelector(
      'script[data-sirv-script="true"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", activateSirv, { once: true });

      return () => {
        cancelled = true;
      };
    }

    // jeśli skryptu jeszcze nie ma - dodajemy go
    const script = document.createElement("script");
    script.src = "https://scripts.sirv.com/sirvjs/v3/sirv.js";
    script.async = true;
    script.dataset.sirvScript = "true";
    script.onload = activateSirv;

    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.onload = null;
    };
  }, []);

  // --------------------------------------------------------
  // ODŚWIEŻENIE SPINU PO ZMIANIE TŁA
  // --------------------------------------------------------
  // Gdy zmienia się tło albo komponent odświeża się ponownie,
  // próbujemy ponownie zainicjować Sirv.
  useEffect(() => {
    if (!sirvReady) return;

    const timer = window.setTimeout(() => {
      window.Sirv?.start?.();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [sirvReady, roomImage, roomVideo, modelLabel]);

  // --------------------------------------------------------
  // WYBÓR TŁA
  // --------------------------------------------------------
  // Kolejność:
  // 1. jeśli jest własne zdjęcie -> użyj zdjęcia
  // 2. jeśli nie ma zdjęcia -> użyj domyślnego tła
  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_35%,rgba(0,0,0,0.55)_100%)] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      {/* GÓRNA DELIKATNA POŚWIATA */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/8 to-transparent" />

      {/* LEWY GÓRNY BADGE */}
      <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          Doświadczenie Alaudis
        </span>
      </div>

      {/* PRAWY GÓRNY BADGE */}
      <div className="pointer-events-none absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          Obrót / Zoom / 360
        </span>
      </div>

      {/* OBSZAR SCENY 360 */}
      <div
        className="relative w-full"
        style={{
          height: MODEL_VIEWER_SETTINGS.stageHeight,
          minHeight: MODEL_VIEWER_SETTINGS.stageMinHeight,
        }}
      >
        {/* TŁO VIDEO - ma pierwszeństwo nad zdjęciem */}
        {roomVideo ? (
          <video
            src={roomVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        ) : (
          // TŁO ZDJĘCIOWE
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${activeBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        {/* PRZYCIEMNIENIE NA TLE */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/10" />

        {/* SPIN 360 Z SIRV */}
        {sirvReady ? (
          <div className="relative z-[1] h-full w-full">
            <div
              className="Sirv h-full w-full"
              data-src={SIRV_SPIN_URL}
              data-options="fullscreen.enable:true;hint.text:Przeciągnij aby obrócić;spin.allowZoom:true;"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ) : (
          // EKRAN ŁADOWANIA
          <div className="relative z-[1] flex h-full w-full items-center justify-center text-white/50">
            Ładowanie podglądu 360...
          </div>
        )}
      </div>

      {/* DOLNY PASEK INFORMACYJNY */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="border-t border-white/10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            {/* LEWA STRONA PASKA */}
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Sterowanie
            </p>

            {/* PRAWA STRONA PASKA */}
            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:overflow-visible">
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
                Spin 360 aktywny
              </span>

              <span className="whitespace-nowrap rounded-full border border-[#c79a5c]/40 bg-[#c79a5c]/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#f0cd98]">
                Przeciągnij aby obrócić
              </span>

              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                Zoom aktywny
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
