"use client";

import Script from "next/script";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/saithsfuff/";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-container">
      <h2 className="font-display text-text-dark text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
        <span className="gradient-text">Follow on Instagram</span> 📸
      </h2>

      <div className="whimsical-card p-4 sm:p-6">
        {/* @ts-expect-error - behold-widget is a custom element loaded by the script */}
        <behold-widget feed-id="5eh8S4Kcmn56zpeWPgSx"></behold-widget>
      </div>

      <div className="text-center mt-8">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors"
        >
          Visit profile →
        </a>
      </div>

      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
    </section>
  );
}
