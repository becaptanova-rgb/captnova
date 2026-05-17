'use client';

import { useEffect, useRef } from 'react';
import { getWhatsAppUrl, scrollToLeadForm } from '@/lib/cta';

const painPoints = [
  'mentally exhausted',
  'financially stuck',
  'emotionally disconnected',
  'uninspired by your routine',
  'tired of repeating the same cycle',
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add('opacity-100'), 80);
    return () => clearTimeout(t);
  }, []);

  const waUrl = getWhatsAppUrl("Hi, I want to start my Captanova journey. Can you share details?");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-px h-full pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.18) 40%, transparent 100%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-40 pb-24 opacity-0 transition-opacity duration-1000 w-full"
      >
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <div
            className="mb-10 flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            <span className="w-10 h-px bg-gold/40" />
            <span className="section-label">Personal Growth & Mindset Education</span>
            <span className="w-10 h-px bg-gold/40" />
          </div>

          {/* Main headline */}
          <h1
            className="hero-heading mb-8 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Does your life feel
            <br />
            <span className="gold-shimmer italic">repetitive</span>
            <span style={{ color: 'rgba(240,237,232,0.55)' }}>…</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up max-w-2xl mx-auto mb-8"
            style={{
              animationDelay: '0.45s',
              animationFillMode: 'both',
              fontSize: '1.2rem',
              lineHeight: 1.85,
              color: 'rgba(240,237,232,0.54)',
              fontWeight: 400,
              fontFamily: 'Jost, sans-serif',
            }}
          >
            even though you know you are meant for more?
          </p>

          {/* Pain points */}
          <div
            className="animate-fade-in flex flex-wrap justify-center gap-3 mb-12"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {painPoints.map((p) => (
              <span
                key={p}
                className="px-4 py-2 border border-white/10"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,237,232,0.32)',
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Brand message */}
          <p
            className="animate-fade-up max-w-xl mx-auto mb-12"
            style={{
              animationDelay: '0.7s',
              animationFillMode: 'both',
              fontSize: '1.08rem',
              lineHeight: 1.85,
              color: 'rgba(240,237,232,0.50)',
              fontFamily: 'Jost, sans-serif',
            }}
          >
            Captanova was created for people who want more from life — more clarity, more purpose, more emotional balance, more growth, and a deeper connection with themselves.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.85s', animationFillMode: 'both' }}
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold animate-glow-pulse">
              Start Your Journey →
            </a>
            <button
              onClick={scrollToLeadForm}
              className="btn-outline"
            >
              Explore Captanova ↓
            </button>
          </div>

          {/* Trust bar */}
          <div
            className="mt-20 flex flex-wrap justify-center gap-10 animate-fade-in"
            style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
          >
            {[
              { label: 'Weekly Live', sub: 'Learning Experiences' },
              { label: 'Real-Life', sub: 'Transformation Tools' },
              { label: 'Awareness', sub: 'Based Growth Journey' },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <span
                  className="font-display font-light text-gold"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem' }}
                >
                  {b.label}
                </span>
                <span
                  className="section-label"
                  style={{ color: 'rgba(240,237,232,0.32)', fontSize: '0.68rem' }}
                >
                  {b.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
      >
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.2)' }}>
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gold to-transparent"
            style={{ animation: 'float 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
