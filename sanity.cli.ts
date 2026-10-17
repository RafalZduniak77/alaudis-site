import { defineCliConfig } from "sanity/cli";
import { galleryDataset, galleryProjectId } from "./lib/gallery/config";

export default defineCliConfig({ api: { projectId: galleryProjectId || undefined, dataset: galleryDataset } });
