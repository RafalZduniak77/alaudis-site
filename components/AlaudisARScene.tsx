//
//  AlaudisARScene.tsx
//  
//
//  Created by Rafal Zduniak on 21/03/2026.
//
"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_ROOM_IMAGE,
  MODEL_VIEWER_SETTINGS,
} from "./alaudisArConfig";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

type Props = {
  modelFile: string;
  modelLabel: string;
  roomImage: string | null;
  roomVideo: string | null;
};

export default function AlaudisARScene({
  modelFile,
  modelLabel,
  roomImage,
  roomVideo,
}: Props) {
  const [viewerReady, setViewerReady] = useState(false);

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

  const activeBackgroundImage = roomImage ?? DEFAULT_ROOM_IMAGE;

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_35%,rgba(0,0,0,0.55)_100%)] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/8 to-transparent" />

      <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          Doświadczenie Alaudis
        </span>
      </div>

      <div className="pointer-events-none absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
        <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
          Obrót / Zoom / AR
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

        {viewerReady ? (
          <model-viewer
            key={modelFile}
            src={modelFile}
            ios-src="/models/untitled.usdz"
            alt={`Pokazowy model fortepianu Alaudis - ${modelLabel}`}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            touch-action="pan-y"
            shadow-intensity="0"
            exposure={MODEL_VIEWER_SETTINGS.exposure}
            auto-rotate
            camera-target={`auto ${MODEL_VIEWER_SETTINGS.cameraTargetY} auto`}
            camera-orbit={MODEL_VIEWER_SETTINGS.cameraOrbit}
            min-camera-orbit={MODEL_VIEWER_SETTINGS.minCameraOrbit}
            max-camera-orbit={MODEL_VIEWER_SETTINGS.maxCameraOrbit}
            field-of-view={MODEL_VIEWER_SETTINGS.fieldOfView}
            interaction-prompt="auto"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              position: "relative",
              zIndex: 1,
            }}
          />
        ) : (
          <div className="relative z-[1] flex h-full w-full items-center justify-center text-white/50">
            Ładowanie podglądu 3D...
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="flex flex-col gap-3 border-t border-white/10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Sterowanie
            </p>
            <p className="mt-2 text-sm text-white/75">
              Przeciągnij, aby obrócić • przewijaj lub gestem przybliżaj i
              oddalaj • możesz też wgrać zdjęcie lub video własnego salonu
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
              Zoom aktywny
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/65">
              Zmiana modelu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
