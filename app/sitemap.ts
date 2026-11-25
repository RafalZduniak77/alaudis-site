import type { MetadataRoute } from "next";
import { getAlbums, getVideoList } from "@/lib/gallery/server";
import { photoUrl } from "@/lib/gallery/images";
import { ALBUM_BATCH_SIZE, galleryPath, localize, videoPath } from "@/lib/gallery/types";
import {
  SITE_URL,
  languageAlternates,
  pageUrl,
  seoLocales,
  seoPages,
  type SeoLocale,
} from "@/lib/seo";

// Mapa strony odświeża się co godzinę, aby nowe albumy galerii
// trafiały do wyszukiwarek bez ponownego wdrożenia.
export const revalidate = 3600;

function entries(
  urlFor: (locale: SeoLocale) => string,
  options: Pick<MetadataRoute.Sitemap[number], "priority" | "changeFrequency" | "lastModified">,
): MetadataRoute.Sitemap {
  const languages = languageAlternates(urlFor);
  return seoLocales.map((locale) => ({
    url: urlFor(locale),
    alternates: { languages },
    ...options,
  }));
}

async function albumSlugs() {
  const albums: { slug: string; updatedAt: string }[] = [];
  try {
    for (let offset = 0; ; offset += ALBUM_BATCH_SIZE) {
      const { items, total } = await getAlbums(undefined, offset);
      for (const item of items) {
        // Filmy i albumy bez adresu nie mają własnej strony.
        if ("slug" in item && typeof item.slug === "string" && item.slug) {
          albums.push({ slug: item.slug, updatedAt: item._updatedAt });
        }
      }
      if (!items.length || offset + ALBUM_BATCH_SIZE >= total) break;
    }
  } catch {
    // Galeria chwilowo niedostępna: mapa zawiera wtedy tylko strony stałe.
  }
  return albums;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = seoPages.flatMap((page) =>
    entries((locale) => pageUrl(locale, page), {
      changeFrequency: "monthly",
      priority: page === "home" ? 1 : page.startsWith("model") ? 0.9 : 0.7,
    }),
  );

  const gallery = entries((locale) => `${SITE_URL}${galleryPath(locale)}`, {
    changeFrequency: "weekly",
    priority: 0.6,
  });

  const albums = (await albumSlugs()).flatMap(({ slug, updatedAt }) =>
    entries((locale) => `${SITE_URL}${galleryPath(locale)}/${slug}`, {
      changeFrequency: "monthly",
      priority: 0.5,
      lastModified: updatedAt,
    }),
  );

  // Każdy film ma własną stronę; wpis „video” mówi Google, co jest na niej do obejrzenia.
  const films = (await getVideoList().catch(() => [])).flatMap((video) => {
    const languages = languageAlternates((locale) => `${SITE_URL}${videoPath(locale, video._id)}`);
    return seoLocales.map((locale) => ({
      url: `${SITE_URL}${videoPath(locale, video._id)}`,
      alternates: { languages },
      changeFrequency: "monthly" as const,
      priority: video.section === "craft" ? 0.4 : 0.6,
      lastModified: video._updatedAt,
      videos: [{
        title: localize(video.title, locale).slice(0, 100),
        thumbnail_loc: photoUrl(video.cover, 1280, 85),
        description: (localize(video.description, locale) || localize(video.title, locale)).slice(0, 2000),
        content_loc: video.video.url,
        ...(video.duration ? { duration: Math.round(video.duration) } : {}),
        publication_date: video.date ? `${video.date}T12:00:00+01:00` : video._createdAt,
      }],
    }));
  });

  return [...pages, ...gallery, ...albums, ...films];
}
