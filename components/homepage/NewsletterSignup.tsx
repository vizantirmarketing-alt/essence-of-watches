'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterSignup() {
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
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
      setEmail('');
      setMessage('You are on the list. We only write when we have something worth your time.');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Could not subscribe. Please try again.');
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-secondary)] dark:bg-[#141414] border-y border-[var(--border)] dark:border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.3em] uppercase mb-3">
            Stay informed
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-3">
            New arrivals &amp; journal
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
            Occasional notes on fresh inventory, authentication, and the pre-owned market—no
            daily blasts, no noise.
          </p>

          {status === 'success' ? (
            <p className="text-sm text-[var(--text-primary)] border border-[var(--border)] dark:border-[#333] bg-[var(--bg-primary)] dark:bg-[#0a0a0a] px-6 py-4">
              {message}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch max-w-lg mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={status === 'submitting'}
                className="flex-1 min-w-0 px-4 py-3.5 bg-[var(--bg-primary)] dark:bg-[#0a0a0a] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="shrink-0 px-6 py-3.5 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition disabled:opacity-60 sm:ml-3"
              >
                {status === 'submitting' ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && message && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
              {message}
            </p>
          )}

          <p className="mt-6 text-[10px] sm:text-[11px] text-[var(--text-muted)] tracking-wide">
            By subscribing you agree to our{' '}
            <Link href="/privacy" className="underline hover:text-[var(--text-secondary)]">
              Privacy Policy
            </Link>
            . Unsubscribe any time from the footer of our emails.
          </p>
        </div>
      </div>
    </section>
  );
}
