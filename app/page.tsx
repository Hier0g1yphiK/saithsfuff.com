import NavBar from "@/components/NavBar";
import DecorativeStars from "@/components/DecorativeStars";
import HomeHero from "@/components/HomeHero";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";

export default function Home() {
  return (
    <>
      <DecorativeStars />
      <NavBar />
      <main>
        <HomeHero />
        <InstagramFeed />
        <TikTokFeed />
      </main>
      <footer className="py-8 text-center font-body text-sm text-text-body">
        <p>© 2024 saithsfuff. All rights reserved.</p>
      </footer>
    </>
  );
}
