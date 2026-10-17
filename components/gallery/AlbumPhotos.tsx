"use client";

import { useCallback, useMemo, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { galleryCopy } from "@/lib/gallery/i18n";
import { localize, type AlbumPageData, type GalleryLocale, type GalleryPhoto } from "@/lib/gallery/types";
import GalleryImage from "./GalleryImage";
import styles from "./Gallery.module.css";

const PhotoLightbox = dynamic(() => import("./PhotoLightbox"), { ssr: false });
const subscribeMotion = (callback: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

export default function AlbumPhotos({ album, locale }: { album: AlbumPageData; locale: GalleryLocale }) {
  const [photos, setPhotos] = useState(album.photos);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<"load" | "changed" | null>(null);
  const [total, setTotal] = useState(album.photoCount);
  const loadingRef = useRef(false);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const copy = galleryCopy[locale];
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || photos.length >= total || error === "changed") return;
    loadingRef.current = true; setLoading(true); setError(null);
    try {
      const response = await fetch(`/api/gallery/albums/${album.slug}/photos?offset=${photos.length}&revision=${encodeURIComponent(album._updatedAt)}`, { cache: "no-store" });
      if (response.status === 409 || response.status === 404) { setError("changed"); return; }
      if (!response.ok) throw new Error();
      const data: { photos: GalleryPhoto[]; total: number } = await response.json();
      setPhotos(current => [...current, ...data.photos.filter(p => !current.some(existing => existing._key === p._key))]);
      setTotal(data.total);
    } catch { setError("load"); } finally { loadingRef.current = false; setLoading(false); }
  }, [album.slug, album._updatedAt, photos.length, total, error]);

  const photoLabels = useMemo(() => photos.map((p, i) => localize(p.alt, locale) || localize(p.caption, locale) || `${copy.noDescription} ${localize(album.title, locale)}, ${i + 1}`), [photos, locale, copy.noDescription, album.title]);
  function openPhoto(photoIndex: number, button: HTMLButtonElement) { trigger.current = button; setIndex(photoIndex); }
  const restoreFocus = useCallback(() => { trigger.current?.focus({ preventScroll: true }); }, []);
  return <>
    <span className="sr-only" role="status">{copy.photos}: {photos.length} / {total}</span>
    <div className={styles.photoGrid} aria-busy={loading}>
      {photos.map((photo, photoIndex) => <figure key={photo._key}>
        <button className={styles.photoButton} aria-label={`${copy.openPhoto}: ${photoLabels[photoIndex]}`} aria-describedby={localize(photo.seoDescription, locale) ? `photo-description-${photo._key}` : undefined} onClick={event => openPhoto(photoIndex, event.currentTarget)}>
          <GalleryImage photo={photo} alt={photoLabels[photoIndex]} sizes="(min-width: 1500px) 450px, (min-width: 1000px) 30vw, (min-width: 600px) 44vw, 92vw" eager={photoIndex === 0} />
          <span className={styles.zoomHint} aria-hidden="true">＋</span>
        </button>
        <figcaption>{localize(photo.seoDescription, locale) && <span id={`photo-description-${photo._key}`} className="sr-only">{localize(photo.seoDescription, locale)}</span>}{(photo.author || album.author) && <small>{copy.author}: {photo.author || album.author}</small>}</figcaption>
      </figure>)}
    </div>
    {error && <div role="alert" className={styles.status}><p>{error === "changed" ? copy.changed : copy.error}</p>{error === "changed" && <button className={styles.button} onClick={() => router.refresh()}>{copy.refresh}</button>}</div>}
    {photos.length < total && error !== "changed" && <div className={styles.loadMore}><button className={styles.button} disabled={loading} onClick={loadMore}>{loading ? copy.loading : copy.more}</button></div>}
    {index >= 0 && <PhotoLightbox photos={photos} labels={photoLabels} author={album.author} locale={locale} index={index} total={total} reducedMotion={reducedMotion} close={() => setIndex(-1)} onClosed={restoreFocus} onView={nextIndex => { setIndex(nextIndex); if (!error && nextIndex >= photos.length - 3) void loadMore(); }} loadMore={loadMore} loading={loading} error={error} refresh={() => { setIndex(-1); router.refresh(); }} />}
  </>;
}

