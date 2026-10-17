"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function GalleryStudio() {
  return <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "white", color: "#171a20" }}><NextStudio config={config} /></div>;
}
