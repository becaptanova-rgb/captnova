import type { Metadata } from 'next';
import CtaSection from '@/components/sections/CtaSection';
import { getWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Programs — The Captanova Journey',
  description:
    "Explore Captanova's programs. The Captanova Journey is a practical exploration of mindset, emotional awareness, self-awareness, and intentional living through weekly live sessions.",
};

const journeyModules = [
  { num: '01', title: 'Mindset Transformation', desc: 'Understand how your current mindset was formed — and how to shift it at the root level.' },
  { num: '02', title: 'Emotional Awareness', desc: 'Learn to recognise and work with your emotional patterns instead of being controlled by them.' },
  { num: '03', title: 'Limiting Beliefs', desc: 'Identify the invisible beliefs keeping you stuck and replace them with ones that serve your growth.' },
  { num: '04', title: 'Gratitude & Energy', desc: 'Shift your internal state using gratitude practices that build emotional momentum over time.' },
  { num: '05', title: 'Self-Awareness Practices', desc: 'Develop a deeper, more honest understanding of yourself — your patterns, triggers, and strengths.' },
  { num: '06', title: 'Life Direction & Purpose', desc: 'Get clear on what truly matters and start aligning your daily actions with your deeper values.' },
  { num: '07', title: 'Conscious Decision Making', desc: 'Move from reactive choices to intentional decisions rooted in self-awareness.' },
  { num: '08', title: 'Habits & Daily Routines', desc: 'Build daily structures that support continuous growth rather than unconscious repetition.' },
];

const learningTopics = [
  'Mindset & Human Behavior',
  'Emotional Awareness',
  'Gratitude & Energy',
  'Breaking Limiting Patterns',
  'Relationships & Communication',
  'Confidence & Self-Worth',
  'Life Direction & Purpose',
  'Conscious Living Practices',
];

export default function ProgramsPage() {
  const waJourney = getWhatsAppUrl("Hi, I want to join The Captanova Journey. Can you tell me more?");
  const waLive = getWhatsAppUrl("Hi, I'd like to join the next Captanova live session. When is it?");
  const waHelp = getWhatsAppUrl("Hi, I want help understanding which Captanova program is right for me.");

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="section-label mb-7">Programs</div>
          <h1
            className="font-display font-light text-off-white mb-7"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05 }}
          >
            Every program is built
            <br />
            for <em className="gold-text">intentional living</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Captanova offers two ways to grow: The Captanova Journey (our signature program) and Weekly Live Learning Experiences. Both are practical, awareness-based, and designed for real-life transformation.
          </p>
          <a href={waHelp} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
            Not sure where to start? Ask us →
          </a>
        </div>
      </section>

      {/* Signature Program */}
      <section className="py-24 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-16">
            <div>
              <div className="section-label mb-3" style={{ color: 'rgba(201,168,76,0.6)' }}>Signature Program</div>
              <h2
                className="font-display font-light text-off-white"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', lineHeight: 1.1 }}
              >
                The Captanova Journey
              </h2>
            </div>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left — Description */}
            <div>
              <div
                className="border border-gold/20 p-10 md:p-12 h-full"
                style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.05) 0%, rgba(0,0,0,0) 100%)' }}
              >
                <div className="absolute top-0 right-0 bg-gold text-obsidian px-5 py-2 font-semibold relative -mt-4 -mr-4 self-start inline-block mb-6"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--gold)', color: '#090909', padding: '5px 14px' }}>
                  Most Popular
                </div>
                <p style={{ fontSize: '1.12rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.85, marginBottom: '2rem' }}>
                  A practical journey into mindset, emotional clarity, self-awareness, and intentional living. Designed for people who want to understand themselves at a deeper level and start living more consciously.
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    'Weekly live group sessions with Renu',
                    'Guided exploration of 8 core life themes',
                    'Practical tools and reflection exercises',
                    'Community of growth-minded individuals',
                    'Personal support throughout the journey',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-1 text-sm">✓</span>
                      <span style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.60)', lineHeight: 1.65 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href={waJourney} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
                  Join The Journey →
                </a>
              </div>
            </div>

            {/* Right — Modules */}
            <div className="grid grid-cols-1 gap-0 border border-white/[0.05]">
              {journeyModules.map((m, i) => (
                <div
                  key={m.num}
                  className={`p-6 flex gap-5 group hover:bg-white/[0.015] transition-colors duration-200 ${
                    i < journeyModules.length - 1 ? 'border-b border-white/[0.05]' : ''
                  }`}
                >
                  <span
                    style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.45)', flexShrink: 0, paddingTop: '3px' }}
                  >
                    {m.num}
                  </span>
                  <div>
                    <div
                      className="font-display font-light text-off-white mb-1 group-hover:text-gold transition-colors duration-200"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', lineHeight: 1.3 }}
                    >
                      {m.title}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.38)', lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Live Sessions */}
      <section className="py-24 border-t border-white/[0.04]" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-8">
            <div>
              <div className="section-label mb-3" style={{ color: 'rgba(201,168,76,0.6)' }}>Ongoing</div>
              <h2
                className="font-display font-light text-off-white"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', lineHeight: 1.1 }}
              >
                Weekly Live Learning Experiences
              </h2>
            </div>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>
          <p style={{ fontSize: '1.08rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.85, maxWidth: '560px', marginBottom: '3rem' }}>
            Weekly live classes focused on real-life transformation and practical personal growth. These sessions cover the topics that genuinely shape how you live — with real conversations, not just theory.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.05] mb-12">
            {learningTopics.map((topic, i) => (
              <div
                key={topic}
                className={`p-7 group hover:bg-white/[0.015] transition-colors duration-200 ${
                  i % 4 !== 3 ? 'border-r border-white/[0.05]' : ''
                } ${i < 4 ? 'border-b border-white/[0.05]' : ''}`}
              >
                <span className="text-gold/50 mb-3 block text-lg">✦</span>
                <span
                  className="font-display font-light text-off-white group-hover:text-gold transition-colors duration-200"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', lineHeight: 1.3 }}
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={waLive} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
              Join the Next Live Session →
            </a>
            <a href={waHelp} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
              Ask Us a Question
            </a>
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="py-20 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-6">Not sure where to begin?</div>
          <h2
            className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}
          >
            Let us guide you.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
            Send us a message on WhatsApp and we will understand exactly where you are and what the right starting point looks like for you.
          </p>
          <a href={waHelp} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
            Chat with Us on WhatsApp →
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
