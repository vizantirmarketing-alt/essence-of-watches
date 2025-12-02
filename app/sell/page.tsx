'use client';

import { useState } from 'react';

export default function SellPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData, files);
  };

  const steps = [
    {
      number: '1',
      title: 'Expert Review',
      description:
        'Our team of experts will carefully review your submission and photos within 24-48 hours.',
    },
    {
      number: '2',
      title: 'Receive Offer',
      description:
        "We'll send you a competitive offer based on current market conditions and your watch's condition.",
    },
    {
      number: '3',
      title: 'Ship Securely',
      description: "If you accept, we'll arrange fully insured, secure shipping at no cost to you.",
    },
    {
      number: '4',
      title: 'Get Paid',
      description:
        "Once authenticated, you'll receive payment via your preferred method within 2-3 business days.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-3">
            Sell With Confidence
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
            Sell Your Rolex
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            Get a competitive offer for your luxury timepiece. We provide free valuations and fair
            prices for pre-owned Rolex watches in excellent condition.
          </p>
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
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">Competitive Offers</h3>
            <p className="text-[var(--text-muted)] text-sm">
              We offer fair market value based on current conditions
            </p>
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
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">Quick Process</h3>
            <p className="text-[var(--text-muted)] text-sm">Receive an offer within 24-48 hours</p>
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
            <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">Secure & Trusted</h3>
            <p className="text-[var(--text-muted)] text-sm">
              Safe transactions with full insurance coverage
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-8">
              Tell Us About Your Watch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
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
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    Phone Number
                  </label>
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
                  Watch Details
                </h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        Watch Brand <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="brand"
                        required
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                      >
                        <option value="">Select brand</option>
                        <option value="rolex">Rolex</option>
                        <option value="patek">Patek Philippe</option>
                        <option value="ap">Audemars Piguet</option>
                        <option value="omega">Omega</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        Watch Model <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="model"
                        required
                        placeholder="e.g., Submariner Date"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        Year of Purchase
                      </label>
                      <input
                        type="text"
                        name="year"
                        placeholder="e.g., 2022"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="condition"
                        required
                        value={formData.condition}
                        onChange={handleChange}
                        className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                      >
                        <option value="">Select condition</option>
                        <option value="unworn">Unworn/New</option>
                        <option value="excellent">Excellent</option>
                        <option value="very-good">Very Good</option>
                        <option value="good">Good</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-3">
                      Box & Papers Available? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Yes', 'No', 'Partial'].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="boxPapers"
                            value={option.toLowerCase()}
                            checked={formData.boxPapers === option.toLowerCase()}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[var(--accent-steel)]"
                          />
                          <span className="text-[var(--text-primary)] text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-3">
                      Service History Available?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceHistory"
                            value={option.toLowerCase()}
                            checked={formData.serviceHistory === option.toLowerCase()}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[var(--accent-steel)]"
                          />
                          <span className="text-[var(--text-primary)] text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Asking Price (USD)
                    </label>
                    <input
                      type="text"
                      name="askingPrice"
                      placeholder="Optional"
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
                  Upload Photos
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">
                  Please upload clear photos of the watch, box, and papers (if available)
                </p>

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
                  <p className="text-[var(--text-secondary)] text-sm">Click to upload or drag and drop</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">PNG, JPG up to 10MB each</p>
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
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  placeholder="Any other details about your watch..."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition"
                >
                  Submit for Valuation
                </button>
                <p className="text-[var(--text-muted)] text-xs text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/terms" className="underline hover:text-[var(--text-secondary)]">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="underline hover:text-[var(--text-secondary)]">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* What Happens Next - Sidebar */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-8">
                What Happens Next?
              </h2>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--accent-steel)] text-white font-serif text-lg rounded-full">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-medium text-[var(--text-primary)] mb-1">{step.title}</h3>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {step.description}
                      </p>
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


