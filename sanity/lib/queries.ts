import { groq } from 'next-sanity';

export const seoQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    seo {
      metaTitle,
      metaDescription,
      canonicalUrl,
      noIndex,
      "ogImage": ogImage.asset->url
    }
  }
`;

/** Shared listing shape for catalog + related watches (keep in sync). */
const watchListingProjection = `
  _id,
  name,
  "slug": slug.current,
  reference,
  serialNumber,
  price,
  status,
  collection,
  year,
  caseDiameter,
  dialColor,
  material,
  condition,
  box,
  papers,
  description,
  featured,
  "image": images[0].asset->url,
  "images": images[].asset->url
`;

export const allWatchesQuery = groq`
  *[_type == "watch"] | order(year desc, price desc) {
    ${watchListingProjection}
  }
`;

/** Same fields as `allWatchesQuery`; same brand via `name` glob; exclude current slug; max 6. */
export const relatedWatchesQuery = groq`
  *[_type == "watch" && slug.current != $slug && name match $brandGlob] | order(year desc, price desc) [0...6] {
    ${watchListingProjection}
  }
`;

export const singleWatchQuery = groq`
  *[_type == "watch" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    reference,
    serialNumber,
    price,
    retailPrice,
    marketValue,
    status,
    collection,
    year,
    caseDiameter,
    dialColor,
    material,
    condition,
    box,
    papers,
    description,
    featured,
    "images": images[].asset->url
  }
`;

export const featuredWatchesQuery = groq`
  *[_type == "watch" && featured == true] | order(year desc, price desc) [0...4] {
    _id,
    name,
    "slug": slug.current,
    reference,
    price,
    "image": images[0].asset->url
  }
`;

