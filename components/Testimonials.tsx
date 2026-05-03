import testimonials from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What Our Travellers Say
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Stories from the Heart
          </h2>
          <p className="text-green-300 max-w-xl mx-auto leading-relaxed">
            Thousands of families have trusted Sailani Travels for their spiritual journeys and holiday adventures.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-green-900/60 border border-green-800 rounded-2xl p-6 flex flex-col hover:border-gold-500/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold-500/50 mb-4 shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'text-gold-400 fill-gold-400' : 'text-green-700'}`}
                  />
                ))}
              </div>

              <p className="text-green-200 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-green-800">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-green-800 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-green-400 text-xs">{t.location} · {t.date}</p>
                </div>
              </div>

              <span className="mt-3 inline-block text-xs text-gold-500 font-medium bg-gold-500/10 px-3 py-1 rounded-full w-fit">
                {t.package}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
