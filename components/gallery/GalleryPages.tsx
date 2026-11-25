import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getAlbum, getAlbums } from "@/lib/gallery/server";
import { galleryIsProduction } from "@/lib/gallery/config";
import { galleryCopy } from "@/lib/gallery/i18n";
import { galleryLocales, galleryPath, galleryFilters, isGalleryFilter, localize, type GalleryLocale } from "@/lib/gallery/types";
import { photoUrl } from "@/lib/gallery/images";
import { gallerySeo, metaDescription } from "@/lib/gallery/seo";
import type { GalleryPhoto } from "@/lib/gallery/types";
import GalleryHeader from "./GalleryHeader";
import AlbumCards from "./AlbumCards";
import AlbumPhotos from "./AlbumPhotos";
import styles from "./Gallery.module.css";

function Unavailable({ locale }: { locale: GalleryLocale }) {
  const copy = galleryCopy[locale];
  return <main className={styles.page} lang={locale}><GalleryHeader locale={locale} /><div className={styles.unavailable}><p className={styles.eyebrow}>{copy.eyebrow}</p><h1>{copy.unavailable}</h1><Link className={styles.button} href={galleryPath(locale)} prefetch={false}>{copy.tryAgain}</Link></div></main>;
}

// Podgląd linku (Facebook, WhatsApp, LinkedIn): wspólne pola dla galerii i albumów.
function shareData(locale: GalleryLocale, title: string, description: string, url: string, image: { url: string; width: number; height: number; alt: string }) {
  return {
    openGraph: {
      type: "website" as const, siteName: "ALAUDIS", title, description, url, locale: gallerySeo[locale].ogLocale,
      alternateLocale: galleryLocales.filter(language => language !== locale).map(language => gallerySeo[language].ogLocale),
      images: [image],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [image.url] },
  };
}

// Okładka albumu przycięta do formatu podglądu linku (1200 × 630).
function shareImage(photo: GalleryPhoto) {
  if (photo.url.startsWith("/")) return photoUrl(photo, 1200, 85);
  const url = new URL(photoUrl(photo, 1200, 85));
  url.searchParams.set("w", "1200"); url.searchParams.set("h", "630"); url.searchParams.set("fit", "crop");
  return url.toString();
}

export function galleryMetadata(locale: GalleryLocale): Metadata {
  const { title, description } = gallerySeo[locale];
  const alternates = galleryAlternates(locale);
  return {
    title, description, metadataBase: galleryOrigin(), alternates,
    ...shareData(locale, title, description, alternates.canonical, { url: "/og-alaudis.jpg", width: 1200, height: 630, alt: title }),
    robots: { index: galleryIsProduction, follow: galleryIsProduction },
  };
}

function galleryOrigin() {
  if (galleryIsProduction) return new URL("https://alaudis.eu");
  return new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
}

function galleryAlternates(locale: GalleryLocale, slug?: string) {
  const suffix = slug ? `/${slug}` : "";
  const url = (language: GalleryLocale) => new URL(`${galleryPath(language)}${suffix}`, galleryOrigin()).href;
  return { canonical: url(locale), languages: { ...Object.fromEntries(galleryLocales.map(language => [language, url(language)])), "x-default": url("en") } };
}

export async function galleryAlbumMetadata(locale: GalleryLocale, params: Promise<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  if (!/^[a-z0-9-]{1,96}$/.test(slug)) return galleryMetadata(locale);
  const album = await getAlbum(slug).catch(() => null);
  if (!album) return galleryMetadata(locale);
  const name = localize(album.title, locale);
  const title = `${localize(album.seoTitle, locale) || `${name} – ${gallerySeo[locale].photos}`} | ALAUDIS`;
  // Opis albumu złożony z samej nazwy nic nie mówi: wtedy bierzemy opis całej galerii.
  const own = localize(album.seoDescription, locale) || localize(album.description, locale);
  const description = metaDescription(own.trim().length > 40 ? own : `${name}. ${gallerySeo[locale].description}`);
  const url = new URL(`${galleryPath(locale)}/${album.slug}`, galleryOrigin()).href;
  return {
    ...galleryMetadata(locale), alternates: galleryAlternates(locale, album.slug), title, description,
    ...shareData(locale, title, description, url, { url: shareImage(album.cover), width: 1200, height: 630, alt: localize(album.cover.alt, locale) || name }),
  };
}

