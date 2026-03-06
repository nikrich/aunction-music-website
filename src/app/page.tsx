const SMART_LINK = "https://ditto.fm/a-century";

const STREAMING_PLATFORMS = [
  { name: "Spotify", href: SMART_LINK },
  { name: "Apple Music", href: SMART_LINK },
  { name: "YouTube Music", href: SMART_LINK },
  { name: "Amazon Music", href: SMART_LINK },
  { name: "Tidal", href: SMART_LINK },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Release", href: "#release" },
  { label: "About", href: "#about" },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "TikTok", href: "#" },
];

function Navbar() {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-widest uppercase text-foreground">
          Auction
        </a>
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="stream-btn rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white"
          >
            Listen Now
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="hero-gradient noise-overlay relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6">
        The New Album
      </p>
      <h1 className="text-7xl md:text-9xl font-black tracking-tight text-foreground leading-none">
        Auction
      </h1>
      <div className="mt-6 mb-8">
        <span className="inline-block h-px w-16 bg-accent/50" />
      </div>
      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground/80">
        A Century
      </h2>
      <p className="mt-4 text-muted max-w-md">
        Our debut album is out now. A journey through sound, time, and everything in between.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href={SMART_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="stream-btn rounded-full bg-accent hover:bg-accent-dim px-8 py-3 text-base font-semibold text-white"
        >
          Stream A Century
        </a>
        <a
          href="#release"
          className="stream-btn rounded-full border border-white/20 hover:border-white/40 px-8 py-3 text-base font-medium text-foreground/80"
        >
          Explore
        </a>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted/50 to-transparent" />
      </div>
    </section>
  );
}

function ReleaseSection() {
  return (
    <section id="release" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Featured Release
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            A Century
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Album artwork placeholder */}
          <div className="flex justify-center">
            <div className="album-glow relative w-80 h-80 md:w-96 md:h-96 rounded-sm overflow-hidden bg-surface">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-accent-dim/20 to-surface">
                <span className="text-6xl font-black text-foreground/10 tracking-tighter">
                  A
                </span>
                <span className="text-sm uppercase tracking-[0.4em] text-foreground/20 mt-2">
                  Century
                </span>
              </div>
            </div>
          </div>

          {/* Release info & streaming links */}
          <div>
            <p className="text-muted leading-relaxed mb-8">
              A Century captures the raw energy and emotional depth of Auction.
              Spanning genres and moods, this album is a testament to the
              band&apos;s vision — dark, atmospheric, and unapologetically bold.
            </p>

            <p className="text-sm text-muted/70 uppercase tracking-wider mb-6">
              Listen on your favorite platform
            </p>

            <div className="flex flex-wrap gap-3">
              {STREAMING_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-btn rounded-full border border-white/10 hover:border-accent/50 bg-surface-light px-5 py-2.5 text-sm text-foreground/80 hover:text-foreground"
                >
                  {platform.name}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={SMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="stream-btn inline-block rounded-full bg-accent hover:bg-accent-dim px-8 py-3 text-base font-semibold text-white"
              >
                Get A Century
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-glow mt-32 mx-auto max-w-2xl" />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
          The Band
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          About Auction
        </h2>
        <p className="text-lg text-muted leading-relaxed">
          Auction is a band built on contrasts — silence and noise, light and
          dark, the intimate and the monumental. With A Century, they invite you
          into a world where every note carries weight and every moment matters.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-lg font-bold tracking-widest uppercase">
              Auction
            </span>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted/50">
            &copy; {new Date().getFullYear()} Auction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ReleaseSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
