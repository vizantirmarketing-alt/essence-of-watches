'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms of Service
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
          className="prose prose-neutral max-w-none text-[var(--text-secondary)]"
        >
          <div className="space-y-10">
            
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                1. Introduction & Definitions
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">1.1</strong> These Terms & Conditions ("Terms") govern your use of www.essenceofwatches.com ("Website") and any purchase of goods ("Goods") from us, Essence of Watches LLC ("we", "us", "our").
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">1.2</strong> "Customer", "you", "your" refers to the person buying or using the Website.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">1.3</strong> All orders accepted are subject to these Terms to the exclusion of any other terms (unless agreed in writing).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                2. Ordering & Acceptance
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">2.1</strong> You place orders via our Website. We reserve the right to accept or decline any order.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">2.2</strong> A binding contract is formed only when we send you an Order Confirmation email.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">2.3</strong> If an item is out of stock or unavailable, we will notify you and offer an alternative or full refund.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                3. Price & Payment
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">3.1</strong> Prices are displayed in USD (unless otherwise stated). Additional taxes may apply based on your location.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">3.2</strong> We reserve the right to change prices at any time before you place your order.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">3.3</strong> Payment must be made in full at checkout via the payment methods offered, including credit card, wire transfer, or financing through Affirm.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">3.4</strong> If your payment is declined, your order will not be processed until payment is cleared.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                4. Delivery & Risk
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">4.1</strong> All shipments are fully insured. Risk in goods passes to you upon delivery and signature confirmation.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">4.2</strong> We aim to dispatch goods within the times indicated on the site. Delays beyond that will be communicated to you.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">4.3</strong> Title to the goods only passes when full payment (including any shipping costs) is received and cleared.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                5. Your Rights to Return
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">5.1</strong> You may return goods under our <a href="/returns" className="text-[var(--text-primary)] underline hover:opacity-70">Returns Policy</a> within 7 days of delivery.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">5.2</strong> Return and refund obligations are subject to Goods being in the condition as stated in our Returns Policy.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                6. Authenticity Guarantee
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">6.1</strong> Every timepiece sold by Essence of Watches is guaranteed 100% authentic.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">6.2</strong> All watches undergo rigorous authentication by certified horologists before listing.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">6.3</strong> If a watch is found to be inauthentic, we will provide a full refund including all shipping costs.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                7. Liability & Disclaimer
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">7.1</strong> We exclude (to the fullest extent permitted by law) all liability for loss of profit, business interruption, or indirect loss.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">7.2</strong> Our liability for any faulty or misdescribed goods is limited to repair, replacement, or refund.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">7.3</strong> Nothing in these Terms limits or excludes your statutory rights as a consumer.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                8. Intellectual Property
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">8.1</strong> All copyrights, trademarks, and intellectual property rights in the Website content (text, images, logos) belong to us or licensed parties.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">8.2</strong> You may view/download pages for personal, non-commercial use only, and you must not reproduce or exploit content without our express written permission.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                9. Privacy & Data
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">9.1</strong> Your personal data will be handled in accordance with our <a href="/privacy" className="text-[var(--text-primary)] underline hover:opacity-70">Privacy Policy</a>.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">9.2</strong> We may use your details for order fulfilment, marketing (where consent is given), and account management.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                10. Force Majeure
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  We will not be liable for any failure to perform due to events outside our reasonable control, including natural disasters, supply chain issues, labor disputes, or regulatory changes.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                11. Severability & Variation
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">11.1</strong> If any provision in these Terms is found invalid or unenforceable, that provision shall be struck out and the remainder shall continue in full force.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">11.2</strong> We may revise these Terms at any time; revised terms will apply to orders placed after the change and will be published on the Website.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                12. Governing Law & Jurisdiction
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  These Terms are governed by the laws of the State of Nevada, United States. Disputes will be subject to the jurisdiction of the courts of Nevada.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
                13. Contact & Complaints
              </h2>
              <p className="leading-relaxed">
                If you have questions or complaints regarding these Terms, please contact us at:
              </p>
              <a 
                href="mailto:legal@essenceofwatches.com"
                className="inline-block mt-4 text-[var(--text-primary)] underline hover:opacity-70"
              >
                legal@essenceofwatches.com
              </a>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}