// Ścieżka „Strona główna › Galeria › Album” dla wyszukiwarek.
function breadcrumbs(locale: GalleryLocale, album?: { name: string; url: string }) {
  const origin = galleryOrigin();
  const items = [
    { name: gallerySeo[locale].home, url: new URL(locale === "pl" ? "/" : `/${locale}`, origin).href },
    { name: gallerySeo[locale].gallery, url: new URL(galleryPath(locale), origin).href },
    ...(album ? [album] : []),
  ];
  return { "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) };
}

const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export async function GalleryIndexPage({ locale, searchParams }: { locale: GalleryLocale; searchParams: Promise<{ dzial?: string }> }) {
  const { dzial } = await searchParams;
  const category = dzial && isGalleryFilter(dzial) ? dzial : undefined;
  const copy = galleryCopy[locale];
  const data = await getAlbums(category).catch(() => null);
  if (!data) return <Unavailable locale={locale} />;
  const indexData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", url: new URL(galleryPath(locale), galleryOrigin()).href, inLanguage: locale, name: gallerySeo[locale].title, description: gallerySeo[locale].description, publisher: { "@id": "https://alaudis.eu/#organization" } },
      breadcrumbs(locale),
    ],
  };
  return <main className={styles.page} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(indexData)} />
    <GalleryHeader locale={locale} category={category} />
    <div className={styles.content}>
      <h1 className="sr-only">{copy.eyebrow}</h1>
      <nav aria-label={copy.albums} className={styles.filters}>{[undefined, ...galleryFilters].map(value => <Link key={value || "all"} className={value === "instruments" || value === "craft" ? styles.desktopFilter : undefined} href={`${galleryPath(locale)}${value ? `?dzial=${value}` : ""}`} prefetch={false} scroll={false} aria-current={category === value ? "page" : undefined}>{value === "video" ? copy.sound : value ? copy[value] : copy.all}</Link>)}</nav>
      {category === "video" && <p className={styles.sectionIntro}>{copy.soundIntro}</p>}
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
  const origin = galleryOrigin();
  const albumUrl = new URL(`${galleryPath(locale)}/${album.slug}`, origin).href;
  const imageData = {
    "@context": "https://schema.org", "@type": "ImageGallery", url: albumUrl, inLanguage: locale,
    name: localize(album.title, locale), description: localize(album.description, locale) || undefined,
    publisher: { "@id": "https://alaudis.eu/#organization" },
    breadcrumb: breadcrumbs(locale, { name: localize(album.title, locale), url: albumUrl }),
    primaryImageOfPage: new URL(photoUrl(album.cover, 1920, 85), origin).href,
    image: album.photos.map(photo => ({
      "@type": "ImageObject",
      contentUrl: new URL(photoUrl(photo, 1920, 85), origin).href,
      thumbnailUrl: new URL(photoUrl(photo, 640), origin).href,
      name: localize(photo.caption, locale) || localize(photo.alt, locale) || localize(album.title, locale),
      description: localize(photo.seoDescription, locale) || localize(photo.alt, locale) || undefined,
      creditText: photo.author || album.author || undefined,
      creator: photo.author || album.author ? { "@type": "Person", name: photo.author || album.author } : undefined,
      copyrightNotice: "ALAUDIS / SAP Renovation", inLanguage: locale,
    })),
  };
  return <main className={styles.page} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(imageData)} />
    <GalleryHeader locale={locale} slug={slug} />
    <div className={styles.content}>
      <h1 className="sr-only">{localize(album.title, locale)}</h1>
      <AlbumPhotos key={`${album._id}-${album._updatedAt}`} album={album} locale={locale} />
    </div><Footer />
  </main>;
}
