import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Globe, Shield, Clock, HeartHandshake } from 'lucide-react';
import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import InquiryForm from '@/components/InquiryForm';
import packages from '@/data/packages';
import blogPosts from '@/data/blog';

export const metadata: Metadata = {
  title: 'Sailani Travels — Umrah, Hajj & International Tour Packages',
  description:
    'Trusted Umrah, Hajj, Turkey, Dubai and Malaysia tour packages from Pakistan.',
};

const whyUs = [
  { icon: Shield, title: 'Licensed & Trusted', desc: 'PCAA licensed and IATA accredited since 2005. Over 15,000 satisfied travellers.' },
  { icon: Clock, title: '24/7 Support', desc: 'Our team is available around the clock throughout your entire journey.' },
  { icon: Globe, title: 'All-Inclusive Packages', desc: 'Flights, visa, hotel, transport and guided tours — everything handled for you.' },
  { icon: HeartHandshake, title: 'Personalised Service', desc: 'Tailored packages to suit every budget, group size and travel requirement.' },
];

const destinations = [
  { name: 'Saudi Arabia', label: 'Umrah & Hajj', image: 'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg', href: '/packages' },
  { name: 'Turkey', label: 'Cultural Tours', image: 'https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg', href: '/packages' },
  { name: 'Dubai', label: 'City & Desert', image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg', href: '/packages' },
  { name: 'Malaysia', label: 'Tropical Adventure', image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg', href: '/packages' },
];

const featuredPackages = packages.filter((p) => p.featured).slice(0, 6);
const recentBlogs = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Where Would You Like to Go?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Popular Destinations</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={dest.href} className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-display font-bold text-lg leading-tight">{dest.name}</p>
                  <p className="text-gold-400 text-xs font-medium mt-0.5">{dest.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Handpicked for You</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Featured Packages</h2>
            </div>
            <Link href="/packages" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/packages" className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-600 text-white rounded-full font-semibold text-sm transition-colors">
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Why Thousands Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">The Sailani Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors border border-green-100">
                <div className="w-14 h-14 rounded-2xl bg-green-700 text-white flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-5">Plan Your Trip Today</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Fill in the form and one of our expert travel consultants will contact you within 2 hours with a personalised quote.
              </p>
              <ul className="space-y-3">
                {['Free personalised itinerary', 'Best price guarantee', 'No hidden charges', 'Visa assistance included'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Travel Insights</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Latest from Our Blog</h2>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-green-700 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-3">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
