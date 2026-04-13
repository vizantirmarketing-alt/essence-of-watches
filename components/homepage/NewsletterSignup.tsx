'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterSignup() {
  const t = useTranslations('NewsletterSignup');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          email: email.trim(),
          source: 'website',
        }),
      });
      await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setMessage(t('errors.server'));
        return;
      }
      setStatus('success');
      setEmail('');
      setMessage(t('success'));
    } catch {
      setStatus('error');
      setMessage(t('errors.network'));
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-secondary)] dark:bg-[#141414] border-y border-[var(--border)] dark:border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.3em] uppercase mb-3">{t('eyebrow')}</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-3">{t('title')}</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">{t('description')}</p>

          {status === 'success' ? (
            <p className="text-sm text-[var(--text-primary)] border border-[var(--border)] dark:border-[#333] bg-[var(--bg-primary)] dark:bg-[#0a0a0a] px-6 py-4">
              {message}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-lg flex-row flex-nowrap items-stretch justify-center gap-3"
            >
              <input
                ref={emailInputRef}
                type="email"
                name="email"
                autoComplete="email"
                required
                aria-label={t('emailAria')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() =>
                  emailInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
                placeholder={t('placeholder')}
                disabled={status === 'submitting'}
                className="min-w-0 flex-1 px-4 py-3.5 bg-[var(--bg-primary)] dark:bg-[#0a0a0a] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="shrink-0 px-6 py-3.5 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {status === 'submitting' ? t('sending') : t('subscribe')}
              </button>
            </form>
          )}

          {status === 'error' && message && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
              {message}
            </p>
          )}

          <p className="mt-6 text-[10px] sm:text-[11px] text-[var(--text-muted)] tracking-wide">
            {t.rich('legal', {
              policy: (chunks) => (
                <Link href="/privacy" className="underline hover:text-[var(--text-secondary)]">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
