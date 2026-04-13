/** Shape returned by `allWatchesQuery` and `relatedWatchesQuery` (keep in sync with GROQ). */
export type SanityListingWatch = {
  _id: string;
  name: string;
  slug: string;
  reference: string;
  serialNumber?: string | null;
  price: number;
  status?: string;
  collection: string;
  year: number;
  caseDiameter: string;
  dialColor: string;
  material: string;
  condition: string;
  box: boolean;
  papers: boolean;
  description?: string;
  featured?: boolean;
  images: string[];
  image?: string | null;
};
