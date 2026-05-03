import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import blogPosts from '@/data/blog';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Travel Blog',
  description: 'Travel guides, Umrah tips, packing lists and destination insights from the Sailani Travels blog.',
};

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Header */}
      <div className="bg-green-900 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Travel Insights</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Our Travel Blog
          </h1>
          <p className="text-green-200 text-lg">
            Umrah guides, destination tips, packing lists and travel inspiration from our team of experts.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block lg:grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow mb-14"
          >
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  Featured · {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{featured.author}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-sm text-gray-400">{featured.date}</span>
                </div>
                <span className="flex items-center gap-1 text-green-700 text-sm font-semibold group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-base leading-snug mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.author} · {post.date}</span>
                    <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-14 pt-10 border-t border-gray-100">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 bg-gray-100 hover:bg-green-50 hover:text-green-700 px-3 py-1.5 rounded-full cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Planning a Trip? Let Us Help."
        subheading="Our travel experts are ready to craft the perfect package for your next journey."
        variant="gold"
        primaryLabel="Browse Packages"
        primaryHref="/packages"
      />
    </>
  );
}
