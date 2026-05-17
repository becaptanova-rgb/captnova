import { NextRequest, NextResponse } from 'next/server';
import { validateLeadForm } from '@/lib/validations';

// ─── Google Sheets via Apps Script Web App ────────────────────────────────────
// Deploy a Google Apps Script as a Web App and set GOOGLE_SHEETS_SCRIPT_URL.
// The script should accept POST with JSON body and append to Sheet1.
//
// Sample Apps Script code to deploy:
// ---
// function doPost(e) {
//   const data = JSON.parse(e.postData.contents);
//   const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Sheet1');
//   sheet.appendRow([
//     new Date().toISOString(),
//     data.name || '', data.email || '', data.phone || '',
//     data.source || '', data.message || ''
//   ]);
//   return ContentService.createTextOutput(JSON.stringify({ success: true }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// ---

async function saveToGoogleSheets(data: Record<string, string>): Promise<void> {
  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

  if (!scriptUrl || scriptUrl.includes('PLACEHOLDER')) {
    console.warn('[Sheets] GOOGLE_SHEETS_SCRIPT_URL not configured. Logging lead locally.');
    console.log('[Lead]', JSON.stringify(data, null, 2));
    return;
  }

  const res = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sheets script error: ${res.status} — ${text}`);
  }
}

// ─── Email via Resend ─────────────────────────────────────────────────────────

async function sendViaResend(to: string, name: string, source: string) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://captanova.com';
  const year = new Date().getFullYear();
  const waPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919000000000';
  const waMsg = encodeURIComponent(`Hi, I just signed up on Captanova and I'm excited to start my journey!`);

  await resend.emails.send({
    from: process.env.EMAIL_FROM || 'hello@captanova.com',
    replyTo: process.env.EMAIL_REPLY_TO || 'support@captanova.com',
    to,
    subject: 'Welcome to Captanova — Your Journey Begins Here',
    html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background:#080808;font-family:'Helvetica Neue',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding:48px 24px;">
              <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
                <!-- Header -->
                <tr>
                  <td style="padding-bottom:36px;border-bottom:1px solid rgba(201,168,76,0.15);">
                    <div style="font-size:20px;letter-spacing:8px;color:#C9A84C;font-weight:300;">CAPTANOVA</div>
                    <div style="font-size:9px;letter-spacing:4px;color:rgba(201,168,76,0.4);text-transform:uppercase;margin-top:4px;">Be The Captain Of Your Life</div>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:36px 0;">
                    <h1 style="font-size:28px;font-weight:300;color:#F5F3EF;margin:0 0 8px;line-height:1.3;">
                      Welcome, ${name}.
                    </h1>
                    <h2 style="font-size:20px;font-weight:300;font-style:italic;color:#C9A84C;margin:0 0 24px;">
                      Your journey begins here.
                    </h2>
                    <p style="color:rgba(245,243,239,0.5);font-weight:300;line-height:1.85;margin:0 0 18px;font-size:15px;">
                      Thank you for reaching out to Captanova. We have received your message and will be in touch with you personally — usually within 24 hours.
                    </p>
                    <p style="color:rgba(245,243,239,0.5);font-weight:300;line-height:1.85;margin:0 0 30px;font-size:15px;">
                      Captanova was created for people who want more from life — more clarity, more purpose, more emotional balance, and a deeper connection with themselves. We are glad you are here.
                    </p>
                    <a href="https://wa.me/${waPhone}?text=${waMsg}"
                       style="display:inline-block;background:#C9A84C;color:#080808;padding:14px 32px;text-decoration:none;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">
                      CHAT WITH US ON WHATSAPP →
                    </a>
                  </td>
                </tr>
                <!-- Quote -->
                <tr>
                  <td style="border-top:1px solid rgba(255,255,255,0.05);padding:28px 0;">
                    <p style="color:rgba(245,243,239,0.28);font-size:15px;font-style:italic;line-height:1.7;margin:0;font-family:Georgia,serif;">
                      "Awareness is like switching on the light."
                    </p>
                    <p style="color:rgba(201,168,76,0.4);font-size:10px;letter-spacing:2px;text-transform:uppercase;margin:8px 0 0;">
                      — Renu Sharma, Founder of Captanova
                    </p>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="border-top:1px solid rgba(255,255,255,0.05);padding-top:22px;">
                    <p style="color:rgba(245,243,239,0.2);font-size:11px;line-height:1.6;margin:0;">
                      © ${year} Captanova · You received this because you enquired via ${source}.<br/>
                      <a href="${siteUrl}/privacy-policy" style="color:rgba(201,168,76,0.3);text-decoration:none;">Privacy Policy</a>
                      &nbsp;·&nbsp;
                      <a href="${siteUrl}/terms" style="color:rgba(201,168,76,0.3);text-decoration:none;">Terms</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}

// ─── Email via Nodemailer fallback ────────────────────────────────────────────

async function sendViaNodemailer(to: string, name: string) {
  const nodemailer = (await import('nodemailer')).default;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: `"Captanova" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Welcome to Captanova — Your Journey Begins Here',
    text: `Hi ${name},\n\nThank you for reaching out to Captanova. We have received your message and will get back to you personally within 24 hours.\n\nAwareness is like switching on the light.\n\nWith gratitude,\nRenu Sharma\nFounder, Captanova\nhttps://captanova.com`,
  });
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone = '', source = 'direct', message = '' } = body;

    // Validate
    const errors = validateLeadForm({ name, email, phone, source, message });
    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0].message, errors }, { status: 400 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();

    // 1. Save to Google Sheets (non-blocking failure allowed)
    try {
      await saveToGoogleSheets({
        timestamp,
        name: cleanName,
        email: cleanEmail,
        phone: phone.trim(),
        source,
        message: message.trim(),
      });
    } catch (sheetsErr) {
      // Log but don't fail the request — email is more important
      console.error('[Sheets error]', sheetsErr);
    }

    // 2. Send confirmation email — try Resend first, fallback to nodemailer
    try {
      const hasResend =
        process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('PLACEHOLDER');
      const hasSmtp =
        process.env.SMTP_USER && !process.env.SMTP_USER.includes('your@');

      if (hasResend) {
        await sendViaResend(cleanEmail, cleanName, source);
      } else if (hasSmtp) {
        await sendViaNodemailer(cleanEmail, cleanName);
      } else {
        console.warn('[Email] No email provider configured. Skipping confirmation email.');
      }
    } catch (emailErr) {
      console.error('[Email error]', emailErr);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Lead API error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
