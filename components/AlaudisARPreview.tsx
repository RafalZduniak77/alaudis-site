
"use client";

import { useRef, useState } from "react";
import AlaudisARScene from "./AlaudisARScene";
import {
  INFO_CARDS,
  MODEL_OPTIONS,
} from "./alaudisArConfig";

export default function AlaudisARPreview() {
  const [roomImage, setRoomImage] = useState<string | null>(null);
  const [roomVideo, setRoomVideo] = useState<string | null>(null);
  const [selectedModelId, setSelectedModelId] = useState(MODEL_OPTIONS[0].id);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);

  const selectedModel =
    MODEL_OPTIONS.find((option) => option.id === selectedModelId) ??
    MODEL_OPTIONS[0];

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

  return (
    <section className="relative w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#070707] p-4 sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,154,92,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01),rgba(0,0,0,0.12))]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c79a5c]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
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

        <AlaudisARScene
          modelFile={selectedModel.file}
          modelLabel={selectedModel.label}
          roomImage={roomImage}
          roomVideo={roomVideo}
        />

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
