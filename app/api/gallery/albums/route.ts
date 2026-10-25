import { NextRequest, NextResponse } from "next/server";
import { getAlbums } from "@/lib/gallery/server";
import { isGalleryFilter } from "@/lib/gallery/types";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category") || undefined;
  const offset = Number(request.nextUrl.searchParams.get("offset") || 0);
  if ((category && !isGalleryFilter(category)) || !Number.isSafeInteger(offset) || offset < 0 || offset > 100000) return NextResponse.json({ error: "Invalid query" }, { status: 400 });
  try {
    return NextResponse.json(await getAlbums(category && isGalleryFilter(category) ? category : undefined, offset), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Gallery unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

