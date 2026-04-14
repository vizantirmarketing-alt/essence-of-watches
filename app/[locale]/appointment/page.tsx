'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WATCH_BRANDS = [
  'Rolex',
  'Patek Philippe',
  'Audemars Piguet',
  'Omega',
  'Cartier',
  'IWC',
  'Jaeger-LeCoultre',
  'Vacheron Constantin',
  'Breitling',
  'Tudor',
  'Panerai',
  'Other',
] as const;

const PURPOSE_OPTIONS = [
  { value: 'Purchase Consultation', msgKey: 'purchaseConsultation' },
  { value: 'Sell My Watch', msgKey: 'sellMyWatch' },
  { value: 'Trade-In', msgKey: 'tradeIn' },
  { value: 'Authentication Service', msgKey: 'authentication' },
  { value: 'General Inquiry', msgKey: 'generalInquiry' },
] as const;

const TIME_SLOTS = [
  { value: '10:00 AM', msgKey: '1000' },
  { value: '11:00 AM', msgKey: '1100' },
  { value: '12:00 PM', msgKey: '1200' },
  { value: '1:00 PM', msgKey: '1300' },
  { value: '2:00 PM', msgKey: '1400' },
  { value: '3:00 PM', msgKey: '1500' },
  { value: '4:00 PM', msgKey: '1600' },
  { value: '5:00 PM', msgKey: '1700' },
] as const;

export default function AppointmentPage() {
  const t = useTranslations('AppointmentPage');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: '',
    brand: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'appointment',
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-transparent dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] rounded-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition-colors duration-300';

  const labelClasses = 'block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2';

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl text-[var(--text-primary)] mb-4">{t('successTitle')}</h1>
          <p className="text-[var(--text-secondary)] mb-8">{t('successBody')}</p>
          <a
            href="/"
            className="inline-block text-xs tracking-[0.2em] uppercase border-b border-[var(--text-primary)] text-[var(--text-primary)] pb-1 hover:opacity-70 transition"
          >
            {t('returnHome')}
          </a>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
          {/* Left - Atmospheric Section */}
          <div className="hidden lg:flex flex-col justify-between p-12 xl:p-16 bg-[var(--bg-secondary)] dark:bg-[#111] relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/daytona-consulting.jpg"
                alt=""
                fill
                className="object-cover object-center opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('eyebrow')}</span>
              <h1 className="font-serif text-4xl xl:text-5xl text-[var(--text-primary)] mt-4 leading-tight">
                {t('heroTitleLine1')}
                <br />
                {t('heroTitleLine2')}
              </h1>
              <p className="text-[var(--text-secondary)] mt-6 max-w-sm leading-relaxed">{t('heroDescription')}</p>
            </div>

            {/* Trust Points */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)]/50 dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">{t('trustPoint1')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)]/50 dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">{t('trustPoint2')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)]/50 dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">{t('trustPoint3')}</span>
              </div>
            </div>
          </div>

          {/* Right - Form Section */}
          <div className="p-6 sm:p-12 xl:p-16">
            {/* Mobile Header */}
            <div className="lg:hidden mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('eyebrow')}</span>
              <h1 className="font-serif text-3xl text-[var(--text-primary)] mt-2">{t('mobileTitle')}</h1>
            </div>

            <div className="hidden lg:block mb-10">
              <h2 className="font-serif text-2xl text-[var(--text-primary)]">{t('formTitle')}</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{t('formSubtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    {t('labels.firstName')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    {t('labels.lastName')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    {t('labels.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    {t('labels.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Purpose & Brand Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="purpose" className={labelClasses}>
                    {t('labels.purpose')}
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="1.5"%3e%3cpath d="M6 9l6 6 6-6"/%3e%3c/svg%3e')] bg-no-repeat bg-[center_right_1rem]`}
                  >
                    <option value="">{t('selectPlaceholder')}</option>
                    {PURPOSE_OPTIONS.map((p) => (
                      <option key={p.value} value={p.value}>
                        {t(`purposes.${p.msgKey}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="brand" className={labelClasses}>
                    {t('labels.brand')}
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="1.5"%3e%3cpath d="M6 9l6 6 6-6"/%3e%3c/svg%3e')] bg-no-repeat bg-[center_right_1rem]`}
                  >
                    <option value="">{t('selectPlaceholder')}</option>
                    {WATCH_BRANDS.map((b) => (
                      <option key={b} value={b}>
                        {b === 'Other' ? t('brands.other') : b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="date" className={labelClasses}>
                    {t('labels.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="time" className={labelClasses}>
                    {t('labels.time')}
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="1.5"%3e%3cpath d="M6 9l6 6 6-6"/%3e%3c/svg%3e')] bg-no-repeat bg-[center_right_1rem]`}
                  >
                    <option value="">{t('selectPlaceholder')}</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {t(`timeSlots.${slot.msgKey}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  {t('labels.message')}{' '}
                  <span className="normal-case tracking-normal text-[var(--text-muted)]">
                    {t('messageOptional')}
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {submitError ? (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {submitError}
                </p>
              ) : null}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                {isSubmitting ? t('submitting') : t('submit')}
              </button>

              <p className="text-xs text-[var(--text-muted)] text-center">
                {t.rich('privacyNoteRich', {
                  privacy: (chunks) => (
                    <a href="/privacy" className="underline hover:text-[var(--text-secondary)]">
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
