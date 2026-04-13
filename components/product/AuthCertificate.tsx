'use client';

import { useMemo } from 'react';

export interface AuthCertificateProps {
  brand: string;
  model: string;
  reference: string;
  serialNumber: string;
  slug: string;
}

/** Deterministic certificate number from slug + serial (no network, stable per watch). */
export function certificateNumberFromSlugAndSerial(slug: string, serial: string): string {
  const raw = `${slug}\0${serial}`;
  let hash = 2166136261;
  for (let i = 0; i < raw.length; i++) {
    hash ^= raw.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const h = (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return `EOW-${h.slice(0, 4)}-${h.slice(4, 8)}`;
}

export default function AuthCertificate({
  brand,
  model,
  reference,
  serialNumber,
  slug,
}: AuthCertificateProps) {
  const certificateNo = useMemo(
    () => certificateNumberFromSlugAndSerial(slug, serialNumber),
    [slug, serialNumber],
  );

  const issueDate = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date()),
    [],
  );

  return (
    <div
      className="auth-certificate-print-root mx-auto max-w-[640px] border-[3px] border-double border-[var(--text-primary)] bg-[var(--bg-primary)] px-8 py-10 sm:px-12 sm:py-12 text-[var(--text-primary)] shadow-sm print:max-w-none print:border-black print:bg-white print:text-black print:shadow-none"
      role="document"
      aria-label="Certificate of Authenticity"
    >
      <div className="border border-[var(--border)] px-6 py-8 sm:px-10 sm:py-10 print:border-neutral-300">
        <header className="text-center border-b border-[var(--border)] pb-8 print:border-neutral-300">
          <p className="font-serif text-2xl sm:text-3xl tracking-tight text-[var(--text-primary)] print:text-black">
            Essence of Watches
          </p>
          <p className="mt-2 text-[10px] tracking-[0.35em] uppercase text-[var(--text-muted)] print:text-neutral-600">
            Las Vegas · Authenticated Luxury Timepieces
          </p>
        </header>

        <div className="pt-8 text-center">
          <h1 className="font-serif text-xl sm:text-2xl tracking-[0.12em] uppercase text-[var(--text-primary)] print:text-black">
            Certificate of Authenticity
          </h1>
        </div>

        <dl className="mt-10 space-y-4 text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 border-b border-[var(--border)] border-dashed pb-3 print:border-neutral-300">
            <dt className="text-[var(--text-muted)] uppercase tracking-[0.15em] text-[10px] print:text-neutral-600">
              Brand
            </dt>
            <dd className="font-medium text-[var(--text-primary)] sm:text-right print:text-black">{brand}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 border-b border-[var(--border)] border-dashed pb-3 print:border-neutral-300">
            <dt className="text-[var(--text-muted)] uppercase tracking-[0.15em] text-[10px] print:text-neutral-600">
              Model
            </dt>
            <dd className="font-medium text-[var(--text-primary)] sm:text-right print:text-black">{model}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 border-b border-[var(--border)] border-dashed pb-3 print:border-neutral-300">
            <dt className="text-[var(--text-muted)] uppercase tracking-[0.15em] text-[10px] print:text-neutral-600">
              Reference
            </dt>
            <dd className="font-mono text-[var(--text-primary)] sm:text-right print:text-black">{reference}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 border-b border-[var(--border)] border-dashed pb-3 print:border-neutral-300">
            <dt className="text-[var(--text-muted)] uppercase tracking-[0.15em] text-[10px] print:text-neutral-600">
              Serial number
            </dt>
            <dd className="font-mono text-[var(--text-primary)] sm:text-right tracking-wide print:text-black">
              {serialNumber}
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-center text-sm leading-relaxed text-[var(--text-secondary)] print:text-neutral-800 italic">
          This timepiece has been inspected, authenticated, and verified by Essence of Watches
          specialists.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[var(--border)] pt-8 text-center sm:grid-cols-2 sm:text-left print:border-neutral-300">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] print:text-neutral-600">
              Date of issue
            </p>
            <p className="mt-1 font-medium text-[var(--text-primary)] print:text-black">{issueDate}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] print:text-neutral-600">
              Certificate number
            </p>
            <p className="mt-1 font-mono text-sm text-[var(--text-primary)] print:text-black">{certificateNo}</p>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] text-[var(--text-muted)] leading-relaxed print:text-neutral-600">
          This document is issued for the watch described above. Reproduction without authorization is
          prohibited. For verification inquiries, contact Essence of Watches with this certificate
          number.
        </p>
      </div>
    </div>
  );
}
