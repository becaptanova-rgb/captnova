'use client';

import { getWhatsAppUrl } from '@/lib/cta';

export default function FounderSection() {
  const waUrl = getWhatsAppUrl("Hi Renu, I want to know more about Captanova and how it can help me.");

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060606 0%, #090909 100%)' }} id="founder">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left — founder card */}
          <div className="reveal-left">
            <div
              className="border border-gold/15 relative overflow-hidden"
              style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 100%)' }}
            >
              {/* Decorative initial */}
              <div
                className="absolute top-0 right-0 pointer-events-none select-none"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '12rem',
                  fontWeight: 300,
                  color: 'rgba(201,168,76,0.04)',
                  lineHeight: 1,
                  transform: 'translate(20%, -20%)',
                }}
              >
                R
              </div>

              <div className="p-10 md:p-12 relative z-10">
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mb-8"
                  style={{ background: 'rgba(201,168,76,0.08)' }}
                >
                  <span
                    className="font-display font-light text-gold"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
                  >
                    RS
                  </span>
                </div>

                <div className="section-label mb-3" style={{ color: 'rgba(201,168,76,0.65)' }}>Meet the Founder</div>
                <h3
                  className="font-display font-light text-off-white mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', lineHeight: 1.15 }}
                >
                  Renu Sharma
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Founder, Captanova
                </p>

                <div className="gold-divider mb-8" />

                <blockquote
                  className="font-display italic"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    lineHeight: 1.45,
                    color: 'rgba(240,237,232,0.75)',
                    marginBottom: '2rem',
                  }}
                >
                  "Be The Captain Of Your Life."
                </blockquote>

                {/* Background tag */}
                <div className="flex items-center gap-3 p-4 border border-white/[0.06]">
                  <span className="text-gold/50 text-sm">◆</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.6 }}>
                    13 years in banking · Personal growth & mindset coach · Founder of Captanova
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — story */}
          <div className="reveal-right">
            <div className="section-label mb-6">The Story Behind Captanova</div>
            <h2 className="section-heading mb-8">
              From the inside
              <br />
              <em className="gold-text">of the system</em>
              <br />
              to above it.
            </h2>

            <p className="body-lg mb-6" style={{ color: 'rgba(240,237,232,0.52)' }}>
              After working in the banking industry for 13 years, Renu began questioning the life she was living.
            </p>

            <p className="body-md mb-6" style={{ color: 'rgba(240,237,232,0.42)' }}>
              From the outside, everything looked stable. But internally, she felt disconnected from herself and stuck in routine. That realization became the beginning of a deep journey into personal growth, mindset, awareness, and conscious living.
            </p>

            <p className="body-md mb-10" style={{ color: 'rgba(240,237,232,0.42)' }}>
              Captanova was born from that journey — created to give others the tools, the framework, and the space to do the same inner work. To stop living on autopilot and start living as the captain of their own life.
            </p>

            {/* What Captanova builds */}
            <div className="mb-10">
              <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                What Captanova Helps You Build
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Stronger self-belief',
                  'Better decision making',
                  'Emotional resilience',
                  'Confidence in communication',
                  'Healthier habits & routines',
                  'Clarity around goals',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gold/60 flex-shrink-0 mt-1 text-xs">→</span>
                    <span style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="body-sm italic mb-8"
              style={{ color: 'rgba(240,237,232,0.35)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem' }}
            >
              Because when your inner foundation becomes stronger, every area of life begins to improve naturally.
            </p>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
              Connect with Renu →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
