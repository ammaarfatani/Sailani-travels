'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);
  const phoneNumber = '922135654417';
  const message = encodeURIComponent('Hello! I would like to enquire about your travel packages.');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {tooltip && (
        <div className="flex items-center gap-2 bg-white rounded-xl shadow-xl px-4 py-2.5 text-sm font-medium text-gray-800 border border-gray-100 animate-fade-up">
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setTooltip(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b858] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
