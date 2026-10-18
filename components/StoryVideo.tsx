"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StoryVideo.module.css";

const labels = {
  pl: { fullscreen: "Pełny ekran", back: "Powrót do strony" },
  en: { fullscreen: "Full screen", back: "Back to the page" },
  de: { fullscreen: "Vollbild", back: "Zurück zur Seite" },
  fr: { fullscreen: "Plein écran", back: "Retour à la page" },
};

type FullscreenPlayer = HTMLDivElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

function fullscreenElement() {
  const fullscreenDocument = document as FullscreenDocument;
  return document.fullscreenElement ?? fullscreenDocument.webkitFullscreenElement;
}

export default function StoryVideo({
  src,
  title,
  locale = "pl",
}: {
  src: string;
  title: string;
  locale?: keyof typeof labels;
}) {
  const [expanded, setExpanded] = useState(false);
  const playerRef = useRef<FullscreenPlayer>(null);
  const controlRef = useRef<HTMLButtonElement>(null);
  const copy = labels[locale];

  useEffect(() => {
    const syncFullscreen = () => {
      setExpanded(fullscreenElement() === playerRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreen);
    document.addEventListener("webkitfullscreenchange", syncFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreen);
      document.removeEventListener("webkitfullscreenchange", syncFullscreen);
    };
  }, []);

  useEffect(() => {
    if (!expanded) return;

    const root = document.documentElement;
    const control = controlRef.current;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    control?.focus({ preventScroll: true });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !fullscreenElement()) {
        event.preventDefault();
        setExpanded(false);
      }
    };
    const keepFocusInPlayer = (event: FocusEvent) => {
      if (event.target instanceof Node && !playerRef.current?.contains(event.target)) {
        control?.focus({ preventScroll: true });
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("focusin", keepFocusInPlayer);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("focusin", keepFocusInPlayer);
      control?.focus({ preventScroll: true });
    };
  }, [expanded]);

  async function enterFullscreen() {
    const player = playerRef.current;
    if (!player) return;

    setExpanded(true);
    try {
      // Fullscreen the container so the back arrow stays above the video.
      const requestFullscreen = player.requestFullscreen ?? player.webkitRequestFullscreen;
      await requestFullscreen?.call(player);
    } catch {
      // Keep the viewport-filling player on browsers without container fullscreen.
    }
  }

  async function leaveFullscreen() {
    if (fullscreenElement() === playerRef.current) {
      const fullscreenDocument = document as FullscreenDocument;
      const exitFullscreen = document.exitFullscreen ?? fullscreenDocument.webkitExitFullscreen;
      try {
        await exitFullscreen?.call(document);
      } catch {
        // A browser-initiated exit may already be in progress.
        if (fullscreenElement() === playerRef.current) return;
      }
    }
    setExpanded(false);
  }

  return (
    <div className={styles.frame}>
      <div
        ref={playerRef}
        className={`${styles.player}${expanded ? ` ${styles.expanded}` : ""}`}
        role={expanded ? "dialog" : "group"}
        aria-modal={expanded ? true : undefined}
        aria-label={title}
      >
        <video
          controls
          controlsList="nofullscreen"
          preload="metadata"
          playsInline
          aria-label={title}
          className={styles.video}
        >
          <source src={src} type="video/mp4" />
        </video>

        <button
          ref={controlRef}
          type="button"
          className={expanded ? styles.back : styles.expand}
          onClick={expanded ? leaveFullscreen : enterFullscreen}
          aria-label={expanded ? copy.back : copy.fullscreen}
          title={expanded ? copy.back : copy.fullscreen}
        >
          {expanded ? (
            <span aria-hidden="true">←</span>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M9 4H4v5m11-5h5v5M4 15v5h5m6 0h5v-5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
