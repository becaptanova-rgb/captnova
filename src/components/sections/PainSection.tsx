export default function PainSection() {
  const pains = [
    {
      number: '01',
      title: 'Mentally Exhausted',
      body: 'You handle everything on the surface — work, responsibilities, expectations — but internally you feel drained. The mental load never seems to lighten.',
    },
    {
      number: '02',
      title: 'Financially Stuck',
      body: 'You work hard but the results don\'t match. Something invisible keeps you from the next level — and you can feel it, even if you can\'t name it.',
    },
    {
      number: '03',
      title: 'Emotionally Disconnected',
      body: 'You keep everything running, but somewhere along the way, you lost the connection with yourself. You know there\'s more — you just can\'t seem to reach it.',
    },
    {
      number: '04',
      title: 'Uninspired by Routine',
      body: 'Wake up. Work. Responsibilities. Repeat. Life has become a cycle and somewhere inside, something feels missing — not because life is bad, but because you know you\'re meant for more.',
    },
    {
      number: '05',
      title: 'Repeating the Same Cycle',
      body: 'You make plans. You start strong. Then find yourself back where you started. The pattern is familiar. The question is — what\'s actually keeping it in place?',
    },
    {
      number: '06',
      title: 'Living on Autopilot',
      body: 'Days blur together. You\'re busy, but not growing. Moving, but not forward. Deep down you sense that the life you\'re living is only a fraction of what\'s possible.',
    },
  ];

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Large watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(8rem, 22vw, 20rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.012)',
          whiteSpace: 'nowrap',
        }}
      >
        AUTOPILOT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="mb-20 reveal">
          <div className="section-label mb-5">The Reality Check</div>
          <h2 className="section-heading mb-6">
            Sound familiar?
            <br />
            <em style={{ color: 'rgba(240,237,232,0.38)' }}>You are not alone.</em>
          </h2>
          <p className="body-lg max-w-lg" style={{ color: 'rgba(240,237,232,0.42)' }}>
            Many people are constantly managing life on the outside while losing connection with themselves on the inside. Captanova exists to change that.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/[0.05]">
          {pains.map((p, i) => (
            <div
              key={p.number}
              className={`pain-card reveal group cursor-default ${
                i % 3 !== 2 ? 'lg:border-r border-white/[0.05]' : ''
              } ${i < 3 ? 'border-b border-white/[0.05]' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.45)' }}>
                {p.number}
              </div>
              <h3
                className="card-heading mb-4 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem' }}
              >
                {p.title}
              </h3>
              <p className="body-md" style={{ color: 'rgba(240,237,232,0.42)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-24 text-center reveal">
          <div className="gold-divider max-w-sm mx-auto mb-12" />
          <p
            className="font-display italic"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'rgba(240,237,232,0.55)',
              lineHeight: 1.4,
            }}
          >
            Not because your life is bad —
            <br />
            <span style={{ color: 'var(--off-white)' }}>
              but because deep down, you know you were not meant to live on autopilot.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
