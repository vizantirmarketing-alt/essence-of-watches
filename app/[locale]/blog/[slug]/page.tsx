import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { BlogBody } from '@/components/blog/BlogBody';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string; slug: string }> };

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Not found | Essence of Watches' };
  }
  return {
    title: `${post.title} | Essence of Watches`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <article>
        <header className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-60 pointer-events-none" />
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-8 hover:text-[var(--accent)] transition-colors duration-300"
            >
              <span aria-hidden>←</span>
              Journal
            </Link>
            <div className="max-w-3xl">
              <p className="text-[var(--text-muted)] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase mb-4">
                {post.focusKeyword}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
                {post.title}
              </h1>
              <time
                dateTime={post.publishedAt}
                className="mt-6 block text-[var(--text-muted)] text-sm tracking-wide"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </header>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-20 sm:pb-28">
          <BlogBody body={post.body} />
        </div>
      </article>
    </main>
  );
}
