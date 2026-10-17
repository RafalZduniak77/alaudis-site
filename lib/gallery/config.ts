// Public identifiers only. No API tokens belong in this file or in NEXT_PUBLIC_*.
export const galleryProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const galleryIsProduction = process.env.NEXT_PUBLIC_GALLERY_ENVIRONMENT === "production";
export const galleryDataset = galleryIsProduction ? "gallery" : "gallery_preview";
export const galleryApiVersion = "2026-10-01";

