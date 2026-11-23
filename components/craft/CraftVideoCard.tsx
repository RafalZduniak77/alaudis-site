"use client";

// ==========================================================
// KARTA FILMU Z PRODUKCJI
// ==========================================================
// Film wypełnia całą kartę i gra sam (bez dźwięku, w pętli),
// dopóki karta jest widoczna na ekranie. Przycisk w rogu
// otwiera film na pełnym ekranie.
// ==========================================================

import { useEffect, useRef, useState } from "react";
import { craftPoster, type CraftVideo } from "./videos";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

export default function CraftVideoCard({ video, index, total, fullscreenLabel, wide = false }: { video: CraftVideo; index: number; total: number; fullscreenLabel: string; wide?: boolean }) {
  const ref = useRef<FullscreenVideo>(null);
  const [fullscreen, setFullscreen] = useState(false);

  // Play only while the card is on screen.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) element.play().catch(() => {});
      else if (!document.fullscreenElement) element.pause();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sync = () => setFullscreen(document.fullscreenElement === ref.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  function openFullscreen() {
    const element = ref.current;
    if (!element) return;
    if (element.requestFullscreen) element.requestFullscreen().catch(() => {});
    else element.webkitEnterFullscreen?.();
    element.play().catch(() => {});
  }

  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`group relative isolate flex aspect-[4/5] min-h-[420px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#0b0b0b] lg:rounded-[40px] ${wide ? "sm:aspect-[5/6] md:col-span-2 md:aspect-[21/9]" : "sm:aspect-[5/6]"}`}>
      <video
        ref={ref}
        src={video.src}
        poster={video.poster ?? craftPoster(video.src)}
        muted
        loop
        playsInline
        preload="none"
        controls={fullscreen}
        aria-label={video.title}
        className={`absolute inset-0 -z-10 h-full w-full ${fullscreen ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-[1.03]`}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      <p className="px-7 pt-7 text-[11px] uppercase tracking-[0.3em] text-white/80 sm:px-9 sm:pt-9">
        {number} <span className="text-white/45">/ {total}</span>
      </p>

      <div className="flex items-end gap-5 px-7 pb-7 sm:px-9 sm:pb-9">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-light leading-tight text-white sm:text-[28px]">{video.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/80 sm:text-[15px] sm:leading-7">{video.text}</p>
        </div>
        <button
          type="button"
          onClick={openFullscreen}
          aria-label={`${fullscreenLabel}: ${video.title}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6" />
          </svg>
        </button>
      </div>
    </article>
  );
}
