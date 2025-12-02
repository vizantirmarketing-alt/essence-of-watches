'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/account');
    }
  }, [session, router]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Welcome
          </span>
          <h1 className="font-serif text-4xl text-[var(--text-primary)] mt-3">
            Sign In
          </h1>
          <p className="text-[var(--text-secondary)] mt-4">
            Access your orders, track shipments, and manage your account.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-8 space-y-4"
        >
          {/* Apple Sign In */}
          <button
            onClick={() => signIn('apple', { callbackUrl: '/account' })}
            className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 hover:bg-gray-900 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="text-sm font-medium">Continue with Apple</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[var(--border)]"></div>
            <span className="text-xs text-[var(--text-muted)]">or</span>
            <div className="flex-1 h-px bg-[var(--border)]"></div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={() => signIn('google', { callbackUrl: '/account' })}
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-[#f5f5f5] border border-gray-300 dark:border-[#333] px-6 py-4 hover:bg-gray-50 dark:hover:bg-[#222] transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-xs text-[var(--text-muted)]">
              By signing in, you agree to our{' '}
              <a href="/terms" className="underline hover:text-[var(--text-secondary)]">Terms</a>
              {' '}and{' '}
              <a href="/privacy" className="underline hover:text-[var(--text-secondary)]">Privacy Policy</a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[var(--text-muted)]">
            Need help?{' '}
            <a href="/contact" className="text-[var(--text-primary)] underline hover:opacity-70">
              Contact Support
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}

