# Essence of Watches

Pre-owned luxury watch e-commerce platform specializing in authenticated Rolex and high-end timepieces. Built by Vizantir Design Studio.

**Live site:** https://www.essenceofwatches.com

---

## Features

- Full watch catalog with search, price, collection, and condition filters
- Multi-language support — English, Japanese, German, Korean, Chinese
- Product detail pages with image zoom, structured data, and related watches
- Stock status indicators — available, reserved, sold
- Wishlist with persistence across sessions
- Per-watch Certificate of Authenticity
- Price transparency with retail price, market value range, and fair price indicator
- Buyer protection with 7-day inspection window
- Newsletter signup with Resend integration
- Contact, Appointment, Sell, and Source inquiry forms
- Blog with SEO-optimized posts for the pre-owned watch buyer journey
- Searchable Rolex reference guide covering 167 references
- Warranty, Returns, Authenticity, and Buyer Protection pages
- Google and Apple OAuth authentication
- Sanity Studio for inventory and content management
- Order tracking via FedEx
- Google Analytics 4 and Microsoft Clarity for traffic and behavior tracking

---

## Tech Stack

- **Framework:** Next.js 16.x+ (App Router)
- **Language:** TypeScript
- **CMS:** Sanity v3
- **Auth:** NextAuth with Google and Apple providers
- **Styling:** Tailwind CSS, Framer Motion
- **Email:** Resend
- **Internationalization:** next-intl
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4, Microsoft Clarity

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

# Analytics
NEXT_PUBLIC_GA_ID=your_ga4_measurement_id
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

Studio runs at http://localhost:3000/studio.

---

## Project Structure

```
app/                    # Next.js App Router pages and API routes
components/             # UI components
contexts/               # Wishlist, Cart, Currency contexts
data/                   # Static catalog data and blog posts
hooks/                  # Custom React hooks
lib/                    # Utilities, Sanity client, blog data
sanity/                 # Sanity schema types and GROQ queries
types/                  # TypeScript type definitions
public/                 # Static assets
```

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with new arrivals and newsletter signup |
| `/shop` | Full catalog with search and filters |
| `/shop/[slug]` | Product detail with zoom, certificate, and wishlist |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/references` | Rolex reference guide |
| `/sell` | Sell your watch inquiry |
| `/source` | Source a specific watch |
| `/warranty` | Warranty terms |
| `/buyer-protection` | Buyer protection program |
| `/authenticity` | Authentication guarantee |
| `/returns` | Returns and refund policy |
| `/studio` | Sanity Studio |

---

## Deployment

Deployed automatically to Vercel on push to `main`. Environment variables must be configured in Vercel project settings.

---

## Notes

- Built by Vizantir Design Studio for Essence of Watches
- Resend API key and contact email required for inquiry forms and newsletter
- Do not commit `.env` or `.env.local` to the repo
