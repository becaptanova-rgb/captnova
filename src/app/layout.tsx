import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollProgress from '@/components/ui/ScrollProgress';
import AnnouncementBar from '@/components/ui/AnnouncementBar';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://captanova.com'),
  title: {
    default: 'Captanova — Be The Captain Of Your Life',
    template: '%s | Captanova',
  },
  description:
    'Captanova is a personal growth and mindset platform helping people move from autopilot living to intentional living through weekly live sessions, awareness practices, and real-life transformation tools.',
  keywords: [
    'personal growth', 'mindset platform', 'intentional living', 'self-awareness',
    'emotional intelligence', 'conscious living', 'personal development India',
    'weekly live sessions', 'captanova', 'Renu Sharma', 'autopilot to intentional',
  ],
  authors: [{ name: 'Renu Sharma' }, { name: 'Captanova' }],
  creator: 'Captanova',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://captanova.com',
    siteName: 'Captanova',
    title: 'Captanova — Be The Captain Of Your Life',
    description:
      'Stop living on autopilot. Start living intentionally. Captanova helps people reconnect with themselves and create a life of clarity, purpose, and emotional balance.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Captanova — Be The Captain Of Your Life' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captanova — Be The Captain Of Your Life',
    description: 'Stop living on autopilot. Start living intentionally.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'PLACEHOLDER_PIXEL_ID';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@200;300;400;500;600&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Razorpay */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

        <div id="progress-bar" />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollProgress />
      </body>
    </html>
  );
}
