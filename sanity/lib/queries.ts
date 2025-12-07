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

export const allWatchesQuery = groq`
  *[_type == "watch"] | order(createdAt desc) {
    _id,
    title,
    slug,
    brand,
    model,
    reference,
    price,
    condition,
    year,
    caseSize,
    caseMaterial,
    dialColor,
    movement,
    description,
    featured,
    "image": images[0].asset->url,
    "images": images[].asset->url
  }
`;

export const singleWatchQuery = groq`
  *[_type == "watch" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    brand,
    model,
    reference,
    price,
    condition,
    year,
    caseSize,
    caseMaterial,
    dialColor,
    movement,
    description,
    featured,
    "images": images[].asset->url
  }
`;

export const featuredWatchesQuery = groq`
  *[_type == "watch" && featured == true] | order(createdAt desc) [0...4] {
    _id,
    title,
    slug,
    brand,
    model,
    reference,
    price,
    "image": images[0].asset->url
  }
`;

