import { test } from "node:test";
import assert from "node:assert/strict";
import { parse, evaluate } from "groq-js";
import { published, photoProjection, albumProjection, galleryItemsFilter, galleryItemProjection, galleryItemsOrder } from "../lib/gallery/queries.ts";
import { photoUrl, photoWidths, photoDisplaySize } from "../lib/gallery/images.ts";

const asset = { _id: "image-test-2400x1600-jpg", _type: "sanity.imageAsset", url: "https://cdn.sanity.io/images/example/gallery_preview/test-2400x1600.jpg", metadata: { dimensions: { width: 2400, height: 1600 }, lqip: "data:image/jpeg;base64,test" } };
const photos = Array.from({ length: 31 }, (_, index) => ({ _key: `photo-${index}`, asset: { _ref: asset._id }, caption: { pl: `Zdjęcie ${index + 1}` }, seoDescription: { pl: "Opis detalu instrumentu", en: "Description of the instrument detail" }, alt: { pl: `Opis ${index + 1}`, en: `Description ${index + 1}` } }));
const album = { _id: "album-test", _type: "galleryAlbum", _updatedAt: "2026-10-17T10:00:00Z", title: { pl: "Album", en: "Album EN" }, seoTitle: { pl: "Fortepiany ALAUDIS — rzemiosło", en: "ALAUDIS pianos — craftsmanship" }, seoDescription: { pl: "Praca nad mechanizmem fortepianu" }, slug: { current: "test-album" }, category: "craft", author: "Autor albumu", coverKey: "photo-29", photos };
async function run(query, dataset, params = {}) { return (await evaluate(parse(query), { dataset, params })).get(); }

test("Published reader excludes drafts, releases and empty albums", async () => {
  const dataset = [asset, album, { ...album, _id: "drafts.album-test", title: { pl: "Nieopublikowana zmiana" } }, { ...album, _id: "versions.release.album-test" }, { ...album, _id: "empty", photos: [] }];
  const result = await run(`*[${published}]{${albumProjection}}`, dataset);
  assert.equal(result.length, 1);
  assert.equal(result[0].title.pl, "Album");
  assert.equal(result[0].photoCount, 31);
  assert.equal(result[0].cover._key, "photo-29");
  assert.equal(result[0].cover.width, 2400);
  assert.equal(result[0].seoTitle.en, "ALAUDIS pianos — craftsmanship");
  assert.equal(result[0].seoDescription.pl, "Praca nad mechanizmem fortepianu");
});

test("Photo pagination keeps order, dimensions and multilingual descriptions", async () => {
  const dataset = [asset, album];
  const first = await run(`*[${published}][0].photos[defined(asset->url)][0...24]${photoProjection}`, dataset);
  const next = await run(`*[${published}][0].photos[defined(asset->url)][24...48]${photoProjection}`, dataset);
  assert.equal(first.length, 24); assert.equal(next.length, 7);
  assert.equal(next[0]._key, "photo-24"); assert.equal(next[0].alt.en, "Description 25");
  assert.equal(next[0].seoDescription.en, "Description of the instrument detail");
  assert.equal(new Set([...first, ...next].map(photo => photo._key)).size, 31);
});

test("High-resolution landscape, portrait and panorama originals have bounded 4K viewer variants", () => {
  for (const [width, height] of [[12000, 8000], [8000, 12000], [24000, 4000]]) {
    const photo = { url: asset.url, width, height };
    const display = photoDisplaySize(photo);
    assert.equal(Math.max(display.width, display.height), 3840);
    assert(Math.abs(display.width / display.height - width / height) < 0.001);
    const variants = photoWidths(photo);
    assert.equal(Math.max(...variants), display.width);
    const url = new URL(photoUrl(photo, 24000, 85));
    assert.equal(Number(url.searchParams.get("w")), display.width);
    assert.equal(url.searchParams.get("fit"), "max");
    assert.equal(url.searchParams.get("q"), "85");
    assert.equal(url.searchParams.get("auto"), "format");
    const localPhoto = { ...photo, url: "/sample-photographer-original.jpg" };
    assert(Number(new URL(photoUrl(localPhoto, 24000), "http://localhost").searchParams.get("w")) <= display.width);
    assert(Math.max(...photoWidths(localPhoto)) <= display.width);
  }
});

