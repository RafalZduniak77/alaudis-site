import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { galleryApiVersion, galleryProjectId } from "../lib/gallery/config";

// Import the approved Piła recording once. Later videos are added in Studio.
async function main() {
  const args = process.argv.slice(2);
  const file = args[args.indexOf("--file") + 1];
  const poster = args[args.indexOf("--poster") + 1];
  if (!args.includes("--file") || !args.includes("--poster") || !file || !poster) {
    throw new Error("Podaj --file /ścieżka/koncert-pila.mp4 oraz --poster /ścieżka/koncert-pila.jpg.");
  }
  const dataset = args.includes("--production") ? "gallery" : "gallery_preview";
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false });
  if (!client.config().token) throw new Error("Uruchom przez sanity exec z --with-user-token.");
  const id = "gallery-video-koncert-pila";
  const existing = await client.fetch<number>('count(*[_id in $ids])', { ids: [id, `drafts.${id}`] }, { perspective: "raw" });
  if (existing) { console.log(`Film jest już zapisany w ${dataset}; pozostawiono istniejący dokument.`); return; }
  const videoAsset = await client.assets.upload("file", createReadStream(resolve(file)), { filename: "alaudis-koncert-pila.mp4", contentType: "video/mp4" });
  const posterAsset = await client.assets.upload("image", createReadStream(resolve(poster)), { filename: "alaudis-koncert-pila.jpg", contentType: "image/jpeg" });
  await client.createIfNotExists({
    _id: id, _type: "galleryVideo",
    title: { _type: "galleryLocalizedString", pl: "Koncert w Pile", en: "Concert in Piła", de: "Konzert in Piła", fr: "Concert à Piła" },
    description: {
      _type: "galleryLocalizedText",
      pl: "Cztery ręce, jeden fortepian. Fragment koncertu w Pile z brzmieniem ALAUDIS.",
      en: "Four hands, one grand piano. A moment from the concert in Piła, with the sound of ALAUDIS.",
      de: "Vier Hände, ein Flügel. Ein Moment aus dem Konzert in Piła mit dem Klang von ALAUDIS.",
      fr: "Quatre mains, un piano. Un instant du concert à Piła, au son d’ALAUDIS.",
    },
    location: "Piła", duration: 95.953944,
    video: { _type: "file", asset: { _type: "reference", _ref: videoAsset._id } },
    poster: {
      _type: "image", _key: "koncert-pila-poster", asset: { _type: "reference", _ref: posterAsset._id },
      alt: { _type: "galleryLocalizedString", pl: "Dwoje pianistów grających na fortepianie ALAUDIS podczas koncertu w Pile", en: "Two pianists playing an ALAUDIS grand piano at a concert in Piła", de: "Zwei Pianisten an einem ALAUDIS-Flügel bei einem Konzert in Piła", fr: "Deux pianistes au piano à queue ALAUDIS lors d’un concert à Piła" },
    },
  });
  console.log(`Dodano „Koncert w Pile” do ${dataset}.`);
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Import nie powiódł się"); process.exitCode = 1; });
