import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Captanova — Be The Captain Of Your Life',
  description:
    'Captanova is a personal growth and mindset platform helping people move from autopilot living to intentional living through weekly live sessions, awareness practices, and real-life transformation tools.',
  keywords: [
    'personal growth', 'mindset platform', 'intentional living', 'self-awareness',
    'emotional intelligence', 'conscious living', 'personal development India',
    'mindset coaching India', 'captanova', 'Renu Sharma',
  ],
};

export default function HomePage() {
  return <HomePageClient />;
}
