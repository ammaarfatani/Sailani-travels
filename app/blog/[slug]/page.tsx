import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import blogPosts from '@/data/blog';
import CTASection from '@/components/CTASection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Minimal markdown-to-HTML converter for headings, paragraphs, and lists
function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-display text-2xl font-bold text-gray-900 mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-semibold text-gray-900 mt-5 mb-1">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-gray-600">
          {listItems.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="text-gray-600 leading-[1.8] mb-4">
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4 sm:px-8 max-w-4xl mx-auto left-0 right-0">
          <nav className="mb-4">
            <Link href="/blog" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>
          <span className="inline-block bg-gold-500 text-green-950 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <User className="w-3.5 h-3.5" />
              {post.author} — {post.authorRole}
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_240px] gap-12">
            {/* Article */}
            <article>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-gold-400 pl-5 mb-8 italic">
                {post.excerpt}
              </p>
              <div className="prose-content">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                {/* Author card */}
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Written by</p>
                  <p className="font-display font-semibold text-gray-900">{post.author}</p>
                  <p className="text-green-700 text-xs mt-0.5">{post.authorRole}</p>
                </div>

                {/* Related posts */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Articles</p>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.id} href={`/blog/${r.slug}`} className="group flex gap-3 items-start">
                        <img src={r.image} alt={r.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors leading-snug">{r.title}</p>
                          <p className="text-xs text-gray-400 mt-1">{r.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-green-800 rounded-2xl p-5 text-center">
                  <p className="text-white font-semibold text-sm mb-2">Ready to travel?</p>
                  <p className="text-green-300 text-xs mb-4">Get a free personalised quote today.</p>
                  <Link
                    href="/contact"
                    className="block text-center bg-gold-500 hover:bg-gold-400 text-green-950 font-semibold text-sm py-2.5 rounded-xl transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection
        heading="Inspired to Travel?"
        subheading="Browse our packages and plan your next adventure with Sailani Travels."
        primaryLabel="View Packages"
        primaryHref="/packages"
        variant="gold"
      />
    </>
  );
}
