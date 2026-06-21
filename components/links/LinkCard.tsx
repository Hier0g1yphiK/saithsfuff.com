import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";

interface LinkCardProps {
  /** Display name of the platform or partner */
  name: string;
  /** Destination URL */
  href: string;
  /** Optional description text (discount codes, invitations, etc.) */
  description?: string;
  /** Path to the logo image (e.g. "/images/links/instagram.png") */
  icon: string;
}

export default function LinkCard({ name, href, description, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whimsical-card w-full min-h-[44px] flex flex-col items-center justify-center gap-2 py-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-whimsical-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 dark:focus-visible:ring-lavender-400"
    >
      {/* Logo */}
      <Image
        src={`${BASE_PATH}${icon}`}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="h-8 w-8 rounded-md object-contain"
      />

      <span className="font-display text-base font-medium text-text-dark dark:text-lavender-100 text-center">
        {name}
      </span>
      {description && (
        <span className="text-sm font-body text-text-muted dark:text-gray-300 text-center line-clamp-2 px-2">
          {description}
        </span>
      )}

      {/* Visually-hidden text for screen readers */}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
