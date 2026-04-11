// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA WIELOJĘZYCZNA
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULT_ROOM_IMAGE,
  type LanguageKey,
  MODEL_VIEWER_SETTINGS,
  type ModelOption,
} from "./alaudisArConfig";
import { usePathname } from "next/navigation";

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
// ROZPOZNAWANIE JĘZYKA
// ----------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  if (pathname === "/en/odkryj-modele" || pathname.startsWith("/en/odkryj-modele")) {
    return "EN";
  }

  if (pathname === "/de/odkryj-modele" || pathname.startsWith("/de/odkryj-modele")) {
    return "DE";
  }

  if (pathname === "/fr/odkryj-modele" || pathname.startsWith("/fr/odkryj-modele")) {
    return "FR";
  }

  return "PL";
}

// ----------------------------------------------------------
// TEKSTY
// ----------------------------------------------------------
function getLabels(language: LanguageKey) {
  if (language === "EN") {
    return {
      experience: "Alaudis Experience",
      controlsBadge: "Rotate / Zoom / 360",
      loading: "Loading 360 preview...",
      controls: "Controls",
      activeSpin: "360 spin active",
      autoRotateOn: "Auto rotate ON",
      autoRotateOff: "Auto rotate OFF",
      zoomActive: "Zoom active",
    };
  }

  if (language === "DE") {
    return {
      experience: "Alaudis Experience",
      controlsBadge: "Drehung / Zoom / 360",
      loading: "360-Vorschau wird geladen...",
      controls: "Steuerung",
      activeSpin: "360-Spin aktiv",
      autoRotateOn: "Auto-Drehung EIN",
      autoRotateOff: "Auto-Drehung AUS",
      zoomActive: "Zoom aktiv",
    };
  }

  if (language === "FR") {
    return {
      experience: "Alaudis Experience",
      controlsBadge: "Rotation / Zoom / 360",
      loading: "Chargement de l’aperçu 360...",
      controls: "Commandes",
      activeSpin: "Spin 360 actif",
      autoRotateOn: "Rotation auto ON",
      autoRotateOff: "Rotation auto OFF",
      zoomActive: "Zoom actif",
    };
  }

  return {
    experience: "Doświadczenie Alaudis",
    controlsBadge: "Obrót / Zoom / 360",
    loading: "Ładowanie podglądu 360...",
    controls: "Sterowanie",
    activeSpin: "Spin 360 aktywny",
    autoRotateOn: "Auto obrót ON",
    autoRotateOff: "Auto obrót OFF",
    zoomActive: "Zoom aktywny",
  };
}

// ----------------------------------------------------------
// ADRESY SPINÓW 360
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

  if (normalized === "czerwony" || normalized === "red" || normalized === "rot" || normalized === "rouge" || normalized.includes("czerw") || normalized.includes("red") || normalized.includes("rot") || normalized.includes("roug")) {
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
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);
  const labels = useMemo(() => getLabels(language), [language]);

  const [sirvReady, setSirvReady] = useState(false);
  const sirvHostRef = useRef<HTMLDivElement | null>(null);

  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  const selectedSpinUrl = useMemo(() => {
    return getSpinUrlByModelId(selectedModelId);
  }, [selectedModelId]);

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
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/8 to-transparent" />

      <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          {labels.experience}
        </span>
      </div>

      <div className="pointer-events-none absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          {labels.controlsBadge}
        </span>
      </div>

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
            {labels.loading}
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="border-t border-white/10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              {labels.controls}
            </p>

            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:overflow-visible">
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
                {labels.activeSpin}
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
                {autoRotateEnabled ? labels.autoRotateOn : labels.autoRotateOff}
              </button>

              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                {labels.zoomActive}
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