test("Cover follows its key after reordering and unpublished albums disappear", async () => {
  const reversed = { ...album, photos: [...photos].reverse() };
  const result = await run(`*[${published}][0]{${albumProjection}}`, [asset, reversed]);
  assert.equal(result.cover._key, "photo-29");
  assert.equal(await run(`count(*[${published}])`, [asset, { ...album, _id: "drafts.album-test" }]), 0);
});

test("Thumbnails use bounded CDN variants and do not request originals", () => {
  const photo = { url: asset.url, width: 2400, height: 1600 };
  const thumb = new URL(photoUrl(photo, 320));
  assert.equal(thumb.searchParams.get("w"), "320");
  assert.equal(thumb.searchParams.get("auto"), "format");
  assert.equal(thumb.searchParams.get("q"), "80");
  assert.equal(new URL(photoUrl(photo, 3840)).searchParams.get("w"), "2400");
  assert.equal(Math.max(...photoWidths(photo)), 2400);
  assert.throws(() => photoUrl({ ...photo, url: "https://untrusted.example/image.jpg" }, 320));
});

const videoAsset = { _id: "file-concert-mp4", _type: "sanity.fileAsset", url: "https://cdn.sanity.io/files/example/gallery_preview/concert.mp4", mimeType: "video/mp4" };
const video = { _id: "video-concert", _type: "galleryVideo", _createdAt: "2026-10-25T10:00:00Z", title: { pl: "Koncert w Pile", en: "Concert in Piła" }, location: "Piła", duration: 96, video: { asset: { _ref: videoAsset._id } }, poster: { _key: "poster", asset: { _ref: asset._id }, alt: { pl: "Koncert" } } };

test("Video filter exposes published playable films while preserving photo categories", async () => {
  const dataset = [asset, videoAsset, album, video,
    { ...video, _id: "drafts.video-concert" }, { ...video, _id: "versions.release.video-concert" },
    { ...video, _id: "missing-file", video: {} }, { ...video, _id: "missing-poster", poster: {} },
    { _id: "file-unsupported", _type: "sanity.fileAsset", url: "https://cdn.sanity.io/files/example/gallery_preview/concert.mov", mimeType: "video/quicktime" },
    { ...video, _id: "unsupported-format", video: { asset: { _ref: "file-unsupported" } } },
  ];
  const query = `*[${galleryItemsFilter}] | order(${galleryItemsOrder}) {${galleryItemProjection}}`;
  const all = await run(query, dataset, { category: null });
  assert.deepEqual(all.map(item => item._id), [album._id, video._id]);
  assert.equal(all[0].cover._key, "photo-29");
  const films = await run(query, dataset, { category: "video" });
  assert.equal(films.length, 1);
  assert.equal(films[0].category, "video");
  assert.equal(films[0].title.en, "Concert in Piła");
  assert.equal(films[0].video.url, videoAsset.url);
  assert.equal(films[0].video.mimeType, "video/mp4");
  assert.equal(films[0].cover.width, 2400);
  assert.equal(films[0].cover.alt.pl, "Koncert");
  assert.equal(films[0].duration, 96);
  assert.deepEqual((await run(query, dataset, { category: "craft" })).map(item => item._id), [album._id]);
  assert.deepEqual(await run(query, dataset, { category: "events" }), []);
  assert.equal((await run(query, dataset.filter(doc => doc._id !== video._id), { category: "video" })).length, 0);
});

test("Mixed gallery pagination counts videos and keeps a deterministic order", async () => {
  const videos = Array.from({ length: 14 }, (_, index) => ({ ...video, _id: `video-${String(index).padStart(2, "0")}` }));
  const dataset = [asset, videoAsset, album, ...videos];
  const page = (offset, category = null) => run(`{"total": count(*[${galleryItemsFilter}]), "items": *[${galleryItemsFilter}] | order(${galleryItemsOrder}) [${offset}...${offset + 12}]{${galleryItemProjection}}}`, dataset, { category });
  const first = await page(0), second = await page(12);
  assert.equal(first.total, 15); assert.equal(second.total, 15);
  assert.equal(first.items.length, 12); assert.equal(second.items.length, 3);
  assert.equal(first.items[0]._id, album._id);
  assert.equal(new Set([...first.items, ...second.items].map(item => item._id)).size, 15);
  assert.equal((await page(0, "video")).total, 14);
});
