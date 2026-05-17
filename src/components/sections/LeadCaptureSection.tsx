import LeadForm from '@/components/ui/LeadForm';

export default function LeadCaptureSection() {
  return (
    <section className="py-32 bg-obsidian border-t border-white/[0.04]" id="lead-capture">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left — copy */}
          <div className="reveal-left">
            <div className="section-label mb-6">Start Here</div>
            <h2
              className="font-display font-light text-off-white mb-7 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.08 }}
            >
              Begin Your
              <br />
              <em className="gold-text">Captanova Journey</em>
            </h2>
            <p style={{ fontSize: '1.12rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.82, marginBottom: '2rem' }}>
              Leave your details below and we will get in touch to guide you through the right starting point for your personal growth journey.
            </p>

            {/* What happens next */}
            <ul className="space-y-4 mb-12">
              {[
                'We\'ll understand where you are right now',
                'We\'ll share which journey is right for you',
                'You\'ll get details on the next live session',
                'Immediate response — no waiting, no spam',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-gold flex-shrink-0 mt-1">→</span>
                  <span style={{ fontSize: '1.02rem', color: 'rgba(240,237,232,0.58)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Core line */}
            <blockquote
              className="font-display italic border-l-2 border-gold/30 pl-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                color: 'rgba(240,237,232,0.50)',
                lineHeight: 1.5,
              }}
            >
              Your life is already happening.
              <br />
              <span style={{ color: 'rgba(240,237,232,0.75)' }}>
                The question is: are you living consciously — or simply repeating the same patterns every day?
              </span>
            </blockquote>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div
              className="border border-gold/15 p-10 md:p-12"
              style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 100%)' }}
            >
              <div className="section-label mb-6" style={{ color: 'rgba(201,168,76,0.7)' }}>
                Get in touch
              </div>
              <LeadForm
                source="homepage_lead_section"
                ctaLabel="Start My Journey →"
                showPhone
                showMessage
                messageLabel="What are you looking to change or improve?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
