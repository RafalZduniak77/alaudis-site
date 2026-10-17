import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getAlbum, getAlbums, galleryIsDemo } from "@/lib/gallery/server";
import { galleryCopy } from "@/lib/gallery/i18n";
import { galleryPath, localize, type GalleryCategory, type GalleryLocale } from "@/lib/gallery/types";
import { demoAlbums } from "@/lib/gallery/demo";
import { photoUrl } from "@/lib/gallery/images";
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";
import AlbumCards from "./AlbumCards";
import AlbumPhotos from "./AlbumPhotos";
import styles from "./Gallery.module.css";

function DemoNote({ locale }: { locale: GalleryLocale }) {
  const copy = galleryCopy[locale];
  return <aside className={styles.preview}><strong>{copy.preview}</strong>{copy.previewText}</aside>;
}

function Unavailable({ locale }: { locale: GalleryLocale }) {
  const copy = galleryCopy[locale];
  return <main className={styles.page} lang={locale}><GalleryHeader locale={locale} /><div className={styles.unavailable}><p className={styles.eyebrow}>{copy.eyebrow}</p><h1>{copy.unavailable}</h1><Link className={styles.button} href={galleryPath(locale)} prefetch={false}>{copy.tryAgain}</Link></div></main>;
}

export function galleryMetadata(locale: GalleryLocale): Metadata {
  return { title: `${galleryCopy[locale].eyebrow} | ALAUDIS`, description: galleryCopy[locale].intro, robots: { index: false, follow: false } };
}

function galleryOrigin() {
  return new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
}

export async function galleryAlbumMetadata(locale: GalleryLocale, params: Promise<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  if (!/^[a-z0-9-]{1,96}$/.test(slug)) return galleryMetadata(locale);
  const album = await getAlbum(slug).catch(() => null);
  if (!album) return galleryMetadata(locale);
  const title = `${localize(album.seoTitle, locale) || localize(album.title, locale)} | ALAUDIS`;
  const description = localize(album.seoDescription, locale) || localize(album.description, locale);
  return {
    ...galleryMetadata(locale), metadataBase: galleryOrigin(), title, description,
    openGraph: { title, description, images: [{ url: photoUrl(album.cover, 1920, 85), alt: localize(album.cover.alt, locale) || localize(album.title, locale) }] },
    twitter: { card: "summary_large_image", title, description, images: [photoUrl(album.cover, 1920, 85)] },
  };
}

export async function GalleryIndexPage({ locale, searchParams }: { locale: GalleryLocale; searchParams: Promise<{ dzial?: string }> }) {
  const { dzial } = await searchParams;
  const category = ["instruments", "craft", "events"].includes(dzial || "") ? dzial as GalleryCategory : undefined;
  const copy = galleryCopy[locale];
  const data = await getAlbums(category).catch(() => null);
  if (!data) return <Unavailable locale={locale} />;
  const cover = data.items[0]?.cover || demoAlbums[0].cover;
  return <main className={styles.page} lang={locale}>
    <GalleryHeader locale={locale} />
    <section className={styles.hero}><div className={styles.heroImage}><GalleryImage photo={cover} alt="" sizes="100vw" eager /></div><div className={styles.heroContent}><p className={styles.eyebrow}>{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.intro}</p></div></section>
    <div className={styles.content}>
      {data.demo && <DemoNote locale={locale} />}
      <nav aria-label={copy.albums} className={styles.filters}>{([undefined, "instruments", "craft", "events"] as const).map(value => <Link key={value || "all"} href={`${galleryPath(locale)}${value ? `?dzial=${value}` : ""}`} prefetch={false} scroll={false} aria-current={category === value ? "page" : undefined}>{value ? copy[value] : copy.all}</Link>)}</nav>
      <AlbumCards key={`${category || "all"}-${data.items.map(album => album._updatedAt).join("-")}`} initial={data} locale={locale} category={category} />
    </div><Footer />
  </main>;
}

export async function GalleryAlbumPage({ locale, params }: { locale: GalleryLocale; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-z0-9-]{1,96}$/.test(slug)) notFound();
  const result = await getAlbum(slug).then(album => ({ album, failed: false })).catch(() => ({ album: null, failed: true }));
  if (result.failed) return <Unavailable locale={locale} />;
  if (!result.album) notFound();
  const album = result.album;
  const copy = galleryCopy[locale];
  const date = album.date ? new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${album.date}T12:00:00Z`)) : "";
  const origin = galleryOrigin();
  const albumUrl = new URL(`${galleryPath(locale)}/${album.slug}`, origin).href;
  const imageData = {
    "@context": "https://schema.org", "@type": "ImageGallery", url: albumUrl, inLanguage: locale,
    name: localize(album.title, locale), description: localize(album.description, locale),
    primaryImageOfPage: new URL(photoUrl(album.cover, 1920, 85), origin).href,
    image: album.photos.map(photo => ({
      "@type": "ImageObject",
      contentUrl: new URL(photoUrl(photo, 1920, 85), origin).href,
      thumbnailUrl: new URL(photoUrl(photo, 640), origin).href,
      name: localize(photo.caption, locale) || localize(photo.alt, locale) || localize(album.title, locale),
      description: localize(photo.seoDescription, locale) || localize(photo.alt, locale),
      creditText: photo.author || album.author || undefined, inLanguage: locale,
    })),
  };
  return <main className={styles.page} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageData).replace(/</g, "\\u003c") }} />
    <GalleryHeader locale={locale} slug={slug} />
    <section className={`${styles.hero} ${styles.albumHero}`}><div className={styles.heroImage}><GalleryImage photo={album.cover} alt={localize(album.cover.alt, locale)} sizes="100vw" eager /></div><div className={styles.heroContent}><p className={styles.eyebrow}>{copy[album.category]}</p><h1>{localize(album.title, locale)}</h1><div className={styles.albumMeta}><span>{copy.photos}: {album.photoCount}</span>{date && <time dateTime={album.date}>{date}</time>}{album.location && <span>{album.location}</span>}</div></div></section>
    <div className={styles.content}>
      {galleryIsDemo && <DemoNote locale={locale} />}
      <div className={styles.albumDescription}><div>{album.author && <><span>{copy.author}</span><strong>{album.author}</strong></>}</div><p>{localize(album.description, locale)}</p></div>
      <AlbumPhotos key={`${album._id}-${album._updatedAt}`} album={album} locale={locale} />
    </div><Footer />
  </main>;
}
