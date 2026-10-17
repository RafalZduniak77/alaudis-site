// Public identifiers only. No API tokens belong in this file or in NEXT_PUBLIC_*.
// The project ID is public; Studio write access still requires Sanity sign-in.
export const galleryProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5pcn3xw4";
export const galleryIsProduction = process.env.NEXT_PUBLIC_GALLERY_ENVIRONMENT === "production";
export const galleryDataset = galleryIsProduction ? "gallery" : "gallery_preview";
export const galleryApiVersion = "2026-10-01";

