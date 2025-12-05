'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const authenticationSteps = [
  {
    step: '01',
    title: 'Initial Assessment',
    description:
      'Every timepiece undergoes a comprehensive visual inspection. We examine the case, dial, hands, crown, crystal, and bracelet against manufacturer specifications.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Movement Verification',
    description:
      'Our certified watchmakers open the case back to inspect and photograph the movement. We verify serial numbers, caliber authenticity, and component originality.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Technical Testing',
    description:
      'Each watch is tested on professional timing machines to measure accuracy, amplitude, and beat error. Water resistance testing is performed where applicable.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Documentation Review',
    description:
      'We verify all accompanying documentation including certificates, warranty cards, and service records against known authentic examples and manufacturer databases.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Final Certification',
    description:
      'Upon passing all inspections, each watch receives our Certificate of Authenticity with detailed condition notes, serial verification, and high-resolution photographs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const guarantees = [
  {
    title: '100% Authentic',
    description: 'Every watch guaranteed genuine or your money back',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Lifetime Guarantee',
    description: 'Our authenticity guarantee never expires',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Full Refund',
    description: 'Complete refund if authenticity is ever disputed',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Expert Certified',
    description: 'Verified by certified horologists with 20+ years experience',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
];

const stats = [
  { value: '10,000+', label: 'Watches Authenticated' },
  { value: '99.9%', label: 'Authentication Accuracy' },
  { value: '20+', label: 'Years Combined Experience' },
  { value: '0', label: 'Counterfeit Watches Sold' },
];

export default function AuthenticityPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-50" />
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 mb-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Our Promise
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-3 leading-tight">
              Authenticity Guarantee
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6 leading-relaxed">
              Every timepiece we sell is guaranteed 100% authentic. Our rigorous 
              multi-point inspection process ensures you receive only genuine luxury watches, 
              backed by our lifetime authenticity guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--bg-secondary)] dark:bg-[#141414] border-y border-[var(--border)] dark:border-[#262626]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              What's Included
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">
              Our Guarantee to You
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 text-center hover:border-green-500/30 dark:hover:border-green-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Process */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] dark:bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">
              5-Point Authentication
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
              Every watch undergoes our comprehensive authentication process before 
              being listed for sale. Nothing leaves our facility without passing all five stages.
            </p>
          </motion.div>

          <div className="space-y-8">
            {authenticationSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-serif text-[var(--text-muted)]/30">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)]">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
                Documentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">
                Certificate of Authenticity
              </h2>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">
                Every watch comes with our comprehensive Certificate of Authenticity, 
                documenting the complete inspection results and providing you with 
                permanent proof of authenticity.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Serial number verification',
                  'Movement caliber confirmation',
                  'Detailed condition assessment',
                  'High-resolution photographs',
                  'Timing test results',
                  'Authentication date and inspector',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-8 sm:p-12">
                <div className="border-2 border-[var(--border)] dark:border-[#333] p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-green-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  
                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] mb-2">
                    Certificate of Authenticity
                  </p>
                  <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                    Essence of Watches
                  </h3>
                  
                  <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626]">
                    <p className="text-sm text-[var(--text-muted)]">Serial No.</p>
                    <p className="text-[var(--text-primary)] font-mono mt-1">XXXXXXXX</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-[var(--text-muted)]">Verified Authentic</p>
                    <p className="text-green-500 font-medium mt-1">✓ Confirmed</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626] text-xs text-[var(--text-muted)]">
                    Certified by Essence of Watches
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What If Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] dark:bg-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">
              What If Something's Wrong?
            </h2>
            <p className="text-[var(--text-secondary)] mt-6 leading-relaxed">
              In the extremely unlikely event that a watch purchased from us is determined 
              to be inauthentic by an authorized service center, we will:
            </p>

            <div className="mt-10 space-y-6 text-left max-w-xl mx-auto">
              {[
                {
                  title: 'Immediate Response',
                  description: 'We take every claim seriously and respond within 24 hours',
                },
                {
                  title: 'Cover All Costs',
                  description: 'We pay for return shipping and any assessment fees',
                },
                {
                  title: 'Full Refund',
                  description: 'You receive a complete refund of the purchase price',
                },
                {
                  title: 'No Time Limit',
                  description: 'Our authenticity guarantee never expires',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-500 text-sm font-medium">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-[var(--text-primary)] font-medium">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] p-8 sm:p-12 lg:p-16 text-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl">Shop with Confidence</h2>
            <p className="mt-4 opacity-80 max-w-xl mx-auto">
              Every watch in our collection has passed our rigorous authentication process 
              and comes with our lifetime authenticity guarantee.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-[var(--bg-primary)] dark:bg-black text-[var(--text-primary)] dark:text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-current px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



