// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA POD 2 SPINY 360:
// 1. CZARNY   -> spin Sirv z chmury
// 2. CZERWONY -> lokalny spin z /public/spins/alaudis-360-red
//
// NAPRAWA:
// Sirv nie zawsze przeładowuje spin po samej zmianie data-src.
// Dlatego tutaj przy każdej zmianie wariantu budujemy instancję
// Sirv od nowa w kontenerze.
//
// DODATKOWO:
// Trzymamy logikę tylko dla 2 wariantów:
// - czarny
// - czerwony
//
// Jeśli selectedModelId = "czerwony" -> czerwony spin
// w każdym innym przypadku -> czarny spin
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
// CZARNY zostaje z Sirv cloud, bo już działa.
// CZERWONY idzie lokalnie z /public/spins/alaudis-360-red
// ----------------------------------------------------------
const BLACK_SPIN_URL =
  "https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/ALAUDIS%20360%20WOJTEK.spin";

const RED_SPIN_URL =
  "https://alaudis.sirv.com/Spins/alaudis-360/FOTKI%20ALAUDIS%20360/ALAUDIS%20360%20WOJTEK/CZERWONY%20ALAUDIS%2004-04/ALAUDIS%20CZERWONY%20360/ALAUDIS%20CZERWONY%20360/ALAUDIS%20CZERWONY%20360%20V2/ALAUDIS%20CZERWONY%20360%20V3/ALAUDIS%20CZERWONY%20360%20V4/ALAUDIS%20CZERWONY%20360%20V5/ALAUDIS%20CZERWONY%20360%20V5.spin";

// ----------------------------------------------------------
// WYBÓR AKTUALNEGO SPINU
// ----------------------------------------------------------
function getSpinUrlByModelId(modelId: string): string {
  const normalized = modelId
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (normalized === "czerwony" || normalized.includes("czerw")) {
    return RED_SPIN_URL;
  }

  return BLACK_SPIN_URL;
}

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
  const selectedSpinUrl = useMemo(() => {
    return getSpinUrlByModelId(selectedModelId);
  }, [selectedModelId]);

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
  // FUNKCJA UKRYWAJĄCA HINT SIRV
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
  // PEŁNE ODTWORZENIE INSTANCJI SIRV PRZY ZMIANIE SPINU
  // --------------------------------------------------------
  useEffect(() => {
    if (!sirvReady) return;

    const host = sirvHostRef.current;
    if (!host) return;

    host.innerHTML = "";

    const mount = document.createElement("div");
    mount.className = "Sirv h-full w-full";
    mount.setAttribute("data-src", selectedSpinUrl);
    mount.setAttribute("data-options", sirvOptions);
    mount.style.width = "100%";
    mount.style.height = "100%";

    host.appendChild(mount);

    const timer = window.setTimeout(() => {
      window.Sirv?.start?.(mount);
      hideSirvHint();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      host.innerHTML = "";
    };
  }, [
    sirvReady,
    selectedSpinUrl,
    sirvOptions,
    selectedModelId,
    autoRotateEnabled,
    roomImage,
    roomVideo,
    modelFile,
    modelLabel,
  ]);

  // --------------------------------------------------------
  // OBSERWATOR DOM POD UKRYWANIE HINTU
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
  }, [sirvReady, selectedSpinUrl, autoRotateEnabled, selectedModelId]);

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

        <div className="pointer-events-none absolute inset-0 z-0 bg-black/10" />

        {sirvReady ? (
          <div
            ref={sirvHostRef}
            className="alaudis-sirv-host relative z-[1] h-full w-full"
          />
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
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Sterowanie
            </p>

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

      {/* CSS POD HINT */}
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
