import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sailanitravels.com'),
  title: {
    default: 'Sailani Travels — Umrah, Hajj & International Tour Packages',
    template: '%s | Sailani Travels',
  },
  description:
    'Discover handcrafted Umrah, Hajj, Turkey, Dubai and Malaysia tour packages. Trusted by thousands of pilgrims and travellers across Pakistan.',
  keywords: ['umrah packages', 'hajj packages', 'turkey tours', 'dubai tours', 'malaysia tours', 'travel agency pakistan'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sailani Travels',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
