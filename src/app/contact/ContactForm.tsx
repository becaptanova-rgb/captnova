'use client';

import LeadForm from '@/components/ui/LeadForm';

export default function ContactForm() {
  return (
    <LeadForm
      source="contact_page"
      ctaLabel="Send My Message →"
      showPhone
      showMessage
      messageLabel="Tell us about yourself and what you're looking to change"
    />
  );
}
