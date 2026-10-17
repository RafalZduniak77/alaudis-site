"use client";

import { useEffect, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { photoUrl, photoWidths, photoDisplaySize } from "@/lib/gallery/images";
import { galleryCopy } from "@/lib/gallery/i18n";
import { type GalleryLocale, type GalleryPhoto } from "@/lib/gallery/types";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import styles from "./Gallery.module.css";

type Props = { photos: GalleryPhoto[]; labels: string[]; author?: string; locale: GalleryLocale; index: number; total: number; reducedMotion: boolean; close: () => void; onClosed: () => void; onView: (index: number) => void; loadMore: () => void; loading: boolean; error: "load" | "changed" | null; refresh: () => void };

const iconPaths = {
  previous: "M20 12H4m6-6-6 6 6 6",
  next: "M4 12h16m-6-6 6 6-6 6",
  close: "m6 6 12 12M18 6 6 18",
  zoomIn: "M17 17l4 4M7 10.5h7m-3.5-3.5v7",
  zoomOut: "M17 17l4 4M7 10.5h7",
  fullscreen: "M9 4H4v5m11-5h5v5M4 15v5h5m6 0h5v-5",
  exitFullscreen: "M4 9h5V4m6 0v5h5M9 20v-5H4m16 0h-5v5",
  info: "M12 11v6m0-10h.01",
};

function ControlIcon({ name }: { name: keyof typeof iconPaths }) {
  return <svg className={name === "previous" || name === "next" ? styles.navigationIcon : styles.controlIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name === "info" && <circle cx="12" cy="12" r="9" />}
    {(name === "zoomIn" || name === "zoomOut") && <circle cx="10.5" cy="10.5" r="6.5" />}
    <path d={iconPaths[name]} />
  </svg>;
}

export default function PhotoLightbox({ photos, labels, author, locale, index, total, reducedMotion, close, onClosed, onView, loadMore, loading, error, refresh }: Props) {
  const copy = galleryCopy[locale];
  const slides = useMemo(() => photos.map((photo, i) => ({
    src: photoUrl(photo, 1920, 85), ...photoDisplaySize(photo), alt: labels[i],
    srcSet: photoWidths(photo).map(width => ({ src: photoUrl(photo, width, 85), width, height: Math.round(width * photo.height / photo.width) })),
    description: [photo.author || author ? `${copy.author}: ${photo.author || author}` : "", `${i + 1} ${copy.counter} ${total}`].filter(Boolean).join(" · "),
  })), [photos, labels, author, copy.author, copy.counter, total]);
  useEffect(() => {
    // Keep Tab inside the dialog, including when a navigation button becomes disabled.
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>(`[role="dialog"].${styles.lightbox}`);
      if (!dialog) return;
      const controls = [...dialog.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]')]
        .filter(element => element.getClientRects().length > 0 && !element.closest('[inert], [aria-hidden="true"]'));
      if (!controls.length) return;
      const activeIndex = controls.indexOf(document.activeElement as HTMLElement);
      if (activeIndex === -1 || (event.shiftKey ? activeIndex === 0 : activeIndex === controls.length - 1)) {
        event.preventDefault();
        controls[event.shiftKey ? controls.length - 1 : 0].focus();
      }
    };
    document.addEventListener("keydown", trapFocus, true);
    return () => {
      document.removeEventListener("keydown", trapFocus, true);
      // Restore focus after the portal and scroll lock have been removed.
      requestAnimationFrame(onClosed);
    };
  }, [onClosed]);
  return <Lightbox open close={close} index={index} slides={slides} plugins={[Zoom, Captions, Fullscreen]} className={styles.lightbox}
    labels={{ Close: copy.close, Next: copy.next, Previous: copy.previous, "Zoom in": copy.zoomIn, "Zoom out": copy.zoomOut, "Enter Fullscreen": copy.fullscreen, "Exit Fullscreen": copy.exitFullscreen, "Hide captions": copy.hideCredit, "Show captions": copy.showCredit, Caption: copy.author, Lightbox: copy.photos, "Photo gallery": copy.photos, Slide: copy.photos, Carousel: copy.photos, "{index} of {total}": `{index} ${copy.counter} {total}` }}
    carousel={{ finite: true, preload: 1, padding: 0, imageFit: "contain", imageProps: { decoding: "async" } }}
    fullscreen={{ auto: true }}
    controller={{ closeOnBackdropClick: true, closeOnPullDown: true, closeOnPullUp: true, aria: true }}
    animation={{ fade: reducedMotion ? 0 : 180, swipe: reducedMotion ? 0 : 250, navigation: reducedMotion ? 0 : 200, zoom: reducedMotion ? 0 : 200 }}
    captions={{ descriptionTextAlign: "center", descriptionMaxLines: 5, showToggle: true }}
    zoom={{ maxZoomPixelRatio: 2, scrollToZoom: false }}
    render={{
      iconPrev: () => <ControlIcon name="previous" />,
      iconNext: () => <ControlIcon name="next" />,
      iconClose: () => <ControlIcon name="close" />,
      iconZoomIn: () => <ControlIcon name="zoomIn" />,
      iconZoomOut: () => <ControlIcon name="zoomOut" />,
      iconEnterFullscreen: () => <ControlIcon name="fullscreen" />,
      iconExitFullscreen: () => <ControlIcon name="exitFullscreen" />,
      iconCaptionsVisible: () => <ControlIcon name="info" />,
      iconCaptionsHidden: () => <ControlIcon name="info" />,
    }}
    on={{ view: ({ index: current }) => onView(current) }}
    toolbar={{ buttons: [
      ...(error ? [<button key="error" className={styles.lightboxMore} onClick={error === "changed" ? refresh : loadMore}>{error === "changed" ? copy.refresh : copy.tryAgain}</button>] : photos.length < total && index >= photos.length - 2 ? [<button key="more" className={styles.lightboxMore} disabled={loading} onClick={loadMore}>{loading ? copy.loading : copy.more}</button>] : []),
      "close",
    ] }}
  />;
}
