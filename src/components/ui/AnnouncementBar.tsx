'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919000000000';
  const message = encodeURIComponent('Hi, I want to start my Captanova journey. Please share details.');
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold text-obsidian py-2 px-6 flex items-center justify-center gap-4">
      <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium text-center">
        <span className="opacity-70">Captanova — Be The Captain Of Your Life —</span>{' '}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
        >
          Start your journey today →
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
