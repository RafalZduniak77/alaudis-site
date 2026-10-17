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
    on={{ view: ({ index: current }) => onView(current) }}
    toolbar={{ buttons: [
      ...(error ? [<button key="error" className={styles.lightboxMore} onClick={error === "changed" ? refresh : loadMore}>{error === "changed" ? copy.refresh : copy.tryAgain}</button>] : photos.length < total && index >= photos.length - 2 ? [<button key="more" className={styles.lightboxMore} disabled={loading} onClick={loadMore}>{loading ? copy.loading : copy.more}</button>] : []),
      "close",
    ] }}
  />;
}
