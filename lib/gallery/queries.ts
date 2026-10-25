export const photoProjection = `{
  _key, caption, seoDescription, alt, author,
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
}`;
export const albumProjection = `
  _id, _updatedAt, "slug": slug.current, title, description, seoTitle, seoDescription, category, date, location, author,
  "photoCount": count(photos[defined(asset->url)]),
  "cover": coalesce(photos[_key == ^.coverKey && defined(asset->url)][0], photos[defined(asset->url)][0])${photoProjection}
`;
export const published = `_type == "galleryAlbum" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && defined(slug.current) && count(photos[defined(asset->url)]) > 0`;

export const publishedVideo = `_type == "galleryVideo" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && defined(title.pl) && defined(video.asset->url) && video.asset->mimeType in ["video/mp4", "video/webm"] && defined(poster.asset->url)`;
// Keep existing photo albums first in “All”; videos have their own filter as well.
export const galleryItemsFilter = `(((${published}) && (!defined($category) || category == $category)) || ((${publishedVideo}) && (!defined($category) || $category == "video")))`;
export const galleryItemProjection = `
  ${albumProjection},
  _type == "galleryVideo" => {
    "category": "video", duration,
    "cover": poster${photoProjection},
    "video": video.asset->{url, mimeType}
  }
`;
export const galleryItemsOrder = `_type asc, coalesce(date, _createdAt) desc, _id asc`;

