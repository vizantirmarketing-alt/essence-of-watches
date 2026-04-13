'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const mockOrderStatuses = {
  'EOW-2024-001': {
    id: 'EOW-2024-001',
    status: 'Delivered',
    date: '2024-11-27',
    item: 'Rolex Submariner Date',
    ref: '126610LN',
    total: 12500,
    tracking: '789456123654',
    carrier: 'FedEx',
    timeline: [
      { status: 'Order Placed', date: 'Nov 27, 2024', time: '2:30 PM', completed: true },
      { status: 'Payment Confirmed', date: 'Nov 27, 2024', time: '2:32 PM', completed: true },
      { status: 'Authentication Complete', date: 'Nov 27, 2024', time: '4:00 PM', completed: true },
      { status: 'Shipped', date: 'Nov 28, 2024', time: '10:15 AM', completed: true },
      { status: 'Out for Delivery', date: 'Nov 29, 2024', time: '8:30 AM', completed: true },
      { status: 'Delivered', date: 'Nov 29, 2024', time: '11:45 AM', completed: true },
    ],
  },
  'EOW-2024-002': {
    id: 'EOW-2024-002',
    status: 'Processing',
    date: '2024-11-30',
    item: 'Omega Speedmaster Professional',
    ref: '310.30.42.50.01.001',
    total: 8900,
    tracking: null,
    carrier: 'FedEx',
    timeline: [
      { status: 'Order Placed', date: 'Nov 30, 2024', time: '9:15 AM', completed: true },
      { status: 'Payment Confirmed', date: 'Nov 30, 2024', time: '9:17 AM', completed: true },
      { status: 'Authentication Complete', date: 'Nov 30, 2024', time: '2:00 PM', completed: true },
      { status: 'Shipped', date: '', time: '', completed: false },
      { status: 'Out for Delivery', date: '', time: '', completed: false },
      { status: 'Delivered', date: '', time: '', completed: false },
    ],
  },
};

type OrderData = {
  id: string;
  status: string;
  date: string;
  item: string;
  ref: string;
  total: number;
  tracking: string | null;
  carrier: string;
  timeline: {
    status: string;
    date: string;
    time: string;
    completed: boolean;
  }[];
};

const statusColors: Record<string, string> = {
  'Processing': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border dark:border-yellow-500/30',
  'Shipped': 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400 dark:border dark:border-blue-500/30',
  'Out for Delivery': 'bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400 dark:border dark:border-purple-500/30',
  'Delivered': 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400 dark:border dark:border-green-500/30',
  'Cancelled': 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400 dark:border dark:border-red-500/30',
};

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const order = mockOrderStatuses[orderNumber.toUpperCase() as keyof typeof mockOrderStatuses];
    
    if (order) {
      setOrderData(order);
    } else {
      setError('Order not found. Please check your order number and try again.');
      setOrderData(null);
    }
    
    setIsSearching(false);
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-transparent dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition-colors duration-300';

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Order Status
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Track Your Order
          </h1>
          <p className="text-[var(--text-secondary)] mt-4">
            Enter your order number to view the current status of your shipment.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 sm:p-8 mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="EOW-XXXX-XXX"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition disabled:opacity-50"
            >
              {isSearching ? 'Searching...' : 'Track Order'}
            </button>
          </form>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-4 text-center"
            >
              {error}
            </motion.p>
          )}

          <p className="text-xs text-[var(--text-muted)] text-center mt-6">
            Try: <button 
              type="button"
              onClick={() => setOrderNumber('EOW-2024-001')} 
              className="underline hover:text-[var(--text-primary)]"
            >
              EOW-2024-001
            </button> or <button 
              type="button"
              onClick={() => setOrderNumber('EOW-2024-002')} 
              className="underline hover:text-[var(--text-primary)]"
            >
              EOW-2024-002
            </button>
          </p>
        </motion.div>

        {/* Order Result */}
        {orderData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Order Header */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-serif text-xl text-[var(--text-primary)]">
                    Order {orderData.id}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    Placed on {new Date(orderData.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <span className={`px-4 py-1.5 text-xs font-medium rounded-full ${statusColors[orderData.status]}`}>
                  {orderData.status}
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333]">
                <div className="w-16 h-16 bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[var(--text-primary)] font-medium">{orderData.item}</h3>
                  <p className="text-sm text-[var(--text-muted)]">Ref. {orderData.ref}</p>
                  <p className="text-sm text-[var(--text-primary)] font-medium mt-1">
                    ${orderData.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Tracking Info */}
            {orderData.tracking && (
              <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4">Shipping Details</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Carrier</p>
                    <p className="text-[var(--text-primary)] font-medium">{orderData.carrier}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Tracking Number</p>
                    <p className="text-[var(--text-primary)] font-medium">{orderData.tracking}</p>
                  </div>
                  <a
                    href={`https://www.fedex.com/fedextrack/?trknbr=${orderData.tracking}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.15em] uppercase hover:opacity-90 transition"
                  >
                    Track on FedEx
                  </a>
                </div>
              </div>
            )}

            {/* Timeline */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-6">Order Timeline</h3>
              
              <div className="space-y-0">
                {orderData.timeline.map((event, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        event.completed 
                          ? 'bg-green-500' 
                          : 'bg-[var(--border)] dark:bg-[#333]'
                      }`} />
                      {idx < orderData.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${
                          event.completed && orderData.timeline[idx + 1]?.completed
                            ? 'bg-green-500' 
                            : 'bg-[var(--border)] dark:bg-[#333]'
                        }`} />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className={`font-medium ${
                        event.completed 
                          ? 'text-[var(--text-primary)]' 
                          : 'text-[var(--text-muted)]'
                      }`}>
                        {event.status}
                      </p>
                      {event.date && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">
                          {event.date} at {event.time}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="text-center p-6 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
              <p className="text-[var(--text-secondary)] text-sm">
                Have questions about your order?{' '}
                <Link href="/contact" className="text-[var(--text-primary)] underline hover:opacity-70">
                  Contact Support
                </Link>
              </p>
            </div>
          </motion.div>
        )}

        {/* No Order Yet */}
        {!orderData && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Already have an account?
            </p>
            <Link
              href="/account"
              className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
            >
              Sign in to View Orders
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}

