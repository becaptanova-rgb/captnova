'use client';

import { getWhatsAppUrl } from '@/lib/cta';

export default function AboutSection() {
  const waUrl = getWhatsAppUrl("Hi, I want to know more about Captanova and how it can help me.");

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden" id="about">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left — visual */}
          <div className="reveal-left relative">
            {/* Large decorative quote */}
            <div
              className="absolute -top-8 -left-4 pointer-events-none select-none"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(8rem, 18vw, 14rem)',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.05)',
                lineHeight: 1,
              }}
            >
              C
            </div>

            {/* Core message card */}
            <div className="relative border border-gold/15 p-10 md:p-12" style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 100%)' }}>
              <div className="section-label mb-6">The Core Line</div>
              <blockquote
                className="font-display italic"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: 'var(--off-white)',
                  marginBottom: '1.5rem',
                }}
              >
                Awareness is like
                <br />
                <span className="gold-text">switching on</span>
                <br />
                the light.
              </blockquote>
              <div className="gold-divider max-w-[120px]" />
            </div>

            {/* Shift labels */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { from: 'Stress', to: 'Awareness' },
                { from: 'Confusion', to: 'Direction' },
                { from: 'Reaction', to: 'Intentional Living' },
                { from: 'Passenger', to: 'Captain' },
              ].map((s) => (
                <div key={s.from} className="flex items-center gap-3 p-4 border border-white/[0.05]">
                  <span style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.28)', textDecoration: 'line-through' }}>{s.from}</span>
                  <span className="text-gold/50 text-xs">→</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.65)' }}>{s.to}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="reveal-right">
            <div className="section-label mb-6">About Captanova</div>
            <h2 className="section-heading mb-8">
              A platform for
              <br />
              <em className="gold-text">intentional living</em>
            </h2>

            <p className="body-lg mb-6" style={{ color: 'rgba(240,237,232,0.52)' }}>
              Captanova is a personal growth and mindset platform designed to help people reconnect with themselves and create a more intentional life.
            </p>

            <p className="body-md mb-6" style={{ color: 'rgba(240,237,232,0.42)' }}>
              Modern life keeps people busy — but not necessarily fulfilled. Many people are constantly managing work pressure, responsibilities, finances, relationships, and expectations while losing connection with themselves.
            </p>

            <p className="body-md mb-10" style={{ color: 'rgba(240,237,232,0.42)' }}>
              Captanova helps people understand the patterns, mindset, habits, and emotional cycles that shape their daily life. Because when your inner world changes, your outer life naturally begins to shift.
            </p>

            {/* Why Captanova points */}
            <div className="space-y-5 mb-10">
              <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>Why Captanova</div>
              {[
                'Most people are not lacking potential — they are simply living on autopilot',
                'Life becomes routine: Wake up. Work. Responsibilities. Repeat.',
                'We help people step out of unconscious living and understand themselves on a deeper level',
              ].map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="text-gold flex-shrink-0 mt-1 text-sm">—</span>
                  <span style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.7 }}>{point}</span>
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
              Start Your Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
