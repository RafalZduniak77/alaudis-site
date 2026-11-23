import { createReadStream, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { galleryApiVersion, galleryProjectId } from "../lib/gallery/config";

type Localized = { pl: string; en?: string; de?: string; fr?: string };
type VideoSpec = { id: string; filename: string; title: Localized; description?: Localized; alt: Localized; location?: string; date?: string; author?: string; duration?: number; order?: number };

// Usage: npm run cms:video -- --spec scripts/videos/<name>.json --file film.mp4 --poster kadr.jpg [--production]
// Text-only update of an imported film: npm run cms:video -- --spec scripts/videos/<name>.json --update [--production]
// Swap the video file (and optionally the poster) of an imported film: add --replace --file film.mp4 [--poster kadr.jpg]
async function main() {
  const args = process.argv.slice(2);
  const arg = (name: string) => { const index = args.indexOf(name); return index >= 0 ? args[index + 1] : undefined; };
  const [specPath, file, poster] = [arg("--spec"), arg("--file"), arg("--poster")];
  const update = args.includes("--update");
  const replace = args.includes("--replace");
  if (!specPath || (replace && !file) || (!update && !replace && (!file || !poster))) throw new Error("Podaj --spec scripts/videos/<film>.json, --file /ścieżka/film.mp4 oraz --poster /ścieżka/kadr.jpg.");
  const spec = JSON.parse(readFileSync(resolve(specPath), "utf8")) as VideoSpec;
  if (!/^gallery-video-[a-z0-9-]+$/.test(spec.id) || !spec.title?.pl || !spec.alt?.pl) throw new Error("Plik opisu wymaga pól id (gallery-video-…), title.pl i alt.pl.");
  const dataset = args.includes("--production") ? "gallery" : "gallery_preview";
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false });
  if (!client.config().token) throw new Error("Uruchom przez sanity exec z --with-user-token.");
  const existing = await client.fetch<number>("count(*[_id in $ids])", { ids: [spec.id, `drafts.${spec.id}`] }, { perspective: "raw" });
  const text = {
    title: { _type: "galleryLocalizedString", ...spec.title },
    ...(spec.description && { description: { _type: "galleryLocalizedText", ...spec.description } }),
    ...(spec.location && { location: spec.location }),
    ...(spec.date && { date: spec.date }),
    ...(spec.author && { author: spec.author }),
    ...(spec.duration && { duration: spec.duration }),
    ...(spec.order && { order: spec.order }),
  };
  if (replace) {
    if (!existing) throw new Error(`Brak filmu ${spec.id} w ${dataset}; najpierw go zaimportuj.`);
    const videoAsset = await client.assets.upload("file", createReadStream(resolve(file!)), { filename: `${spec.filename}.mp4`, contentType: "video/mp4" });
    const patch: Record<string, unknown> = { "video.asset": { _type: "reference", _ref: videoAsset._id } };
    if (poster) {
      const posterAsset = await client.assets.upload("image", createReadStream(resolve(poster)), { filename: `${spec.filename}.jpg`, contentType: "image/jpeg" });
      patch["poster.asset"] = { _type: "reference", _ref: posterAsset._id };
    }
    await client.patch(spec.id).set(patch).commit();
    console.log(`Podmieniono plik${poster ? " i miniaturę" : ""} filmu „${spec.title.pl}” w ${dataset}.`);
    return;
  }
  if (update) {
    if (!existing) throw new Error(`Brak filmu ${spec.id} w ${dataset}; najpierw go zaimportuj.`);
    const unset = (["description", "location", "date", "author", "order"] as const).filter(key => !(key in text));
    await client.patch(spec.id).set({ ...text, "poster.alt": { _type: "galleryLocalizedString", ...spec.alt } }).unset(unset).commit();
    console.log(`Zaktualizowano opis „${spec.title.pl}” w ${dataset}.`);
    return;
  }
  if (existing) { console.log(`„${spec.title.pl}” jest już zapisany w ${dataset}; pozostawiono istniejący dokument.`); return; }
  const videoAsset = await client.assets.upload("file", createReadStream(resolve(file!)), { filename: `${spec.filename}.mp4`, contentType: "video/mp4" });
  const posterAsset = await client.assets.upload("image", createReadStream(resolve(poster!)), { filename: `${spec.filename}.jpg`, contentType: "image/jpeg" });
  await client.createIfNotExists({
    _id: spec.id, _type: "galleryVideo",
    ...text,
    video: { _type: "file", asset: { _type: "reference", _ref: videoAsset._id } },
    poster: { _type: "image", asset: { _type: "reference", _ref: posterAsset._id }, alt: { _type: "galleryLocalizedString", ...spec.alt } },
  });
  console.log(`Dodano „${spec.title.pl}” do ${dataset}.`);
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Import nie powiódł się"); process.exitCode = 1; });
