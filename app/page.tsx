import NavBar from "@/components/shared/NavBar/NavBar";
import AboutSection from "@/components/home/AboutSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import TikTokFeed from "@/c@/components/home/InstagramFeed;
@/components/home/TikTokFeed
export default function Home() {
  return (
    <>
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
