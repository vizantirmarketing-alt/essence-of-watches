'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
  rate: number; // Conversion rate from USD
}

export const currencies: Currency[] = [
  // Major Currencies
  { code: 'USD', symbol: '$', name: 'United States', flag: '🇺🇸', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'European Union', flag: '🇪🇺', rate: 0.92 },
  { code: 'GBP', symbol: '£', name: 'United Kingdom', flag: '🇬🇧', rate: 0.79 },
  { code: 'CHF', symbol: 'CHF', name: 'Switzerland', flag: '🇨🇭', rate: 0.88 },
  { code: 'JPY', symbol: '¥', name: 'Japan', flag: '🇯🇵', rate: 149.5 },
  { code: 'CNY', symbol: '¥', name: 'China', flag: '🇨🇳', rate: 7.24 },

  // North America
  { code: 'CAD', symbol: 'C$', name: 'Canada', flag: '🇨🇦', rate: 1.36 },
  { code: 'MXN', symbol: 'MX$', name: 'Mexico', flag: '🇲🇽', rate: 17.15 },

  // South America
  { code: 'BRL', symbol: 'R$', name: 'Brazil', flag: '🇧🇷', rate: 4.97 },
  { code: 'ARS', symbol: 'AR$', name: 'Argentina', flag: '🇦🇷', rate: 350.5 },
  { code: 'CLP', symbol: 'CL$', name: 'Chile', flag: '🇨🇱', rate: 878.25 },
  { code: 'COP', symbol: 'CO$', name: 'Colombia', flag: '🇨🇴', rate: 3950.0 },
  { code: 'PEN', symbol: 'S/', name: 'Peru', flag: '🇵🇪', rate: 3.72 },
  { code: 'UYU', symbol: '$U', name: 'Uruguay', flag: '🇺🇾', rate: 39.25 },
  { code: 'VES', symbol: 'Bs', name: 'Venezuela', flag: '🇻🇪', rate: 36.15 },
  { code: 'BOB', symbol: 'Bs', name: 'Bolivia', flag: '🇧🇴', rate: 6.91 },
  { code: 'PYG', symbol: '₲', name: 'Paraguay', flag: '🇵🇾', rate: 7285.0 },

  // Europe
  { code: 'SEK', symbol: 'kr', name: 'Sweden', flag: '🇸🇪', rate: 10.42 },
  { code: 'NOK', symbol: 'kr', name: 'Norway', flag: '🇳🇴', rate: 10.65 },
  { code: 'DKK', symbol: 'kr', name: 'Denmark', flag: '🇩🇰', rate: 6.87 },
  { code: 'PLN', symbol: 'zł', name: 'Poland', flag: '🇵🇱', rate: 3.99 },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Republic', flag: '🇨🇿', rate: 22.75 },
  { code: 'HUF', symbol: 'Ft', name: 'Hungary', flag: '🇭🇺', rate: 355.5 },
  { code: 'RON', symbol: 'lei', name: 'Romania', flag: '🇷🇴', rate: 4.57 },
  { code: 'BGN', symbol: 'лв', name: 'Bulgaria', flag: '🇧🇬', rate: 1.8 },
  { code: 'HRK', symbol: 'kn', name: 'Croatia', flag: '🇭🇷', rate: 6.95 },
  { code: 'RSD', symbol: 'din', name: 'Serbia', flag: '🇷🇸', rate: 107.85 },
  { code: 'UAH', symbol: '₴', name: 'Ukraine', flag: '🇺🇦', rate: 36.95 },
  { code: 'RUB', symbol: '₽', name: 'Russia', flag: '🇷🇺', rate: 92.5 },
  { code: 'TRY', symbol: '₺', name: 'Turkey', flag: '🇹🇷', rate: 27.25 },
  { code: 'ISK', symbol: 'kr', name: 'Iceland', flag: '🇮🇸', rate: 137.5 },
  { code: 'ALL', symbol: 'L', name: 'Albania', flag: '🇦🇱', rate: 95.25 },
  { code: 'MKD', symbol: 'ден', name: 'North Macedonia', flag: '🇲🇰', rate: 56.75 },
  { code: 'BAM', symbol: 'KM', name: 'Bosnia', flag: '🇧🇦', rate: 1.8 },
  { code: 'MDL', symbol: 'L', name: 'Moldova', flag: '🇲🇩', rate: 17.85 },
  { code: 'GEL', symbol: '₾', name: 'Georgia', flag: '🇬🇪', rate: 2.65 },
  { code: 'AMD', symbol: '֏', name: 'Armenia', flag: '🇦🇲', rate: 405.0 },
  { code: 'AZN', symbol: '₼', name: 'Azerbaijan', flag: '🇦🇿', rate: 1.7 },
  { code: 'BYN', symbol: 'Br', name: 'Belarus', flag: '🇧🇾', rate: 3.35 },

  // Asia Pacific
  { code: 'AUD', symbol: 'A$', name: 'Australia', flag: '🇦🇺', rate: 1.53 },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand', flag: '🇳🇿', rate: 1.64 },
  { code: 'SGD', symbol: 'S$', name: 'Singapore', flag: '🇸🇬', rate: 1.34 },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong', flag: '🇭🇰', rate: 7.82 },
  { code: 'TWD', symbol: 'NT$', name: 'Taiwan', flag: '🇹🇼', rate: 31.5 },
  { code: 'KRW', symbol: '₩', name: 'South Korea', flag: '🇰🇷', rate: 1298.5 },
  { code: 'INR', symbol: '₹', name: 'India', flag: '🇮🇳', rate: 83.12 },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesia', flag: '🇮🇩', rate: 15450.0 },
  { code: 'MYR', symbol: 'RM', name: 'Malaysia', flag: '🇲🇾', rate: 4.65 },
  { code: 'THB', symbol: '฿', name: 'Thailand', flag: '🇹🇭', rate: 35.25 },
  { code: 'VND', symbol: '₫', name: 'Vietnam', flag: '🇻🇳', rate: 24350.0 },
  { code: 'PHP', symbol: '₱', name: 'Philippines', flag: '🇵🇭', rate: 55.75 },
  { code: 'PKR', symbol: '₨', name: 'Pakistan', flag: '🇵🇰', rate: 285.5 },
  { code: 'BDT', symbol: '৳', name: 'Bangladesh', flag: '🇧🇩', rate: 110.25 },
  { code: 'LKR', symbol: 'Rs', name: 'Sri Lanka', flag: '🇱🇰', rate: 325.0 },
  { code: 'NPR', symbol: '₨', name: 'Nepal', flag: '🇳🇵', rate: 133.25 },
  { code: 'MMK', symbol: 'K', name: 'Myanmar', flag: '🇲🇲', rate: 2100.0 },
  { code: 'KHR', symbol: '៛', name: 'Cambodia', flag: '🇰🇭', rate: 4100.0 },
  { code: 'LAK', symbol: '₭', name: 'Laos', flag: '🇱🇦', rate: 20500.0 },
  { code: 'BND', symbol: 'B$', name: 'Brunei', flag: '🇧🇳', rate: 1.34 },
  { code: 'MNT', symbol: '₮', name: 'Mongolia', flag: '🇲🇳', rate: 3450.0 },
  { code: 'KZT', symbol: '₸', name: 'Kazakhstan', flag: '🇰🇿', rate: 450.25 },
  { code: 'UZS', symbol: 'сўм', name: 'Uzbekistan', flag: '🇺🇿', rate: 12250.0 },
  { code: 'KGS', symbol: 'с', name: 'Kyrgyzstan', flag: '🇰🇬', rate: 89.25 },
  { code: 'TJS', symbol: 'ЅМ', name: 'Tajikistan', flag: '🇹🇯', rate: 10.95 },
  { code: 'TMT', symbol: 'm', name: 'Turkmenistan', flag: '🇹🇲', rate: 3.5 },
  { code: 'AFN', symbol: '؋', name: 'Afghanistan', flag: '🇦🇫', rate: 85.5 },
  { code: 'MOP', symbol: 'MOP$', name: 'Macau', flag: '🇲🇴', rate: 8.05 },
  { code: 'FJD', symbol: 'FJ$', name: 'Fiji', flag: '🇫🇯', rate: 2.25 },
  { code: 'PGK', symbol: 'K', name: 'Papua New Guinea', flag: '🇵🇬', rate: 3.75 },

  // Middle East
  { code: 'AED', symbol: 'AED', name: 'United Arab Emirates', flag: '🇦🇪', rate: 3.67 },
  { code: 'SAR', symbol: 'SAR', name: 'Saudi Arabia', flag: '🇸🇦', rate: 3.75 },
  { code: 'QAR', symbol: 'QR', name: 'Qatar', flag: '🇶🇦', rate: 3.64 },
  { code: 'KWD', symbol: 'KD', name: 'Kuwait', flag: '🇰🇼', rate: 0.31 },
  { code: 'BHD', symbol: 'BD', name: 'Bahrain', flag: '🇧🇭', rate: 0.38 },
  { code: 'OMR', symbol: 'OMR', name: 'Oman', flag: '🇴🇲', rate: 0.38 },
  { code: 'JOD', symbol: 'JD', name: 'Jordan', flag: '🇯🇴', rate: 0.71 },
  { code: 'LBP', symbol: 'ل.ل', name: 'Lebanon', flag: '🇱🇧', rate: 15000.0 },
  { code: 'ILS', symbol: '₪', name: 'Israel', flag: '🇮🇱', rate: 3.65 },
  { code: 'EGP', symbol: 'E£', name: 'Egypt', flag: '🇪🇬', rate: 30.9 },
  { code: 'IQD', symbol: 'ع.د', name: 'Iraq', flag: '🇮🇶', rate: 1310.0 },
  { code: 'IRR', symbol: '﷼', name: 'Iran', flag: '🇮🇷', rate: 42000.0 },
  { code: 'SYP', symbol: '£S', name: 'Syria', flag: '🇸🇾', rate: 13000.0 },
  { code: 'YER', symbol: '﷼', name: 'Yemen', flag: '🇾🇪', rate: 250.25 },

  // Africa
  { code: 'ZAR', symbol: 'R', name: 'South Africa', flag: '🇿🇦', rate: 18.75 },
  { code: 'NGN', symbol: '₦', name: 'Nigeria', flag: '🇳🇬', rate: 785.0 },
  { code: 'KES', symbol: 'KSh', name: 'Kenya', flag: '🇰🇪', rate: 152.5 },
  { code: 'GHS', symbol: 'GH₵', name: 'Ghana', flag: '🇬🇭', rate: 12.25 },
  { code: 'MAD', symbol: 'MAD', name: 'Morocco', flag: '🇲🇦', rate: 10.05 },
  { code: 'TND', symbol: 'DT', name: 'Tunisia', flag: '🇹🇳', rate: 3.12 },
  { code: 'DZD', symbol: 'DA', name: 'Algeria', flag: '🇩🇿', rate: 134.5 },
  { code: 'XOF', symbol: 'CFA', name: 'West African CFA', flag: '🌍', rate: 603.5 },
  { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA', flag: '🌍', rate: 603.5 },
  { code: 'TZS', symbol: 'TSh', name: 'Tanzania', flag: '🇹🇿', rate: 2510.0 },
  { code: 'UGX', symbol: 'USh', name: 'Uganda', flag: '🇺🇬', rate: 3750.0 },
  { code: 'RWF', symbol: 'FRw', name: 'Rwanda', flag: '🇷🇼', rate: 1250.0 },
  { code: 'ETB', symbol: 'Br', name: 'Ethiopia', flag: '🇪🇹', rate: 56.25 },
  { code: 'MUR', symbol: '₨', name: 'Mauritius', flag: '🇲🇺', rate: 45.75 },
  { code: 'SCR', symbol: '₨', name: 'Seychelles', flag: '🇸🇨', rate: 13.25 },
  { code: 'BWP', symbol: 'P', name: 'Botswana', flag: '🇧🇼', rate: 13.65 },
  { code: 'ZMW', symbol: 'ZK', name: 'Zambia', flag: '🇿🇲', rate: 23.75 },
  { code: 'MWK', symbol: 'MK', name: 'Malawi', flag: '🇲🇼', rate: 1685.0 },
  { code: 'MZN', symbol: 'MT', name: 'Mozambique', flag: '🇲🇿', rate: 63.75 },
  { code: 'AOA', symbol: 'Kz', name: 'Angola', flag: '🇦🇴', rate: 825.0 },
  { code: 'NAD', symbol: 'N$', name: 'Namibia', flag: '🇳🇦', rate: 18.75 },
  { code: 'SZL', symbol: 'E', name: 'Eswatini', flag: '🇸🇿', rate: 18.75 },
  { code: 'LSL', symbol: 'M', name: 'Lesotho', flag: '🇱🇸', rate: 18.75 },
  { code: 'GMD', symbol: 'D', name: 'Gambia', flag: '🇬🇲', rate: 67.5 },
  { code: 'SLL', symbol: 'Le', name: 'Sierra Leone', flag: '🇸🇱', rate: 22500.0 },
  { code: 'LRD', symbol: 'L$', name: 'Liberia', flag: '🇱🇷', rate: 187.5 },
  { code: 'CVE', symbol: '$', name: 'Cape Verde', flag: '🇨🇻', rate: 101.25 },
  { code: 'DJF', symbol: 'Fdj', name: 'Djibouti', flag: '🇩🇯', rate: 177.75 },
  { code: 'ERN', symbol: 'Nfk', name: 'Eritrea', flag: '🇪🇷', rate: 15.0 },
  { code: 'SOS', symbol: 'Sh', name: 'Somalia', flag: '🇸🇴', rate: 571.0 },
  { code: 'SDG', symbol: 'SD', name: 'Sudan', flag: '🇸🇩', rate: 600.5 },
  { code: 'LYD', symbol: 'LD', name: 'Libya', flag: '🇱🇾', rate: 4.85 },
  { code: 'MGA', symbol: 'Ar', name: 'Madagascar', flag: '🇲🇬', rate: 4525.0 },
  { code: 'CDF', symbol: 'FC', name: 'DR Congo', flag: '🇨🇩', rate: 2750.0 },
  { code: 'XPF', symbol: '₣', name: 'CFP Franc', flag: '🇵🇫', rate: 109.75 },

  // Caribbean & Central America
  { code: 'JMD', symbol: 'J$', name: 'Jamaica', flag: '🇯🇲', rate: 155.25 },
  { code: 'TTD', symbol: 'TT$', name: 'Trinidad & Tobago', flag: '🇹🇹', rate: 6.78 },
  { code: 'BBD', symbol: 'Bds$', name: 'Barbados', flag: '🇧🇧', rate: 2.0 },
  { code: 'BSD', symbol: 'B$', name: 'Bahamas', flag: '🇧🇸', rate: 1.0 },
  { code: 'DOP', symbol: 'RD$', name: 'Dominican Republic', flag: '🇩🇴', rate: 56.75 },
  { code: 'HTG', symbol: 'G', name: 'Haiti', flag: '🇭🇹', rate: 132.5 },
  { code: 'CUP', symbol: '$MN', name: 'Cuba', flag: '🇨🇺', rate: 24.0 },
  { code: 'PAB', symbol: 'B/.', name: 'Panama', flag: '🇵🇦', rate: 1.0 },
  { code: 'CRC', symbol: '₡', name: 'Costa Rica', flag: '🇨🇷', rate: 525.75 },
  { code: 'GTQ', symbol: 'Q', name: 'Guatemala', flag: '🇬🇹', rate: 7.82 },
  { code: 'HNL', symbol: 'L', name: 'Honduras', flag: '🇭🇳', rate: 24.65 },
  { code: 'NIO', symbol: 'C$', name: 'Nicaragua', flag: '🇳🇮', rate: 36.55 },
  { code: 'SVC', symbol: '$', name: 'El Salvador', flag: '🇸🇻', rate: 8.75 },
  { code: 'BZD', symbol: 'BZ$', name: 'Belize', flag: '🇧🇿', rate: 2.0 },
  { code: 'AWG', symbol: 'ƒ', name: 'Aruba', flag: '🇦🇼', rate: 1.79 },
  { code: 'ANG', symbol: 'ƒ', name: 'Curaçao', flag: '🇨🇼', rate: 1.79 },
  { code: 'KYD', symbol: 'CI$', name: 'Cayman Islands', flag: '🇰🇾', rate: 0.83 },
  { code: 'BMD', symbol: 'BD$', name: 'Bermuda', flag: '🇧🇲', rate: 1.0 },
  { code: 'XCD', symbol: 'EC$', name: 'East Caribbean', flag: '🌴', rate: 2.7 },
  { code: 'GYD', symbol: 'G$', name: 'Guyana', flag: '🇬🇾', rate: 209.25 },
  { code: 'SRD', symbol: '$', name: 'Suriname', flag: '🇸🇷', rate: 38.25 },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceUSD: number) => string;
  formatPrice: (priceUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]);

  useEffect(() => {
    // Load saved currency from localStorage
    const saved = localStorage.getItem('currency');
    if (saved) {
      const found = currencies.find((c) => c.code === saved);
      if (found) setCurrencyState(found);
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency.code);
  };

  const convertPrice = (priceUSD: number): string => {
    const converted = priceUSD * currency.rate;

    // No decimals for currencies with high rates
    if (currency.rate > 100) {
      return Math.round(converted).toLocaleString();
    }
    return converted.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const formatPrice = (priceUSD: number): string => {
    return `${currency.symbol}${convertPrice(priceUSD)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}

