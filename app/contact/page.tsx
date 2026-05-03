import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sailani Travels for Umrah packages, holiday inquiries and custom tour quotes. We respond within 2 hours.',
};

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+922135654417', '+923219268445'],
    action: { label: 'Call Now', href: 'tel:+92321-9268445' },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: ['+92321-9268445', 'Available 9 AM – 11 PM'],
    action: {
      label: 'Open WhatsApp',
      href: 'https://wa.me/922135654417?text=Hello!%20I%20would%20like%20to%20enquire%20about%20a%20package.',
    },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['sailanitravels@yahoo.com', 'sailanitravels@yahoo.com'],
    action: { label: 'Send Email', href: 'mailto:sailanitravels@yahoo.com' },
  },
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['20 Askari shopping centre ch, khaliq-uz-zaman road clifton karachi 75530 Pakistan'],
    action: { label: 'Get Directions', href: '#' },
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-green-900 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">We are here to help</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-green-200 text-lg">
            Have a question? Ready to book? Our travel consultants respond within 2 hours.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_500px] gap-16">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {contactDetails.map(({ icon: Icon, title, lines, action }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                    {lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm">{line}</p>
                    ))}
                    <a
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-green-700 text-xs font-semibold hover:text-green-600 transition-colors"
                    >
                      {action.label} →
                    </a>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-green-700" />
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
                    { day: 'Sunday', hours: '11:00 AM – 4:00 PM' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className="text-gray-900 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-green-700 mt-4 font-medium">
                  WhatsApp support available until 11 PM daily
                </p>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 h-56 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">20 Askari shopping centre ch, khaliq-uz-zaman road clifton karachi 75530 Pakistan</p>
                  <a href="#" className="text-green-700 text-xs font-medium mt-1 block hover:underline">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-2">Send Us an Inquiry</h2>
                <p className="text-gray-500 text-sm mb-6">We typically respond within 2 hours during office hours.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
