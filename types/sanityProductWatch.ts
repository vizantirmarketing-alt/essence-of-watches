/** PDP shape from `singleWatchQuery` after image URLs are resolved with `urlFor`. */
export type SanityProductWatch = {
  _id: string;
  name: string;
  slug: string;
  reference: string;
  serialNumber?: string;
  price: number;
  retailPrice?: number;
  marketValue?: string;
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
};
