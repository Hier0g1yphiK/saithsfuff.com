import Image from "next/image";

export default function MediaKitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 sm:py-24 dark:bg-none dark:bg-[#1a0e2e]">
      {/* Decorative floating elements */}
      <span className="absolute top-8 left-8 text-2xl animate-float opacity-50" aria-hidden="true">✦</span>
      <span className="absolute top-16 right-12 text-lg animate-sparkle-pulse opacity-40" aria-hidden="true">✧</span>
      <span className="absolute bottom-12 left-1/4 text-xl animate-float opacity-30" aria-hidden="true">✨</span>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Profile image */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-pink-200/60 shadow-whimsical-lg dark:border-lavender-700/40">
            <Image
              src="/images/portrait.png"
              alt="Portrait of saithsfuff"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          <span className="gradient-text">Media Kit & Portfolio</span> ✨
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-body dark:text-gray-200 sm:text-xl">
          Content creator & streamer building cozy communities and creating engaging,
          authentic content across Twitch, Instagram, and TikTok.
        </p>

        {/* Quick stats highlight */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-text-muted dark:text-lavender-300">
          <span>🎮 45K+ Twitch</span>
          <span>📸 28K+ Instagram</span>
          <span>🎵 62K+ TikTok</span>
        </div>
      </div>
    </section>
  );
}
