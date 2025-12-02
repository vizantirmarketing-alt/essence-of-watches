export interface Product {
  id: string;
  slug: string;
  
  // Basic Info
  brand: string;
  model: string;
  reference: string;
  year: number;
  
  // Pricing
  price: number;
  originalMSRP?: number;
  
  // Details
  condition: 'Excellent' | 'Very Good' | 'Good' | 'Fair';
  boxPapers: 'Full Set' | 'Box Only' | 'Papers Only' | 'Watch Only';
  warranty: string;
  
  // Specifications
  specs: {
    caseMaterial: string;
    caseSize: string;
    dialColor: string;
    movement: string;
    bracelet: string;
    waterResistance: string;
  };
  
  // Media
  images: string[];
  video?: string;
  
  // Metadata
  featured: boolean;
  newArrival: boolean;
  collection?: string;
  createdAt: Date;
  updatedAt: Date;
}


