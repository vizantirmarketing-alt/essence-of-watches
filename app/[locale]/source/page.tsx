'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SourcePage() {
  const t = useTranslations('SourcePage');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    desiredModel: '',
    budget: '',
    condition: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'source',
          ...formData,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || t('errors.submitFailed'));
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t('errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-green-500"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl text-[var(--text-primary)] mb-4">{t('successTitle')}</h1>
          <p className="text-[var(--text-secondary)] mb-8">{t('successBody')}</p>
          <Link
            href="/"
            className="inline-block text-xs tracking-[0.2em] uppercase border-b border-[var(--text-primary)] text-[var(--text-primary)] pb-1 hover:opacity-70 transition"
          >
            {t('returnHome')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-3">{t('eyebrow')}</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">{t('heroDescription')}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    {t('labels.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    {t('labels.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] text-sm mb-2">{t('labels.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] text-sm mb-2">
                  {t('labels.desiredModel')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="desiredModel"
                  required
                  placeholder={t('placeholders.desiredModel')}
                  value={formData.desiredModel}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">{t('labels.budget')}</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="">{t('budget.placeholder')}</option>
                    <option value="under-10k">{t('budget.under10k')}</option>
                    <option value="10k-20k">{t('budget.10k20k')}</option>
                    <option value="20k-50k">{t('budget.20k50k')}</option>
                    <option value="50k-100k">{t('budget.50k100k')}</option>
                    <option value="over-100k">{t('budget.over100k')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    {t('labels.conditionPreference')}
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="">{t('condition.placeholder')}</option>
                    <option value="unworn">{t('condition.unworn')}</option>
                    <option value="mint">{t('condition.mint')}</option>
                    <option value="excellent">{t('condition.excellent')}</option>
                    <option value="good">{t('condition.good')}</option>
                    <option value="any">{t('condition.any')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] text-sm mb-2">{t('labels.additionalNotes')}</label>
                <textarea
                  name="additionalNotes"
                  rows={4}
                  placeholder={t('placeholders.additionalNotes')}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors resize-none"
                />
              </div>

              {submitError ? (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {submitError}
                </p>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? t('submitting') : t('submit')}
                </button>
                <p className="text-[var(--text-muted)] text-xs text-center mt-4">{t('footnote')}</p>
              </div>
            </form>
          </div>

          {/* Right - Benefits */}
          <div className="lg:pt-32">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Benefit Cards */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-steel)] rounded-full flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('benefit1Title')}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{t('benefit1Body')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-steel)] rounded-full flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('benefit2Title')}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{t('benefit2Body')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-steel)] rounded-full flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('benefit3Title')}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{t('benefit3Body')}</p>
                  </div>
                </div>
              </div>

              {/* Trust Note */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{t('trustNote')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
