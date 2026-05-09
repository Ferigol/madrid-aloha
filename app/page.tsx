import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import AlohaHome from "@/components/AlohaHome";
import Universities from "@/components/Universities";
import AlohaProperty from "@/components/AlohaProperty";
import AlohaCleaning from "@/components/AlohaCleaning";
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
      <Universities />
      <AlohaHome />
      <AlohaProperty />
      <AlohaCleaning />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
