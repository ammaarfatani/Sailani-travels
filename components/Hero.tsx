import Link from 'next/link';
import { MessageCircle, ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/40 rounded-full px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          <span className="text-gold-300 text-xs font-semibold tracking-wider uppercase">
            Trusted Since 2005 · IATA Accredited
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Journey to the{' '}
          <span className="text-gold-400">Sacred</span>
          {' '}& Beyond
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Unforgettable Umrah, Hajj, Turkey, Dubai & Malaysia tours crafted for
          Pakistani travellers. Thousands of satisfied pilgrims and adventurers trust us every year.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/packages"
            className="group flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-green-950 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 text-base"
          >
            Explore Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/922135654417?text=Hello!%20I%20want%20to%20enquire%20about%20a%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { icon: Users, value: '15,000+', label: 'Happy Travellers' },
            { icon: Award, value: '20 Years', label: 'Of Excellence' },
            { icon: Star, value: '4.9 / 5', label: 'Average Rating' },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
            >
              <Icon className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
              <p className="text-white font-bold text-lg leading-tight">{value}</p>
              <p className="text-white/70 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
