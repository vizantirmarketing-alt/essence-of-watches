# 📘 Essence of Watches Development Guidelines
## 🗓️ Last Updated: November 2024

Welcome to the Essence of Watches codebase. This document defines how the project is structured, how new features should be added, and how both developers and AI tools (like Cursor or Copilot Agents) should interact with the repository.

The goal: preserve a clean, modular, and predictable architecture — so every developer (or AI agent) knows exactly where to work without breaking the structure.

---

## ⚙️ 1. Core Rules

### System Instruction for AI and Developers:

- Always follow the Essence of Watches folder structure.
- **Each page has its own folder** with its sections inside.
- **Shared components (Navbar, Footer, Cart, etc.) have their own folders** — NOT inside page folders.
- Never bundle unrelated code into one file.
- Preserve naming consistency (e.g., `Hero.tsx`, `ProductGrid.tsx`, `FilterSidebar.tsx`).
- Ensure all imports remain clean, modular, and use the `@/` alias for absolute imports.
- **This is a Next.js App Router project** — use `app/` directory for routes, not `pages/`.

### ⚠️ AI Safety Block (Pin this in Cursor):

```
Do not create, edit, move, or delete any folders or files other than the one explicitly mentioned in this prompt.
Only modify the exact file specified. Do not generate new components, pages, layouts, or assets unless directly instructed.
Preserve the current folder structure, imports, and exports exactly as they are.
Your task is limited strictly to updating the existing code inside the specified file while keeping all other parts of the project untouched.
```

Pin or reference this block inside Cursor or any AI-assisted IDE session before making automated edits.

---

## 🧭 2. Folder Structure Overview

