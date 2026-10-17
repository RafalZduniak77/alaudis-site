import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { demoAlbums } from "../lib/gallery/demo";
import { galleryApiVersion, galleryDataset, galleryProjectId } from "../lib/gallery/config";

async function main() {
  if (!galleryProjectId) throw new Error("Ustaw NEXT_PUBLIC_SANITY_PROJECT_ID w .env.local.");
  if (galleryDataset !== "gallery_preview") throw new Error("Import jest dozwolony tylko do gallery_preview.");
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ dataset: galleryDataset, useCdn: false });
  const config = client.config();
  if (!config.token) throw new Error("Uruchom: npx sanity exec scripts/seed-gallery.ts --with-user-token");
  for (const album of demoAlbums) {
    if (await client.getDocument(album._id)) { console.log(`Pominięto istniejący album: ${album.slug}`); continue; }
    const photos = [];
    for (const photo of album.photos) {
      const file = resolve("public", photo.url.slice(1));
      const asset = await client.assets.upload("image", createReadStream(file), { filename: file.split("/").pop() });
      photos.push({ _type: "image", _key: photo._key, asset: { _type: "reference", _ref: asset._id }, caption: { _type: "galleryLocalizedString", ...photo.caption }, alt: { _type: "galleryLocalizedString", ...photo.alt }, author: photo.author });
    }
    await client.createIfNotExists({
      _id: album._id, _type: "galleryAlbum", title: { _type: "galleryLocalizedString", ...album.title },
      description: { _type: "galleryLocalizedText", ...album.description }, category: album.category,
      slug: { _type: "slug", current: album.slug }, author: album.author, photos, coverKey: album.cover._key,
    });
    console.log(`Dodano przykładowy album: ${album.slug} (${photos.length} zdjęć)`);
  }
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Import nie powiódł się"); process.exitCode = 1; });

