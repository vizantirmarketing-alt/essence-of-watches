'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const INQUIRY_OPTIONS = [
  { value: 'General Inquiry', msgKey: 'general' },
  { value: 'Purchase Question', msgKey: 'purchase' },
  { value: 'Sell My Watch', msgKey: 'sell' },
  { value: 'Order Status', msgKey: 'orderStatus' },
  { value: 'Returns & Refunds', msgKey: 'returns' },
  { value: 'Authentication', msgKey: 'authentication' },
  { value: 'Partnership', msgKey: 'partnership' },
] as const;

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    orderNumber: '',
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
          type: 'contact',
          ...formData,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || t('errors.sendFailed'));
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t('errors.sendFailed'));
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
    'w-full px-4 py-3.5 bg-transparent dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition-colors duration-300';

  const labelClasses = 'block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2';

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
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
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
          {/* Left - Contact Info */}
          <div className="bg-[var(--bg-secondary)] dark:bg-[#111] p-8 sm:p-12 xl:p-16 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]"
              >
                {t('eyebrow')}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl xl:text-5xl text-[var(--text-primary)] mt-4 leading-tight"
              >
                {t('headlineLine1')}
                <br />
                {t('headlineLine2')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[var(--text-secondary)] mt-6 max-w-sm leading-relaxed"
              >
                {t('intro')}
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 space-y-8"
            >
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{t('emailHeading')}</h3>
                  <a
                    href="mailto:info@essenceofwatches.com"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                  >
                    info@essenceofwatches.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{t('phoneHeading')}</h3>
                  <a
                    href="tel:+12345678900"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{t('hours')}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--text-primary)]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{t('locationHeading')}</h3>
                  <p className="text-[var(--text-secondary)]">{t('locationCity')}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{t('appointmentOnly')}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[var(--border)]"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">{t('followUs')}</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <div className="p-8 sm:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="font-serif text-2xl text-[var(--text-primary)]">{t('formTitle')}</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{t('formIntro')}</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                    {t('labels.phone')}{' '}
                    <span className="normal-case tracking-normal text-[var(--text-muted)]">{t('phoneOptional')}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Inquiry Type & Order Number */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="inquiryType" className={labelClasses}>
                    {t('labels.inquiryType')}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="1.5"%3e%3cpath d="M6 9l6 6 6-6"/%3e%3c/svg%3e')] bg-no-repeat bg-[center_right_1rem]`}
                  >
                    <option value="">{t('selectPlaceholder')}</option>
                    {INQUIRY_OPTIONS.map((row) => (
                      <option key={row.value} value={row.value}>
                        {t(`inquiryTypes.${row.msgKey}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="orderNumber" className={labelClasses}>
                    {t('labels.orderNumber')}{' '}
                    <span className="normal-case tracking-normal text-[var(--text-muted)]">
                      {t('orderNumberHint')}
                    </span>
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    placeholder={t('orderPlaceholder')}
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  {t('labels.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
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
                {isSubmitting ? t('sending') : t('send')}
              </button>
            </motion.form>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 pt-8 border-t border-[var(--border)]"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">{t('quickLinks')}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/faq"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  {t('linkFaq')}
                </Link>
                <Link
                  href="/shipping"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  {t('linkShipping')}
                </Link>
                <Link
                  href="/returns"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  {t('linkReturns')}
                </Link>
                <Link
                  href="/appointment"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  {t('linkAppointment')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
