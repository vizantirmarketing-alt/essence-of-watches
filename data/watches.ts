/** Inventory state from CMS (e.g. Sanity). Omitted on legacy static rows defaults to available in UI. */
export type WatchStatus = 'available' | 'sold' | 'reserved';

export function normalizeWatchStatus(raw: string | undefined): WatchStatus {
  if (raw === 'sold' || raw === 'reserved' || raw === 'available') return raw;
  return 'available';
}

export interface Watch {
  id: string;
  slug: string;
  brand: string;
  model: string;
  reference: string;
  year: number;
  price: number;
  originalMSRP?: number;
  condition: 'Unworn' | 'Excellent' | 'Very Good' | 'Good' | 'Fair';
  boxPapers: 'Full Set' | 'Box Only' | 'Papers Only' | 'Watch Only';
  dialColor: string;
  caseSize: string;
  caseMaterial: string;
  movement: string;
  image: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  status?: WatchStatus;
}

// All Rolex Collections for filtering
export const collections = [
  'All Models',
  'Submariner',
  'Cosmograph Daytona',
  'GMT-Master II',
  'Datejust',
  'Day-Date',
  'Explorer',
  'Sea-Dweller',
  'Deepsea',
  'Sky-Dweller',
  'Yacht-Master',
  'Air-King',
  'Milgauss',
  'Oyster Perpetual',
];
