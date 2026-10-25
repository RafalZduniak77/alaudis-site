"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { galleryPath, localize, type AlbumList, type GalleryFilter, type GalleryLocale, type GalleryVideo } from "@/lib/gallery/types";
import { galleryCopy } from "@/lib/gallery/i18n";
import GalleryImage from "./GalleryImage";
import styles from "./Gallery.module.css";

const VideoLightbox = dynamic(() => import("./VideoLightbox"), { ssr: false });

function durationLabel(seconds?: number) {
  if (!seconds || seconds <= 0) return "";
  const total = Math.round(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

export default function AlbumCards({ initial, locale, category }: { initial: AlbumList; locale: GalleryLocale; category?: GalleryFilter }) {
  const [albums, setAlbums] = useState(initial.items);
  const [total, setTotal] = useState(initial.total);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const restoreFocus = useCallback(() => { trigger.current?.focus({ preventScroll: true }); }, []);
  const copy = galleryCopy[locale];
  async function loadMore() {
    if (loading) return;
    setLoading(true); setError(false);
    try {
      const response = await fetch(`/api/gallery/albums?offset=${albums.length}${category ? `&category=${category}` : ""}`, { cache: "no-store" });
      if (!response.ok) throw new Error();
      const data: AlbumList = await response.json();
      setTotal(data.total);
      setAlbums(current => [...current, ...data.items.filter(a => !current.some(existing => existing._id === a._id))]);
    } catch { setError(true); } finally { setLoading(false); }
  }
  return <>
    <div className={styles.albums} aria-busy={loading}>
      {albums.map((album, index) => album.category === "video" ? <button key={album._id} type="button" className={`${styles.albumCard} ${styles.videoCard}`} aria-label={`${copy.playVideo}: ${localize(album.title, locale)}`} aria-haspopup="dialog" onClick={event => { trigger.current = event.currentTarget; setActiveVideo(album); }}>
        <span className={`${styles.albumImage} ${styles.videoImage}`}><GalleryImage photo={album.cover} alt={localize(album.cover.alt, locale) || localize(album.title, locale)} sizes="(min-width: 1500px) 680px, (min-width: 760px) 45vw, 92vw" eager={index < 2} /><span className={styles.albumCount}>{copy.video}{durationLabel(album.duration) && ` · ${durationLabel(album.duration)}`}</span><span className={styles.albumArrow} aria-hidden="true"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="m8 5 11 7-11 7V5Z" /></svg></span></span>
        <span className={styles.cardInfo}><span className={styles.eyebrow}>{copy.video}{album.location && ` · ${album.location}`}</span><span className={styles.cardTitle}>{localize(album.title, locale)}</span><span className={styles.cardDescription}>{localize(album.description, locale)}</span><span className={styles.cardAction}>{copy.playVideo} <span aria-hidden="true">→</span></span></span>
      </button> : <Link key={album._id} href={`${galleryPath(locale)}/${album.slug}`} prefetch={false} className={styles.albumCard}>
        <div className={styles.albumImage}><GalleryImage photo={album.cover} alt={localize(album.cover.alt, locale) || localize(album.title, locale)} sizes="(min-width: 1500px) 680px, (min-width: 760px) 45vw, 92vw" eager={index < 2} /><span className={styles.albumCount}>{copy.photos}: {album.photoCount}</span><span className={styles.albumArrow} aria-hidden="true">↗</span></div>
        <div className={styles.cardInfo}><p className={styles.eyebrow}>{copy[album.category]}</p><h2>{localize(album.title, locale)}</h2><p>{localize(album.description, locale)}</p><span className={styles.cardAction}>{copy.openAlbum} <span aria-hidden="true">→</span></span></div>
      </Link>)}
    </div>
    {!albums.length && <p className={styles.empty}>{category === "video" ? copy.videoEmpty : copy.empty}</p>}
    {error && <p role="alert" className={styles.status}>{copy.error}</p>}
    {albums.length < total && <div className={styles.loadMore}><button className={styles.button} onClick={loadMore} disabled={loading}>{loading ? copy.loading : copy.more}</button></div>}
    {activeVideo && <VideoLightbox video={activeVideo} locale={locale} close={() => setActiveVideo(null)} onClosed={restoreFocus} />}
  </>;
}

