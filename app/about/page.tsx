import type { Metadata } from 'next';
import { Shield, Award, Users, Globe, Heart, CircleCheck as CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sailani Travels — a trusted Pakistani travel agency specialising in Umrah, Hajj and international tours since 2005.',
};

const milestones = [
  { year: '2005', title: 'Founded', desc: 'Sailani Travels established in Lahore, Pakistan with a focus on Umrah packages.' },
  { year: '2008', title: 'IATA Accreditation', desc: 'Received full IATA accreditation, enabling direct airline ticketing.' },
  { year: '2012', title: 'International Expansion', desc: 'Launched Turkey, Dubai and Malaysia holiday packages.' },
  { year: '2016', title: '5,000 Pilgrims', desc: 'Celebrated serving 5,000 Umrah and Hajj pilgrims.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched online booking and WhatsApp-first customer service.' },
  { year: '2025', title: '15,000+ Travellers', desc: 'Proudly serving over 15,000 satisfied pilgrims and holiday travellers.' },
];

const team = [
  { name: 'Zafar Iqbal', role: 'Founder & CEO', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', bio: '20+ years in the travel industry. Passionate about making Umrah accessible to every Muslim.' },
  { name: 'Nadia Hussain', role: 'Head of International Tours', image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg', bio: 'Specialist in UAE and Southeast Asia tours. Has personally visited all our partner destinations.' },
  { name: 'Sheikh Tariq Hassan', role: 'Umrah & Hajj Guide', image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg', bio: 'Islamic scholar with 15 years of experience guiding pilgrims through Umrah and Hajj rituals.' },
  { name: 'Aisha Malik', role: 'Senior Travel Consultant', image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg', bio: 'Turkey and cultural tours expert. Fluent in Urdu, English and Turkish.' },
];

const values = [
  { icon: Heart, title: 'Sincerity', desc: 'We treat every pilgrim and traveller as if they were family. Your trust is our greatest asset.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent pricing, no hidden fees, and honest advice — always.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in every package we deliver.' },
  { icon: Globe, title: 'Service', desc: '24/7 support before, during and after your journey. We are always here for you.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-green-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Two Decades of Trusted Travel
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Since 2005, Sailani Travels has been the travel partner of choice for thousands of Pakistani families embarking on sacred pilgrimages and unforgettable holidays.
          </p>
        </div>
      </div>

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 mt-2 mb-5">
                Pakistan&apos;s Trusted Travel Specialists
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sailani Travels was founded in 2005 by Zafar Iqbal with a single mission: to make the Umrah journey accessible, affordable and spiritually enriching for every Muslim in Pakistan. From our first small office in Lahore, we have grown into one of Pakistan&apos;s most respected travel agencies.
                </p>
                <p>
                  Today, we serve thousands of pilgrims and holiday travellers every year, offering meticulously planned packages to Saudi Arabia, Turkey, the UAE, Malaysia and beyond. Our team of experienced travel consultants, Umrah guides and destination specialists ensures that every aspect of your journey is handled with care.
                </p>
                <p>
                  We are fully licensed by the Pakistan Civil Aviation Authority (PCAA), IATA accredited, and members of the Pakistan Association of Tour Operators (PATO). Our credentials reflect our unwavering commitment to safety, transparency and professional excellence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '15,000+', label: 'Happy Travellers' },
                  { value: '20 Years', label: 'Experience' },
                  { value: '4.9/5', label: 'Average Rating' },
                  { value: '100+', label: 'Partner Hotels' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-4 bg-green-50 rounded-xl">
                    <p className="text-2xl font-bold text-green-700">{value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg" alt="Makkah" className="rounded-2xl object-cover h-56 w-full" />
              <img src="https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg" alt="Istanbul" className="rounded-2xl object-cover h-56 w-full mt-8" />
              <img src="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg" alt="Dubai" className="rounded-2xl object-cover h-56 w-full -mt-8" />
              <img src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg" alt="Malaysia" className="rounded-2xl object-cover h-56 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-green-700 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-2">Milestones & Achievements</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-green-100" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-8 items-start ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow max-w-xs ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <p className="text-green-700 font-bold text-sm mb-1">{m.year}</p>
                      <p className="font-display font-semibold text-gray-900 text-sm">{m.title}</p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-green-700 border-4 border-green-100 shrink-0 mt-5" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 text-sm font-semibold uppercase tracking-widest">The People Behind Sailani</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-700 text-xs font-medium mt-0.5 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Licences & Accreditations</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['PCAA Licensed', 'IATA Accredited', 'PATO Member', 'Ministry of Hajj Approved', 'ISO 9001 Certified'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-green-50 px-5 py-3 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-800 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Travel with Us?"
        subheading="Join thousands of satisfied travellers who trust Sailani Travels for their most important journeys."
      />
    </>
  );
}
