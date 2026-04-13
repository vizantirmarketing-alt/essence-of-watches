import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Journal | Essence of Watches',
  description:
    'Guides and insights on buying pre-owned luxury watches, authentication, and collecting.',
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[var(--text-muted)] text-[11px] tracking-[0.3em] uppercase mb-4">
              Journal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              From the Atelier
            </h1>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg mt-6 leading-relaxed max-w-2xl">
              Expert perspective on authentication, collecting, and buying with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 sm:p-8 transition-colors duration-300 hover:border-[var(--card-border-hover)]"
              >
                <time
                  dateTime={post.publishedAt}
                  className="text-[var(--text-muted)] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-4"
                >
                  {formatDate(post.publishedAt)}
                </time>
                <h2 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-snug mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-secondary)] dark:focus-visible:ring-offset-[#141414]">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-6 line-clamp-4">
                  {post.metaDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--text-primary)] border-b border-[var(--accent)] pb-0.5 self-start hover:text-[var(--accent)] transition-colors duration-300"
                >
                  Read article
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
