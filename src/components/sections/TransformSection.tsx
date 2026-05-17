export default function TransformSection() {
  const pillars = [
    {
      icon: '◈',
      title: 'Mindset Transformation',
      desc: 'We help you understand the beliefs, patterns, and mental habits that shape your daily experience — then replace them with ones that serve your growth.',
    },
    {
      icon: '◉',
      title: 'Emotional Awareness',
      desc: 'Learn to recognise your emotional cycles before they control your decisions. Awareness is the foundation of every real change.',
    },
    {
      icon: '◎',
      title: 'Self-Awareness Practices',
      desc: 'Daily practices that deepen your understanding of yourself — your triggers, your strengths, your blind spots, and your true potential.',
    },
    {
      icon: '◆',
      title: 'Intentional Living',
      desc: 'Move from reacting to life to consciously designing it. Build habits, routines, and direction that reflect who you actually want to become.',
    },
  ];

  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060606 0%, #0b0900 50%, #060606 100%)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Left */}
          <div className="reveal-left">
            <div className="section-label mb-6">The Captanova Journey</div>
            <h2 className="section-heading mb-8">
              From autopilot
              <br />
              <em className="gold-text">to intentional</em>
              <br />
              living.
            </h2>
            <p className="body-lg" style={{ color: 'rgba(240,237,232,0.44)' }}>
              A practical journey into mindset, emotional clarity, self-awareness, and intentional living. When your inner world changes,{' '}
              <strong className="font-medium" style={{ color: 'rgba(240,237,232,0.72)' }}>
                your outer life naturally begins to shift.
              </strong>
            </p>
          </div>

          {/* Right — Before / After */}
          <div className="reveal-right">
            <div className="border border-white/[0.07] overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
                {/* Before */}
                <div className="p-8">
                  <div className="section-label mb-6" style={{ color: 'rgba(248,113,113,0.55)' }}>
                    Before
                  </div>
                  {[
                    'Living on autopilot',
                    'Reactive & scattered',
                    'Emotionally disconnected',
                    'Stuck in the same cycle',
                    'Passenger in your life',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 mb-4">
                      <span className="text-red-400/45 flex-shrink-0 mt-0.5">✕</span>
                      <span className="body-sm" style={{ color: 'rgba(240,237,232,0.38)' }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
                {/* After */}
                <div className="p-8" style={{ background: 'rgba(201,168,76,0.03)' }}>
                  <div className="section-label mb-6">After</div>
                  {[
                    'Living with intention',
                    'Calm, clear, aware',
                    'Emotionally balanced',
                    'Breaking the patterns',
                    'Captain of your life',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 mb-4">
                      <span className="text-gold/70 flex-shrink-0 mt-0.5">✓</span>
                      <span className="body-sm" style={{ color: 'rgba(240,237,232,0.72)' }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.05]">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal p-8 group hover:bg-white/[0.02] transition-colors duration-300 ${
                i < 3 ? 'border-r border-white/[0.05]' : ''
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-gold text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {p.icon}
              </div>
              <h3
                className="card-heading mb-4 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
              >
                {p.title}
              </h3>
              <p className="body-sm" style={{ color: 'rgba(240,237,232,0.42)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
