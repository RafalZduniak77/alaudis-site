import { createReadStream } from "node:fs";
import { extname, resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { demoAlbums } from "../lib/gallery/demo";
import { galleryApiVersion, galleryDataset, galleryProjectId } from "../lib/gallery/config";

async function main() {
  if (!galleryProjectId) throw new Error("Ustaw NEXT_PUBLIC_SANITY_PROJECT_ID w .env.local.");
  // Production import is explicit and only creates the already approved albums.
  // Existing documents (including drafts with the same address) are never replaced.
  const production = process.argv.includes("--production");
  const dataset = production ? "gallery" : galleryDataset;
  if (!production && dataset !== "gallery_preview") throw new Error("Import produkcyjny wymaga flagi --production.");
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false });
  const config = client.config();
  if (!config.token) throw new Error("Uruchom: npx sanity exec scripts/seed-gallery.ts --with-user-token");
  for (const album of demoAlbums) {
    const id = production ? `gallery-album-${album.slug}` : album._id;
    const existing = await client.fetch<number>('count(*[_type == "galleryAlbum" && (_id in $ids || slug.current == $slug)])', {
      ids: [id, `drafts.${id}`], slug: album.slug,
    }, { perspective: "raw" });
    if (existing) { console.log(`Pominięto istniejący album: ${album.slug}`); continue; }
    const photos = [];
    for (const photo of album.photos) {
      const file = resolve("public", photo.url.slice(1));
      const asset = await client.assets.upload("image", createReadStream(file), { filename: `alaudis-${album.slug}-${photo._key}${extname(file).toLowerCase()}` });
      photos.push({
        _type: "image", _key: photo._key, asset: { _type: "reference", _ref: asset._id },
        caption: { _type: "galleryLocalizedString", ...photo.caption },
        alt: { _type: "galleryLocalizedString", ...photo.alt },
        ...(photo.seoDescription ? { seoDescription: { _type: "galleryLocalizedText", ...photo.seoDescription } } : {}),
        ...(photo.author && photo.author !== album.author ? { author: photo.author } : {}),
      });
    }
    await client.createIfNotExists({
      _id: id, _type: "galleryAlbum", title: { _type: "galleryLocalizedString", ...album.title },
      description: { _type: "galleryLocalizedText", ...album.description }, category: album.category,
      slug: { _type: "slug", current: album.slug }, author: album.author, photos, coverKey: album.cover._key,
      ...(album.date ? { date: album.date } : {}),
      ...(album.location ? { location: album.location } : {}),
      ...(album.seoTitle ? { seoTitle: { _type: "galleryLocalizedString", ...album.seoTitle } } : {}),
      ...(album.seoDescription ? { seoDescription: { _type: "galleryLocalizedText", ...album.seoDescription } } : {}),
    });
    console.log(`Dodano album do ${dataset}: ${album.slug} (${photos.length} zdjęć)`);
  }
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Import nie powiódł się"); process.exitCode = 1; });

