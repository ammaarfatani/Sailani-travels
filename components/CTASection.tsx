import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface Props {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: 'green' | 'gold';
}

export default function CTASection({
  heading = 'Ready to Plan Your Dream Journey?',
  subheading = 'Talk to our travel experts today and get a personalised quote for your perfect trip.',
  primaryLabel = 'View All Packages',
  primaryHref = '/packages',
  variant = 'green',
}: Props) {
  const isGreen = variant === 'green';

  return (
    <section
      className={`relative py-20 overflow-hidden ${isGreen ? 'bg-green-800' : 'bg-gold-500'}`}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isGreen ? 'text-white' : 'text-green-950'}`}>
          {heading}
        </h2>
        <p className={`text-lg mb-10 max-w-xl mx-auto ${isGreen ? 'text-green-200' : 'text-green-900/80'}`}>
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl text-base ${
              isGreen
                ? 'bg-gold-500 hover:bg-gold-400 text-green-950'
                : 'bg-green-800 hover:bg-green-700 text-white'
            }`}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/923001234567?text=Hello!%20I%20would%20like%20a%20travel%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#25D366] hover:bg-[#20b858] text-white transition-all duration-300 hover:shadow-xl text-base"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
