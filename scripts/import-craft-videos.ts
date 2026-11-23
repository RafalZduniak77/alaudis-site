import { createReadStream, existsSync } from "node:fs";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { galleryApiVersion, galleryProjectId } from "../lib/gallery/config";
import { craftContent } from "../components/craft/videos";

// Imports the production films shown on /rzemioslo into the gallery panel (section „Rzemiosło”).
// Usage: npm run cms:craft -- --hq /folder/with/historia-01.mp4+jpg [--production] [--replace]
//        npm run cms:craft -- --hide 9,14 [--production]
// For every film the high-quality file from --hq is used when present, otherwise the web file from public/.
async function main() {
  const args = process.argv.slice(2);
  const hq = args.includes("--hq") ? resolve(args[args.indexOf("--hq") + 1]) : "";
  const replace = args.includes("--replace");
  const dataset = args.includes("--production") ? "gallery" : "gallery_preview";
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false });
  if (!client.config().token) throw new Error("Uruchom przez sanity exec z --with-user-token.");

  // --hide 9,14 → takes those films off the site but keeps them in the panel as drafts.
  if (args.includes("--hide")) {
    for (const number of args[args.indexOf("--hide") + 1].split(",")) {
      const id = `gallery-video-craft-${number.trim().padStart(2, "0")}`;
      const doc = await client.getDocument(id);
      if (!doc) { console.log(`${id}: nie jest opublikowany.`); continue; }
      const { _rev, _updatedAt, _createdAt, ...rest } = doc;
      void _rev; void _updatedAt; void _createdAt;
      await client.transaction().createOrReplace({ ...rest, _id: `drafts.${id}` }).delete(id).commit();
      console.log(`${id}: zdjęty ze strony (szkic w panelu) — ${(rest as { title?: { pl?: string } }).title?.pl}`);
    }
    return;
  }

  const list = craftContent.PL.videos;
  for (let index = 0; index < list.length; index++) {
    const name = list[index].src.split("/").pop()!.replace(/\.mp4$/, "");
    const id = `gallery-video-craft-${String(index + 1).padStart(2, "0")}`;
    const exists = await client.fetch<number>("count(*[_id == $id])", { id });
    const drafted = await client.fetch<number>("count(*[_id == $id])", { id: `drafts.${id}` }, { perspective: "raw" });
    if ((exists || drafted) && !replace) { console.log(`${id}: już jest — pomijam.`); continue; }

    const hqVideo = hq && existsSync(`${hq}/${name}.mp4`) ? `${hq}/${name}.mp4` : "";
    const videoPath = hqVideo || resolve(`public/historia-video-web/${name}.mp4`);
    const posterPath = hqVideo && existsSync(`${hq}/${name}.jpg`) ? `${hq}/${name}.jpg` : resolve(`public/historia-video-web/posters/${name}.jpg`);

    const videoAsset = await client.assets.upload("file", createReadStream(videoPath), { filename: `alaudis-rzemioslo-${name}.mp4`, contentType: "video/mp4" });
    const posterAsset = await client.assets.upload("image", createReadStream(posterPath), { filename: `alaudis-rzemioslo-${name}.jpg`, contentType: "image/jpeg" });
    const localized = (pick: (video: { title: string; text: string }) => string) => ({ pl: pick(craftContent.PL.videos[index]), en: pick(craftContent.EN.videos[index]), de: pick(craftContent.DE.videos[index]), fr: pick(craftContent.FR.videos[index]) });

    await client.createOrReplace({
      _id: id, _type: "galleryVideo", section: "craft", order: index + 1,
      title: { _type: "galleryLocalizedString", ...localized(video => video.title) },
      description: { _type: "galleryLocalizedText", ...localized(video => video.text) },
      video: { _type: "file", asset: { _type: "reference", _ref: videoAsset._id } },
      poster: { _type: "image", asset: { _type: "reference", _ref: posterAsset._id }, alt: { _type: "galleryLocalizedString", ...localized(video => video.title) } },
    });
    console.log(`${id}: ${hqVideo ? "wysoka jakość" : "plik ze strony"} — ${list[index].title}`);
  }
  console.log(`Gotowe: ${list.length} filmów w ${dataset}.`);
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Import nie powiódł się"); process.exitCode = 1; });
