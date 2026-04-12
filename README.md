# Essence of Watches

Pre-owned luxury watch e-commerce platform. Authenticated Rolex and high-end timepiece catalog with Sanity CMS, NextAuth authentication, and full storefront. Built with Next.js.

**Live site:** https://www.essenceofwatches.com

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **CMS:** Sanity v3 (Studio at `/studio`)
- **Auth:** NextAuth with Google and Apple providers
- **Styling:** Tailwind CSS, Styled Components, Framer Motion
- **Analytics:** Google Analytics 4
- **Hosting:** Vercel

---

## Features

- Pre-owned luxury watch catalog managed via Sanity CMS
- Google and Apple OAuth authentication via NextAuth
- Product detail pages with Schema.org JSON-LD structured data
- Sell Your Watch and Source a Watch inquiry flows
- Order tracking via FedEx
- ID Verification and Authenticity Guarantee pages
- Sanity Studio for inventory and content management

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

# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga4_measurement_id

# NextAuth — Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth — Apple
APPLE_ID=your_apple_service_id
APPLE_SECRET=your_apple_private_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
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
app/                    # Next.js App Router pages and API routes
├── api/auth/           # NextAuth authentication handlers
├── shop/               # Watch catalog and product pages
├── sell/               # Sell your watch flow
├── source/             # Source a watch flow
├── studio/             # Sanity Studio (authenticated)
└── ...                 # Account, FAQ, legal pages
components/             # Reusable UI components
├── product/            # Product cards, detail, JSON-LD
└── ...                 # Layout, navigation, shared UI
contexts/               # React context providers
data/                   # Static catalog data
hooks/                  # Custom React hooks
lib/                    # Utilities and Sanity client
sanity/                 # Sanity schema types and structure
types/                  # TypeScript type definitions
public/                 # Static assets

---

## Inventory Management

Watch inventory is managed through Sanity Studio at `/studio`. Each watch listing includes:
- Brand, model, reference number
- Condition and service history
- High-resolution photography
- Pricing and availability status

Import script available at `import-watches.js` for bulk catalog imports.

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with new arrivals |
| `/shop` | Full watch catalog with filters |
| `/shop/[slug]` | Individual watch product page |
| `/sell` | Sell your watch inquiry |
| `/source` | Source a specific watch |
| `/authenticity` | Authentication guarantee |
| `/verify` | ID verification |
| `/track-order` | FedEx order tracking |
| `/studio` | Sanity Studio (authenticated) |

---

## Deployment

Deployed automatically to Vercel on push to `main`. All environment variables must be configured in Vercel project settings.

---

## Notes

- Built as a production-ready platform to demonstrate what a luxury pre-owned watch storefront can look like on Next.js with Sanity CMS
- Fully functional catalog, authentication, and inventory management — payment processing integration available on request
- Ideal reference for pre-owned watch dealers looking to move off generic e-commerce platforms
- Prisma is listed in dependencies but not actively used in current codebase
- Built by Vizantir Design Studio — https://www.vizantir.com
- Do not commit `.env` or `.env.local` to the repo
