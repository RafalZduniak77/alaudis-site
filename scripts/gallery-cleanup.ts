import { getCliClient } from "sanity/cli";
import { galleryApiVersion, galleryProjectId } from "../lib/gallery/config";

// Porządki w galerii (Sanity). Bez flag tylko wypisuje, co by zrobił.
//   --production      baza produkcyjna (domyślnie: podglądowa)
//   --fix-slug        poprawia literówkę w adresie albumu („facory” → „factory”)
//   --delete-unused   usuwa zdjęcia i filmy, których nie używa żaden dokument (także roboczy)
// Użycie: npx sanity exec scripts/gallery-cleanup.ts --with-user-token -- [--production] [--fix-slug] [--delete-unused]
const OLD_SLUG = "mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-facory";
const NEW_SLUG = "mlode-talenty-wielka-przyszlosc-antonina-waliszewska-w-alaudis-piano-factory";

async function main() {
  const args = process.argv.slice(2);
  const dataset = args.includes("--production") ? "gallery" : "gallery_preview";
  // „raw” widzi też wersje robocze: plik użyty tylko w szkicu nie jest „nieużywany”.
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false, perspective: "raw" });
  if (!client.config().token) throw new Error("Uruchom przez sanity exec z --with-user-token.");
  console.log(`Baza: ${dataset}`);

  const albums: { _id: string }[] = await client.fetch(`*[slug.current == $slug]{_id}`, { slug: OLD_SLUG });
  console.log(`Albumy ze starym adresem: ${albums.map(album => album._id).join(", ") || "brak"}`);
  if (args.includes("--fix-slug")) for (const album of albums) { await client.patch(album._id).set({ "slug.current": NEW_SLUG }).commit(); console.log(`  poprawiono ${album._id}`); }

  const unused: { _id: string; _type: string; originalFilename?: string; size?: number; _createdAt: string }[] = await client.fetch(
    `*[_type in ["sanity.imageAsset","sanity.fileAsset"] && count(*[references(^._id)]) == 0]{_id,_type,originalFilename,size,_createdAt} | order(_createdAt asc)`,
  );
  console.log(`Nieużywane pliki: ${unused.length}, razem ${(unused.reduce((sum, asset) => sum + (asset.size || 0), 0) / 1e6).toFixed(1)} MB`);
  for (const asset of unused) console.log(`  ${asset._createdAt.slice(0, 10)}  ${((asset.size || 0) / 1e6).toFixed(1).padStart(7)} MB  ${asset.originalFilename || "(bez nazwy)"}  ${asset._id}`);
  if (args.includes("--delete-unused")) {
    for (const asset of unused) {
      // Ostatnie sprawdzenie tuż przed usunięciem: ktoś mógł w międzyczasie użyć pliku.
      const used: number = await client.fetch(`count(*[references($id)])`, { id: asset._id });
      if (used) { console.log(`  pominięto (już używany): ${asset._id}`); continue; }
      await client.delete(asset._id);
      console.log(`  usunięto ${asset._id}`);
    }
  }
}

main().catch(error => { console.error(error instanceof Error ? error.message : error); process.exit(1); });
