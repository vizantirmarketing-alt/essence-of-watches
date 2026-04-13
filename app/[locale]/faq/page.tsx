'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqCategories = [
  {
    category: 'Authentication & Trust',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    questions: [
      {
        q: 'How do you authenticate watches?',
        a: 'Every timepiece undergoes a rigorous multi-point inspection by our certified horologists. We examine the movement, case, dial, hands, crown, crystal, and all accompanying documentation. We use specialized tools and reference materials to verify authenticity against manufacturer specifications.',
      },
      {
        q: 'Are all watches guaranteed authentic?',
        a: 'Yes, absolutely. We provide a 100% authenticity guarantee on every watch we sell. If a watch is ever determined to be inauthentic by an authorized service center, we will provide a full refund including all shipping costs.',
      },
      {
        q: 'Do you provide certificates of authenticity?',
        a: 'Yes, every watch comes with our Certificate of Authenticity documenting the inspection results, serial number verification, and condition assessment. If original manufacturer papers are available, those are included as well.',
      },
      {
        q: 'What happens if a watch is found to be counterfeit?',
        a: 'In the extremely unlikely event that a watch is determined to be counterfeit by an authorized service center, contact us immediately. We will arrange return shipping at our expense and provide a full refund within 48 hours of receiving the watch.',
      },
    ],
  },
  {
    category: 'Buying',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    questions: [
      {
        q: 'What condition are the watches in?',
        a: 'We grade watches on a scale from "Mint" (like new) to "Fair" (visible wear). Each listing includes detailed condition notes and high-resolution photos showing any wear. Common grades include: Mint, Excellent, Very Good, Good, and Fair.',
      },
      {
        q: 'Do watches come with original box and papers?',
        a: 'Box and papers availability varies by watch and is clearly indicated in each listing. "Full Set" means original box, papers, and accessories. "Watch Only" means the timepiece without original packaging. We never misrepresent what\'s included.',
      },
      {
        q: 'Can I see more photos of a specific watch?',
        a: 'Absolutely! Contact us with the watch reference number and we\'ll provide additional photos, including specific angles or details you\'d like to see. We can also arrange a video call to show you the watch in real-time.',
      },
      {
        q: 'How do I know the watch is running properly?',
        a: 'All mechanical watches are tested on a timing machine before listing. We include timing results (rate, amplitude, beat error) in our condition reports. Watches are also tested for water resistance where applicable.',
      },
      {
        q: 'Do you offer a warranty?',
        a: 'Yes, all watches include a 2-year warranty covering mechanical defects. This is separate from the manufacturer warranty (if still valid). Our warranty covers internal movement issues; it does not cover damage from accidents, water exposure beyond rated depth, or unauthorized repairs.',
      },
    ],
  },
  {
    category: 'Payment & Financing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), bank wire transfers, and Affirm financing. For purchases over $25,000, we recommend wire transfer for faster processing.',
      },
      {
        q: 'How does Affirm financing work?',
        a: 'Affirm allows you to split your purchase into 3, 6, or 12 monthly payments. Rates range from 0% to 36% APR based on creditworthiness. Checking your eligibility does not affect your credit score. Simply select Affirm at checkout to see your options.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes. We use Stripe for payment processing, which is PCI-DSS Level 1 certified (the highest level of security). Your card details are encrypted and never stored on our servers. All transactions use SSL/TLS encryption.',
      },
      {
        q: 'Do you accept wire transfers for high-value purchases?',
        a: 'Yes, wire transfers are preferred for purchases over $25,000. Wire transfers typically clear within 1-2 business days. We provide bank details after order confirmation. A 2% discount is available for wire transfer payments.',
      },
      {
        q: 'Can I pay with cryptocurrency?',
        a: 'We currently do not accept cryptocurrency payments directly. However, you can use a crypto-to-fiat service to convert your cryptocurrency to USD, then pay via wire transfer or card.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    questions: [
      {
        q: 'How do you ship watches?',
        a: 'All watches are shipped via FedEx Priority Overnight in discreet, unmarked packaging. Each shipment is fully insured for the purchase value and requires an adult signature upon delivery.',
      },
      {
        q: 'Is shipping insured?',
        a: 'Yes, every shipment is fully insured for the complete purchase value through our specialized jewelry insurance policy. This covers loss, theft, and damage during transit.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to most countries worldwide. International orders may be subject to customs duties and import taxes, which are the responsibility of the buyer. Contact us for a shipping quote to your location.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Domestic US orders typically arrive within 1-2 business days after shipment. International orders take 3-7 business days depending on location and customs processing. You\'ll receive tracking information once shipped.',
      },
      {
        q: 'Do I need to sign for my package?',
        a: 'Yes, adult signature is required for all deliveries. This is for your protection given the value of the items. If you\'re not available, FedEx will make additional delivery attempts or hold the package at a secure location.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 7-day return policy from the date of delivery. Items must be returned in the same condition as received, with all original packaging, documentation, and accessories. Final sale items and custom-sourced watches are not eligible for return.',
      },
      {
        q: 'How do I return a watch?',
        a: 'Contact our team at returns@essenceofwatches.com within 7 days of delivery. We\'ll provide a Return Authorization number and shipping instructions. Ship the watch back using insured, trackable shipping. Refunds are processed within 5-7 business days of receiving the return.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The refund will be issued to your original payment method. Bank processing times may add 3-5 additional days.',
      },
      {
        q: 'What if my watch arrives damaged?',
        a: 'Contact us immediately with photos of any damage. Do not refuse delivery—accept the package and document everything. We\'ll arrange return shipping at our expense and provide a full refund or replacement once we verify the damage.',
      },
    ],
  },
  {
    category: 'Selling Your Watch',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    questions: [
      {
        q: 'How do I sell my watch to you?',
        a: 'Start by submitting your watch details through our Sell page. Include photos, brand, model, condition, and whether you have box/papers. We\'ll respond within 24 hours with a preliminary quote. If you accept, ship the watch for final evaluation.',
      },
      {
        q: 'How do you determine the value of my watch?',
        a: 'We consider brand, model, condition, market demand, box/papers availability, service history, and current market comparables. Our offers are competitive with market rates—we price fairly because we value long-term relationships over one-time transactions.',
      },
      {
        q: 'How quickly will I receive payment?',
        a: 'Once your watch passes our authentication and inspection process (typically 24-48 hours after receipt), payment is issued same-day via your preferred method: wire transfer, check, or PayPal.',
      },
      {
        q: 'Do you buy watches without box/papers?',
        a: 'Yes, we purchase watches without original box and papers. However, having complete sets typically commands higher offers. The watch\'s condition and authenticity are the primary factors in our valuation.',
      },
    ],
  },
  {
    category: 'Account & Orders',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    questions: [
      {
        q: 'How do I track my order?',
        a: 'Once your order ships, you\'ll receive an email with tracking information. You can also log into your account to view order status and tracking details. For immediate assistance, contact us with your order number.',
      },
      {
        q: 'Can I cancel or modify my order?',
        a: 'Orders can be cancelled or modified within 1 hour of placement, before payment processing begins. After that, please contact us immediately—we\'ll do our best to accommodate changes before shipment.',
      },
      {
        q: 'How do I create an account?',
        a: 'Click the account icon in the navigation and sign in with Google or Apple. Account creation is automatic upon first sign-in. Having an account allows you to track orders, save favorites, and speed up checkout.',
      },
      {
        q: 'Is my personal information secure?',
        a: 'Absolutely. We use industry-standard encryption and never sell your data to third parties. Read our Privacy Policy for full details on how we collect, use, and protect your information.',
      },
    ],
  },
  {
    category: 'ID Verification',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M15 8h2" />
        <path d="M15 12h2" />
        <path d="M7 16h10" />
      </svg>
    ),
    questions: [
      {
        q: 'Why do you require ID verification?',
        a: 'ID verification protects both buyers and sellers from fraud. For high-value luxury goods, it\'s essential to verify identity to prevent stolen credit card use, money laundering, and ensure legitimate transactions. This is standard practice in the luxury watch industry.',
      },
      {
        q: 'What documents do you accept?',
        a: 'We accept government-issued photo ID: driver\'s license, passport, or national ID card. The name must match your payment method. For international customers, passport is preferred.',
      },
      {
        q: 'Is my information kept private?',
        a: 'Yes. Your ID documents are encrypted, stored securely, and only used for verification purposes. We never share this information with third parties except as required by law. Documents are deleted after the required retention period.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)] dark:border-[#262626]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between gap-4 text-left hover:bg-[var(--bg-primary)]/30 dark:hover:bg-[#0f0f0f] transition-colors"
      >
        <span className="text-[var(--text-primary)] font-medium">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  const activeFAQ = faqCategories.find((cat) => cat.category === activeCategory);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Support
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            Find answers to common questions about buying, selling, and authentication.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition ${
                    activeCategory === cat.category
                      ? 'bg-[var(--bg-secondary)] dark:bg-[#141414] text-[var(--text-primary)] border-l-2 border-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50 dark:hover:bg-[#141414]/50'
                  }`}
                >
                  <span className={activeCategory === cat.category ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
                    {cat.icon}
                  </span>
                  {cat.category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--border)] dark:border-[#262626]">
                <span className="text-[var(--text-primary)]">{activeFAQ?.icon}</span>
                <h2 className="font-serif text-xl text-[var(--text-primary)]">
                  {activeCategory}
                </h2>
              </div>

              <div>
                {activeFAQ?.questions.map((item, idx) => (
                  <FAQItem key={idx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-8 sm:p-12"
        >
          <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
            Still Have Questions?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
            Our team of watch experts is here to help. Reach out and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}



