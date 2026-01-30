"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { ArrowRight } from "lucide-react";
import { HomepageDiscover, HomepageFounders, HomepageMap } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/api";

interface HomeContentProps {
  discoverEn?: HomepageDiscover;
  discoverDe?: HomepageDiscover;
  foundersEn?: HomepageFounders;
  foundersDe?: HomepageFounders;
  mapEn?: HomepageMap;
  mapDe?: HomepageMap;
}

export default function HomeContent({
  discoverEn, discoverDe,
  foundersEn, foundersDe,
  mapEn, mapDe
}: HomeContentProps) {
  const { t: tFunc, language } = useLanguage();
  const isDe = language === 'de';

  const discover = isDe ? discoverDe : discoverEn;
  const founders = isDe ? foundersDe : foundersEn;
  const mapData = isDe ? mapDe : mapEn;

  // Discover
  const dLabel = discover?.label || tFunc("home.discover.label");
  const dTitle = discover?.title || tFunc("home.discover.title");
  const dText1 = discover?.text1 || tFunc("home.discover.p1");
  const dText2 = discover?.text2 || tFunc("home.discover.p2");
  const dCta = discover?.cta || tFunc("home.discover.cta");

  // Founders
  const fLabel = founders?.label || tFunc("home.founders.label");
  const fTitle = founders?.title || tFunc("home.founders.title");
  const fText = founders?.text || tFunc("home.founders.p1");
  const fCta = founders?.cta || tFunc("home.founders.cta");
  const fList = founders?.list || [
    tFunc("home.founders.list1"),
    tFunc("home.founders.list2"),
    tFunc("home.founders.list3")
  ];
  const fImage = getStrapiMedia(founders?.image?.url || null) || "https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp";

  // Map
  const mLabel = mapData?.label || tFunc("home.map.label");
  const mTitle = mapData?.title || tFunc("home.map.title");
  const mText = mapData?.text || tFunc("home.map.p1");
  const mMapImage = getStrapiMedia(mapData?.image?.url || null) || "https://slowmoto.tours/wp-content/uploads/Slow-Moto-Tours-Overview-Map-South-India-Kochi-Goa.webp";

  return (
    <>
      {/* Discover Southern India Section */}
      <section className="py-24 bg-white/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{dLabel}</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-dark mb-8 uppercase">{dTitle}</h3>
          <div className="bg-white/60 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm backdrop-blur-sm">
            <p className="text-xl leading-relaxed text-dark opacity-90 mb-6">
              {dText1}
            </p>
            <p className="text-lg leading-relaxed text-dark opacity-80 mb-8">
              {dText2}
            </p>
            <Link href="/tours" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group">
              {dCta} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full border-8 border-white shadow-2xl relative z-10">
              <img
                src={fImage}
                alt="Jo and Pratish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{fLabel}</h2>
            <h3 className="text-4xl font-bold text-dark mb-6 uppercase">{fTitle}</h3>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              {fText}
            </p>
            <div className="space-y-4 mb-8">
              {fList.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-dark/70">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-block bg-dark text-light px-8 py-3 rounded-md font-bold hover:bg-black transition-colors">
              {fCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-dark text-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{mLabel}</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">{mTitle}</h3>
          <p className="max-w-2xl mx-auto opacity-70">{mText}</p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <img
            src={mMapImage}
            alt="South India Tour Map"
            className="w-full h-auto rounded-xl shadow-2xl brightness-90 hover:brightness-100 transition-all duration-700"
          />
        </div>
      </section>
    </>
  );
}
