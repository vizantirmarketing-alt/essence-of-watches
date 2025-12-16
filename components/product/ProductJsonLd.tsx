'use client';

interface ProductJsonLdProps {
  product: {
    name: string;
    slug: string;
    reference?: string;
    price: number;
    status?: string;
    conditionNotes?: string;
    images?: any[];
  };
}

export default function ProductJsonLd({ product }: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "sku": product.reference || product.slug,
    "brand": {
      "@type": "Brand",
      "name": "Rolex"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": product.status === 'sold' ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      "itemCondition": "https://schema.org/UsedCondition"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
