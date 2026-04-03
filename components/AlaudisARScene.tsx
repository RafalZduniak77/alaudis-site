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
// 7. całkowicie wyłączono hint "Drag to spin"
// 8. dodano twarde ukrywanie hintu po stronie DOM
//
// UWAGA:
// Startowe wyłączenie auto obrotu ustawiane jest w:
// components/AlaudisARPreview.tsx
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  // REF DLA OBSZARU SIRV
  // --------------------------------------------------------
  const sirvHostRef = useRef<HTMLDivElement | null>(null);

  // --------------------------------------------------------
  // WYBÓR TŁA
  // --------------------------------------------------------
  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  // --------------------------------------------------------
  // OPCJE SIRV
  // --------------------------------------------------------
  // Tutaj sterujemy:
  // - fullscreen
  // - całkowitym wyłączeniem hint message
  // - wyłączeniem efektów hint
  // - zoomem
  // - auto obrotem ON/OFF
  const sirvOptions = useMemo(() => {
    return [
      "fullscreen.enable:true",
      "hint.message.enable:false",
      "hint.onStart.effect:none",
      "hint.onVisible.effect:none",
      "hint.onInactive.effect:none",
      "spin.allowZoom:true",
      `spin.autospin.enable:${autoRotateEnabled ? "true" : "false"}`,
    ].join(";");
  }, [autoRotateEnabled]);

  // --------------------------------------------------------
  // FUNKCJA TWARDO UKRYWAJĄCA NAPIS "DRAG TO SPIN"
  // --------------------------------------------------------
  // Sirv czasem mimo opcji dalej dokleja własny hint do DOM.
  // Dlatego dodatkowo ręcznie chowamy wszystko,
  // co wygląda jak hint lub zawiera tekst "Drag to spin".
  const hideSirvHint = () => {
    const root = sirvHostRef.current;
    if (!root) return;

    const allNodes = Array.from(root.querySelectorAll<HTMLElement>("*"));

    allNodes.forEach((node) => {
      const className =
        typeof node.className === "string" ? node.className.toLowerCase() : "";
      const text = (node.textContent ?? "").trim().toLowerCase();
      const ariaLabel = (node.getAttribute("aria-label") ?? "")
        .trim()
        .toLowerCase();
      const title = (node.getAttribute("title") ?? "").trim().toLowerCase();

      const shouldHide =
        className.includes("hint") ||
        text.includes("drag to spin") ||
        ariaLabel.includes("drag to spin") ||
        title.includes("drag to spin");

      if (shouldHide) {
        node.style.setProperty("display", "none", "important");
        node.style.setProperty("opacity", "0", "important");
        node.style.setProperty("visibility", "hidden", "important");
        node.style.setProperty("pointer-events", "none", "important");
      }
    });
  };

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
        hideSirvHint();
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
      const handleLoad = () => activateSirv();
      existingScript.addEventListener("load", handleLoad, { once: true });

      return () => {
        cancelled = true;
        existingScript.removeEventListener("load", handleLoad);
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
      hideSirvHint();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [sirvReady, autoRotateEnabled, roomImage, roomVideo, modelLabel, selectedModelId]);

  // --------------------------------------------------------
  // OBSERWATOR DOM
  // --------------------------------------------------------
  // Gdy Sirv po chwili doda hint do środka, obserwator go od razu ukryje.
  useEffect(() => {
    if (!sirvReady) return;

    const root = sirvHostRef.current;
    if (!root) return;

    hideSirvHint();

    const observer = new MutationObserver(() => {
      hideSirvHint();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    const timers = [100, 300, 700, 1200].map((delay) =>
      window.setTimeout(() => {
        hideSirvHint();
      }, delay)
    );

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [sirvReady, autoRotateEnabled, selectedModelId]);

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
          <div ref={sirvHostRef} className="alaudis-sirv-host relative z-[1] h-full w-full">
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

      {/* GLOBALNE DOPIĘCIE CSS - dodatkowe twarde ukrycie hintu Sirv */}
      <style jsx global>{`
        .alaudis-sirv-host [class*="hint"],
        .alaudis-sirv-host [class*="Hint"],
        .alaudis-sirv-host [aria-label*="Drag to spin"],
        .alaudis-sirv-host [aria-label*="drag to spin"],
        .alaudis-sirv-host [title*="Drag to spin"],
        .alaudis-sirv-host [title*="drag to spin"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}
