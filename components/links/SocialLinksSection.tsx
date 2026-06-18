import { socialLinks } from "@/lib/links-data";
import LinkCard from "./LinkCard";

export default function SocialLinksSection() {
  return (
    <section>
      <h2 className="text-2xl font-display font-bold mb-4 text-text-dark dark:text-lavender-100">Social Media</h2>
      <div className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <LinkCard
            key={link.href}
            name={link.name}
            href={link.href}
            description={link.description}
            icon={link.icon}
          />
        ))}
      </div>
    </section>
  );
}
