'use client';

import { useState } from 'react';
import { Send, CircleCheck as CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  date: string;
  adults: string;
  message: string;
}

const destinations = [
  'Umrah – Economy Package',
  'Umrah – Premium Package',
  'Umrah – Family Package',
  'Umrah – Ramadan Special',
  'Istanbul Cultural Tour',
  'Cappadocia & Istanbul Combo',
  'Dubai City Break',
  'Dubai Luxury Escape',
  'Kuala Lumpur & Langkawi',
  'Malaysia Family Adventure',
  'Other / Custom Package',
];

export default function InquiryForm({ defaultDestination = '' }: { defaultDestination?: string }) {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    destination: defaultDestination,
    date: '',
    adults: '1',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.destination) e.destination = 'Please select a destination.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async submission (no backend required)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Inquiry Received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thank you, {form.name}. Our team will contact you within 2 hours on {form.phone}.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', destination: defaultDestination, date: '', adults: '1', message: '' }); }}
          className="mt-6 px-6 py-2.5 bg-green-700 hover:bg-green-600 text-white rounded-full text-sm font-medium transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+92 300 000 0000"
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Adults */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travellers</label>
          <select
            value={form.adults}
            onChange={(e) => setForm({ ...form, adults: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
            ))}
            <option value="10+">10+ People</option>
          </select>
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Interested Package <span className="text-red-500">*</span>
          </label>
          <select
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white ${errors.destination ? 'border-red-400' : 'border-gray-200'}`}
          >
            <option value="">Select a package…</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Travel Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          placeholder="Any specific requirements, questions, or special requests…"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-700 hover:bg-green-600 disabled:bg-green-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg text-sm"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        We respond within 2 hours · Your details are never shared
      </p>
    </form>
  );
}
