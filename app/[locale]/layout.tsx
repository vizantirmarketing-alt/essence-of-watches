import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ClientLayout } from '@/components/ClientLayout';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import LocaleHtmlLang from '@/components/LocaleHtmlLang';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlLang />
      <ClientLayout>
        <div className="min-h-screen bg-[var(--bg-primary)]">
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </div>
      </ClientLayout>
    </NextIntlClientProvider>
  );
}
