import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div
          className="font-display font-light text-gold mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(5rem, 15vw, 10rem)', lineHeight: 1, opacity: 0.15 }}
        >
          404
        </div>
        <div className="section-label mb-6">Page Not Found</div>
        <h1
          className="font-display font-light text-off-white mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          This page doesn&apos;t exist.
          <br />
          <em className="gold-text">Your journey does.</em>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          The page you are looking for could not be found. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold">Go Back Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
