'use client';

import { getWhatsAppUrl, scrollToLeadForm } from '@/lib/cta';

const journeyModules = [
  'Mindset Transformation',
  'Emotional Awareness',
  'Limiting Beliefs',
  'Gratitude & Energy',
  'Self-Awareness Practices',
  'Life Direction & Purpose',
  'Conscious Decision Making',
  'Habits & Daily Routines',
];

const learningTopics = [
  { icon: '◈', title: 'Mindset & Human Behavior', desc: 'Understand how your mind creates your reality and how to consciously reshape it.' },
  { icon: '◉', title: 'Emotional Awareness', desc: 'Recognise emotional patterns before they run your day and learn to navigate them with clarity.' },
  { icon: '◎', title: 'Gratitude & Energy', desc: 'Shift your internal state through daily gratitude practices that compound over time.' },
  { icon: '◆', title: 'Breaking Limiting Patterns', desc: 'Identify and dissolve the invisible beliefs and habits keeping you stuck.' },
  { icon: '◇', title: 'Relationships & Communication', desc: 'Build deeper, more authentic connections through awareness-based communication.' },
  { icon: '▷', title: 'Confidence & Self-Worth', desc: 'Develop genuine confidence rooted in self-awareness rather than external validation.' },
  { icon: '✦', title: 'Life Direction & Purpose', desc: 'Clarify what truly matters and design a life aligned with your deeper values.' },
  { icon: '○', title: 'Conscious Living Practices', desc: 'Daily routines and rituals that keep you anchored in intentional living.' },
];

export default function ProgramsOverview() {
  const waUrl = getWhatsAppUrl("Hi, I'm interested in The Captanova Journey program. Can you share more details?");

  return (
    <section id="programs-overview" className="py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-6">Signature Program</div>
          <h2
            className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            The <em className="gold-text">Captanova Journey</em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
            A practical journey into mindset, emotional clarity, self-awareness, and intentional living.
          </p>
        </div>

        {/* Journey program card */}
        <div className="reveal mb-24">
          <div
            className="border border-gold/20 relative overflow-hidden"
            style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 60%)' }}
          >
            {/* Badge */}
            <div
              className="absolute top-0 right-0 bg-gold text-obsidian px-5 py-2 font-medium"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Signature Program
            </div>

            <div className="p-10 md:p-14 grid md:grid-cols-2 gap-14">
              {/* Left — description */}
              <div>
                <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.7)' }}>
                  A Complete Inner Journey
                </div>
                <h3
                  className="font-display font-light text-off-white mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.1 }}
                >
                  Inside the Journey, You Will Explore
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  A guided experience across the core dimensions of mindset, emotional intelligence, self-awareness, and conscious living — designed to help you step from autopilot into intentional life.
                </p>

                {/* Module list */}
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {journeyModules.map((m) => (
                    <div key={m} className="flex items-center gap-3">
                      <span className="text-gold/60 flex-shrink-0">→</span>
                      <span style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.60)', lineHeight: 1.6 }}>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    Join the Journey →
                  </a>
                  <button onClick={scrollToLeadForm} className="btn-outline">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right — what you get */}
              <div className="flex flex-col gap-6">
                <div className="section-label" style={{ color: 'rgba(201,168,76,0.6)' }}>What You Get</div>
                {[
                  { icon: '◈', title: 'Weekly Live Sessions', desc: 'Interactive online classes covering real-life topics with practical insights you can apply immediately.' },
                  { icon: '◉', title: 'Transformation Tools', desc: 'Real-life tools, reflections, and exercises that create tangible shifts in awareness and behavior.' },
                  { icon: '◎', title: 'Community Support', desc: 'A community of like-minded people committed to growth — supporting and holding each other accountable.' },
                  { icon: '◆', title: 'Awareness-Based Learning', desc: 'A structured journey designed to deepen your understanding of yourself at every level.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5 p-6 border border-white/[0.05] hover:border-gold/20 transition-colors duration-300">
                    <span className="text-gold text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div
                        className="font-display font-light text-off-white mb-1"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem' }}
                      >
                        {item.title}
                      </div>
                      <p style={{ fontSize: '0.93rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom shine */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
          </div>
        </div>

        {/* Weekly Learning Experiences header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-5">Weekly Live Learning Experiences</div>
          <h2
            className="font-display font-light text-off-white mb-5"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
          >
            Real conversations.
            <br />
            <em className="gold-text">Real transformation.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
            Weekly live classes focused on real-life transformation and practical personal growth — covering the topics that actually matter.
          </p>
        </div>

        {/* Learning topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.05] reveal">
          {learningTopics.map((t, i) => (
            <div
              key={t.title}
              className={`p-7 group hover:bg-white/[0.015] transition-colors duration-300 ${
                i % 4 !== 3 ? 'border-r border-white/[0.05]' : ''
              } ${i < 4 ? 'border-b border-white/[0.05]' : ''}`}
            >
              <span className="text-gold/60 text-2xl mb-4 block group-hover:text-gold transition-colors duration-300">
                {t.icon}
              </span>
              <h4
                className="font-display font-light text-off-white mb-2 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', lineHeight: 1.25 }}
              >
                {t.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.38)', lineHeight: 1.7 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
            Join the Next Live Session →
          </a>
        </div>
      </div>
    </section>
  );
}
