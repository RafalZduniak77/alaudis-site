"use client";

// ==========================================================
// BANER STRONY RZEMIOSŁO — film na cały ekran
// ==========================================================

import { useEffect, useRef, useState } from "react";
import { craftPoster, type CraftVideo } from "./videos";

export default function CraftHero({ video, eyebrow, title, cta, pauseLabel, playLabel }: { video: CraftVideo; eyebrow: string; title: string; cta: string; pauseLabel: string; playLabel: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  // The button follows what the film is really doing.
  const [paused, setPaused] = useState(true);

  // The still frame appears first; the film starts once the page itself has loaded,
  // so the large video file does not slow down the first view.
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => { element.play().catch(() => {}); };
    if (document.readyState === "complete") { start(); return; }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  function toggle() {
    const element = ref.current;
    if (!element) return;
    if (element.paused) element.play().catch(() => {});
    else element.pause();
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster ?? craftPoster(video.src)}
        preload="none"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        muted
        loop
        playsInline
        aria-label={video.title}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/5 to-black/70" />

      <div className="mx-auto flex w-full max-w-[1520px] items-end justify-between gap-6 px-6 pb-14 sm:px-10 sm:pb-20 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#d3bd8b]">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-[88px]">{title}</h1>
          <p className="mt-6 text-sm text-white/88 sm:text-base">{video.title}</p>
          <a href="#filmy" className="mt-8 inline-flex rounded-2xl bg-white/15 px-7 py-4 text-sm uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            {cta}
          </a>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? playLabel : pauseLabel}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {paused ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg>
          )}
        </button>
      </div>
    </section>
  );
}
