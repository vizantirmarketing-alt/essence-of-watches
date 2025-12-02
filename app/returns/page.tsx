'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Policy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Returns & Refunds
          </h1>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            Last updated: December 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10 text-[var(--text-secondary)] leading-relaxed"
        >
          {/* Intro */}
          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <p>
              We want you to be delighted with your purchase. This Returns & Refunds Policy 
              sets out your rights and our process when returning or refunding items bought 
              from Essence of Watches LLC.
            </p>
          </section>

          {/* Return Window */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Return Window & Conditions
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[var(--text-primary)]">1</span>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Return Window:</strong>
                  <p>7 calendar days from the date you receive the item.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[var(--text-primary)]">2</span>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Condition of Goods:</strong>
                  <p>Items must be unworn, in original packaging, with all tags, certificates, box, and accessories in saleable condition.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[var(--text-primary)]">3</span>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Final Sale Items:</strong>
                  <p>Personalized, engraved, custom-sourced, or special-order timepieces are non-returnable unless faulty.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[var(--text-primary)]">4</span>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Faulty or Misdescribed Items:</strong>
                  <p>If your item is defective or not as described, contact us immediately. Returns may be accepted beyond the 7-day window for valid claims.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligible / Not Eligible */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-sm">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Eligible for Return
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Condition differs from description</li>
                <li>• Watch is defective or damaged</li>
                <li>• Authenticity concerns</li>
                <li>• Change of mind (within 7 days)</li>
              </ul>
            </div>
            
            <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-sm">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Eligible
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Items marked "Final Sale"</li>
                <li>• Worn, altered, or damaged items</li>
                <li>• Custom sourced timepieces</li>
                <li>• Missing original packaging</li>
              </ul>
            </div>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
              Return Process
            </h2>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Contact Us', desc: 'Email with your order number and reason for return' },
                { step: '02', title: 'Get Approval', desc: 'Receive Return Authorization (RA) and shipping instructions' },
                { step: '03', title: 'Ship Securely', desc: 'Use insured, trackable shipping to our address' },
                { step: '04', title: 'Receive Refund', desc: 'Processed within 5-7 business days of acceptance' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="text-3xl font-serif text-[var(--accent-gold)]">{item.step}</span>
                  <h3 className="text-[var(--text-primary)] mt-2 mb-1 text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Costs */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Return Costs & Shipping
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--text-primary)]">Change of mind returns:</strong> You are responsible for return shipping costs unless otherwise agreed in writing.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Faulty or misdescribed items:</strong> We will cover the return shipping cost.
              </p>
              <p className="text-sm text-[var(--text-muted)] italic">
                We recommend using tracked/insured shipping. We cannot accept responsibility for returns lost or damaged in transit.
              </p>
            </div>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Refunds & Exchanges
            </h2>
            <div className="space-y-3">
              <p>
                We will issue a full refund (including original shipping cost for faulty items) once goods are inspected and accepted.
              </p>
              <p>
                Refunds are processed to the original payment method within <strong className="text-[var(--text-primary)]">5-7 business days</strong>.
              </p>
              <p>
                If you prefer, we may offer an exchange or store credit of equal or greater value.
              </p>
            </div>
          </section>

          {/* Right to Reject */}
          <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Inspection & Right to Reject
            </h2>
            <p>
              We reserve the right to reject returns that do not comply with this policy — 
              including missing items, damage not disclosed, or items in unsaleable condition. 
              If rejected, the item will be returned to you at your cost.
            </p>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Warranty & Faults After Return Window
            </h2>
            <div className="space-y-3">
              <p>
                All watches come with a <strong className="text-[var(--text-primary)]">2-year warranty</strong> covering mechanical defects.
              </p>
              <p>
                If a fault arises after the 7-day return window, you will need to provide proof of purchase. 
                Legitimate warranty claims will be honored with repair or replacement.
              </p>
              <p>
                For warranty claims, contact us at{' '}
                <a href="mailto:warranty@essenceofwatches.com" className="text-[var(--text-primary)] underline hover:opacity-70">
                  warranty@essenceofwatches.com
                </a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">
              Need to Start a Return?
            </h2>
            <p className="mb-6">
              Contact our team with your order number and reason for return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:returns@essenceofwatches.com"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                Email Returns Team
              </a>
              <Link 
                href="/contact"
                className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                Contact Form
              </Link>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}


