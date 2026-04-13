'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { trackBeginCheckout } from '@/lib/analytics';

type CheckoutStep = 'information' | 'shipping' | 'payment';

export default function CheckoutPage() {
  const { items, total: cartTotal } = useCart();
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wire' | 'affirm'>('card');
  
  const [formData, setFormData] = useState({
    // Contact
    email: '',
    phone: '',
    // Shipping
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    // Options
    saveInfo: false,
    sameAsBilling: true,
  });

  const cartItems = items.map(item => ({
    id: item.product.id,
    name: item.product.model,
    ref: item.product.reference,
    price: item.product.price,
    brand: item.product.brand,
    image: item.product.images?.[0] || '',
    quantity: item.quantity,
  }));

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.0825); // 8.25% example tax
  const total = subtotal + shipping + tax;

  // Track begin checkout when page loads
  useEffect(() => {
    if (cartTotal > 0) {
      trackBeginCheckout(cartTotal);
    }
  }, [cartTotal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleContinue = () => {
    if (currentStep === 'information') setCurrentStep('shipping');
    else if (currentStep === 'shipping') setCurrentStep('payment');
  };

  const handleBack = () => {
    if (currentStep === 'payment') setCurrentStep('shipping');
    else if (currentStep === 'shipping') setCurrentStep('information');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Store order total for tracking on success page
    localStorage.setItem('lastOrderTotal', total.toString());
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Redirect to success page with total in URL
    window.location.href = `/checkout/success?total=${total}`;
  };

  const inputClasses =
    'w-full px-4 py-3 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition text-sm';

  const labelClasses = 'block text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2';

  const steps = [
    { id: 'information', label: 'Information' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'payment', label: 'Payment' },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--text-primary)]">
              Essence of Watches
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left - Form */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href="/cart" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                Cart
              </Link>
              {steps.map((step, idx) => (
                <span key={step.id} className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-muted)]">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <button
                    onClick={() => {
                      if (step.id === 'information') setCurrentStep('information');
                      else if (step.id === 'shipping' && currentStep !== 'information') setCurrentStep('shipping');
                      else if (step.id === 'payment' && currentStep === 'payment') setCurrentStep('payment');
                    }}
                    className={`${
                      currentStep === step.id
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {step.label}
                  </button>
                </span>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Information Step */}
              {currentStep === 'information' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClasses}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className={labelClasses}>Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                      Shipping Address
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className={labelClasses}>First Name</label>
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
                          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
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
                      
                      <div>
                        <label htmlFor="address" className={labelClasses}>Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street address"
                          className={inputClasses}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="apartment" className={labelClasses}>
                          Apartment, suite, etc. <span className="normal-case tracking-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="apartment"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="city" className={labelClasses}>City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className={labelClasses}>State</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleChange}
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className={labelClasses}>ZIP Code</label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleChange}
                            className={inputClasses}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="country" className={labelClasses}>Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-[var(--border)] dark:border-[#333] accent-[var(--text-primary)]"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-[var(--text-secondary)]">
                      Save this information for next time
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
                  >
                    Continue to Shipping
                  </button>
                </motion.div>
              )}

              {/* Shipping Step */}
              {currentStep === 'shipping' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                      Shipping Method
                    </h2>
                    
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-4 border border-[var(--text-primary)] dark:border-white bg-[var(--bg-secondary)] dark:bg-[#141414] cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="fedex-priority"
                            defaultChecked
                            className="w-4 h-4 accent-[var(--text-primary)]"
                          />
                          <div>
                            <p className="text-sm text-[var(--text-primary)] font-medium">FedEx Priority Overnight</p>
                            <p className="text-xs text-[var(--text-muted)]">1-2 business days • Fully insured</p>
                          </div>
                        </div>
                        <span className="text-sm text-[var(--text-primary)]">Free</span>
                      </label>
                      
                      <label className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[#333] hover:border-[var(--text-primary)] dark:hover:border-[#555] cursor-pointer transition">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="fedex-standard"
                            className="w-4 h-4 accent-[var(--text-primary)]"
                          />
                          <div>
                            <p className="text-sm text-[var(--text-primary)] font-medium">FedEx Standard</p>
                            <p className="text-xs text-[var(--text-muted)]">3-5 business days • Fully insured</p>
                          </div>
                        </div>
                        <span className="text-sm text-[var(--text-primary)]">Free</span>
                      </label>
                      
                      <label className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[#333] hover:border-[var(--text-primary)] dark:hover:border-[#555] cursor-pointer transition">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="pickup"
                            className="w-4 h-4 accent-[var(--text-primary)]"
                          />
                          <div>
                            <p className="text-sm text-[var(--text-primary)] font-medium">In-Store Pickup</p>
                            <p className="text-xs text-[var(--text-muted)]">Las Vegas, NV • By appointment</p>
                          </div>
                        </div>
                        <span className="text-sm text-[var(--text-primary)]">Free</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-4">
                    <div className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-500 flex-shrink-0 mt-0.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Fully Insured Shipping</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          All shipments are fully insured for the complete purchase value. 
                          Adult signature required upon delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-4 border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="flex-1 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Payment Step */}
              {currentStep === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                      Payment Method
                    </h2>
                    
                    {/* Payment Tabs */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 border text-xs tracking-[0.1em] uppercase transition ${
                          paymentMethod === 'card'
                            ? 'border-[var(--text-primary)] dark:border-white bg-[var(--bg-secondary)] dark:bg-[#141414] text-[var(--text-primary)]'
                            : 'border-[var(--border)] dark:border-[#333] text-[var(--text-muted)] hover:border-[var(--text-primary)] dark:hover:border-[#555] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('wire')}
                        className={`p-3 border text-xs tracking-[0.1em] uppercase transition ${
                          paymentMethod === 'wire'
                            ? 'border-[var(--text-primary)] dark:border-white bg-[var(--bg-secondary)] dark:bg-[#141414] text-[var(--text-primary)]'
                            : 'border-[var(--border)] dark:border-[#333] text-[var(--text-muted)] hover:border-[var(--text-primary)] dark:hover:border-[#555] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Wire
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('affirm')}
                        className={`p-3 border text-xs tracking-[0.1em] uppercase transition ${
                          paymentMethod === 'affirm'
                            ? 'border-[var(--text-primary)] dark:border-white bg-[var(--bg-secondary)] dark:bg-[#141414] text-[var(--text-primary)]'
                            : 'border-[var(--border)] dark:border-[#333] text-[var(--text-muted)] hover:border-[var(--text-primary)] dark:hover:border-[#555] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Affirm
                      </button>
                    </div>
                    
                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="cardNumber" className={labelClasses}>Card Number</label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            required
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className={inputClasses}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardName" className={labelClasses}>Name on Card</label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleChange}
                            className={inputClasses}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className={labelClasses}>Expiration</label>
                            <input
                              type="text"
                              id="expiry"
                              name="expiry"
                              required
                              value={formData.expiry}
                              onChange={handleChange}
                              placeholder="MM / YY"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="cvc" className={labelClasses}>Security Code</label>
                            <input
                              type="text"
                              id="cvc"
                              name="cvc"
                              required
                              value={formData.cvc}
                              onChange={handleChange}
                              placeholder="CVC"
                              className={inputClasses}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'wire' && (
                      <div className="space-y-4">
                        <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
                          <h3 className="text-sm font-medium text-[var(--text-primary)] mb-4">Wire Transfer Instructions</h3>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-[var(--text-muted)]">Bank Name</p>
                              <p className="text-[var(--text-primary)]">Chase Bank</p>
                            </div>
                            <div>
                              <p className="text-[var(--text-muted)]">Account Name</p>
                              <p className="text-[var(--text-primary)]">Essence of Watches LLC</p>
                            </div>
                            <div>
                              <p className="text-[var(--text-muted)]">Routing Number</p>
                              <p className="text-[var(--text-primary)]">XXXXXXXXX</p>
                            </div>
                            <div>
                              <p className="text-[var(--text-muted)]">Account Number</p>
                              <p className="text-[var(--text-primary)]">XXXXXXXXXXXX</p>
                            </div>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] mt-4">
                            Please include your order number in the wire transfer memo. 
                            Your order will be processed once payment is confirmed (1-2 business days).
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'affirm' && (
                      <div className="space-y-4">
                        <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 text-center">
                          <img 
                            src={theme === 'night' ? "/assets/affirm-dark.svg" : "/assets/affirm-day.svg"}
                            alt="Affirm" 
                            className="h-8 mx-auto mb-4"
                          />
                          <p className="text-sm text-[var(--text-primary)] mb-2">Pay over time with Affirm</p>
                          <p className="text-xs text-[var(--text-muted)] mb-4">
                            You'll be redirected to Affirm to complete your purchase securely.
                          </p>
                          <div className="bg-[var(--bg-primary)] dark:bg-[#0a0a0a] p-4 rounded mb-4">
                            <p className="text-lg font-medium text-[var(--text-primary)]">
                              As low as ${Math.round(total / 12).toLocaleString()}/month
                            </p>
                            <p className="text-xs text-[var(--text-muted)]">with 12 monthly payments</p>
                          </div>
                          <p className="text-xs text-[var(--text-muted)]">
                            Subject to credit check. Rates from 0-36% APR.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="sameAsBilling"
                      name="sameAsBilling"
                      checked={formData.sameAsBilling}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-[var(--border)] dark:border-[#333] accent-[var(--text-primary)]"
                    />
                    <label htmlFor="sameAsBilling" className="text-sm text-[var(--text-secondary)]">
                      Billing address same as shipping
                    </label>
                  </div>

                  {/* Security Note */}
                  <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-4">
                    <div className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-muted)] flex-shrink-0 mt-0.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Secure Payment</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          Your payment information is encrypted and secure. 
                          We never store your card details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-4 border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition disabled:opacity-50"
                    >
                      {isProcessing ? 'Processing...' : paymentMethod === 'affirm' ? 'Continue with Affirm' : `Pay $${total.toLocaleString()}`}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Footer Links */}
            <div className="flex gap-6 mt-8 pt-8 border-t border-[var(--border)] dark:border-[#262626] text-xs text-[var(--text-muted)]">
              <Link href="/returns" className="hover:text-[var(--text-primary)]">Refund Policy</Link>
              <Link href="/shipping" className="hover:text-[var(--text-primary)]">Shipping Policy</Link>
              <Link href="/privacy" className="hover:text-[var(--text-primary)]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[var(--text-primary)]">Terms of Service</Link>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:border-l lg:border-[var(--border)] dark:lg:border-[#262626] lg:pl-16">
            <div className="sticky top-28">
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-[var(--text-muted)]">No items in cart</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-8 h-8 text-[var(--text-muted)]/30 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        )}
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--text-muted)] text-[var(--bg-primary)] text-xs flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[var(--text-muted)] uppercase">{item.brand}</p>
                        <p className="text-sm text-[var(--text-primary)] font-medium">{item.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">Ref. {item.ref}</p>
                      </div>
                      <p className="text-sm text-[var(--text-primary)]">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="flex-1 px-4 py-3 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555]"
                />
                <button className="px-4 py-3 border border-[var(--border)] dark:border-[#444] text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] dark:hover:border-[#555] transition">
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 py-6 border-t border-[var(--border)] dark:border-[#262626]">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Subtotal</span>
                  <span className="text-[var(--text-primary)]">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Shipping</span>
                  <span className="text-[var(--text-primary)]">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Tax</span>
                  <span className="text-[var(--text-primary)]">${tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between py-6 border-t border-[var(--border)] dark:border-[#262626]">
                <span className="text-[var(--text-primary)] font-medium">Total</span>
                <span className="text-xl text-[var(--text-primary)] font-medium">${total.toLocaleString()}</span>
              </div>

              {/* Buyer protection */}
              <div className="p-4 sm:p-5 border border-[var(--border)] dark:border-[#333] bg-[var(--bg-secondary)] dark:bg-[#141414] mt-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
                  You&apos;re protected
                </p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  <li className="flex gap-2">
                    <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                    <span>
                      <strong className="text-[var(--text-primary)] font-medium">7-day inspection window</strong>{' '}
                      after delivery—if the watch isn&apos;t as described, we arrange return and a full refund.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                    <span>
                      <strong className="text-[var(--text-primary)] font-medium">Authenticated before shipment</strong>
                      —serial, movement, and parts checks on every timepiece.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                    <span>
                      <strong className="text-[var(--text-primary)] font-medium">Insured shipping</strong> on every
                      order—fully covered in transit.
                    </span>
                  </li>
                </ul>
                <Link
                  href="/buyer-protection"
                  className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-primary)] underline hover:opacity-80"
                >
                  Full buyer protection details
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--border)] dark:border-[#262626]">
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Authenticated
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Secure Checkout
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Insured Shipping
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  7-Day Inspection Window
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