```
essence-of-watches/
 ├─ app/                            # Next.js App Router routes
 │   ├─ layout.tsx                  # Root layout (Navbar, Footer, CartProvider)
 │   ├─ page.tsx                    # Homepage route (/)
 │   ├─ globals.css                 # Global styles
 │   ├─ shop/
 │   │   ├─ page.tsx                # Shop/catalog page route (/shop)
 │   │   └─ [slug]/
 │   │       └─ page.tsx            # Individual product page (/shop/[slug])
 │   ├─ brands/
 │   │   ├─ page.tsx                # All brands page (/brands)
 │   │   └─ [brand]/
 │   │       └─ page.tsx            # Brand-specific catalog (/brands/rolex)
 │   ├─ collections/
 │   │   ├─ page.tsx                # Collections overview (/collections)
 │   │   └─ [collection]/
 │   │       └─ page.tsx            # Specific collection (/collections/vintage)
 │   ├─ sell/
 │   │   └─ page.tsx                # Sell your watch page (/sell)
 │   ├─ about/
 │   │   └─ page.tsx                # About page route (/about)
 │   ├─ authenticity/
 │   │   └─ page.tsx                # Authentication guarantee (/authenticity)
 │   ├─ blog/
 │   │   ├─ page.tsx                # Blog listing (/blog)
 │   │   └─ [slug]/
 │   │       └─ page.tsx            # Individual blog post (/blog/[slug])
 │   ├─ contact/
 │   │   └─ page.tsx                # Contact page route (/contact)
 │   ├─ cart/
 │   │   └─ page.tsx                # Shopping cart page (/cart)
 │   ├─ checkout/
 │   │   └─ page.tsx                # Checkout flow (/checkout)
 │   ├─ account/
 │   │   ├─ page.tsx                # Account dashboard (/account)
 │   │   ├─ orders/
 │   │   │   └─ page.tsx            # Order history (/account/orders)
 │   │   └─ wishlist/
 │   │       └─ page.tsx            # Saved watches (/account/wishlist)
 │   ├─ faq/
 │   │   └─ page.tsx                # FAQ page (/faq)
 │   └─ api/                        # API routes
 │       ├─ products/
 │       ├─ auth/
 │       └─ checkout/
 │
 ├─ components/
 │   │
 │   ├─ navbar/                     # ✅ Shared - NOT inside any page folder
 │   │   ├─ Navbar.tsx
 │   │   ├─ NavLinks.tsx
 │   │   ├─ SearchBar.tsx
 │   │   └─ MobileMenu.tsx
 │   │
 │   ├─ footer/                     # ✅ Shared - NOT inside any page folder
 │   │   └─ Footer.tsx
 │   │
 │   ├─ cart/                       # ✅ Shared cart components
 │   │   ├─ CartDrawer.tsx
 │   │   ├─ CartItem.tsx
 │   │   └─ CartSummary.tsx
 │   │
 │   ├─ product/                    # ✅ Shared product components
 │   │   ├─ ProductCard.tsx
 │   │   ├─ ProductGrid.tsx
 │   │   ├─ ProductQuickView.tsx
 │   │   └─ WishlistButton.tsx
 │   │
 │   ├─ filters/                    # ✅ Shared filter components
 │   │   ├─ FilterSidebar.tsx
 │   │   ├─ BrandFilter.tsx
 │   │   ├─ PriceFilter.tsx
 │   │   ├─ ConditionFilter.tsx
 │   │   └─ SortDropdown.tsx
 │   │
 │   ├─ ui/                         # ✅ UI primitives (shadcn)
 │   │   ├─ button.tsx
 │   │   ├─ card.tsx
 │   │   ├─ input.tsx
 │   │   ├─ badge.tsx
 │   │   ├─ dialog.tsx
 │   │   ├─ sheet.tsx
 │   │   └─ (other shadcn components)
 │   │
 │   ├─ homepage/                   # 🏠 Homepage sections
 │   │   ├─ Hero.tsx                # Cinematic hero with featured watch
 │   │   ├─ FeaturedWatches.tsx     # Curated selection carousel
 │   │   ├─ BrandShowcase.tsx       # Brand logos grid
 │   │   ├─ NewArrivals.tsx         # Latest additions
 │   │   ├─ WhyChooseUs.tsx         # Trust signals
 │   │   ├─ Testimonials.tsx        # Customer reviews
 │   │   ├─ BlogPreview.tsx         # Latest articles
 │   │   └─ Newsletter.tsx          # Email signup CTA
 │   │
 │   ├─ shop-page/                  # 🛒 Shop page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ ProductListing.tsx
 │   │   └─ EmptyState.tsx
 │   │
 │   ├─ product-page/               # ⌚ Individual product page sections
 │   │   ├─ ImageGallery.tsx
 │   │   ├─ ProductInfo.tsx
 │   │   ├─ ProductSpecs.tsx
 │   │   ├─ ConditionReport.tsx
 │   │   ├─ AuthenticityBadge.tsx
 │   │   ├─ PriceDisplay.tsx
 │   │   ├─ AddToCart.tsx
 │   │   ├─ RelatedWatches.tsx
 │   │   └─ RecentlyViewed.tsx
 │   │
 │   ├─ brands-page/                # 🏷️ Brands page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ BrandGrid.tsx
 │   │   ├─ BrandCard.tsx
 │   │   └─ FeaturedBrand.tsx
 │   │
 │   ├─ collections-page/           # 📦 Collections page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ CollectionGrid.tsx
 │   │   └─ CollectionCard.tsx
 │   │
 │   ├─ sell-page/                  # 💰 Sell your watch page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ HowItWorks.tsx
 │   │   ├─ ConsignmentForm.tsx
 │   │   ├─ WatchEvaluator.tsx
 │   │   └─ FAQ.tsx
 │   │
 │   ├─ about-page/                 # 👥 About page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ OurStory.tsx
 │   │   ├─ Team.tsx
 │   │   ├─ Values.tsx
 │   │   └─ Showroom.tsx
 │   │
 │   ├─ authenticity-page/          # ✓ Authenticity page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ AuthProcess.tsx
 │   │   ├─ Certifications.tsx
 │   │   └─ Guarantee.tsx
 │   │
 │   ├─ blog-page/                  # 📝 Blog page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ BlogCard.tsx
 │   │   ├─ BlogGrid.tsx
 │   │   ├─ Categories.tsx
 │   │   └─ FeaturedPost.tsx
 │   │
 │   ├─ blog-post-page/             # 📄 Individual blog post sections
 │   │   ├─ PostHeader.tsx
 │   │   ├─ PostContent.tsx
 │   │   ├─ AuthorBio.tsx
 │   │   └─ RelatedPosts.tsx
 │   │
 │   ├─ cart-page/                  # 🛒 Cart page sections
 │   │   ├─ CartItems.tsx
 │   │   ├─ OrderSummary.tsx
 │   │   └─ EmptyCart.tsx
 │   │
 │   ├─ checkout-page/              # 💳 Checkout page sections
 │   │   ├─ CheckoutForm.tsx
 │   │   ├─ ShippingInfo.tsx
 │   │   ├─ PaymentMethod.tsx
 │   │   ├─ OrderReview.tsx
 │   │   └─ CheckoutSummary.tsx
 │   │
 │   ├─ account-page/               # 👤 Account page sections
 │   │   ├─ AccountNav.tsx
 │   │   ├─ ProfileInfo.tsx
 │   │   ├─ OrderHistory.tsx
 │   │   └─ SavedWatches.tsx
 │   │
 │   ├─ contact-page/               # 📧 Contact page sections
 │   │   ├─ Hero.tsx
 │   │   ├─ ContactForm.tsx
 │   │   ├─ ContactInfo.tsx
 │   │   └─ ShowroomLocation.tsx
 │   │
 │   └─ faq-page/                   # ❓ FAQ page sections
 │       ├─ Hero.tsx
 │       ├─ FAQAccordion.tsx
 │       └─ ContactCTA.tsx
 │
 ├─ contexts/                       # React contexts
 │   ├─ ThemeContext.tsx            # Light/Dark mode provider
 │   ├─ CartContext.tsx             # Shopping cart state
 │   ├─ WishlistContext.tsx         # Wishlist state
 │   └─ AuthContext.tsx             # User authentication
 │
 ├─ hooks/                          # Custom React hooks
 │   ├─ use-mobile.tsx
 │   ├─ use-cart.tsx
 │   ├─ use-wishlist.tsx
 │   ├─ use-products.tsx
 │   └─ use-filters.tsx
 │
 ├─ lib/                            # Utility functions
 │   ├─ utils.ts
 │   ├─ formatters.ts               # Price, date formatting
 │   ├─ validators.ts               # Form validation
 │   └─ api.ts                      # API helpers
 │
 ├─ types/                          # TypeScript types
 │   ├─ product.ts
 │   ├─ cart.ts
 │   ├─ user.ts
 │   └─ order.ts
 │
 ├─ data/                           # Static data / mock data
 │   ├─ brands.ts
 │   ├─ collections.ts
 │   └─ testimonials.ts
 │
 └─ public/                         # Static assets
     └─ assets/
         ├─ images/
         │   ├─ watches/
         │   ├─ brands/
         │   └─ lifestyle/
         ├─ fonts/
         ├─ logos/
         └─ icons/
```

