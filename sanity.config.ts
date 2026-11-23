"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { plPLLocale } from "@sanity/locale-pl-pl";
import { galleryProjectId, galleryDataset, galleryIsProduction } from "./lib/gallery/config";
import { gallerySchema } from "./sanity/schema";

export default defineConfig({
  name: galleryIsProduction ? "alaudis-gallery" : "alaudis-gallery-preview",
  title: galleryIsProduction ? "ALAUDIS — galeria" : "ALAUDIS — galeria próbna",
  projectId: galleryProjectId || "unconfigured",
  dataset: galleryDataset,
  basePath: "/panel-galerii",
  releases: { enabled: false },
  scheduledDrafts: { enabled: false },
  tasks: { enabled: false },
  document: { comments: { enabled: false } },
  schema: { types: gallerySchema },
  plugins: [
    plPLLocale(),
    structureTool({ title: "Galeria", structure: S => S.list().title("Galeria").items([
      S.listItem().title("Wszystkie albumy").child(S.documentTypeList("galleryAlbum").title("Albumy")),
      S.divider(),
      ...[{ title: "Instrumenty", value: "instruments" }, { title: "Rzemiosło", value: "craft" }, { title: "Wydarzenia", value: "events" }].map(category => S.listItem().title(category.title).child(S.documentList().title(category.title)
        // „Rzemiosło” pokazuje albumy oraz filmy z produkcji (podstrona /rzemioslo).
        .filter(category.value === "craft" ? '(_type == "galleryAlbum" && category == $category) || (_type == "galleryVideo" && section == "craft")' : '_type == "galleryAlbum" && category == $category')
        .params({ category: category.value })
        .defaultOrdering(category.value === "craft" ? [{ field: "_type", direction: "asc" }, { field: "order", direction: "asc" }] : [{ field: "_updatedAt", direction: "desc" }]))),
      S.divider(),
      S.listItem().title("Wideo").child(S.documentList().title("Wideo").filter('_type == "galleryVideo" && coalesce(section, "sound") != "craft"')),
    ]) }),
  ],
});
