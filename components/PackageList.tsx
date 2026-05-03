'use client';

import { useState, useMemo } from 'react';
import packages, { priceRanges, durationOptions } from '@/data/packages';
import PackageCard from './PackageCard';
import FilterBar from './FilterBar';
import { LayoutGrid, List } from 'lucide-react';

interface Filters {
  category: string;
  priceRange: string;
  duration: string;
  search: string;
}

export default function PackageList({ initialCategory = '' }: { initialCategory?: string }) {
  const [filters, setFilters] = useState<Filters>({
    category: initialCategory,
    priceRange: '',
    duration: '',
    search: '',
  });

  const filtered = useMemo(() => {
    return packages.filter((pkg) => {
      if (filters.category && pkg.category !== filters.category) return false;

      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (
          !pkg.title.toLowerCase().includes(q) &&
          !pkg.country.toLowerCase().includes(q) &&
          !pkg.city.toLowerCase().includes(q) &&
          !pkg.category.toLowerCase().includes(q)
        )
          return false;
      }

      if (filters.priceRange) {
        const range = priceRanges.find((r) => r.label === filters.priceRange);
        if (range && (pkg.price < range.min || pkg.price > range.max)) return false;
      }

      if (filters.duration) {
        const opt = durationOptions.find((d) => d.label === filters.duration);
        if (opt && (pkg.durationDays < opt.min || pkg.durationDays > opt.max)) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8 items-start">
        {/* Sidebar filter */}
        <aside className="mb-8 lg:mb-0 lg:sticky lg:top-28">
          <FilterBar filters={filters} onChange={setFilters} total={filtered.length} />
        </aside>

        {/* Package grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-gray-400 text-lg mb-2">No packages match your filters.</p>
              <button
                onClick={() => setFilters({ category: '', priceRange: '', duration: '', search: '' })}
                className="text-green-700 text-sm font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
