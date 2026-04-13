'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Mock orders - replace with real API call
const mockOrders = [
  {
    id: 'EOW-2024-001',
    date: '2024-11-28',
    status: 'Delivered',
    total: 12500,
    items: [
      {
        name: 'Rolex Submariner Date',
        ref: '126610LN',
        image: '/assets/images/watches/submariner.jpg',
        price: 12500,
      },
    ],
    shipping: {
      carrier: 'FedEx',
      tracking: '789456123654',
      estimatedDelivery: '2024-12-02',
      address: '123 Main St, Las Vegas, NV 89101',
    },
  },
  {
    id: 'EOW-2024-002',
    date: '2024-12-01',
    status: 'Processing',
    total: 8900,
    items: [
      {
        name: 'Omega Speedmaster Professional',
        ref: '310.30.42.50.01.001',
        image: '/assets/images/watches/speedmaster.jpg',
        price: 8900,
      },
    ],
    shipping: {
      carrier: 'FedEx',
      tracking: null,
      estimatedDelivery: '2024-12-08',
      address: '123 Main St, Las Vegas, NV 89101',
    },
  },
];

const statusColors: Record<string, string> = {
  'Processing': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border dark:border-yellow-500/30',
  'Shipped': 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400 dark:border dark:border-blue-500/30',
  'Delivered': 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400 dark:border dark:border-green-500/30',
  'Cancelled': 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400 dark:border dark:border-red-500/30',
};

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading...</div>
      </main>
    );
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-4">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name || 'User'}
                width={56}
                height={56}
                className="rounded-full"
              />
            )}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
                Welcome, {session.user?.name?.split(' ')[0]}
              </h1>
              <p className="text-sm text-[var(--text-muted)]">{session.user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
          >
            Sign Out
          </button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-8 border-b border-[var(--border)] mb-8"
        >
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-4 text-sm tracking-[0.1em] uppercase transition ${
              activeTab === 'orders'
                ? 'text-[var(--text-primary)] border-b-2 border-[var(--text-primary)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-4 text-sm tracking-[0.1em] uppercase transition ${
              activeTab === 'settings'
                ? 'text-[var(--text-primary)] border-b-2 border-[var(--text-primary)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            Settings
          </button>
        </motion.div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {mockOrders.length === 0 ? (
              <div className="text-center py-16 bg-[var(--bg-secondary)] border border-[var(--border)] dark:bg-white/5 dark:border-white/10">
                <svg
                  className="w-12 h-12 mx-auto text-[var(--text-muted)] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">No Orders Yet</h3>
                <p className="text-[var(--text-muted)] mb-6">Start exploring our collection</p>
                <Link
                  href="/shop"
                  className="inline-block bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
                >
                  Shop Watches
                </Link>
              </div>
            ) : (
              mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="p-4 sm:p-6 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                      <div>
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Order</span>
                        <p className="text-[var(--text-primary)] font-medium">{order.id}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Date</span>
                        <p className="text-[var(--text-primary)]">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Total</span>
                        <p className="text-[var(--text-primary)] font-medium">
                          ${order.total.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 sm:p-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-20 h-20 bg-[var(--bg-primary)] flex-shrink-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-[var(--text-primary)] font-medium">{item.name}</h4>
                          <p className="text-sm text-[var(--text-muted)]">Ref. {item.ref}</p>
                          <p className="text-sm text-[var(--text-primary)] mt-1">${item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Info */}
                  <div className="p-4 sm:p-6 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border-t border-[var(--border)] dark:border-[#262626]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Shipping</span>
                        <p className="text-[var(--text-primary)] text-sm mt-1">{order.shipping.address}</p>
                        {order.shipping.tracking ? (
                          <p className="text-sm text-[var(--text-secondary)] mt-1">
                            {order.shipping.carrier} • Tracking: {order.shipping.tracking}
                          </p>
                        ) : (
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            Tracking available once shipped
                          </p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        {order.shipping.tracking && (
                          <a
                            href={`https://www.fedex.com/fedextrack/?trknbr=${order.shipping.tracking}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-[0.1em] uppercase border border-[var(--border)] dark:border-[#444] px-4 py-2 hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
                          >
                            Track Package
                          </a>
                        )}
                        <Link
                          href={`/account/orders/${order.id}`}
                          className="text-xs tracking-[0.1em] uppercase bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-4 py-2 hover:opacity-90 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Profile */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4">Profile</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={session.user?.name || ''}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={session.user?.email || ''}
                    disabled
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg text-[var(--text-primary)]">Saved Addresses</h3>
                <button className="text-xs tracking-[0.1em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
                  + Add New
                </button>
              </div>
              <div className="p-4 border border-dashed border-[var(--border)] text-center">
                <p className="text-sm text-[var(--text-muted)]">No saved addresses</p>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4">Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[var(--text-primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]">Email me about new arrivals and special offers</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[var(--text-primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]">SMS notifications for order updates</span>
                </label>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 p-6">
              <h3 className="font-serif text-lg text-red-800 dark:text-red-400 mb-2">Delete Account</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button className="text-xs tracking-[0.1em] uppercase border border-red-500 text-red-600 px-4 py-2 hover:bg-red-500 hover:text-white transition">
                Delete Account
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}


