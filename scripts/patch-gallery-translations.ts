import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { galleryApiVersion, galleryProjectId } from "../lib/gallery/config";
import { craftContent } from "../components/craft/videos";

// Adds the Spanish and Italian texts to gallery content that already exists in Sanity.
// It only sets the `es` and `it` sub-fields: nothing else in a document is changed, no file is uploaded.
// Sources: scripts/videos/*.json (films), components/craft/videos.ts (production films), scripts/albums-es-it.json (albums).
// Usage: npx sanity exec scripts/patch-gallery-translations.ts --with-user-token -- [--production] [--dry]
type Pair = { es?: string; it?: string };
type Localized = Pair & { pl?: string };
const LANGS = ["es", "it"] as const;

async function main() {
  const args = process.argv.slice(2);
  const dataset = args.includes("--production") ? "gallery" : "gallery_preview";
  const dry = args.includes("--dry");
  const client = getCliClient({ apiVersion: galleryApiVersion }).withConfig({ projectId: galleryProjectId, dataset, useCdn: false });
  if (!client.config().token) throw new Error("Uruchom przez sanity exec z --with-user-token.");

  let patched = 0;
  const apply = async (id: string, label: string, set: Record<string, string>, missing: Record<string, unknown> = {}) => {
    if (!Object.keys(set).length) return;
    if (!dry) await client.patch(id).setIfMissing(missing).set(set).commit();
    patched++;
    console.log(`${dry ? "[próba] " : ""}${id}: ${Object.keys(set).length} pól — ${label}`);
  };
  const fill = (set: Record<string, string>, path: string, value?: Pair) => { for (const lang of LANGS) if (value?.[lang]) set[`${path}.${lang}`] = value[lang]!; };

  // 1. Films from scripts/videos/*.json
  for (const file of readdirSync(resolve("scripts/videos")).filter(name => name.endsWith(".json"))) {
    const spec = JSON.parse(readFileSync(resolve("scripts/videos", file), "utf8")) as { id: string; title: Localized; description?: Localized; alt: Localized };
    const doc = await client.fetch<{ title?: Localized; hasDescription: boolean } | null>(`*[_id == $id][0]{title, "hasDescription": defined(description)}`, { id: spec.id });
    if (!doc) { console.log(`${spec.id}: brak w ${dataset} — pomijam.`); continue; }
    if (doc.title?.pl !== spec.title.pl) { console.log(`${spec.id}: polski tytuł w panelu różni się od pliku — pomijam.`); continue; }
    const set: Record<string, string> = {};
    fill(set, "title", spec.title);
    if (spec.description && doc.hasDescription) fill(set, "description", spec.description);
    fill(set, "poster.alt", spec.alt);
    await apply(spec.id, spec.title.pl ?? "", set);
  }

  // 2. Production films (section „Rzemiosło”); the number in the id is the position in components/craft/videos.ts
  for (let index = 0; index < craftContent.PL.videos.length; index++) {
    const id = `gallery-video-craft-${String(index + 1).padStart(2, "0")}`;
    const doc = await client.fetch<{ title?: Localized } | null>(`*[_id == $id][0]{title}`, { id });
    if (!doc) continue;
    if (doc.title?.pl !== craftContent.PL.videos[index].title) { console.log(`${id}: polski tytuł w panelu różni się od pliku — pomijam.`); continue; }
    const pair = (pick: (video: { title: string; text: string }) => string): Pair => ({ es: pick(craftContent.ES.videos[index]), it: pick(craftContent.IT.videos[index]) });
    const set: Record<string, string> = {};
    fill(set, "title", pair(video => video.title));
    fill(set, "description", pair(video => video.text));
    fill(set, "poster.alt", pair(video => video.title));
    await apply(id, craftContent.PL.videos[index].title, set, { description: { _type: "galleryLocalizedText" } });
  }

  // 3. Albums from scripts/albums-es-it.json (photo captions are keyed by the photo's _key)
  const albums = JSON.parse(readFileSync(resolve("scripts/albums-es-it.json"), "utf8")) as Record<string, { title?: Pair; description?: Pair; seoTitle?: Pair; seoDescription?: Pair; photos?: Record<string, Pair> }>;
  for (const [id, text] of Object.entries(albums)) {
    const doc = await client.fetch<{ title?: Localized; keys: string[]; fields: string[] } | null>(
      `*[_id == $id][0]{title, "keys": photos[defined(alt)]._key, "fields": [select(defined(description) => "description"), select(defined(seoTitle) => "seoTitle"), select(defined(seoDescription) => "seoDescription")]}`, { id });
    if (!doc) { console.log(`${id}: brak w ${dataset} — pomijam.`); continue; }
    const set: Record<string, string> = {};
    fill(set, "title", text.title);
    for (const field of ["description", "seoTitle", "seoDescription"] as const) if (doc.fields.includes(field)) fill(set, field, text[field]);
    for (const [key, caption] of Object.entries(text.photos ?? {})) {
      if (!doc.keys?.includes(key)) continue;
      fill(set, `photos[_key=="${key}"].alt`, caption);
      fill(set, `photos[_key=="${key}"].caption`, caption);
    }
    await apply(id, doc.title?.pl ?? "", set);
  }
  console.log(`${dry ? "Próba: " : "Gotowe: "}${patched} dokumentów w ${dataset}.`);
}

main().catch(error => { console.error(error instanceof Error ? error.message : "Aktualizacja nie powiodła się"); process.exitCode = 1; });
