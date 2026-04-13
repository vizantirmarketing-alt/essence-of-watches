import type { Watch } from '@/data/watches';
import type { Product } from '@/types/product';

export function watchToProduct(watch: Watch): Product {
  const images =
    watch.images?.length > 0
      ? watch.images
      : watch.image
        ? [watch.image]
        : [];

  return {
    id: watch.id,
    slug: watch.slug,
    brand: watch.brand,
    model: watch.model,
    reference: watch.reference,
    year: watch.year,
    price: watch.price,
    originalMSRP: watch.originalMSRP,
    condition: watch.condition,
    boxPapers: watch.boxPapers,
    warranty: '2 Year Warranty',
    specs: {
      caseMaterial: watch.caseMaterial,
      caseSize: watch.caseSize,
      dialColor: watch.dialColor,
      movement: watch.movement,
      bracelet: 'Oyster',
      waterResistance: '100m',
    },
    images,
    featured: watch.featured,
    newArrival: watch.newArrival,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

type SanityWatchLike = {
  _id: string;
  slug: string;
  name: string;
  reference: string;
  year: number;
  price: number;
  condition: string;
  box: boolean;
  papers: boolean;
  dialColor: string;
  caseDiameter: string;
  material: string;
  images: string[];
  featured?: boolean;
};

export function sanityWatchToProduct(watch: SanityWatchLike): Product {
  const boxPapers =
    watch.box && watch.papers
      ? 'Full Set'
      : watch.box
        ? 'Box Only'
        : watch.papers
          ? 'Papers Only'
          : 'Watch Only';

  const condition =
    (['Excellent', 'Very Good', 'Good', 'Fair'].includes(watch.condition)
      ? watch.condition
      : 'Excellent') as Product['condition'];

  return {
    id: watch._id,
    slug: watch.slug,
    brand: 'Rolex',
    model: watch.name,
    reference: watch.reference,
    year: watch.year,
    price: watch.price,
    condition,
    boxPapers,
    warranty: '2 Year Warranty',
    specs: {
      caseMaterial: watch.material || '',
      caseSize: watch.caseDiameter || '',
      dialColor: watch.dialColor || '',
      movement: 'Automatic',
      bracelet: 'Oyster',
      waterResistance: '100m',
    },
    images: watch.images?.length ? watch.images : [],
    featured: watch.featured || false,
    newArrival: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
