import Link from 'next/link';
import { Globe, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const packages = [
  { label: 'Umrah Economy Package', href: '/packages/umrah-economy-7-nights' },
  { label: 'Umrah Premium Package', href: '/packages/umrah-premium-14-nights' },
  { label: 'Istanbul Cultural Tour', href: '/packages/istanbul-cultural-7-nights' },
  { label: 'Dubai City Break', href: '/packages/dubai-city-break-5-nights' },
  { label: 'Malaysia Kuala Lumpur', href: '/packages/malaysia-kuala-lumpur-6-nights' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Packages', href: '/packages' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-35 h-10 shrink-0">
  <img
    src="https://www.sailanitravelss.com/wp-content/uploads/2018/12/logo2x2-1.png"
    alt="logo"
    className="w-full h-full object-cover"
  />
</div>
              {/* <div>
                <span className="block text-white font-display font-bold text-xl leading-none">Sailani</span>
                <span className="block text-gold-400 text-[10px] font-medium tracking-widest uppercase">Travels</span>
              </div> */}
            </Link>
            <p className="text-green-300 text-sm leading-relaxed mb-5">
              Your trusted travel partner for Umrah, Hajj and international tours since 2005. Licensed by PCAA & IATA accredited.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/sailani4354' },
                
                // { Icon: Instagram, href: '#' },
                // { Icon: Youtube, href: '#' },
                // { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-green-800 hover:bg-gold-500 flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-green-300 group-hover:text-green-900 transition-colors" />
                </a>
              ))}
              
            </div>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Popular Packages</h4>
            <ul className="space-y-2.5">
              {packages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-300 text-sm hover:text-gold-400 transition-colors leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-green-300 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>20 Askari shopping centre ch, khaliq-uz-zaman road clifton karachi 75530 Pakistan.</span>
              </li>
              <li>
                <a href="tel:+92-21-35654417" className="flex gap-3 text-green-300 text-sm hover:text-gold-400 transition-colors">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  +92-21-35654417
                </a>
              </li>
              <li>
                <a href="mailto:sailanitravels@yahoo.com" className="flex gap-3 text-green-300 text-sm hover:text-gold-400 transition-colors">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  sailanitravels@yahoo.com
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-green-800 rounded-lg">
              <p className="text-xs text-green-300 font-medium">Office Hours</p>
              <p className="text-white text-sm mt-1">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-white text-sm">Sun: 11:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-400 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sailani Travels. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item) => (
              <a key={item} href="#" className="text-green-400 text-xs hover:text-gold-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
