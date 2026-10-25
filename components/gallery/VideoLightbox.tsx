"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { galleryCopy } from "@/lib/gallery/i18n";
import { photoUrl } from "@/lib/gallery/images";
import { localize, type GalleryLocale, type GalleryVideo } from "@/lib/gallery/types";
import "yet-another-react-lightbox/styles.css";
import styles from "./Gallery.module.css";

export default function VideoLightbox({ video, locale, close, onClosed }: { video: GalleryVideo; locale: GalleryLocale; close: () => void; onClosed: () => void }) {
  const copy = galleryCopy[locale];
  const player = useRef<HTMLVideoElement | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const title = localize(video.title, locale);

  useEffect(() => {
    const restoreFocus = (event: FocusEvent) => {
      const dialog = document.querySelector<HTMLElement>(`[role="dialog"].${styles.videoLightbox}`);
      if (dialog && event.target instanceof Node && !dialog.contains(event.target)) {
        dialog.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("focusin", restoreFocus);
    return () => {
      player.current?.pause();
      document.removeEventListener("focusin", restoreFocus);
      requestAnimationFrame(onClosed);
    };
  }, [onClosed]);

  return <Lightbox open close={close} plugins={[Fullscreen]} className={`${styles.lightbox} ${styles.videoLightbox}`}
    slides={[{ src: photoUrl(video.cover, 1280), alt: title }]}
    labels={{ Close: copy.close, "Enter Fullscreen": copy.fullscreen, "Exit Fullscreen": copy.exitFullscreen, Lightbox: title, "Photo gallery": title, Slide: copy.video, Carousel: copy.video }}
    carousel={{ finite: true, preload: 0, padding: 0 }}
    controller={{ aria: true, closeOnBackdropClick: false, closeOnPullDown: false, closeOnPullUp: false }}
    animation={{ fade: 0 }}
    fullscreen={{ auto: false }}
    render={{
      buttonPrev: () => null,
      buttonNext: () => null,
      iconClose: () => <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M20 12H4m6-6-6 6 6 6" /></svg>,
      slide: () => failed ? <div className={styles.videoFailure} role="alert"><p>{copy.videoError}</p><button className={styles.button} onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>{copy.tryAgain}</button></div> : <video
        key={attempt} ref={player} controls autoPlay playsInline preload="metadata"
        controlsList="nofullscreen" poster={photoUrl(video.cover, 1280)} aria-label={title}
        style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }}
        onError={() => setFailed(true)}
        onKeyDown={event => { if (event.key !== "Escape" && event.key !== "Tab") event.stopPropagation(); }}
        onPointerDown={event => event.stopPropagation()}
        onClick={event => event.stopPropagation()}
      ><source src={video.video.url} type={video.video.mimeType} onError={() => setFailed(true)} /></video>,
    }}
  />;
}
