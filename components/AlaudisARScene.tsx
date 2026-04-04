// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA POD 2 SPINY 360:
// 1. CZARNY   -> obecny działający spin Sirv
// 2. CZERWONY -> nowy lokalny spin z folderu /public/spins/alaudis-360-red
//
// Co robi ta wersja:
// 1. przełącza źródło spinu zależnie od wybranego wariantu
// 2. zachowuje auto obrót ON / OFF
// 3. zachowuje własne tło zdjęciowe / video
// 4. zachowuje premium wygląd sekcji
// 5. ukrywa hint "Drag to spin"
// 6. odświeża Sirv po zmianie wariantu
//
// WAŻNE:
// Aby czerwony spin działał, plik .spin musi być dostępny tutaj:
// /public/spins/alaudis-360-red/ALAUDIS 2025 50 FOTEK CZERWONY.spin
//
// Jeśli nazwiesz ten plik inaczej, zmień tylko stałą RED_SPIN_URL poniżej.
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
// ADRESY SPINÓW 360
// ----------------------------------------------------------
// CZARNY -> obecny działający spin Sirv z chmury
const BLACK_SPIN_URL =
  "https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/ALAUDIS%20360%20WOJTEK.spin";

// CZERWONY -> nowy spin lokalny z public/spins/alaudis-360-red
const RED_SPIN_URL =
  "/spins/alaudis-360-red/ALAUDIS%202025%2050%20FOTEK%20CZERWONY.spin";

export default function AlaudisARScene({
  modelFile,
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
  // WYBÓR AKTUALNEGO SPINU
  // --------------------------------------------------------
  // Jeśli wybrany jest wariant "czerwony", ładujemy lokalny plik .spin.
  // W przeciwnym razie pokazujemy obecny działający czarny spin Sirv.
  const selectedSpinUrl =
    selectedModelId === "czerwony" ? RED_SPIN_URL : BLACK_SPIN_URL;

  // --------------------------------------------------------
  // OPCJE SIRV
  // --------------------------------------------------------
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
  // FUNKCJA UKRYWAJĄCA WYŁĄCZNIE HINT SIRV
  // --------------------------------------------------------
  const hideSirvHint = () => {
    const root = sirvHostRef.current;
    if (!root) return;

    const allNodes = Array.from(root.querySelectorAll<HTMLElement>("*"));

    allNodes.forEach((node) => {
      const className =
        typeof node.className === "string" ? node.className.toLowerCase() : "";

      const ariaLabel = (node.getAttribute("aria-label") ?? "")
        .trim()
        .toLowerCase();

      const title = (node.getAttribute("title") ?? "").trim().toLowerCase();

      const directText = Array.from(node.childNodes)
        .filter((child) => child.nodeType === Node.TEXT_NODE)
        .map((child) => child.textContent ?? "")
        .join(" ")
        .trim()
        .toLowerCase();

      const shouldHideByClass =
        className.includes("hint") || className.includes("sirv-hint");

      const shouldHideByAttr =
        ariaLabel.includes("drag to spin") || title.includes("drag to spin");

      const shouldHideByDirectText = directText.includes("drag to spin");

      if (!shouldHideByClass && !shouldHideByAttr && !shouldHideByDirectText) {
        return;
      }

      const target =
        node.closest<HTMLElement>('[class*="hint"], [class*="Hint"]') ??
        (shouldHideByDirectText ? node.parentElement ?? node : node);

      if (!target) return;
      if (target === root) return;
      if (target.classList.contains("Sirv")) return;

      target.style.setProperty("display", "none", "important");
      target.style.setProperty("opacity", "0", "important");
      target.style.setProperty("visibility", "hidden", "important");
      target.style.setProperty("pointer-events", "none", "important");
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
  }, [
    sirvReady,
    autoRotateEnabled,
    roomImage,
    roomVideo,
    modelLabel,
    modelFile,
    selectedModelId,
    selectedSpinUrl,
  ]);

  // --------------------------------------------------------
  // OBSERWATOR DOM
  // --------------------------------------------------------
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
  }, [sirvReady, autoRotateEnabled, selectedModelId, selectedSpinUrl]);

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
          <div
            ref={sirvHostRef}
            className="alaudis-sirv-host relative z-[1] h-full w-full"
          >
            <div
              key={`sirv-${selectedModelId}-${autoRotateEnabled ? "on" : "off"}`}
              className="Sirv h-full w-full"
              data-src={selectedSpinUrl}
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

      {/* DODATKOWE CSS POD HINT */}
      <style jsx global>{`
        .alaudis-sirv-host [class*="hint"],
        .alaudis-sirv-host [class*="Hint"],
        .alaudis-sirv-host [aria-label*="Drag to spin"],
        .alaudis-sirv-host [aria-label*="drag to spin"],
        .alaudis-sirv-host [title*="Drag to spin"],
        .alaudis-sirv-host [title*="drag to spin"] {
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}
