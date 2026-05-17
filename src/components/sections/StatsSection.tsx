const stats = [
  { value: 'Personal Growth', sub: 'Mindset Education' },
  { value: 'Weekly Live', sub: 'Learning Experiences' },
  { value: 'Real-Life', sub: 'Transformation Tools' },
  { value: 'Community &', sub: 'Accountability Support' },
];

export default function StatsSection() {
  return (
    <section className="bg-[#060606] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`py-10 px-8 flex flex-col items-center text-center reveal ${
                i < stats.length - 1 ? 'border-r border-white/[0.04]' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="font-display font-light text-gold block mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.15 }}
              >
                {s.value}
              </span>
              <span
                className="section-label block"
                style={{ color: 'rgba(240,237,232,0.32)', fontSize: '0.65rem' }}
              >
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
