const testimonials = [
  {
    name: 'Priya M.',
    role: 'Working Professional',
    text: 'I finally understood why I kept repeating the same emotional patterns in my life. Captanova helped me reconnect with myself.',
  },
  {
    name: 'Arjun K.',
    role: 'Entrepreneur',
    text: 'I came here looking for motivation, but what I found was clarity, emotional balance, and a different way of understanding myself.',
  },
  {
    name: 'Sneha R.',
    role: 'Student',
    text: 'The weekly live sessions helped me become more aware of my thoughts, reactions, and habits. I feel like I actually understand myself now.',
  },
  {
    name: 'Rahul V.',
    role: 'Banking Professional',
    text: 'I had tried self-help books and courses before. What made Captanova different was that it went deeper — into the actual patterns behind my behavior.',
  },
  {
    name: 'Ananya S.',
    role: 'Teacher',
    text: 'Renu has a way of making you feel seen. The awareness practices she teaches are simple but genuinely life-changing when you actually apply them.',
  },
  {
    name: 'Karan D.',
    role: 'Business Owner',
    text: 'The clarity I gained from the Captanova Journey has changed how I make decisions, how I relate to people, and how I see myself. Real transformation.',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060606 0%, #090909 100%)' }}
      id="testimonials"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-5">Student Outcomes</div>
          <h2 className="section-heading mb-5">
            Real people.
            <br />
            <em className="gold-text">Real transformation.</em>
          </h2>
          <p className="body-lg mx-auto max-w-md" style={{ color: 'rgba(240,237,232,0.40)' }}>
            People who joined the Captanova Journey and started living more intentionally.
            Here is what they say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-gold" style={{ fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="relative z-10 mb-7"
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.82,
                  color: 'rgba(240,237,232,0.65)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontFamily: 'Cormorant Garamond, serif',
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-end justify-between relative z-10">
                <div>
                  <div
                    className="font-medium"
                    style={{ fontSize: '0.95rem', color: 'var(--off-white)' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="mt-0.5"
                    style={{ fontSize: '0.83rem', color: 'rgba(240,237,232,0.35)' }}
                  >
                    {t.role}
                  </div>
                </div>
                <span className="text-gold/40 text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-16 border border-white/[0.05] p-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="flex items-center gap-5">
            <div className="text-gold text-3xl tracking-wide">★★★★★</div>
            <div>
              <div
                className="font-display font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--off-white)' }}
              >
                Helping people move
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.32)' }}>
                from autopilot living to intentional living
              </div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/[0.08]" />
          <p
            className="font-display italic text-center md:text-right max-w-sm"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem',
              color: 'rgba(240,237,232,0.40)',
              lineHeight: 1.5,
            }}
          >
            &ldquo;Awareness is like switching on the light.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
