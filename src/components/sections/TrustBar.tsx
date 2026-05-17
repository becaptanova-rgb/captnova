export default function TrustBar() {
  const items = [
    'Personal Growth & Mindset Education',
    'Weekly Live Learning Experiences',
    'Real-Life Transformation Tools',
    'Awareness-Based Growth Journey',
    'Community & Accountability Support',
  ];

  return (
    <section className="bg-[#060606] border-y border-white/[0.04] overflow-hidden py-5">
      <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <span className="text-gold/50 text-xs">✦</span>
            <span
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(240,237,232,0.28)',
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
