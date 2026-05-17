import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import { getWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Contact Captanova — Get in Touch',
  description:
    'Reach out to the Captanova team. Whether you have a question about our programs or want to begin your personal growth journey, we are here to help.',
};

export default function ContactPage() {
  const waUrl = getWhatsAppUrl("Hi, I want to know more about Captanova. Can you help me?");

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-20" style={{ animation: 'pageIn 0.6s ease forwards' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16">
          <div className="section-label mb-6">Contact</div>
          <h1 className="section-heading mb-6">
            Let&apos;s talk about
            <br />
            <em className="gold-text">your journey</em>
          </h1>
          <p className="body-lg max-w-lg" style={{ color: 'rgba(240,237,232,0.45)' }}>
            Fill in the form and we will get back to you personally. No automated replies — a real conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <div
              className="border border-gold/15 p-10"
              style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 100%)' }}
            >
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10">
            {/* WhatsApp */}
            <div className="border border-white/[0.06] p-8" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>Prefer WhatsApp?</div>
              <p className="body-md mb-5" style={{ color: 'rgba(240,237,232,0.45)' }}>
                Chat with us directly on WhatsApp for a faster, more personal conversation about your journey.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.004 2.667C8.639 2.667 2.667 8.64 2.667 16.004c0 2.355.641 4.663 1.858 6.694L2.667 29.333l6.849-1.797a13.28 13.28 0 0 0 6.488 1.691c7.365 0 13.33-5.973 13.33-13.33 0-7.356-5.965-13.23-13.33-13.23z" />
                </svg>
                Chat on WhatsApp →
              </a>
            </div>

            {/* What happens */}
            <div>
              <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>What Happens Next</div>
              {[
                { step: '01', text: 'We receive your message and review it personally' },
                { step: '02', text: 'We respond within 24 hours — usually much sooner' },
                { step: '03', text: 'We guide you to the right starting point for your journey' },
                { step: '04', text: 'You begin your Captanova experience at your own pace' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 mb-5">
                  <span
                    className="flex-shrink-0"
                    style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.5)', marginTop: '3px' }}
                  >
                    {s.step}
                  </span>
                  <span style={{ fontSize: '0.97rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.65 }}>{s.text}</span>
                </div>
              ))}
            </div>

            {/* Core line */}
            <blockquote
              className="font-display italic border-l-2 border-gold/25 pl-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.25rem',
                color: 'rgba(240,237,232,0.38)',
                lineHeight: 1.5,
              }}
            >
              Your life is already happening. The question is: are you living consciously?
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
}
