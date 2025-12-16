'use client';

import { Search, Shield, Award, Handshake } from 'lucide-react';

export default function WhyEssence() {
  const features = [
    {
      icon: Search,
      title: 'Expert Sourcing',
      description: 'Every timepiece is sourced from verified collectors, authorized dealers, and trusted estates.',
    },
    {
      icon: Shield,
      title: 'Multi-Point Authentication',
      description: 'Each watch undergoes serial number validation, movement inspection, and dial authenticity checks.',
    },
    {
      icon: Award,
      title: 'Condition Transparency',
      description: 'No hidden flaws. We document every scratch, mark, and service detail.',
    },
    {
      icon: Handshake,
      title: 'Collector-First Service',
      description: 'Direct communication with watch specialists, not sales scripts.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-2">
            Our Promise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
            Why Essence of Watches
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 hover:border-[var(--card-border-hover)] transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon
                    size={24}
                    className="text-[var(--text-primary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


