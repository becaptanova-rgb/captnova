import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Captanova Privacy Policy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="section-label mb-5">Legal</div>
        <h1
          className="font-display font-light text-off-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.28)', marginBottom: '3rem' }}>
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10" style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.85 }}>
          {[
            { title: 'Information We Collect', body: 'When you interact with Captanova — through our website, contact forms, or WhatsApp — we may collect your name, email address, phone number, and any information you choose to share with us. We collect only what is necessary to provide you with our services.' },
            { title: 'How We Use Your Information', body: 'We use the information you provide to respond to your enquiries, share details about our programs and sessions, send you relevant updates and resources, and improve our offerings. We do not sell your data to third parties.' },
            { title: 'Data Storage', body: 'Lead information submitted through our forms is stored securely in Google Sheets (accessible only to the Captanova team) and processed via our email platform. We take reasonable measures to protect your information from unauthorised access.' },
            { title: 'Email Communications', body: 'By submitting your details, you agree to receive a confirmation email and occasional follow-up communications from Captanova. You may unsubscribe at any time by replying to any email with "unsubscribe" in the subject line.' },
            { title: 'WhatsApp', body: 'If you contact us via WhatsApp, your messages are handled in accordance with WhatsApp\'s privacy policy. We use WhatsApp solely to communicate with you about Captanova programs and to answer your questions.' },
            { title: 'Cookies', body: 'Our website may use cookies to improve your browsing experience and to analyse site traffic. You can disable cookies in your browser settings, though some site features may not function correctly without them.' },
            { title: 'Your Rights', body: 'You have the right to request access to the personal data we hold about you, to ask for corrections, or to request that we delete your information. To exercise any of these rights, contact us at hello@captanova.com.' },
            { title: 'Contact', body: 'For any privacy-related questions or requests, please reach out to us at hello@captanova.com or via WhatsApp. We aim to respond within 48 hours.' },
          ].map((section) => (
            <div key={section.title}>
              <h2
                className="font-display font-light text-off-white mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: 1.3 }}
              >
                {section.title}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
