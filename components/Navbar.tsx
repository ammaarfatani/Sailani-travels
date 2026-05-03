'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // On non-home pages the navbar is always solid
  const solid = !isHome || scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        solid
          ? 'bg-green-900 shadow-lg'
          : 'bg-transparent'
      )}
    >
      {/* Top bar */}
      <div className={cn('hidden lg:flex items-center justify-between px-8 py-2 text-xs transition-all duration-300',
        solid ? 'bg-green-950 text-green-300' : 'bg-black/30 text-white/80'
      )}>
        <span>Your trusted Umrah & international travel partner since 2005</span>
        <a
          href="tel:+92-21-35654417"
          className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
        >
          <Phone className="w-3 h-3" />
          +92-21-35654417
        </a>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-35 h-10 shrink-0">
  <img
    src="https://www.sailanitravelss.com/wp-content/uploads/2018/12/logo2x2-1.png"
    alt="logo"
    className="w-full h-full object-cover"
  />
</div>
          {/* <div className="leading-tight">
            <span className="block text-white font-display font-bold text-lg leading-none">Sailani</span>
            <span className="block text-gold-400 text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5">
              Travels
            </span>
          </div> */}
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-white/90 hover:text-gold-300'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-green-950 text-sm font-semibold transition-all duration-200 hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-green-900 border-t border-green-800 px-4 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-green-800 text-gold-400'
                      : 'text-white/90 hover:bg-green-800 hover:text-gold-300'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-green-950 font-semibold transition-all"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
