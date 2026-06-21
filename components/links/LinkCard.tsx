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
      className="whimsical-card w-full min-h-[44px] flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-whimsical-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 dark:focus-visible:ring-lavender-400"
    >
      {/* Logo */}
      <Image
        src={`${BASE_PATH}${icon}`}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="h-8 w-8 flex-shrink-0 rounded-md object-contain"
      />

      <div className="flex-1 min-w-0">
        <span className="block truncate max-w-[50ch] font-display text-base font-medium text-text-dark dark:text-lavender-100">
          {name}
        </span>
        {description && (
          <span className="block text-base sm:text-sm font-body text-text-muted dark:text-gray-300 line-clamp-2 mt-0.5">
            {description}
          </span>
        )}
      </div>

      {/* External link icon */}
      <svg
        className="h-4 w-4 flex-shrink-0 text-pink-400 dark:text-lavender-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>

      {/* Visually-hidden text for screen readers */}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
