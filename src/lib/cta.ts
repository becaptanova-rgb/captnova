// ─── Centralised CTA helper ───────────────────────────────────────────────────
// All CTA buttons site-wide use one of these two actions:
//   1. Open WhatsApp chat
//   2. Scroll to / open the lead capture form
//
// Configure via env vars — no code changes needed after deployment.

export function getWhatsAppUrl(customMessage?: string): string {
  const phone =
    typeof window !== 'undefined'
      ? (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919000000000')
      : (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919000000000');

  const defaultMsg =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hi, I'm interested in learning more about Captanova. Can you help me?";

  const msg = encodeURIComponent(customMessage ?? defaultMsg);
  return `https://wa.me/${phone}?text=${msg}`;
}

/** Scrolls to the lead capture section and optionally opens it */
export function scrollToLeadForm(): void {
  const el = document.getElementById('lead-capture');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
