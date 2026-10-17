import { NextRequest, NextResponse } from "next/server";
import { getAlbumPhotos } from "@/lib/gallery/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offset = Number(request.nextUrl.searchParams.get("offset") || 0);
  const revision = request.nextUrl.searchParams.get("revision");
  if (!/^[a-z0-9-]{1,96}$/.test(slug) || !Number.isSafeInteger(offset) || offset < 0 || offset > 100000) return NextResponse.json({ error: "Invalid query" }, { status: 400 });
  try {
    const data = await getAlbumPhotos(slug, offset);
    if (!data) return NextResponse.json({ error: "Album unavailable" }, { status: 404, headers: { "Cache-Control": "no-store" } });
    if (revision && data.revision !== revision) return NextResponse.json({ error: "Album changed" }, { status: 409, headers: { "Cache-Control": "no-store" } });
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Gallery unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
