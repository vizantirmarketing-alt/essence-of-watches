'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SourcePage() {
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
        throw new Error(data.error || 'Failed to submit sourcing request');
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit sourcing request');
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
          <h1 className="font-serif text-3xl text-[var(--text-primary)] mb-4">Request Received</h1>
          <p className="text-[var(--text-secondary)] mb-8">
            Thank you. Our sourcing team will follow up within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-block text-xs tracking-[0.2em] uppercase border-b border-[var(--text-primary)] text-[var(--text-primary)] pb-1 hover:opacity-70 transition"
          >
            Return Home
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
              <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-3">
                Watch Sourcing
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
                Source Your Dream Watch
              </h1>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Can't find what you're looking for? Let our experts source the perfect Rolex for you.
                With our extensive network and expertise, we can locate even the rarest timepieces.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    Full Name <span className="text-red-500">*</span>
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
                    Email Address <span className="text-red-500">*</span>
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
                <label className="block text-[var(--text-secondary)] text-sm mb-2">Phone Number</label>
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
                  Desired Watch Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="desiredModel"
                  required
                  placeholder="e.g., Rolex Daytona 116500LN White Dial"
                  value={formData.desiredModel}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="">Select budget</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    Condition Preference
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="">Select condition</option>
                    <option value="unworn">Unworn</option>
                    <option value="mint">Mint Condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="any">Any Condition</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] text-sm mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  rows={4}
                  placeholder="Any specific requirements or preferences..."
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
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                <p className="text-[var(--text-muted)] text-xs text-center mt-4">
                  * Required fields. We typically respond within 24 hours.
                </p>
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
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">
                      Expert Network
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      Access to exclusive dealers and collectors worldwide. We leverage relationships
                      built over years to find your perfect timepiece.
                    </p>
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
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">
                      No Obligation
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      Our sourcing service is completely free with no commitment required. You only
                      proceed if we find exactly what you want.
                    </p>
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
                    <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">Fast Results</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      We typically locate watches within 2-4 weeks. For common models, we often find
                      options within days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Note */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Every watch we source undergoes our comprehensive authentication process and comes
                  with our standard warranty and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




