'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock orders - same as account page, replace with real API later
const mockOrders = [
  {
    id: 'EOW-2024-001',
    date: '2024-11-28',
    status: 'Delivered',
    total: 12500,
    subtotal: 12500,
    shipping: 0,
    tax: 0,
    items: [
      {
        name: 'Rolex Submariner Date',
        ref: '126610LN',
        image: '/assets/images/watches/submariner.jpg',
        price: 12500,
        condition: 'Excellent',
        year: '2023',
      },
    ],
    shippingInfo: {
      carrier: 'FedEx',
      tracking: '789456123654',
      estimatedDelivery: '2024-12-02',
      deliveredAt: '2024-12-01',
      address: {
        name: 'James Tram',
        street: '123 Main St',
        city: 'Las Vegas',
        state: 'NV',
        zip: '89101',
        country: 'USA',
      },
    },
    timeline: [
      { status: 'Order Placed', date: '2024-11-28', time: '2:30 PM', completed: true },
      { status: 'Payment Confirmed', date: '2024-11-28', time: '2:32 PM', completed: true },
      { status: 'Processing', date: '2024-11-28', time: '3:00 PM', completed: true },
      { status: 'Shipped', date: '2024-11-29', time: '10:15 AM', completed: true },
      { status: 'Delivered', date: '2024-12-01', time: '11:45 AM', completed: true },
    ],
  },
  {
    id: 'EOW-2024-002',
    date: '2024-12-01',
    status: 'Processing',
    total: 8900,
    subtotal: 8900,
    shipping: 0,
    tax: 0,
    items: [
      {
        name: 'Omega Speedmaster Professional',
        ref: '310.30.42.50.01.001',
        image: '/assets/images/watches/speedmaster.jpg',
        price: 8900,
        condition: 'Very Good',
        year: '2022',
      },
    ],
    shippingInfo: {
      carrier: 'FedEx',
      tracking: null,
      estimatedDelivery: '2024-12-08',
      deliveredAt: null,
      address: {
        name: 'James Tram',
        street: '123 Main St',
        city: 'Las Vegas',
        state: 'NV',
        zip: '89101',
        country: 'USA',
      },
    },
    timeline: [
      { status: 'Order Placed', date: '2024-12-01', time: '9:15 AM', completed: true },
      { status: 'Payment Confirmed', date: '2024-12-01', time: '9:17 AM', completed: true },
      { status: 'Processing', date: '2024-12-01', time: '10:00 AM', completed: true },
      { status: 'Shipped', date: '', time: '', completed: false },
      { status: 'Delivered', date: '', time: '', completed: false },
    ],
  },
];

const statusColors: Record<string, string> = {
  'Processing': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border dark:border-yellow-500/30',
  'Shipped': 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400 dark:border dark:border-blue-500/30',
  'Delivered': 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400 dark:border dark:border-green-500/30',
  'Cancelled': 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400 dark:border dark:border-red-500/30',
};

export default function OrderDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const orderId = params.id as string;

  const [order, setOrder] = useState<typeof mockOrders[0] | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    // Find order by ID - replace with real API call
    const found = mockOrders.find((o) => o.id === orderId);
    setOrder(found || null);
  }, [orderId]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading...</div>
      </main>
    );
  }

  if (!session) return null;

  if (!order) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl text-[var(--text-primary)] mb-4">Order Not Found</h1>
          <p className="text-[var(--text-muted)] mb-8">We couldn't find an order with that ID.</p>
          <Link
            href="/account"
            className="inline-block bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
          >
            Back to Account
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Orders
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
              Order {order.id}
            </h1>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Placed on {new Date(order.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <span className={`px-4 py-1.5 text-xs font-medium rounded-full ${statusColors[order.status]}`}>
            {order.status}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Order Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6"
            >
              <h2 className="font-serif text-lg text-[var(--text-primary)] mb-6">Items</h2>
              
              {order.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-24 h-24 bg-[var(--bg-primary)] flex-shrink-0 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--text-primary)] font-medium">{item.name}</h3>
                    <p className="text-sm text-[var(--text-muted)]">Ref. {item.ref}</p>
                    <div className="flex gap-4 mt-2 text-xs text-[var(--text-secondary)]">
                      <span>Condition: {item.condition}</span>
                      <span>Year: {item.year}</span>
                    </div>
                    <p className="text-[var(--text-primary)] font-medium mt-2">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6"
            >
              <h2 className="font-serif text-lg text-[var(--text-primary)] mb-6">Order Timeline</h2>
              
              <div className="space-y-4">
                {order.timeline.map((event, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        event.completed 
                          ? 'bg-green-500' 
                          : 'bg-[var(--border)]'
                      }`} />
                      {idx < order.timeline.length - 1 && (
                        <div className={`w-0.5 h-8 ${
                          event.completed 
                            ? 'bg-green-500' 
                            : 'bg-[var(--border)]'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
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
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6"
            >
              <h2 className="font-serif text-lg text-[var(--text-primary)] mb-4">Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Subtotal</span>
                  <span className="text-[var(--text-primary)]">${order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Shipping</span>
                  <span className="text-[var(--text-primary)]">
                    {order.shipping === 0 ? 'Free' : `$${order.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Tax</span>
                  <span className="text-[var(--text-primary)]">${order.tax}</span>
                </div>
                <div className="border-t border-[var(--border)] pt-3 flex justify-between font-medium">
                  <span className="text-[var(--text-primary)]">Total</span>
                  <span className="text-[var(--text-primary)]">${order.total.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Shipping Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6"
            >
              <h2 className="font-serif text-lg text-[var(--text-primary)] mb-4">Shipping</h2>
              
              <div className="text-sm text-[var(--text-secondary)] space-y-1">
                <p className="text-[var(--text-primary)] font-medium">
                  {order.shippingInfo.address.name}
                </p>
                <p>{order.shippingInfo.address.street}</p>
                <p>
                  {order.shippingInfo.address.city}, {order.shippingInfo.address.state} {order.shippingInfo.address.zip}
                </p>
                <p>{order.shippingInfo.address.country}</p>
              </div>

              {order.shippingInfo.tracking && (
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Tracking
                  </p>
                  <p className="text-sm text-[var(--text-primary)]">
                    {order.shippingInfo.carrier} • {order.shippingInfo.tracking}
                  </p>
                  
                  <a
                    href={`https://www.fedex.com/fedextrack/?trknbr=${order.shippingInfo.tracking}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs tracking-[0.1em] uppercase text-[var(--text-primary)] underline hover:opacity-70 transition"
                  >
                    Track Package →
                  </a>
                </div>
              )}
            </motion.div>

            {/* Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[var(--bg-secondary)] border border-[var(--border)] dark:bg-white/5 dark:border-white/10 p-6 text-center"
            >
              <h3 className="font-serif text-base text-[var(--text-primary)] mb-2">Need Help?</h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                Questions about your order?
              </p>
              <Link
                href="/contact"
                className="inline-block w-full border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-4 py-2.5 text-xs tracking-[0.1em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

