"use client";

// ==========================================================
// KARTA FILMU Z PRODUKCJI
// ==========================================================
// Film wypełnia całą kartę i gra sam (bez dźwięku, w pętli),
// dopóki karta jest widoczna na ekranie. Przycisk w rogu
// otwiera ten sam odtwarzacz co w galerii: z przyciskiem
// pełnego ekranu i strzałką powrotu.
// ==========================================================

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { GalleryLocale, GalleryVideo } from "@/lib/gallery/types";
import { craftPoster, type CraftVideo } from "./videos";

const VideoLightbox = dynamic(() => import("@/components/gallery/VideoLightbox"), { ssr: false });

export default function CraftVideoCard({ video, index, total, fullscreenLabel, locale, wide = false }: { video: CraftVideo; index: number; total: number; fullscreenLabel: string; locale: GalleryLocale; wide?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const restoreFocus = useCallback(() => { trigger.current?.focus({ preventScroll: true }); }, []);

  // Play only while the card is on screen and the viewer is closed.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (open) { element.pause(); return; }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) element.play().catch(() => {});
      else element.pause();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [open]);

  const poster = video.poster ?? craftPoster(video.src);
  const number = String(index + 1).padStart(2, "0");
  // The gallery viewer expects a gallery film; describe this one in the same shape.
  const viewerVideo: GalleryVideo = {
    _id: video.src, _updatedAt: "", category: "video",
    title: { pl: video.title, [locale]: video.title }, description: { pl: video.text, [locale]: video.text },
    cover: { _key: "poster", url: video.posterSource ?? craftPoster(video.src), width: 2560, height: 1440, caption: {}, alt: { pl: video.title, [locale]: video.title } },
    video: { url: video.src, mimeType: "video/mp4" },
  };

  return (
    <article className={`group relative isolate flex aspect-[4/5] min-h-[420px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#0b0b0b] lg:rounded-[40px] ${wide ? "sm:aspect-[5/6] md:col-span-2 md:aspect-[21/9]" : "sm:aspect-[5/6]"}`}>
      <video
        ref={ref}
        src={video.src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={video.title}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
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
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${fullscreenLabel}: ${video.title}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6" />
          </svg>
        </button>
      </div>

      {open && <VideoLightbox video={viewerVideo} locale={locale} close={() => setOpen(false)} onClosed={restoreFocus} />}
    </article>
  );
}
