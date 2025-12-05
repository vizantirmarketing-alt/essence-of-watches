'use client';

export default function TrustBar() {
  const trustSignals = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Authenticated',
      subtitle: 'Every watch verified',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'Secure Checkout',
      subtitle: 'SSL encrypted',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Insured Shipping',
      subtitle: 'Fully tracked delivery',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: '2-Year Warranty',
      subtitle: 'Full coverage included',
    },
  ];

  return (
    <section className="bg-[var(--accent-steel)] py-4 sm:py-5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="text-white/80 flex-shrink-0">{signal.icon}</div>
              <div className="hidden sm:block">
                <p className="text-white text-sm font-medium leading-tight">{signal.title}</p>
                <p className="text-white/60 text-xs">{signal.subtitle}</p>
              </div>
              {/* Mobile - just title */}
              <p className="sm:hidden text-white text-xs font-medium">{signal.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




