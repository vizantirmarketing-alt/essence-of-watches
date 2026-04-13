# Essence of Watches

Pre-owned luxury watch e-commerce platform specializing in authenticated Rolex and high-end timepieces. Built with Next.js, Sanity CMS, and a full e-commerce feature set including wishlist, authentication certificates, buyer protection, and transactional email.

**Live site:** https://www.essenceofwatches.com

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **CMS:** Sanity v3 (Studio at `/studio`)
- **Auth:** NextAuth with Google and Apple providers
- **Styling:** Tailwind CSS, Framer Motion
- **Email:** Resend (transactional + inquiry forms)
- **Analytics:** Google Analytics 4, Microsoft Clarity
- **Hosting:** Vercel

---

## Features

- Full watch catalog with search, price, collection, and condition filters
- Product detail pages with image zoom lightbox, Schema.org JSON-LD structured data, and related watches fetched live from Sanity by brand (excludes current watch)
- Stock status indicators — available, reserved, sold — on catalog and PDP
- Wishlist with localStorage persistence and heart toggle on cards and PDP
- Per-watch Certificate of Authenticity with generated certificate number
- Price transparency — retail price, market value range, and fair price indicator on PDP
- Buyer protection page with 7-day inspection window messaging across checkout flow
- Newsletter signup on homepage and blog with Resend integration
- Contact, Appointment, Sell, and Source inquiry forms wired to Resend email API
- Blog with 12 SEO-optimized posts covering the pre-owned watch buyer journey
- Rolex reference guide — searchable, filterable index of 167 references across all model families
- User-facing sitemap page at /sitemap-page with all site routes organized by category
- Warranty page, Returns page, Authenticity page, Buyer Protection page
- Google and Apple OAuth authentication via NextAuth
- Sanity Studio for inventory and content management
- Order tracking via FedEx

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/vizantirmarketing-alt/essence-of-watches.git
cd essence-of-watches
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_WEBHOOK_SECRET=your_webhook_secret

# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga4_measurement_id

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# NextAuth — Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth — Apple
APPLE_ID=your_apple_service_id
APPLE_SECRET=your_apple_private_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Resend
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
RESEND_FROM_EMAIL=Essence of Watches <notifications@yourdomain.com>

# Site
NEXT_PUBLIC_SITE_URL=https://www.essenceofwatches.com
```

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

### 5. Access Sanity Studio

Studio runs at http://localhost:3000/studio. Log in with the Sanity account that has access to the project.

---

## Project Structure

```
app/                    # Next.js App Router pages and API routes
├── api/contact/        # Resend email handler (contact, sell, source, newsletter)
├── api/auth/           # NextAuth authentication handlers
├── shop/               # Watch catalog and product pages
├── sell/               # Sell your watch inquiry
├── source/             # Source a watch inquiry
├── blog/               # Blog listing and individual post pages
├── warranty/           # Warranty terms page
├── buyer-protection/   # Buyer protection page
├── studio/             # Sanity Studio (authenticated)
└── ...                 # Account, FAQ, legal, authenticity, returns pages
components/
├── product/            # ProductCard, AuthCertificate, PriceContext, JSON-LD
├── homepage/           # Hero, NewArrivals, WhyEssence, NewsletterSignup
├── navbar/             # Navbar with wishlist, cart, search, theme toggle
└── ...                 # Footer, shared UI
contexts/               # WishlistContext, CartContext, CurrencyContext
data/                   # Static catalog data and blog posts
hooks/                  # Custom React hooks
lib/                    # Utilities, Sanity client, blog data
sanity/                 # Sanity schema types and GROQ queries
types/                  # TypeScript type definitions
public/                 # Static assets
```

---

## Inventory Management

Watch inventory is managed through Sanity Studio at `/studio`. Each watch listing includes:

- Brand, model, reference number, serial number
- Condition, service history, and availability status
- High-resolution photography
- Pricing, retail price, and market value range
- Stock status: available, reserved, or sold

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with new arrivals and newsletter signup |
| `/shop` | Full catalog with search, price, collection, and condition filters |
| `/shop/[slug]` | Product detail with zoom, certificate, price context, and wishlist |
| `/blog` | Blog listing with 12 SEO-optimized posts |
| `/blog/[slug]` | Individual blog post |
| `/references` | Rolex reference guide — searchable by reference number, model, and family |
| `/sitemap-page` | User-facing sitemap listing all site pages by category |
| `/sell` | Sell your watch inquiry |
| `/source` | Source a specific watch |
| `/warranty` | Full warranty terms |
| `/buyer-protection` | Buyer protection program details |
| `/authenticity` | Authentication guarantee |
| `/returns` | Returns and refund policy |
| `/verify` | ID verification |
| `/track` | FedEx order tracking |
| `/studio` | Sanity Studio (authenticated) |

---

## Deployment

Deployed automatically to Vercel on push to `main`. All environment variables must be configured in Vercel project settings.

---

## Notes

- Built as a production-ready platform demonstrating a full-featured luxury pre-owned watch storefront on Next.js with Sanity CMS
- Ideal reference for pre-owned watch dealers looking to move off generic e-commerce platforms
- Resend API key and contact email required for all inquiry forms and newsletter to function
- Prisma is listed in dependencies but not actively used in current codebase
- Built by Vizantir Design Studio — https://www.vizantir.com
- Do not commit `.env` or `.env.local` to the repo
