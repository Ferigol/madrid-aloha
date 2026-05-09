import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import AlohaHome from "@/components/AlohaHome";
import Universities from "@/components/Universities";
import AlohaProperty from "@/components/AlohaProperty";
import AlohaCleaning from "@/components/AlohaCleaning";
import StoryScroll from "@/components/StoryScroll";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroStats />
      <StoryScroll>
        <AlohaHome />
        <AlohaProperty />
        <AlohaCleaning />
      </StoryScroll>
      <Team />
      <Universities />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
