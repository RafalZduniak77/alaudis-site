// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// WERSJA WIELOJĘZYCZNA
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
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
  "https://alaudis.sirv.com/ALAUDIS%20CZARNY/ALAUDIS%20CZARNY.spin";

const RED_SPIN_URL =
  "https://alaudis.sirv.com/ALAUDIS%20CZERWONY/ALAUDIS%20CZERWONY.spin";

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
  selectedModelId,
  autoRotateEnabled,
  onToggleAutoRotate,
}: Props) {
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);
  const labels = useMemo(() => getLabels(language), [language]);

  const [sirvReady, setSirvReady] = useState(false);
  const sirvHostRef = useRef<HTMLDivElement | null>(null);


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
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/84">
          {labels.experience}
        </span>
      </div>

      <div className="pointer-events-none absolute right-16 top-5 z-20 hidden rounded-full sm:block border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/84">
          {labels.controlsBadge}
        </span>
      </div>

      <div
        className="alaudis-stage relative w-full"
        style={{
          height: MODEL_VIEWER_SETTINGS.stageHeight,
          minHeight: MODEL_VIEWER_SETTINGS.stageMinHeight,
        }}
      >
        {/* TŁO: film lub zdjęcie klienta, a domyślnie — studio ALAUDIS
            (ściana, błyszcząca podłoga, światło z góry). */}
        {roomVideo ? (
          <video
            src={roomVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        ) : roomImage ? (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${roomImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div className="alaudis-studio" aria-hidden="true">
            <div className="alaudis-studio-wall" />
            <div className="alaudis-studio-floor" />
            <div className="alaudis-studio-light" />
            <div className="alaudis-studio-vignette" />
          </div>
        )}

        {/* CIEŃ POD FORTEPIANEM — dzięki niemu instrument stoi na podłodze.
            Ramka ma proporcje zdjęć 360 (3:2), więc cień trafia pod nogi
            na każdym ekranie. */}
        <div className="alaudis-stage-frame" aria-hidden="true">
          <div className="alaudis-stage-shadow-soft" />
          <div className="alaudis-stage-shadow" />
        </div>

        {sirvReady ? (
          <div
            ref={sirvHostRef}
            className="alaudis-sirv-host relative z-[1] h-full w-full"
          />
        ) : (
          <div className="relative z-[1] flex h-full w-full items-center justify-center text-white/80">
            {labels.loading}
          </div>
        )}
      </div>

      <div className="relative z-20">
        <div className="border-t border-white/10 bg-black/60 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/75">
              {labels.controls}
            </p>

            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:overflow-visible">
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/88">
                {labels.activeSpin}
              </span>

              <button
                type="button"
                onClick={onToggleAutoRotate}
                className={
                  autoRotateEnabled
                    ? "whitespace-nowrap rounded-full border border-[#c79a5c]/40 bg-[#c79a5c]/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#f0cd98] transition hover:border-[#c79a5c]/60 hover:bg-[#c79a5c]/20"
                    : "whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/90 transition hover:border-white/25"
                }
              >
                {autoRotateEnabled ? labels.autoRotateOn : labels.autoRotateOff}
              </button>

              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/90">
                {labels.zoomActive}
              </span>

            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .alaudis-stage { container-type: size; }
        /* --split: where the wall meets the floor — just behind the piano legs. */
        .alaudis-studio { --split: calc(50cqh + min(100cqw, 150cqh) * 0.045); position: absolute; inset: 0; z-index: 0; overflow: hidden; background: #150f09; }
        .alaudis-studio > div { position: absolute; }
        .alaudis-studio-wall {
          inset: 0 0 auto 0; height: var(--split);
          background:
            repeating-linear-gradient(90deg, transparent 0 54px, rgba(0, 0, 0, 0.07) 54px 56px, rgba(255, 255, 255, 0.06) 56px 58px),
            radial-gradient(ellipse 58% 105% at 50% 100%, #f7ebd0 0%, #e2c998 26%, #a98857 56%, #4a3622 82%, #1d140c 100%);
        }
        .alaudis-studio-floor {
          inset: var(--split) 0 0 0;
          background:
            linear-gradient(rgba(255, 246, 226, 0.5), rgba(255, 246, 226, 0) 3%),
            linear-gradient(rgba(60, 42, 24, 0.28), rgba(60, 42, 24, 0) 30%),
            radial-gradient(ellipse 62% 135% at 50% 0%, #ecdab4 0%, #c3a472 24%, #7b5d3c 54%, #2a1e13 84%, #140e08 100%);
        }
        .alaudis-studio-light {
          inset: 0;
          background: radial-gradient(ellipse 34% 78% at 50% 0%, rgba(255, 246, 224, 0.42), rgba(255, 246, 224, 0) 70%);
          mix-blend-mode: screen;
        }
        .alaudis-studio-vignette {
          inset: 0;
          background: radial-gradient(ellipse 78% 82% at 50% 52%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.62) 100%);
        }
        .alaudis-stage-frame {
          position: absolute; z-index: 0; left: 50%; top: 50%;
          width: min(100cqw, 150cqh); aspect-ratio: 3 / 2;
          transform: translate(-50%, -50%); pointer-events: none;
        }
        .alaudis-stage-shadow-soft, .alaudis-stage-shadow { position: absolute; border-radius: 50%; transform: translate(-50%, -50%); }
        .alaudis-stage-shadow-soft {
          left: 47%; top: 78.5%; width: 54%; height: 26%;
          background: radial-gradient(ellipse, rgba(20, 12, 4, 0.55) 0%, rgba(20, 12, 4, 0.28) 42%, rgba(20, 12, 4, 0) 70%);
          filter: blur(10px);
        }
        .alaudis-stage-shadow {
          left: 46.5%; top: 79.5%; width: 38%; height: 15%;
          background: radial-gradient(ellipse, rgba(8, 5, 2, 0.7) 0%, rgba(8, 5, 2, 0.4) 45%, rgba(8, 5, 2, 0) 72%);
          filter: blur(5px);
        }
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
