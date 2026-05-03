import Link from 'next/link';
import { Clock, MapPin, Plane, Star, ArrowRight, Check } from 'lucide-react';
import type { Package } from '@/data/packages';

interface Props {
  pkg: Package;
}

export default function PackageCard({ pkg }: Props) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {pkg.category}
        </span>
        {/* Flight badge */}
        {pkg.flightsIncluded && (
          <span className="absolute top-3 right-3 bg-gold-500 text-green-950 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Plane className="w-3 h-3" />
            Flights Incl.
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-gray-900 text-base leading-snug mb-2 group-hover:text-green-700 transition-colors">
          {pkg.title}
        </h3>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            {pkg.city}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock className="w-3.5 h-3.5 text-green-600" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            {pkg.rating} ({pkg.reviews})
          </span>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
          {pkg.description}
        </p>

        {/* Key inclusions */}
        <ul className="space-y-1 mb-5 flex-1">
          {pkg.inclusions.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
              <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-bold text-green-700">
              PKR {pkg.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">per person</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-green-700 group-hover:text-green-600">
            View Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
