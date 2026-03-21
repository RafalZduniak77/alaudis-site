// ==========================================================
// ALAUDIS AR SCENE
// ==========================================================
// To jest komponent odpowiedzialny za właściwą scenę 3D.
//
// Za co odpowiada ten plik:
// 1. ładuje bibliotekę @google/model-viewer
// 2. wyświetla model 3D fortepianu
// 3. pokazuje tło:
//    - video salonu albo
//    - zdjęcie salonu albo
//    - domyślne tło z configu
// 4. ustawia kamerę i parametry widoku z alaudisArConfig.ts
// 5. obsługuje auto obrót modelu ON/OFF
// 6. pokazuje dolne kontrolki sceny
//
// Najważniejsze dane przekazywane z zewnątrz:
// - modelFile            -> plik .glb aktualnego modelu
// - modelLabel           -> nazwa modelu
// - roomImage            -> wgrane zdjęcie tła
// - roomVideo            -> wgrane video tła
// - selectedModelId      -> aktualnie wybrany model
// - autoRotateEnabled    -> czy model ma obracać się automatycznie
//
// Ważne:
// - interaction-prompt="none" wyłącza animowaną podpowiedź
// - key z autoRotateEnabled wymusza odświeżenie viewer-a
//   po zmianie ON/OFF, żeby model nie "bujał się" po wyłączeniu
// ==========================================================

"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_ROOM_IMAGE,
  MODEL_VIEWER_SETTINGS,
  type ModelOption,
} from "./alaudisArConfig";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
// Ten komponent dostaje wszystkie dane z rodzica
// AlaudisARPreview.tsx
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
  // STAN GOTOWOŚCI VIEWERA
  // --------------------------------------------------------
  // false = biblioteka jeszcze się ładuje
  // true  = model-viewer gotowy do użycia
  const [viewerReady, setViewerReady] = useState(false);

  // --------------------------------------------------------
  // ŁADOWANIE @google/model-viewer
  // --------------------------------------------------------
  // Po załadowaniu ustawiamy viewerReady = true
  useEffect(() => {
    let active = true;

    import("@google/model-viewer")
      .then(() => {
        if (active) setViewerReady(true);
      })
      .catch((error) => {
        console.error("Nie udało się załadować model-viewer:", error);
      });

    return () => {
      active = false;
    };
  }, []);

  // --------------------------------------------------------
  // WYBÓR TŁA
  // --------------------------------------------------------
  // Kolejność:
  // 1. jeśli jest własne zdjęcie -> użyj zdjęcia
  // 2. jeśli nie ma zdjęcia -> użyj domyślnego tła
  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  // --------------------------------------------------------
  // AUTO OBRÓT
  // --------------------------------------------------------
  // Gdy autoRotateEnabled = true, dokładamy atrybut auto-rotate
  // Gdy false, nie dokładamy go wcale
  const autoRotateProps = autoRotateEnabled ? { "auto-rotate": "" } : {};

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
          Obrót / Zoom / AR
        </span>
      </div>

      {/* OBSZAR SCENY 3D */}
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

        {/* MODEL 3D */}
        {viewerReady ? (
          <model-viewer
            // key zawiera autoRotateEnabled,
            // żeby po przełączeniu ON/OFF viewer odświeżył się całkiem
            key={`${modelFile}-${autoRotateEnabled ? "rotate-on" : "rotate-off"}`}
            src={modelFile}
            ios-src="/models/untitled.usdz"
            alt={`Pokazowy model fortepianu Alaudis - ${modelLabel}`}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            touch-action="pan-y"
            shadow-intensity="0"
            exposure={MODEL_VIEWER_SETTINGS.exposure}
            camera-target={`auto ${MODEL_VIEWER_SETTINGS.cameraTargetY} auto`}
            camera-orbit={MODEL_VIEWER_SETTINGS.cameraOrbit}
            min-camera-orbit={MODEL_VIEWER_SETTINGS.minCameraOrbit}
            max-camera-orbit={MODEL_VIEWER_SETTINGS.maxCameraOrbit}
            field-of-view={MODEL_VIEWER_SETTINGS.fieldOfView}
            interaction-prompt="none"
            {...autoRotateProps}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              position: "relative",
              zIndex: 1,
            }}
          />
        ) : (
          // EKRAN ŁADOWANIA
          <div className="relative z-[1] flex h-full w-full items-center justify-center text-white/50">
            Ładowanie podglądu 3D...
          </div>
        )}
      </div>

      {/* DOLNY PASEK STEROWANIA */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="border-t border-white/10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            {/* LEWA STRONA PASKA */}
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Sterowanie
            </p>

            {/* PRAWA STRONA PASKA - OPCJE W JEDNEJ LINII */}
            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:overflow-visible">
              {/* INFO O ZOOMIE */}
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
                Zoom aktywny
              </span>

              {/* PRZEŁĄCZNIK AUTO OBRÓT */}
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

              {/* WYBÓR MODELU W PRAWYM DOLNYM ROGU */}
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
