import { brandCollaborations } from "@/lib/media-kit-data";

export default function BrandCollaborations() {
  return (
    <section className="section-container">
      <h2 className="font-display text-2xl font-semibold text-center sm:text-3xl mb-8">
        <span className="gradient-text">Brands I&apos;ve Worked With</span>
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {brandCollaborations.map((brand) => (
          <div
            key={brand.name}
            className="glass-card flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105"
          >
            {/* Placeholder logo */}
            <div className="mb-2 text-3xl" aria-hidden="true">
              {brand.logoPlaceholder}
            </div>

            {/* Brand name */}
            <p className="font-display text-sm font-medium text-text-dark dark:text-lavender-100">
              {brand.name}
            </p>

            {/* Category */}
            <p className="mt-1 text-xs text-text-muted dark:text-lavender-300">
              {brand.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
