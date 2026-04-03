// ==========================================================
// ALAUDIS AR PREVIEW
// ==========================================================
// To jest główny komponent sekcji podglądu 3D / 360.
//
// Za co odpowiada ten plik:
// 1. trzyma stan wybranego modelu
// 2. trzyma stan zdjęcia tła i video tła
// 3. obsługuje upload zdjęcia salonu
// 4. obsługuje upload video salonu
// 5. pozwala usunąć własne tło
// 6. włącza / wyłącza auto obrót modelu / spinu
// 7. przekazuje dane do komponentu AlaudisARScene
// 8. renderuje karty informacyjne pod podglądem
//
// Najważniejsze stany w tym pliku:
// - selectedModelId       -> który model jest wybrany
// - roomImage             -> wgrane zdjęcie salonu
// - roomVideo             -> wgrane video salonu
// - autoRotateEnabled     -> czy spin ma obracać się automatycznie
//
// UWAGA:
// W tej wersji auto obrót jest DOMYŚLNIE WYŁĄCZONY:
// useState(false)
// ==========================================================

"use client";

import { useRef, useState } from "react";
import AlaudisARScene from "./AlaudisARScene";
import { INFO_CARDS, MODEL_OPTIONS } from "./alaudisArConfig";

export default function AlaudisARPreview() {
  // --------------------------------------------------------
  // STANY GŁÓWNE KOMPONENTU
  // --------------------------------------------------------

  // przechowuje wgrane zdjęcie salonu
  const [roomImage, setRoomImage] = useState<string | null>(null);

  // przechowuje wgrane video salonu
  const [roomVideo, setRoomVideo] = useState<string | null>(null);

  // przechowuje aktualnie wybrany model
  const [selectedModelId, setSelectedModelId] = useState(MODEL_OPTIONS[0].id);

  // steruje automatycznym obrotem
  // true = obraca się
  // false = stoi nieruchomo
  // --------------------------------------------------------
  // WAŻNE:
  // tutaj ustawiamy startowo FALSE,
  // więc po wejściu na stronę auto obrót jest wyłączony
  // --------------------------------------------------------
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(false);

  // ref do ukrytego inputa zdjęcia
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  // ref do ukrytego inputa video
  const videoInputRef = useRef<HTMLInputElement | null>(null);

  // --------------------------------------------------------
  // AKTUALNIE WYBRANY MODEL
  // --------------------------------------------------------
  // Na podstawie selectedModelId wyszukujemy model z listy.
  // Jeśli coś pójdzie nie tak, bierzemy pierwszy model z listy.
  const selectedModel =
    MODEL_OPTIONS.find((option) => option.id === selectedModelId) ??
    MODEL_OPTIONS[0];

  // --------------------------------------------------------
  // UPLOAD ZDJĘCIA SALONU
  // --------------------------------------------------------
  function handleRoomUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setRoomImage(url);
    setRoomVideo(null);
  }

  // --------------------------------------------------------
  // UPLOAD VIDEO SALONU
  // --------------------------------------------------------
  function handleVideoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setRoomVideo(url);
    setRoomImage(null);
  }

  // --------------------------------------------------------
  // USUWANIE WŁASNEGO TŁA
  // --------------------------------------------------------
  function clearBackground() {
    setRoomImage(null);
    setRoomVideo(null);

    if (imageInputRef.current) imageInputRef.current.value = "";
    if (videoInputRef.current) videoInputRef.current.value = "";
  }

  // --------------------------------------------------------
  // RENDER
  // --------------------------------------------------------
  return (
    <section className="relative w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#070707] p-4 sm:p-6 lg:p-8">
      {/* TŁO DEKORACYJNE SEKCJI */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,154,92,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01),rgba(0,0,0,0.12))]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c79a5c]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* GÓRNY PASEK STEROWANIA */}
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          {/* LEWY GÓRNY WYBÓR MODELU */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={selectedModelId}
                onChange={(e) => setSelectedModelId(e.target.value)}
                className="appearance-none rounded-full border border-[#c79a5c]/30 bg-[#c79a5c]/10 px-4 py-2 pr-11 text-[11px] uppercase tracking-[0.22em] text-[#e6c08c] outline-none transition hover:border-[#c79a5c]/50"
              >
                {MODEL_OPTIONS.map((option) => (
                  <option
                    key={option.id}
                    value={option.id}
                    className="bg-[#111] text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-[#e6c08c]">
                ▼
              </span>
            </div>
          </div>

          {/* PRAWA CZĘŚĆ GÓRNEGO PASKA - UPLOAD TŁA */}
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

            {/* UKRYTY INPUT DLA ZDJĘCIA */}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              onChange={handleRoomUpload}
              className="hidden"
            />

            {/* UKRYTY INPUT DLA VIDEO */}
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* GŁÓWNA SCENA 360 */}
        <AlaudisARScene
          modelFile={selectedModel.file}
          modelLabel={selectedModel.label}
          roomImage={roomImage}
          roomVideo={roomVideo}
          modelOptions={MODEL_OPTIONS}
          selectedModelId={selectedModelId}
          onChangeModel={setSelectedModelId}
          autoRotateEnabled={autoRotateEnabled}
          onToggleAutoRotate={() => setAutoRotateEnabled((prev) => !prev)}
        />

        {/* KARTY INFORMACYJNE POD SCENĄ */}
        <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_1fr_1fr_1fr]">
          {INFO_CARDS.map((card) => (
            <div
              key={card.title}
              className={
                card.featured
                  ? "rounded-[24px] border border-[#c79a5c]/20 bg-[linear-gradient(135deg,rgba(199,154,92,0.16),rgba(255,255,255,0.03))] p-6"
                  : "rounded-[22px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm"
              }
            >
              <p
                className={
                  card.featured
                    ? "text-[11px] uppercase tracking-[0.28em] text-[#e6c08c]"
                    : "text-[11px] uppercase tracking-[0.28em] text-white/45"
                }
              >
                {card.eyebrow}
              </p>

              <p
                className={
                  card.featured
                    ? "mt-3 text-2xl font-light text-white"
                    : "mt-3 text-lg font-light text-white"
                }
              >
                {card.title}
              </p>

              <p
                className={
                  card.featured
                    ? "mt-3 text-sm leading-7 text-white/70"
                    : "mt-2 text-sm leading-7 text-white/60"
                }
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
