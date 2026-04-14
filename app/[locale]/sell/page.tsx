'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const STEP_KEYS = ['1', '2', '3', '4'] as const;

export default function SellPage() {
  const t = useTranslations('SellPage');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    condition: '',
    boxPapers: '',
    serviceHistory: '',
    askingPrice: '',
    additionalInfo: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const photos = files.map((f) => ({ name: f.name, size: f.size, type: f.type }));
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'sell',
          ...formData,
          photos,
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

  const steps = STEP_KEYS.map((key) => ({
    number: key,
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
  }));

  const boxPaperOptions: { value: string; label: string }[] = [
    { value: 'yes', label: t('boxPapers.yes') },
    { value: 'no', label: t('boxPapers.no') },
    { value: 'partial', label: t('boxPapers.partial') },
  ];

  const serviceHistoryOptions: { value: string; label: string }[] = [
    { value: 'yes', label: t('serviceHistory.yes') },
    { value: 'no', label: t('serviceHistory.no') },
  ];

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
        {/* Hero Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-3">{t('eyebrow')}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">{t('heroDescription')}</p>
        </div>

        {/* Trust Badges */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent-steel)] rounded-full mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('trust1Title')}</h3>
            <p className="text-[var(--text-muted)] text-sm">{t('trust1Body')}</p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent-steel)] rounded-full mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('trust2Title')}</h3>
            <p className="text-[var(--text-muted)] text-sm">{t('trust2Body')}</p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent-steel)] rounded-full mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t('trust3Title')}</h3>
            <p className="text-[var(--text-muted)] text-sm">{t('trust3Body')}</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-8">{t('formTitle')}</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
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
              </div>

              {/* Watch Details */}
              <div>
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border)]">
                  {t('watchDetailsTitle')}
                </h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        {t('labels.watchBrand')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="brand"
                        required
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                      >
                        <option value="">{t('placeholders.selectBrand')}</option>
                        <option value="rolex">{t('brands.rolex')}</option>
                        <option value="patek">{t('brands.patek')}</option>
                        <option value="ap">{t('brands.ap')}</option>
                        <option value="omega">{t('brands.omega')}</option>
                        <option value="other">{t('brands.other')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        {t('labels.watchModel')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="model"
                        required
                        placeholder={t('placeholders.modelExample')}
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        {t('labels.yearOfPurchase')}
                      </label>
                      <input
                        type="text"
                        name="year"
                        placeholder={t('placeholders.yearExample')}
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        {t('labels.condition')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="condition"
                        required
                        value={formData.condition}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                      >
                        <option value="">{t('placeholders.selectCondition')}</option>
                        <option value="unworn">{t('condition.unworn')}</option>
                        <option value="excellent">{t('condition.excellent')}</option>
                        <option value="very-good">{t('condition.veryGood')}</option>
                        <option value="good">{t('condition.good')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-3">
                      {t('labels.boxPapers')} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {boxPaperOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="boxPapers"
                            value={option.value}
                            checked={formData.boxPapers === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[var(--accent-steel)]"
                          />
                          <span className="text-[var(--text-primary)] text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-3">
                      {t('labels.serviceHistory')}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {serviceHistoryOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceHistory"
                            value={option.value}
                            checked={formData.serviceHistory === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[var(--accent-steel)]"
                          />
                          <span className="text-[var(--text-primary)] text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      {t('labels.askingPrice')}
                    </label>
                    <input
                      type="text"
                      name="askingPrice"
                      placeholder={t('placeholders.askingPriceOptional')}
                      value={formData.askingPrice}
                      onChange={handleChange}
                      className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border)]">
                  {t('uploadTitle')}
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">{t('uploadDescription')}</p>

                <label className="block border-2 border-dashed border-[var(--border)] rounded-lg p-8 text-center cursor-pointer hover:border-[var(--text-muted)] transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-[var(--text-muted)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <p className="text-[var(--text-secondary)] text-sm">{t('uploadCta')}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">{t('uploadFormats')}</p>
                </label>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-[var(--card-bg)] px-4 py-2 rounded"
                      >
                        <span className="text-[var(--text-primary)] text-sm truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles(files.filter((_, i) => i !== index))}
                          className="text-[var(--text-muted)] hover:text-red-500 transition-colors"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-[var(--text-secondary)] text-sm mb-2">
                  {t('labels.additionalInfo')}
                </label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  placeholder={t('placeholders.additionalInfo')}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors resize-none"
                />
              </div>

              {submitError ? (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {submitError}
                </p>
              ) : null}

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? t('submitting') : t('submit')}
                </button>
                <p className="text-[var(--text-muted)] text-xs text-center mt-4">
                  {t.rich('legalRich', {
                    terms: (chunks) => (
                      <a href="/terms" className="underline hover:text-[var(--text-secondary)]">
                        {chunks}
                      </a>
                    ),
                    privacy: (chunks) => (
                      <a href="/privacy" className="underline hover:text-[var(--text-secondary)]">
                        {chunks}
                      </a>
                    ),
                  })}
                </p>
              </div>
            </form>
          </div>

          {/* What Happens Next - Sidebar */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-8">{t('whatNextTitle')}</h2>

              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--accent-steel)] text-white font-serif text-lg rounded-full">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-medium text-[var(--text-primary)] mb-1">{step.title}</h3>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