---

## 🚨 3. Critical Structure Rules

### ✅ DO:
```
components/
  navbar/Navbar.tsx              ✅ Shared component in own folder
  footer/Footer.tsx              ✅ Shared component in own folder
  cart/CartDrawer.tsx            ✅ Shared cart component
  product/ProductCard.tsx        ✅ Shared product component
  homepage/Hero.tsx              ✅ Page-specific section
  homepage/FeaturedWatches.tsx   ✅ Page-specific section
  shop-page/Hero.tsx             ✅ Different hero for shop page
  product-page/ImageGallery.tsx  ✅ Product detail specific

app/
  page.tsx                       ✅ Homepage route
  shop/page.tsx                  ✅ Shop page route
  shop/[slug]/page.tsx           ✅ Dynamic product route
  brands/[brand]/page.tsx        ✅ Dynamic brand route
```

### 🚫 DON'T:
```
components/
  homepage/
    Hero.tsx
    Navbar.tsx                   🚫 NO! Navbar is shared, not homepage-specific
    CartDrawer.tsx               🚫 NO! Cart is shared across all pages
  
  Hero.tsx                       🚫 NO! Which page is this for?
  ProductCard.tsx                🚫 NO! Should be in product/ folder

app/
  pages/
    shop.tsx                     🚫 NO! Use app/shop/page.tsx instead
```

