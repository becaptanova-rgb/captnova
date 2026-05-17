'use client';

import { getWhatsAppUrl, scrollToLeadForm } from '@/lib/cta';

export default function CtaSection() {
  const waUrl = getWhatsAppUrl("Hi, I'm ready to start my Captanova journey. What's the next step?");

  return (
    <section
      className="py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0b0900 0%, #090909 50%, #0a0800 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.11) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <div className="section-label mb-8">The Decision</div>

        <h2
          className="font-display font-light mb-8 leading-tight"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            color: 'var(--off-white)',
            lineHeight: 1.05,
          }}
        >
          Your life is already
          <br />
          happening.
          <br />
          <em className="gold-shimmer">Are you the captain?</em>
        </h2>

        <p
          className="body-lg mx-auto max-w-xl mb-12"
          style={{ color: 'rgba(240,237,232,0.44)' }}
        >
          Stop living on autopilot. Start living intentionally.
          You are meant for more than survival mode — and Captanova exists to help you get there.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold animate-glow-pulse">
            Start Your Captanova Journey →
          </a>
          <button onClick={scrollToLeadForm} className="btn-outline">
            Get in Touch First
          </button>
        </div>

        {/* Micro-trust signals */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            'Personal Response Guaranteed',
            'No Spam Ever',
            'Community Support',
            'Real-Life Transformation',
          ].map((g) => (
            <div
              key={g}
              className="flex items-center gap-2"
              style={{ fontSize: '0.83rem', color: 'rgba(240,237,232,0.28)' }}
            >
              <span className="text-gold/45">✓</span>
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
