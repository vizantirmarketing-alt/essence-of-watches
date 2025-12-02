import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { ClientLayout } from "@/components/ClientLayout";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Essence of Watches | Pre-Owned Luxury Timepieces",
  description: "Discover authenticated pre-owned luxury watches from Rolex, Patek Philippe, Audemars Piguet, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Providers>
          <ClientLayout>
            <div className="min-h-screen bg-[var(--bg-primary)]">
              <Navbar />
              <CartDrawer />
              <main>{children}</main>
              <Footer />
            </div>
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
