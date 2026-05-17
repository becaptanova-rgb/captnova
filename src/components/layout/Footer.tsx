import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/cta';

export default function Footer() {
  const waUrl = getWhatsAppUrl("Hi, I want to know more about Captanova.");

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/#programs-overview' },
    { label: 'Founder', href: '/#founder' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  const linkStyle = {
    fontSize: '1rem',
    color: 'rgba(240,237,232,0.42)',
    fontWeight: 400,
    lineHeight: 1.5,
  };

  return (
    <footer className="bg-obsidian border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="font-display font-light tracking-[0.08em] text-off-white mb-1"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
            >
              CAPTANOVA
            </div>
            <div className="section-label mb-7" style={{ color: 'rgba(201,168,76,0.5)', letterSpacing: '0.25em', fontSize: '0.62rem' }}>
              Be The Captain Of Your Life
            </div>
            <p className="max-w-sm mb-7" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(240,237,232,0.42)', fontWeight: 400 }}>
              A personal growth and mindset platform designed to help people reconnect with themselves and create a more intentional life.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mb-8 group"
              style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.42)' }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.25)' }}
              >
                <svg width="16" height="16" viewBox="0 0 32 32" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.004 2.667C8.639 2.667 2.667 8.64 2.667 16.004c0 2.355.641 4.663 1.858 6.694L2.667 29.333l6.849-1.797a13.28 13.28 0 0 0 6.488 1.691c7.365 0 13.33-5.973 13.33-13.33 0-7.356-5.965-13.23-13.33-13.23z" />
                </svg>
              </span>
              <span className="group-hover:text-gold transition-colors">Chat with us on WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-6">Navigate</h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold transition-colors duration-200" style={linkStyle}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="section-label mb-6">Legal</h4>
            <ul className="space-y-4 mb-8">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold transition-colors duration-200" style={linkStyle}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Core line */}
            <blockquote
              className="font-display italic"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                color: 'rgba(240,237,232,0.28)',
                lineHeight: 1.5,
                borderLeft: '1px solid rgba(201,168,76,0.2)',
                paddingLeft: '1rem',
              }}
            >
              Awareness is like switching on the light.
            </blockquote>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.25)' }}>
            © {new Date().getFullYear()} Captanova. All rights reserved.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.2)' }}>
            Stop living on autopilot. Start living intentionally.
          </p>
        </div>
      </div>
    </footer>
  );
}
