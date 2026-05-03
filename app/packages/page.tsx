import type { Metadata } from 'next';
import PackageList from '@/components/PackageList';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'All Travel Packages',
  description: 'Browse our complete range of Umrah, Turkey, Dubai and Malaysia tour packages with filters by destination, price and duration.',
};

export default function PackagesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-green-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Explore & Book</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            All Travel Packages
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            From sacred Umrah pilgrimages to luxury international tours — find the perfect package for you.
          </p>
        </div>
      </div>

      <PackageList />

      <CTASection
        heading="Can't Find What You're Looking For?"
        subheading="We can create a fully customised package tailored to your dates, budget and preferences."
        primaryLabel="Send Custom Inquiry"
        primaryHref="/contact"
      />
    </>
  );
}
