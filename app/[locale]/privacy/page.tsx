'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            Legal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Privacy Policy
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
              Essence of Watches LLC ("we", "us", "our") respects your privacy and is committed 
              to protecting your personal data. This Privacy Policy explains how we collect, use, 
              and safeguard your information when you visit our website or make a purchase.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-[var(--text-primary)]">Personal Information</strong>
                <p className="mt-1">
                  When you make a purchase, create an account, or contact us, we may collect:
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Name and contact details (email, phone, address)</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely via Stripe)</li>
                  <li>• Government-issued ID (for high-value transactions and fraud prevention)</li>
                  <li>• Purchase history and preferences</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-[var(--text-primary)]">Automatically Collected Information</strong>
                <p className="mt-1">
                  When you browse our website, we automatically collect:
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• IP address and device information</li>
                  <li>• Browser type and operating system</li>
                  <li>• Pages visited and time spent on site</li>
                  <li>• Referring website or source</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              2. How We Use Your Information
            </h2>
            <div className="space-y-3">
              <p>We use your personal information to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Process and fulfill your orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Communicate order updates, shipping notifications, and customer service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Verify identity for fraud prevention (KYC requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Send marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Improve our website and customer experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-gold)]">•</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              3. Information Sharing
            </h2>
            <div className="space-y-4">
              <p>
                We do not sell your personal information. We may share data with:
              </p>
              <div className="space-y-3">
                <div>
                  <strong className="text-[var(--text-primary)]">Service Providers</strong>
                  <p className="text-sm mt-1">
                    Payment processors (Stripe, Affirm), shipping carriers (FedEx, UPS), 
                    and email services that help us operate our business.
                  </p>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Identity Verification</strong>
                  <p className="text-sm mt-1">
                    Third-party KYC providers to verify identity for high-value transactions.
                  </p>
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">Legal Requirements</strong>
                  <p className="text-sm mt-1">
                    When required by law, court order, or to protect our rights and safety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              4. Cookies & Tracking
            </h2>
            <div className="space-y-3">
              <p>
                We use cookies and similar technologies to enhance your experience:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
                  <strong className="text-[var(--text-primary)] text-sm">Essential Cookies</strong>
                  <p className="text-xs mt-1">Required for site functionality, cart, and checkout.</p>
                </div>
                <div className="p-4 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
                  <strong className="text-[var(--text-primary)] text-sm">Analytics Cookies</strong>
                  <p className="text-xs mt-1">Help us understand how visitors use our site.</p>
                </div>
                <div className="p-4 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
                  <strong className="text-[var(--text-primary)] text-sm">Marketing Cookies</strong>
                  <p className="text-xs mt-1">Used to deliver relevant ads (with consent).</p>
                </div>
                <div className="p-4 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
                  <strong className="text-[var(--text-primary)] text-sm">Preference Cookies</strong>
                  <p className="text-xs mt-1">Remember your settings like currency and theme.</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                You can manage cookie preferences in your browser settings.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              5. Data Security
            </h2>
            <div className="space-y-3">
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• SSL/TLS encryption for all data transmission</li>
                <li>• PCI-DSS compliant payment processing via Stripe</li>
                <li>• Secure storage with access controls</li>
                <li>• Regular security audits and monitoring</li>
              </ul>
              <p className="text-sm text-[var(--text-muted)] italic">
                While we take every precaution, no method of transmission over the internet 
                is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              6. Your Rights
            </h2>
            <div className="space-y-3">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-[var(--text-primary)]">Access</strong> — Request a copy of your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-[var(--text-primary)]">Correction</strong> — Update or correct inaccurate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-[var(--text-primary)]">Deletion</strong> — Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-[var(--text-primary)]">Opt-out</strong> — Unsubscribe from marketing communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-[var(--text-primary)]">Portability</strong> — Receive your data in a portable format</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 - California */}
          <section className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              7. California Privacy Rights (CCPA)
            </h2>
            <div className="space-y-3">
              <p>
                If you are a California resident, you have additional rights under the 
                California Consumer Privacy Act (CCPA):
              </p>
              <ul className="space-y-2 ml-4 text-sm">
                <li>• Right to know what personal information we collect and how it's used</li>
                <li>• Right to delete your personal information</li>
                <li>• Right to opt-out of the sale of personal information (we do not sell your data)</li>
                <li>• Right to non-discrimination for exercising your rights</li>
              </ul>
              <p className="text-sm">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@essenceofwatches.com" className="text-[var(--text-primary)] underline">
                  privacy@essenceofwatches.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              8. Data Retention
            </h2>
            <div className="space-y-3">
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• Fulfill the purposes outlined in this policy</li>
                <li>• Comply with legal and regulatory requirements</li>
                <li>• Resolve disputes and enforce agreements</li>
              </ul>
              <p>
                Transaction records are retained for a minimum of 7 years for tax and legal purposes.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible 
              for the privacy practices of these external sites. We encourage you to review 
              their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              10. Children's Privacy
            </h2>
            <p>
              Our website is not intended for individuals under 18 years of age. We do not 
              knowingly collect personal information from children. If we become aware that 
              we have collected data from a minor, we will take steps to delete it promptly.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted 
              on this page with an updated revision date. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">
              Questions About Your Privacy?
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about this policy or your data, contact us:
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:privacy@essenceofwatches.com"
                className="block text-[var(--text-primary)] underline hover:opacity-70"
              >
                privacy@essenceofwatches.com
              </a>
              <p className="text-sm text-[var(--text-muted)]">
                Essence of Watches LLC<br />
                Las Vegas, Nevada, USA
              </p>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}


