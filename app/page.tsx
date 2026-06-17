import NavBar from "@/components/NavBar";
import DecorativeStars from "@/components/DecorativeStars";
import AboutSection from "@/components/AboutSection";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";

export default function Home() {
  return (
    <>
      <DecorativeStars />
      <NavBar />
      <main>
        <AboutSection />
        <InstagramFeed />
        <TikTokFeed />
      </main>
      <footer className="py-8 text-center font-body text-sm text-text-body">
        <p>© 2024 saithsfuff. All rights reserved.</p>
      </footer>
    </>
  );
}
