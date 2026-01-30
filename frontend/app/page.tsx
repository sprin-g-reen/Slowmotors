import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import TheBike from "@/components/TheBike";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import Gallery from "@/components/Gallery";
import BottomContent from "@/components/BottomContent";
import { fetchAPI } from "@/lib/api";
import { Homepage } from "@/types/strapi";

export default async function Home() {
  let homepageData: Homepage | null = null;
  let homepageDe: Homepage | null = null;

  try {
    // Fetch EN (default) and DE separately using the token
    const resEn = await fetchAPI('/homepage', { populate: '*', locale: 'en' });
    homepageData = resEn.data;

    const resDe = await fetchAPI('/homepage', { populate: '*', locale: 'de' });
    homepageDe = resDe.data;

  } catch (e) {
    console.error("Failed to fetch homepage data", e);
  }

  // We pass BOTH to the components, and let them choose based on context ??
  // OR we pass a merged object that contains "hero" (en) and "heroDe" (de)?
  // The components are Client Components using `useLanguage`.
  // If I pass `dataEn` and `dataDe` props, they can switch.

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero dataEn={homepageData?.hero} dataDe={homepageDe?.hero} />
        <Values />
        <HomeContent
          discoverEn={homepageData?.discover} discoverDe={homepageDe?.discover}
          foundersEn={homepageData?.founders} foundersDe={homepageDe?.founders}
          mapEn={homepageData?.map} mapDe={homepageDe?.map}
        />
        <Gallery />
        <TheBike />
        <Testimonials dataEn={homepageData?.testimonials} dataDe={homepageDe?.testimonials} />
        <BottomContent dataEn={homepageData?.bottomContent} dataDe={homepageDe?.bottomContent} />
      </main>

      <Footer />
    </div>
  );
}
