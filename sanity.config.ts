"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { plPLLocale } from "@sanity/locale-pl-pl";
import { galleryProjectId, galleryDataset } from "./lib/gallery/config";
import { gallerySchema } from "./sanity/schema";

export default defineConfig({
  name: "alaudis-gallery-preview",
  title: "ALAUDIS — galeria próbna",
  projectId: galleryProjectId || "unconfigured",
  dataset: galleryDataset,
  basePath: "/panel-galerii",
  schema: { types: gallerySchema },
  plugins: [
    plPLLocale(),
    structureTool({ structure: S => S.list().title("Galeria").items([
      S.listItem().title("Wszystkie albumy").child(S.documentTypeList("galleryAlbum").title("Albumy")),
      S.divider(),
      ...[{ title: "Instrumenty", value: "instruments" }, { title: "Rzemiosło", value: "craft" }, { title: "Wydarzenia", value: "events" }].map(category => S.listItem().title(category.title).child(S.documentList().title(category.title).filter('_type == "galleryAlbum" && category == $category').params({ category: category.value }))),
    ]) }),
  ],
});
