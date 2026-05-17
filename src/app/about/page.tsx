import type { Metadata } from 'next';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'About Captanova — Personal Growth & Mindset Platform',
  description:
    'Learn about Captanova — a personal growth and mindset platform founded by Renu Sharma to help people move from autopilot living to intentional, purposeful lives.',
};

export default function AboutPage() {
  const waUrl = getWhatsAppUrl("Hi, I want to know more about Captanova and how it can help me.");

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-20" style={{ animation: 'pageIn 0.6s ease forwards' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-20">
          <div className="section-label mb-6">About</div>
          <h1 className="section-heading mb-8">
            A platform built for
            <br />
            <em className="gold-text">intentional living</em>
          </h1>
          <div className="gold-divider max-w-[200px]" />
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div className="md:col-span-2 space-y-6">
            <p className="body-lg" style={{ color: 'rgba(240,237,232,0.55)' }}>
              Captanova is a personal growth and mindset platform designed to help people reconnect with themselves and create a more intentional life.
            </p>
            <p className="body-md" style={{ color: 'rgba(240,237,232,0.45)' }}>
              Modern life keeps people busy — but not necessarily fulfilled. Many people are constantly managing work pressure, responsibilities, finances, relationships, and expectations while losing connection with themselves.
            </p>
            <p className="body-md" style={{ color: 'rgba(240,237,232,0.45)' }}>
              Captanova helps people understand the patterns, mindset, habits, and emotional cycles that shape their daily life. Because when your inner world changes, your outer life naturally begins to shift.
            </p>
            <p className="body-md" style={{ color: 'rgba(240,237,232,0.45)' }}>
              Through weekly live learning experiences, The Captanova Journey program, and a community of growth-minded people — we help individuals step out of unconscious, automatic living and into a life lived with clarity, purpose, and intention.
            </p>
          </div>

          <div>
            <div className="border border-gold/15 p-8" style={{ background: 'rgba(201,168,76,0.03)' }}>
              <div className="section-label mb-6" style={{ color: 'rgba(201,168,76,0.6)' }}>
                The Shift We Create
              </div>
              {[
                { from: 'Stress', to: 'Awareness' },
                { from: 'Confusion', to: 'Direction' },
                { from: 'Reaction', to: 'Intentional Living' },
                { from: 'Passenger', to: 'Captain' },
              ].map((s) => (
                <div key={s.from} className="flex items-center gap-2 mb-4">
                  <span style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.28)', textDecoration: 'line-through' }}>{s.from}</span>
                  <span className="text-gold/50 text-xs mx-1">→</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.65)' }}>{s.to}</span>
                </div>
              ))}

              <div className="gold-divider my-6" />
              <blockquote
                className="font-display italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.45 }}
              >
                Awareness is like switching on the light.
              </blockquote>
            </div>
          </div>
        </div>

        {/* The founder */}
        <div className="border border-white/[0.06] p-10 md:p-14 mb-16" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>Meet the Founder</div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="font-display font-light text-off-white mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', lineHeight: 1.15 }}
              >
                Renu Sharma
              </h2>
              <p className="body-md mb-4" style={{ color: 'rgba(240,237,232,0.48)' }}>
                After working in the banking industry for 13 years, Renu began questioning the life she was living. From the outside, everything looked stable. But internally, she felt disconnected from herself and stuck in routine.
              </p>
              <p className="body-md mb-6" style={{ color: 'rgba(240,237,232,0.48)' }}>
                That realization became the beginning of her journey into personal growth, mindset, awareness, and conscious living — and ultimately, the foundation of Captanova.
              </p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
                Connect with Renu →
              </a>
            </div>
            <div>
              <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>What Captanova Builds</div>
              {[
                'Stronger self-belief',
                'Better decision making',
                'Emotional resilience',
                'Confidence in communication',
                'Healthier habits and routines',
                'Clarity around goals and direction',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <span className="text-gold/60 text-xs">→</span>
                  <span style={{ fontSize: '0.97rem', color: 'rgba(240,237,232,0.55)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="body-lg mb-6" style={{ color: 'rgba(240,237,232,0.38)' }}>
            Ready to stop living on autopilot?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Start Your Journey →
            </a>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
