'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/cta';

const faqs = [
  {
    q: 'What is Captanova?',
    a: 'Captanova is a personal growth and mindset platform designed to help people reconnect with themselves and live more intentionally. Through weekly live learning experiences, practical tools, and awareness-based practices, we help people understand the patterns, beliefs, and habits that shape their daily life — and how to shift them.',
  },
  {
    q: 'Who is Captanova for?',
    a: 'Captanova is for anyone who feels like they are living on autopilot — busy but not fulfilled, moving but not growing. Whether you are a working professional, student, entrepreneur, or homemaker, if you sense there is more to life than the routine you are currently living, Captanova was made for you.',
  },
  {
    q: 'What is The Captanova Journey?',
    a: 'The Captanova Journey is our signature program — a structured inner journey covering mindset transformation, emotional awareness, limiting beliefs, gratitude and energy, self-awareness practices, life direction, conscious decision making, and daily habits and routines. It is designed to help you step from unconscious, automatic living into a life of intention and clarity.',
  },
  {
    q: 'What are the Weekly Live Learning Experiences?',
    a: 'Every week, we host live online sessions focused on real-life topics related to personal growth and transformation. These are interactive, practical, and grounded in real experience — not just theory. Topics include mindset, emotional awareness, relationships, confidence, life direction, and more.',
  },
  {
    q: 'How is Captanova different from a regular self-help program?',
    a: 'Most self-help gives you information. Captanova gives you awareness. We believe that sustainable change doesn\'t come from motivation alone — it comes from understanding yourself deeply: your patterns, your triggers, your beliefs, and your emotional cycles. When that awareness develops, change becomes natural rather than forced.',
  },
  {
    q: 'How do I get started?',
    a: 'The easiest way to start is to reach out to us directly via WhatsApp or fill in the contact form on this page. We\'ll have a brief conversation to understand where you are, and guide you to the right starting point — whether that\'s joining the next live session or beginning The Captanova Journey.',
  },
  {
    q: 'Is this suitable for someone who has never done any personal development work?',
    a: 'Absolutely. Captanova is designed to be accessible regardless of where you are in your journey. Whether you are completely new to personal growth or have been on this path for a while, the depth and structure of our programs meets you where you are.',
  },
  {
    q: 'Will I get personal support?',
    a: 'Yes. Captanova is built around real human connection — not just content delivery. You\'ll have access to community support, live sessions with interaction, and direct communication with our team throughout your journey.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const waUrl = getWhatsAppUrl("Hi, I have a question about Captanova. Can you help me?");

  return (
    <section className="py-32 border-t border-white/[0.04]" style={{ background: '#050505' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-6">FAQ</div>
          <h2
            className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', lineHeight: 1.08 }}
          >
            Your questions,
            <br />
            <em className="gold-text">answered honestly.</em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto' }}>
            No vague promises. No marketing fluff. Just straight answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-8 text-left group"
              >
                <span
                  className="font-display font-light transition-colors duration-300"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    lineHeight: 1.45,
                    color: open === i ? 'var(--gold)' : 'rgba(240,237,232,0.85)',
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 mt-1 transition-all duration-300"
                  style={{ color: open === i ? 'var(--gold)' : 'rgba(240,237,232,0.22)', transform: open === i ? 'rotate(180deg)' : 'none' }}
                />
              </button>
              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <div className="pb-8 pr-10">
                  <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.82, fontWeight: 400 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-20 text-center reveal">
          <div className="gold-divider max-w-xs mx-auto mb-10" />
          <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.4)', marginBottom: '1.5rem' }}>
            Still have a question?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
