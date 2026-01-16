import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import TheBike from "@/components/TheBike";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import Gallery from "@/components/Gallery";
import BottomContent from "@/components/BottomContent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Values />
        <HomeContent />
        <Gallery />
        <TheBike />
        <Testimonials />
        <BottomContent />
      </main>

      <Footer />
    </div>
  );
}
