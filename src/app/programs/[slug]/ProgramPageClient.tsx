'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/cta';
import type { Program } from '@/lib/programs';

interface Props { program: Program }

const S = {
  body:     { fontSize: '1.08rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.85, fontWeight: 400 as const },
  benefit:  { fontSize: '1rem',    color: 'rgba(240,237,232,0.60)', lineHeight: 1.65, fontWeight: 400 as const },
  small:    { fontSize: '0.88rem', color: 'rgba(240,237,232,0.32)', lineHeight: 1.6 },
  label:    { fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const },
  modTitle: { fontSize: '1rem',    color: 'rgba(240,237,232,0.75)', lineHeight: 1.5, fontWeight: 400 as const },
  modBody:  { fontSize: '1rem',    color: 'rgba(240,237,232,0.46)', lineHeight: 1.78, fontWeight: 400 as const },
};

const programFaqs = [
  { q: 'Who is this program for?', a: 'Anyone who senses there is more to life than the routine they are currently living. Whether you are a professional, student, entrepreneur, or homemaker — if you feel stuck on autopilot, this is for you.' },
  { q: 'How much time do I need?', a: 'Each session is designed to fit into your life. Weekly live sessions are typically 60–90 minutes. Between sessions, the integration happens naturally as you apply what you have learned to your daily life.' },
  { q: 'Is this live or recorded?', a: 'The Captanova Journey includes weekly live sessions with Renu. These are interactive, not pre-recorded lectures. You can engage, ask questions, and connect with the community in real time.' },
  { q: 'What if I miss a live session?', a: 'Recordings are provided so you never miss content. However, we encourage attending live where possible — the real-time interaction is a core part of the experience.' },
  { q: 'Will I get personal support?', a: 'Yes. Captanova is built around real connection. You will have access to community support and direct communication with our team throughout your journey.' },
  { q: 'How soon will I notice a difference?', a: 'Most participants notice a shift in their awareness and emotional patterns within the first few sessions. Deeper, lasting change builds gradually as awareness compounds over time.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-7 text-left group">
        <span
          className="font-display font-light transition-colors duration-300"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', lineHeight: 1.4, color: open ? 'var(--gold)' : 'rgba(240,237,232,0.82)' }}
        >
          {q}
        </span>
        <ChevronDown size={18} className="flex-shrink-0 mt-0.5 transition-all duration-300"
          style={{ color: open ? 'var(--gold)' : 'rgba(240,237,232,0.22)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="pb-7 pr-10">
          <p style={{ fontSize: '1.02rem', color: 'rgba(240,237,232,0.50)', lineHeight: 1.82 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProgramPageClient({ program }: Props) {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const waUrl = getWhatsAppUrl(`Hi, I'm interested in ${program.name}. Can you share more details?`);
  const waGeneral = getWhatsAppUrl("Hi, I have a question about the Captanova program. Can you help?");

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-44 pb-16 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 65% at 75% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-14" style={{ ...S.small }}>
            <Link href="/programs" className="hover:text-gold transition-colors">Programs</Link>
            <span className="text-gold/30">›</span>
            <span style={{ color: 'rgba(240,237,232,0.45)' }}>{program.name}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr,400px] gap-16">
            {/* Left — content */}
            <div>
              {program.badge && (
                <div className="inline-block bg-gold text-obsidian px-4 py-1.5 mb-6 font-semibold"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {program.badge}
                </div>
              )}

              <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.65)' }}>
                {program.duration} · {program.format}
              </div>

              <h1
                className="font-display font-light text-off-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.05 }}
              >
                {program.name}
              </h1>

              <p
                className="font-display italic mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(240,237,232,0.45)', lineHeight: 1.55 }}
              >
                {program.tagline}
              </p>

              <p style={{ ...S.body, marginBottom: '2.5rem' }}>{program.description}</p>

              {/* Benefits */}
              <div className="mb-10">
                <div className="section-label mb-6" style={{ color: 'rgba(201,168,76,0.6)' }}>What you will explore</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-0.5 text-sm">→</span>
                      <span style={S.benefit}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sticky CTA card */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div
                className="border border-gold/20 p-8"
                style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.06) 0%, rgba(0,0,0,0) 100%)' }}
              >
                <div className="section-label mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  {program.name}
                </div>
                <div
                  className="font-display font-light text-off-white mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: 1.2 }}
                >
                  Start your journey
                </div>

                <p style={{ ...S.body, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Reach out via WhatsApp to get full details, ask questions, and find the right starting point for your journey.
                </p>

                <div className="gold-divider mb-6" />

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center gap-3 mb-4"
                >
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 2.667C8.639 2.667 2.667 8.64 2.667 16.004c0 2.355.641 4.663 1.858 6.694L2.667 29.333l6.849-1.797a13.28 13.28 0 0 0 6.488 1.691c7.365 0 13.33-5.973 13.33-13.33 0-7.356-5.965-13.23-13.33-13.23z" /></svg>
                  Enquire on WhatsApp →
                </a>

                <Link href="/contact" className="btn-outline w-full flex items-center justify-center mb-8">
                  Send us a Message
                </Link>

                {/* Trust signals */}
                <div className="space-y-3">
                  {['Personal response guaranteed', 'No spam, no pressure', 'Join the community anytime', 'Real human support'].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="text-gold/50 flex-shrink-0 text-xs">✓</span>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.38)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="py-24 border-t border-white/[0.04]" style={{ background: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="section-label mb-6" style={{ color: 'rgba(201,168,76,0.6)' }}>Program Content</div>
          <h2
            className="font-display font-light text-off-white mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            What&apos;s inside
          </h2>

          <div className="divide-y divide-white/[0.06]">
            {program.modules.map((mod, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <div className="flex items-center gap-5">
                    <span style={{ ...S.label, color: 'rgba(201,168,76,0.45)', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-display font-light transition-colors duration-300"
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                        lineHeight: 1.35,
                        color: openModule === i ? 'var(--gold)' : 'rgba(240,237,232,0.82)',
                      }}
                    >
                      {mod.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-all duration-300"
                    style={{ color: openModule === i ? 'var(--gold)' : 'rgba(240,237,232,0.2)', transform: openModule === i ? 'rotate(180deg)' : 'none' }}
                  />
                </button>
                <div className={`accordion-content ${openModule === i ? 'open' : ''}`}>
                  <div className="pb-6 pl-14 pr-8">
                    <p style={S.modBody}>{mod.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="section-label mb-6" style={{ color: 'rgba(201,168,76,0.6)' }}>FAQ</div>
          <h2
            className="font-display font-light text-off-white mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
          >
            Common questions
          </h2>

          <div className="divide-y divide-white/[0.06] mb-16">
            {programFaqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="gold-divider max-w-xs mx-auto mb-10" />
            <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.38)', marginBottom: '1.5rem' }}>
              Ready to begin?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Enquire on WhatsApp →
              </a>
              <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
