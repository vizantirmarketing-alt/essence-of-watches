import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { CartDrawerProvider } from "@/components/cart/CartDrawer";
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
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <CartDrawerProvider>
                <Navbar />
                <CartDrawer />
                <main className="min-h-screen">{children}</main>
                <Footer />
              </CartDrawerProvider>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