### Why This Structure:

1. **Navbar/Footer/Cart are SHARED** — used on every page, so they get their own folders
2. **Product components are SHARED** — ProductCard used across homepage, shop, collections
3. **Each page folder contains ONLY its sections** — easy to find and modify
4. **Same-named files are OK** — `homepage/Hero.tsx` vs `shop-page/Hero.tsx` are different
5. **Clear ownership** — you instantly know what belongs where
6. **Next.js App Router** — routes are defined by folder structure in `app/` directory

---

## 🧱 4. Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Folders (pages) | kebab-case + "-page" | `shop-page/`, `product-page/` |
| Folders (shared) | kebab-case | `navbar/`, `cart/`, `product/` |
| Components | PascalCase | `Hero.tsx`, `ProductCard.tsx` |
| UI Components | lowercase | `button.tsx`, `card.tsx` |
| Contexts | PascalCase | `CartContext.tsx` |
| Hooks | camelCase with "use" | `use-cart.tsx`, `use-filters.tsx` |
| Types | PascalCase | `Product`, `CartItem` |
| Assets | kebab-case | `rolex-submariner-001.jpg` |
| Routes (App Router) | kebab-case | `app/shop/page.tsx`, `app/brands/page.tsx` |

### Import Examples:
```tsx
// ✅ Shared components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";

// ✅ Page-specific sections
import Hero from "@/components/homepage/Hero";
import FeaturedWatches from "@/components/homepage/FeaturedWatches";
import BrandShowcase from "@/components/homepage/BrandShowcase";

// ✅ Different page's hero
import ShopHero from "@/components/shop-page/Hero";

// ✅ Contexts and hooks
import { useCart } from "@/hooks/use-cart";
import { CartProvider } from "@/contexts/CartContext";

// ✅ Types
import type { Product, CartItem } from "@/types/product";

// 🚫 DON'T use relative imports
import Hero from "../../../components/homepage/Hero";
```

---

## 📄 5. Page File Structure (Next.js App Router)

Each page file in `/app/[route]/page.tsx` should import its sections:

### Example: `app/page.tsx` (Homepage)
```tsx
import Hero from "@/components/homepage/Hero";
import FeaturedWatches from "@/components/homepage/FeaturedWatches";
import BrandShowcase from "@/components/homepage/BrandShowcase";
import NewArrivals from "@/components/homepage/NewArrivals";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Testimonials from "@/components/homepage/Testimonials";
import BlogPreview from "@/components/homepage/BlogPreview";
import Newsletter from "@/components/homepage/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWatches />
      <BrandShowcase />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
```

**Note:** Navbar, Footer, and CartDrawer are in `app/layout.tsx`, so they don't need to be imported in each page.

### Example: `app/shop/page.tsx`
```tsx
import Hero from "@/components/shop-page/Hero";
import ProductListing from "@/components/shop-page/ProductListing";
import { FilterSidebar } from "@/components/filters/FilterSidebar";

export default function ShopPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto flex gap-8">
        <FilterSidebar />
        <ProductListing />
      </div>
    </>
  );
}
```

### Example: `app/shop/[slug]/page.tsx` (Product Detail)
```tsx
import ImageGallery from "@/components/product-page/ImageGallery";
import ProductInfo from "@/components/product-page/ProductInfo";
import ProductSpecs from "@/components/product-page/ProductSpecs";
import ConditionReport from "@/components/product-page/ConditionReport";
import RelatedWatches from "@/components/product-page/RelatedWatches";
import RecentlyViewed from "@/components/product-page/RecentlyViewed";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        <ImageGallery slug={params.slug} />
        <ProductInfo slug={params.slug} />
      </div>
      <ProductSpecs slug={params.slug} />
      <ConditionReport slug={params.slug} />
      <RelatedWatches slug={params.slug} />
      <RecentlyViewed />
    </>
  );
}
```

