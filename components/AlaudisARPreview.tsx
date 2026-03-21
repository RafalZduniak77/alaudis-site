"use client";

import { useEffect, useRef, useState } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

export default function AlaudisARPreview() {
  const [viewerReady, setViewerReady] = useState(false);
  const [roomImage, setRoomImage] = useState<string | null>(null);
  const [roomVideo, setRoomVideo] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);

  const defaultRoomImage = "/wnetrze-default.jpg";

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

  function handleRoomUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setRoomImage(url);
    setRoomVideo(null);
  }

  function handleVideoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setRoomVideo(url);
    setRoomImage(null);
  }

  function clearBackground() {
    setRoomImage(null);
    setRoomVideo(null);

    if (imageInputRef.current) imageInputRef.current.value = "";
    if (videoInputRef.current) videoInputRef.current.value = "";
  }

  const activeBackgroundImage = roomImage ?? defaultRoomImage;

  return (
    <section className="relative w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#070707] p-4 sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,154,92,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01),rgba(0,0,0,0.12))]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c79a5c]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#c79a5c]/30 bg-[#c79a5c]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#e6c08c]">
              Model pokazowy
            </span>
          </div>

          <div className="flex flex-wrap gap-3 xl:justify-end">
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 transition hover:border-white hover:bg-white hover:text-black"
            >
              Wgraj zdjęcie salonu
            </button>

            <button
              type="button"
              onClick={() => videoInputRef.current?.click()}
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 transition hover:border-white hover:bg-white hover:text-black"
            >
              Wgraj video salonu
            </button>

            {(roomImage || roomVideo) && (
              <button
                type="button"
                onClick={clearBackground}
                className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 transition hover:border-white hover:bg-white hover:text-black"
              >
                Usuń tło
              </button>
            )}

            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              onChange={handleRoomUpload}
              className="hidden"
            />

            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </div>
        </div>

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
              src="/models/alaudis-demo.glb"
              ios-src="/models/untitled.usdz"
              alt="Pokazowy model fortepianu Alaudis"
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              touch-action="pan-y"
              shadow-intensity="0"
              exposure="1"
              auto-rotate
              camera-orbit="45deg 75deg 105%"
              min-camera-orbit="auto auto 55%"
              max-camera-orbit="auto auto 230%"
              field-of-view="30deg"
              interaction-prompt="auto"
              style={{
                width: "100%",
                height: "78vh",
                minHeight: "640px",
                background: "transparent",
                position: "relative",
                zIndex: 1,
              }}
            />
          ) : (
            <div
              className="relative z-[1] flex items-center justify-center text-white/50"
              style={{
                width: "100%",
                height: "78vh",
                minHeight: "640px",
              }}
            >
              Ładowanie podglądu 3D...
            </div>
          )}

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
                  Własne tło
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_1fr_1fr_1fr]">
          <div className="rounded-[24px] border border-[#c79a5c]/20 bg-[linear-gradient(135deg,rgba(199,154,92,0.16),rgba(255,255,255,0.03))] p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#e6c08c]">
              Sygnatura Alaudis
            </p>
            <p className="mt-3 text-2xl font-light text-white">
              Cyfrowy podgląd premium
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Startujesz od domyślnego wnętrza premium, a później możesz dodać
              własne zdjęcie albo video salonu.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Tryb
            </p>
            <p className="mt-3 text-lg font-light text-white">Podgląd 3D</p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Możesz obracać model, przybliżać go i oglądać proporcje fortepianu
              z każdej strony.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Wnętrze
            </p>
            <p className="mt-3 text-lg font-light text-white">
              Zdjęcie lub video
            </p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Wgraj zdjęcie albo film swojego salonu, aby zobaczyć fortepian na
              tle własnego wnętrza.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Następny etap
            </p>
            <p className="mt-3 text-lg font-light text-white">
              Wersja AR na telefon
            </p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Kolejny krok to uruchomienie kamery telefonu i ustawienie
              fortepianu bezpośrednio w realnej przestrzeni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
