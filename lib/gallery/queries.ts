export const photoProjection = `{
  _key, caption, alt, author,
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
}`;
export const albumProjection = `
  _id, _updatedAt, "slug": slug.current, title, description, category, date, location, author,
  "photoCount": count(photos[defined(asset->url)]),
  "cover": coalesce(photos[_key == ^.coverKey && defined(asset->url)][0], photos[defined(asset->url)][0])${photoProjection}
`;
export const published = `_type == "galleryAlbum" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && defined(slug.current) && count(photos[defined(asset->url)]) > 0`;

