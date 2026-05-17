import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Captanova Terms and Conditions — the terms governing your use of our platform and programs.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="section-label mb-5">Legal</div>
        <h1
          className="font-display font-light text-off-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
        >
          Terms &amp; Conditions
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.28)', marginBottom: '3rem' }}>
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10" style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.85 }}>
          {[
            { title: 'Acceptance of Terms', body: 'By accessing the Captanova website or participating in any of our programs, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.' },
            { title: 'Our Programs', body: 'Captanova offers personal growth and mindset programs, including The Captanova Journey and Weekly Live Learning Experiences. Program details, schedules, and formats may change from time to time. We will communicate any significant changes in advance.' },
            { title: 'Participation', body: 'Program participants are expected to engage respectfully with the community and with our team. We reserve the right to remove any participant from a program if their conduct is disruptive or harmful to others.' },
            { title: 'Intellectual Property', body: 'All content shared through Captanova programs — including session recordings, materials, frameworks, and tools — is the intellectual property of Captanova. You may not reproduce, distribute, or share this content without written permission.' },
            { title: 'Personal Results', body: 'Captanova provides personal growth education and tools. Individual results vary. We do not guarantee specific outcomes from participating in our programs. Transformation requires personal commitment and effort.' },
            { title: 'Refund Policy', body: 'Our refund policy is communicated at the time of enrolment. If you have a concern about a program you have joined, please contact us at hello@captanova.com and we will do our best to find a fair resolution.' },
            { title: 'Limitation of Liability', body: 'Captanova shall not be liable for any indirect or consequential losses arising from your participation in our programs. Our liability is limited to the amount you paid for the specific program in question.' },
            { title: 'Changes to Terms', body: 'We may update these terms from time to time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.' },
            { title: 'Contact', body: 'For any questions about these terms, please contact us at hello@captanova.com.' },
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