### Root Layout: `app/layout.tsx`
```tsx
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import './globals.css';

export const metadata = {
  title: 'Essence of Watches | Pre-Owned Luxury Timepieces',
  description: 'Discover authenticated pre-owned luxury watches from Rolex, Patek Philippe, Audemars Piguet, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />
              <CartDrawer />
              <main>{children}</main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 🎨 6. Styling & Theming

### Design Philosophy:
Essence of Watches demands a **premium, luxury aesthetic** that conveys trust, sophistication, and timelessness — befitting high-end watch clientele.

### Design Tokens:

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| Background Primary | `#FFFFFF` | `#0A0A0A` |
| Background Secondary | `#F8F8F8` | `#141414` |
| Background Accent | `#F5F3EF` (warm cream) | `#1A1814` (warm black) |
| Text Primary | `#1A1A1A` | `#F8F8F8` |
| Text Secondary | `#6B6B6B` | `#A0A0A0` |
| Accent Gold | `#C9A962` | `#D4B872` |
| Accent Navy | `#1B365D` | `#2A4A7A` |
| Border | `#E5E5E5` | `#2A2A2A` |
| Success | `#2D5A3D` | `#4A8B5C` |
| Error | `#8B2635` | `#C44D5C` |

### Typography:
```css
/* Headings - Elegant Serif */
font-family: 'Playfair Display', serif;

/* Body - Clean Sans */
font-family: 'Inter', sans-serif;

/* Watch Details/Specs - Refined Sans */
font-family: 'DM Sans', sans-serif;
```

### Theme Usage:
```tsx
'use client' // Required when using hooks/contexts

import { useTheme } from "@/contexts/ThemeContext";

const Component = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`
      ${isDarkMode ? 'bg-[#0A0A0A] text-[#F8F8F8]' : 'bg-white text-[#1A1A1A]'}
      transition-colors duration-300
    `}>
      {/* content */}
    </section>
  );
};
```

### Visual Guidelines:
- **Photography**: High-resolution macro shots, consistent lighting, neutral backgrounds
- **Spacing**: Generous whitespace — luxury breathes
- **Animations**: Subtle, elegant transitions (no flashy effects)
- **Cards**: Minimal borders, soft shadows, clean typography
- **CTAs**: Gold accent for primary actions, understated secondary buttons

**Important:** In Next.js App Router, components using hooks or contexts must have `'use client'` directive at the top.

---

## ⌚ 7. Product Data Structure

### Product Type Definition:
```typescript
// types/product.ts
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
```

### Brand Data:
```typescript
// data/brands.ts
export const brands = [
  { name: 'Rolex', slug: 'rolex', logo: '/assets/brands/rolex.svg' },
  { name: 'Patek Philippe', slug: 'patek-philippe', logo: '/assets/brands/patek.svg' },
  { name: 'Audemars Piguet', slug: 'audemars-piguet', logo: '/assets/brands/ap.svg' },
  { name: 'Omega', slug: 'omega', logo: '/assets/brands/omega.svg' },
  { name: 'Cartier', slug: 'cartier', logo: '/assets/brands/cartier.svg' },
  // ...
];
```

---

## 🧠 8. AI Usage & Safeguards

When using Cursor or any AI tool:

1. **Pin this document** before making edits
2. **Only modify the specified file**
3. **Respect the folder structure** — never put Navbar inside a page folder
4. **Maintain theme support** — always support light/dark modes
5. **Remember Next.js App Router** — routes are in `app/`, not `pages/`
6. **Add 'use client'** when using hooks, contexts, or browser APIs
7. **Preserve luxury aesthetic** — no generic or cheap-looking components

### Cursor Prompts Examples:
```
✅ "Update the hero text in components/homepage/Hero.tsx"
✅ "Add a new filter option to components/filters/FilterSidebar.tsx"
✅ "Create ImageGallery.tsx in components/product-page/"
✅ "Fix the cart total calculation in contexts/CartContext.tsx"
✅ "Create a new route at app/brands/[brand]/page.tsx"

🚫 "Move Navbar.tsx into the homepage folder"
🚫 "Create a new file structure"
🚫 "Put ProductCard inside the shop-page folder"
🚫 "Create pages/shop.tsx" (use app/shop/page.tsx instead)
```

