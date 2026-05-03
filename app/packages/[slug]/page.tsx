import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, Clock, Plane, Hotel, Star, Check, ArrowLeft,
  Users, UtensilsCrossed, MessageCircle, PhoneCall
} from 'lucide-react';
import packages from '@/data/packages';
import InquiryForm from '@/components/InquiryForm';
import PackageCard from '@/components/PackageCard';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) return {};
  return {
    title: pkg.title,
    description: pkg.description.slice(0, 160),
  };
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const related = packages
    .filter((p) => p.category === pkg.category && p.slug !== pkg.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4 sm:px-8 max-w-7xl mx-auto left-0 right-0">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <Link href="/packages" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Packages
            </Link>
          </nav>
          <span className="inline-block bg-gold-500 text-green-950 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
            {pkg.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: MapPin, text: pkg.city },
              { icon: Clock, text: pkg.duration },
              { icon: Star, text: `${pkg.rating} (${pkg.reviews} reviews)` },
              ...(pkg.flightsIncluded ? [{ icon: Plane, text: 'Flights Included' }] : []),
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-white/90 text-sm bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Icon className="w-3.5 h-3.5 text-gold-400" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="lg:grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Left column */}
          <div className="space-y-10">
            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Package Overview</h2>
              <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, label: 'Duration', value: pkg.duration },
                { icon: MapPin, label: 'Country', value: pkg.country },
                { icon: Hotel, label: 'Hotel', value: `${pkg.hotel.name} (${pkg.hotel.stars}★)` },
                { icon: Plane, label: 'Flights', value: pkg.flightsIncluded ? 'Included' : 'Not Included' },
                { icon: UtensilsCrossed, label: 'Meals', value: pkg.mealsIncluded },
                { icon: Users, label: 'Visa', value: pkg.visaIncluded ? 'Included' : 'Not Included' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Icon className="w-5 h-5 text-green-600 mb-2" />
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-gray-900 text-sm font-semibold mt-0.5 leading-snug">{value}</p>
                </div>
              ))}
            </div>

            {/* Hotel details */}
            {pkg.hotel.distanceFromHaram && (
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Hotel className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-900 font-semibold text-sm">{pkg.hotel.name}</p>
                    <p className="text-green-700 text-xs mt-1">{pkg.hotel.distanceFromHaram}</p>
                    <div className="flex gap-0.5 mt-1.5">
                      {Array.from({ length: pkg.hotel.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-5">Trip Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 bg-green-50 rounded-xl px-4 py-3">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-5">What&apos;s Included</h2>
              <ul className="space-y-2.5">
                {pkg.inclusions.map((inc) => (
                  <li key={inc} className="flex items-center gap-3 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — Booking card */}
          <div className="mt-10 lg:mt-0">
            <div className="sticky top-28 space-y-6">
              {/* Price card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="mb-5">
                  <p className="text-sm text-gray-400">Starting from</p>
                  <p className="text-3xl font-bold text-green-700">PKR {pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-0.5">per person</p>
                </div>

                <div className="flex gap-3 mb-5">
                  <a
                    href={`https://wa.me/922135654417?text=Hello!%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+923001234567"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

                <div className="text-xs text-gray-400 text-center">
                  Free quote · No obligation · Instant response
                </div>
              </div>

              {/* Inquiry form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-display font-semibold text-gray-900 text-base mb-5">Send an Inquiry</h3>
                <InquiryForm defaultDestination={pkg.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Related packages */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
              More {pkg.category} Packages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => <PackageCard key={r.id} pkg={r} />)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
