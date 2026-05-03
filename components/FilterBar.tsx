'use client';

import { categories, priceRanges, durationOptions } from '@/data/packages';
import { SlidersHorizontal, X } from 'lucide-react';

interface Filters {
  category: string;
  priceRange: string;
  duration: string;
  search: string;
}

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
  total: number;
}

export default function FilterBar({ filters, onChange, total }: Props) {
  const hasActive =
    filters.category || filters.priceRange || filters.duration || filters.search;

  const reset = () =>
    onChange({ category: '', priceRange: '', duration: '', search: '' });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <SlidersHorizontal className="w-4 h-4 text-green-600" />
          Filter Packages
        </div>
        {hasActive && (
          <button
            onClick={reset}
            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search packages..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Destination</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                onChange({ ...filters, category: filters.category === cat ? '' : cat })
              }
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filters.category === cat
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Price Range</p>
        <div className="flex flex-col gap-1.5">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === range.label}
                onChange={() =>
                  onChange({
                    ...filters,
                    priceRange: filters.priceRange === range.label ? '' : range.label,
                  })
                }
                className="accent-green-700 w-3.5 h-3.5"
              />
              <span className="text-sm text-gray-600 group-hover:text-green-700 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Duration</p>
        <div className="flex flex-col gap-1.5">
          {durationOptions.map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="duration"
                checked={filters.duration === opt.label}
                onChange={() =>
                  onChange({
                    ...filters,
                    duration: filters.duration === opt.label ? '' : opt.label,
                  })
                }
                className="accent-green-700 w-3.5 h-3.5"
              />
              <span className="text-sm text-gray-600 group-hover:text-green-700 transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="mt-5 pt-4 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          <span className="text-green-700 font-bold text-base">{total}</span> package{total !== 1 ? 's' : ''} found
        </p>
      </div>
    </div>
  );
}
