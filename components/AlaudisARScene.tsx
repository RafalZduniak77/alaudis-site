// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA POD SIRV 360 SPIN + AUTO OBRÓT ON/OFF
// ----------------------------------------------------------
// Co zmieniono w tej wersji:
// 1. renderowany jest gotowy spin 360 z Sirv
// 2. przywrócono przełącznik auto obrotu ON/OFF
// 3. gdy auto obrót jest włączony -> Sirv startuje z autospin
// 4. gdy auto obrót jest wyłączony -> Sirv pokazuje spin bez autospin
// 5. zachowano własne tło zdjęciowe / video
// 6. zachowano premium wygląd sekcji
//
// UWAGA:
// Startowe wyłączenie auto obrotu ustawiane jest w:
// components/AlaudisARPreview.tsx
// ==========================================================

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_ROOM_IMAGE,
  MODEL_VIEWER_SETTINGS,
  type ModelOption,
} from "./alaudisArConfig";

// ----------------------------------------------------------
// DEKLARACJA DLA WINDOW.SIRV
// ----------------------------------------------------------
declare global {
  interface Window {
    Sirv?: {
      start?: (selector?: string | Element) => void;
    };
  }
}

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
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
const SIRV_SPIN_URL =
  "https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/ALAUDIS%20360%20WOJTEK.spin";

export default function AlaudisARScene({
  modelLabel,
  roomImage,
  roomVideo,
  modelOptions,
  selectedModelId,
  onChangeModel,
  autoRotateEnabled,
  onToggleAutoRotate,
}: Props) {
  // --------------------------------------------------------
  // STAN GOTOWOŚCI SIRV
  // --------------------------------------------------------
  const [sirvReady, setSirvReady] = useState(false);

  // --------------------------------------------------------
  // WYBÓR TŁA
  // --------------------------------------------------------
  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  // --------------------------------------------------------
  // OPCJE SIRV
  // --------------------------------------------------------
  // Tutaj sterujemy auto obrotem ON/OFF.
  const sirvOptions = useMemo(() => {
    return [
      "fullscreen.enable:true",
      "hint.text:Przeciągnij aby obrócić",
      "spin.allowZoom:true",
      `spin.autospin.enable:${autoRotateEnabled ? "true" : "false"}`,
    ].join(";");
  }, [autoRotateEnabled]);

  // --------------------------------------------------------
  // ŁADOWANIE SKRYPTU SIRV
  // --------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    const activateSirv = () => {
      if (cancelled) return;
      setSirvReady(true);

      window.setTimeout(() => {
        window.Sirv?.start?.();
      }, 0);
    };

    if (window.Sirv) {
      activateSirv();
      return () => {
        cancelled = true;
      };
    }

    const existingScript = document.querySelector(
      'script[data-sirv-script="true"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", activateSirv, { once: true });

      return () => {
        cancelled = true;
      };
    }

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
  // ODŚWIEŻENIE SIRV PO ZMIANACH
  // --------------------------------------------------------
  useEffect(() => {
    if (!sirvReady) return;

    const timer = window.setTimeout(() => {
      window.Sirv?.start?.();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [sirvReady, autoRotateEnabled, roomImage, roomVideo, modelLabel]);

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
              key={`sirv-${selectedModelId}-${autoRotateEnabled ? "on" : "off"}`}
              className="Sirv h-full w-full"
              data-src={SIRV_SPIN_URL}
              data-options={sirvOptions}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ) : (
          <div className="relative z-[1] flex h-full w-full items-center justify-center text-white/50">
            Ładowanie podglądu 360...
          </div>
        )}
      </div>

      {/* DOLNY PASEK STEROWANIA */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="border-t border-white/10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            {/* LEWA STRONA */}
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Sterowanie
            </p>

            {/* PRAWA STRONA */}
            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:overflow-visible">
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
                Spin 360 aktywny
              </span>

              <button
                type="button"
                onClick={onToggleAutoRotate}
                className={
                  autoRotateEnabled
                    ? "whitespace-nowrap rounded-full border border-[#c79a5c]/40 bg-[#c79a5c]/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#f0cd98] transition hover:border-[#c79a5c]/60 hover:bg-[#c79a5c]/20"
                    : "whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-white/25"
                }
              >
                Auto obrót {autoRotateEnabled ? "ON" : "OFF"}
              </button>

              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                Zoom aktywny
              </span>

              <div className="relative shrink-0">
                <select
                  value={selectedModelId}
                  onChange={(e) => onChangeModel(e.target.value)}
                  className="appearance-none whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 pr-11 text-[11px] uppercase tracking-[0.22em] text-white/75 outline-none transition hover:border-white/25"
                >
                  {modelOptions.map((option) => (
                    <option
                      key={option.id}
                      value={option.id}
                      className="bg-[#111] text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-white/60">
                  ▼
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
