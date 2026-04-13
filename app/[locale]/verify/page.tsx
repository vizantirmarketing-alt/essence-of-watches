'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    idType: '',
    idNumber: '',
    orderNumber: '',
  });
  const [files, setFiles] = useState<{
    idFront: File | null;
    idBack: File | null;
    selfie: File | null;
    proofOfAddress: File | null;
  }>({
    idFront: null,
    idBack: null,
    selfie: null,
    proofOfAddress: null,
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [field]: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission - in production, send to secure backend
    console.log('Verification submitted:', formData, files);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
            Verification Submitted
          </h1>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            Thank you for completing the identity verification process. Our team will review your
            documents within 24-48 hours. You'll receive an email confirmation once verified.
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 mb-8">
            <p className="text-[var(--text-muted)] text-sm mb-2">Reference Number</p>
            <p className="font-mono text-lg text-[var(--text-primary)]">
              EOW-VRF-{Date.now().toString(36).toUpperCase()}
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-block bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 mx-auto mb-6 bg-[var(--accent-steel)] rounded-full flex items-center justify-center">
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
            Customer Identity Verification
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            To ensure secure and compliant transactions, we require customers to complete a Know Your
            Customer (KYC) verification for high-value purchases. This process helps protect both
            buyers and sellers from fraud.
          </p>
        </div>

        {/* Why We Verify */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-5 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto mb-3 bg-[var(--accent-steel)]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[var(--accent-steel)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-medium text-[var(--text-primary)] text-sm mb-1">
              Fraud Prevention
            </h3>
            <p className="text-[var(--text-muted)] text-xs">Protects against unauthorized transactions</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-5 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto mb-3 bg-[var(--accent-steel)]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[var(--accent-steel)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="font-medium text-[var(--text-primary)] text-sm mb-1">Secure Transactions</h3>
            <p className="text-[var(--text-muted)] text-xs">Your data is encrypted and protected</p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-5 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto mb-3 bg-[var(--accent-steel)]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[var(--accent-steel)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-medium text-[var(--text-primary)] text-sm mb-1">Legal Compliance</h3>
            <p className="text-[var(--text-muted)] text-xs">Meets regulatory requirements</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= s
                    ? 'bg-[var(--accent-steel)] text-white'
                    : 'bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)]'
                }`}
              >
                {step > s ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 ml-4 ${step > s ? 'bg-[var(--accent-steel)]' : 'bg-[var(--border)]'}`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 sm:gap-16 mb-10 text-xs text-[var(--text-muted)]">
          <span className={step >= 1 ? 'text-[var(--text-primary)]' : ''}>Personal Info</span>
          <span className={step >= 2 ? 'text-[var(--text-primary)]' : ''}>Documents</span>
          <span className={step >= 3 ? 'text-[var(--text-primary)]' : ''}>Review</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 sm:p-8">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-[var(--text-primary)] mb-1">
                    Personal Information
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm">
                    Please enter your details exactly as they appear on your ID
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="As shown on government ID"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="CH">Switzerland</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SG">Singapore</option>
                      <option value="HK">Hong Kong</option>
                      <option value="JP">Japan</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        State/Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--text-secondary)] text-sm mb-2">
                        Postal Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Order Number <span className="text-[var(--text-muted)]">(if applicable)</span>
                    </label>
                    <input
                      type="text"
                      name="orderNumber"
                      placeholder="EOW-XXXXX"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Document Upload */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-[var(--text-primary)] mb-1">
                    Identity Documents
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm">
                    Please upload clear photos of your documents
                  </p>
                </div>

                <div>
                  <label className="block text-[var(--text-secondary)] text-sm mb-2">
                    ID Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="idType"
                    required
                    value={formData.idType}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] text-sm outline-none focus:border-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="">Select ID type</option>
                    <option value="passport">Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="national_id">National ID Card</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* ID Front */}
                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      ID Front <span className="text-red-500">*</span>
                    </label>
                    <label
                      className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        files.idFront
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-[var(--border)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'idFront')}
                        className="hidden"
                        required
                      />
                      {files.idFront ? (
                        <div className="text-green-500">
                          <svg
                            className="w-8 h-8 mx-auto mb-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm truncate">{files.idFront.name}</p>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-[var(--text-muted)]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <circle cx="9" cy="10" r="2" />
                            <path d="M21 15l-5-5-4 4-2-2-4 4" />
                          </svg>
                          <p className="text-[var(--text-muted)] text-sm">Click to upload front of ID</p>
                        </>
                      )}
                    </label>
                  </div>

                  {/* ID Back */}
                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      ID Back <span className="text-[var(--text-muted)]">(if applicable)</span>
                    </label>
                    <label
                      className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        files.idBack
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-[var(--border)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'idBack')}
                        className="hidden"
                      />
                      {files.idBack ? (
                        <div className="text-green-500">
                          <svg
                            className="w-8 h-8 mx-auto mb-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm truncate">{files.idBack.name}</p>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-[var(--text-muted)]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <line x1="7" y1="9" x2="17" y2="9" />
                            <line x1="7" y1="13" x2="12" y2="13" />
                          </svg>
                          <p className="text-[var(--text-muted)] text-sm">Click to upload back of ID</p>
                        </>
                      )}
                    </label>
                  </div>

                  {/* Selfie */}
                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Selfie with ID <span className="text-red-500">*</span>
                    </label>
                    <label
                      className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        files.selfie
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-[var(--border)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'selfie')}
                        className="hidden"
                        required
                      />
                      {files.selfie ? (
                        <div className="text-green-500">
                          <svg
                            className="w-8 h-8 mx-auto mb-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm truncate">{files.selfie.name}</p>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-[var(--text-muted)]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <p className="text-[var(--text-muted)] text-sm">Selfie holding your ID</p>
                        </>
                      )}
                    </label>
                  </div>

                  {/* Proof of Address */}
                  <div>
                    <label className="block text-[var(--text-secondary)] text-sm mb-2">
                      Proof of Address <span className="text-[var(--text-muted)]">(optional)</span>
                    </label>
                    <label
                      className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        files.proofOfAddress
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-[var(--border)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                        className="hidden"
                      />
                      {files.proofOfAddress ? (
                        <div className="text-green-500">
                          <svg
                            className="w-8 h-8 mx-auto mb-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm truncate">{files.proofOfAddress.name}</p>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-[var(--text-muted)]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <p className="text-[var(--text-muted)] text-sm">Utility bill or bank statement</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-[var(--bg-primary)] rounded-lg p-4">
                  <p className="text-[var(--text-secondary)] text-sm font-medium mb-2">Photo Guidelines:</p>
                  <ul className="text-[var(--text-muted)] text-xs space-y-1">
                    <li>• Ensure all text is clearly readable</li>
                    <li>• Photos should be well-lit without glare</li>
                    <li>• All four corners of the document must be visible</li>
                    <li>• For selfie: hold your ID next to your face, both must be clearly visible</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-[var(--text-primary)] mb-1">Review & Submit</h2>
                  <p className="text-[var(--text-muted)] text-sm">
                    Please review your information before submitting
                  </p>
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  <div className="bg-[var(--bg-primary)] rounded-lg p-4">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">
                      Personal Information
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p className="text-[var(--text-muted)]">Name:</p>
                      <p className="text-[var(--text-primary)]">{formData.fullName}</p>
                      <p className="text-[var(--text-muted)]">Date of Birth:</p>
                      <p className="text-[var(--text-primary)]">{formData.dateOfBirth}</p>
                      <p className="text-[var(--text-muted)]">Address:</p>
                      <p className="text-[var(--text-primary)]">
                        {formData.address}, {formData.city}, {formData.postalCode}
                      </p>
                      <p className="text-[var(--text-muted)]">Country:</p>
                      <p className="text-[var(--text-primary)]">{formData.country}</p>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-primary)] rounded-lg p-4">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">
                      Documents Uploaded
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p className="text-[var(--text-muted)]">ID Type:</p>
                      <p className="text-[var(--text-primary)] capitalize">
                        {formData.idType?.replace('_', ' ')}
                      </p>
                      <p className="text-[var(--text-muted)]">ID Front:</p>
                      <p className="text-green-500">{files.idFront ? '✓ Uploaded' : '✗ Missing'}</p>
                      <p className="text-[var(--text-muted)]">ID Back:</p>
                      <p className={files.idBack ? 'text-green-500' : 'text-[var(--text-muted)]'}>
                        {files.idBack ? '✓ Uploaded' : '— Optional'}
                      </p>
                      <p className="text-[var(--text-muted)]">Selfie:</p>
                      <p className="text-green-500">{files.selfie ? '✓ Uploaded' : '✗ Missing'}</p>
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="border border-[var(--border)] rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[var(--accent-steel)]"
                      required
                    />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      I confirm that all information provided is accurate and that I am the rightful owner of
                      the documents submitted. I consent to Essence of Watches processing my personal data
                      for identity verification purposes in accordance with the{' '}
                      <Link href="/privacy" className="underline hover:text-[var(--text-primary)]">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="/terms" className="underline hover:text-[var(--text-primary)]">
                        Terms of Service
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* Security Note */}
                <div className="flex items-start gap-3 text-[var(--text-muted)] text-xs">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <p>
                    Your documents are encrypted using 256-bit SSL encryption and stored securely. We never
                    share your personal information with third parties and delete verification documents after
                    90 days in compliance with data protection regulations.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition flex items-center gap-2"
                >
                  Continue
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!agreed}
                  className="bg-[var(--accent-steel)] text-white px-8 py-3 text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Submit Verification
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6">
              <h3 className="font-medium text-[var(--text-primary)] mb-2">
                Why do I need to verify my identity?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Identity verification helps prevent fraud, money laundering, and ensures the security of
                high-value transactions. It protects both buyers and sellers in the luxury watch market.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6">
              <h3 className="font-medium text-[var(--text-primary)] mb-2">
                How long does verification take?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Most verifications are completed within 24-48 hours. We'll notify you by email once your
                identity has been confirmed.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6">
              <h3 className="font-medium text-[var(--text-primary)] mb-2">Is my data secure?</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Yes. All documents are encrypted using 256-bit SSL and stored on secure servers. We comply
                with GDPR and delete verification documents after 90 days.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6">
              <h3 className="font-medium text-[var(--text-primary)] mb-2">
                When is verification required?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Verification is required for purchases over $10,000, first-time buyers, international orders,
                and when requested by our fraud prevention system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