---

## 🧰 9. Debugging Hierarchy

| Problem Type | Check File/Folder |
|--------------|-------------------|
| Navbar issues | `components/navbar/Navbar.tsx` |
| Footer issues | `components/footer/Footer.tsx` |
| Cart functionality | `components/cart/`, `contexts/CartContext.tsx` |
| Product display | `components/product/ProductCard.tsx` |
| Homepage hero | `components/homepage/Hero.tsx` |
| Shop page | `components/shop-page/` |
| Product detail page | `components/product-page/` |
| Filter functionality | `components/filters/` |
| Theme/dark mode | `contexts/ThemeContext.tsx` |
| Page routing | `app/[route]/page.tsx` |
| Root layout | `app/layout.tsx` |
| UI components | `components/ui/` |
| Global styles | `app/globals.css` |
| Type errors | `types/` |

---

## 🛒 10. E-commerce Specific Guidelines

### Cart State Management:
```tsx
// contexts/CartContext.tsx
interface CartItem {
  product: Product;
  quantity: number; // Usually 1 for watches
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
```

### Checkout Flow:
1. Cart Review (`/cart`)
2. Shipping Information (`/checkout` - step 1)
3. Payment Method (`/checkout` - step 2)
4. Order Review (`/checkout` - step 3)
5. Confirmation (`/checkout/confirmation`)

### Trust Signals (Always Visible):
- Authenticity Guarantee badge
- Secure Checkout indicators
- Return Policy link
- Contact Information

---

## 🚀 11. Git & Deployment

### Commit Format:
```
feat(homepage): add featured watches carousel
fix(cart): resolve quantity update bug
style(product-page): update image gallery layout
refactor(filters): optimize price range filter
chore(deps): update Next.js to 14.x
```

### Branch Strategy:
```
main          → Production
staging       → Pre-production testing
develop       → Active development
feature/*     → New features
fix/*         → Bug fixes
```

### Deployment:
- Push to `main` → auto-deploys to Vercel (Production)
- Push to `staging` → auto-deploys to Vercel (Preview)
- Next.js App Router is fully supported on Vercel

---

## 📝 12. Quick Reference

### Adding a new section to a page:
1. Create file in `components/[page-name]-page/NewSection.tsx`
2. Import in `app/[route]/page.tsx`
3. Add to JSX

### Adding a new shared component:
1. Create folder `components/[component-name]/`
2. Create file `ComponentName.tsx` inside
3. Import where needed

### Adding a new page:
1. Create folder `app/[route-name]/`
2. Create `page.tsx` inside the folder
3. Create sections in `components/[page-name]-page/`
4. Import sections in the page file
5. Add nav link in `components/navbar/Navbar.tsx`

### Adding a new product filter:
1. Create filter component in `components/filters/`
2. Import in `FilterSidebar.tsx`
3. Update filter state in `hooks/use-filters.tsx`

### Adding a new brand page:
1. Route already exists at `app/brands/[brand]/page.tsx`
2. Add brand data to `data/brands.ts`
3. Brand logo to `public/assets/brands/`

### Next.js App Router Notes:
- Routes are created by folder structure: `app/shop/page.tsx` → `/shop`
- Dynamic routes: `app/shop/[slug]/page.tsx` → `/shop/rolex-submariner`
- Use `'use client'` directive for components using hooks, contexts, or browser APIs
- Server components are default (no directive needed)
- Metadata can be exported from page files or layout files

---

## 🔐 13. Security Considerations

### E-commerce Security:
- Never store payment info client-side
- Use environment variables for API keys
- Implement proper authentication for account pages
- Validate all form inputs server-side
- Use HTTPS everywhere

### Environment Variables:
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://essenceofwatches.com
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
```

---

*Essence of Watches — Where Time Meets Excellence*
