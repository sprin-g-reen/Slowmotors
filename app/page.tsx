import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import TheBike from "@/components/TheBike";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Values />

        {/* Discover Southern India Section */}
        <section className="py-24 bg-white/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">Discover</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-dark mb-8 uppercase">Southern India</h3>
            <div className="bg-white/60 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm backdrop-blur-sm">
              <p className="text-xl leading-relaxed text-dark opacity-90 mb-6">
                From the lush backwaters of Kerala to the vibrant beaches of Goa, Southern India is a rider's paradise. Our guided tours take you through winding mountain roads, ancient temples, and aromatic spice plantations.
              </p>
              <p className="text-lg leading-relaxed text-dark opacity-80 mb-8">
                Experience the true essence of India, moving at a pace that allows you to absorb every detail. This isn't just a motorcycle tour; it's a journey into the soul of a culture.
              </p>
              <a href="/tours" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group">
                EXPLORE OUR TOURS <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full border-8 border-white shadow-2xl relative z-10">
                <img
                  src="https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp"
                  alt="Jo and Pratish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>

            <div>
              <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">The Founders</h2>
              <h3 className="text-4xl font-bold text-dark mb-6 uppercase">Jo & Pratish</h3>
              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                Slow Moto Tours was born from a shared passion for exploration, motorcycles, and the rich tapestry of Indian life. Jo and Pratish believe in "Slow Travel" – the art of taking it all in, one mile at a time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-dark/70">15+ years of experience leading tours in India.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-dark/70">Expert knowledge of local routes and hidden gems.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-dark/70">Deep commitment to sustainable and respectful tourism.</p>
                </div>
              </div>
              <a href="/about" className="inline-block bg-dark text-light px-8 py-3 rounded-md font-bold hover:bg-black transition-colors">
                OUR PHILOSOPHY
              </a>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-dark text-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">Our Area</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">RIDERS PARADISE</h3>
            <p className="max-w-2xl mx-auto opacity-70">From Kochi to Goa, we've mapped out the most scenic, soulful, and satisfying routes for any rider.</p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <img
              src="https://slowmoto.tours/wp-content/uploads/Slow-Moto-Tours-Overview-Map-South-India-Kochi-Goa.webp"
              alt="South India Tour Map"
              className="w-full h-auto rounded-xl shadow-2xl brightness-90 hover:brightness-100 transition-all duration-700"
            />
          </div>
        </section>

        <TheBike />
        <Testimonials />

      </main>

      <Footer />
    </div>
  );
}
