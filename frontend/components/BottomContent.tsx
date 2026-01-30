"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { HomepageBottomContent } from "@/types/strapi";

interface BottomContentProps {
    dataEn?: HomepageBottomContent;
    dataDe?: HomepageBottomContent;
}

export default function BottomContent({ dataEn, dataDe }: BottomContentProps) {
    const { t: tFunc, language } = useLanguage();
    const isDe = language === 'de';
    const data = isDe ? dataDe : dataEn;

    // We only have one section in Strapi "bottomContent" but the frontend has 4 sections hardcoded in BottomContent.tsx?
    // Wait, BottomContent.tsx has "Discover the Magic", "Embrace the Journey", "All-Inclusive", "Adventure Awaits".
    // In my Migration script I only migrated "bottomContent" mapping to "Discover the Magic".
    // Does Strapi have structure for all 4?
    // My schema map created `bottomContent` as a generic component or just field group?
    // In `migrate.js`:
    /*
        bottomContent: {
            title: en.home.bottom_content.discover_magic.title,
            text: en.home.bottom_content.discover_magic.p1, // Note: p2 lost?
            cta: en.home.bottom_content.cta
        }
    */
    // It seems I only migrated the FIRST section into `bottomContent`.
    // The other sections ("embrace_journey", "all_inclusive", "adventure_awaits") are NOT in `homepageData?.bottomContent`.
    // Strategy: Use Strapi data for the first section (if available) and keep the rest hardcoded/translated for now since they weren't fully migrated structure-wise?
    // Or did I migrate them elsewhere? No.
    // So I will use `data` for the first section "Discover the Magic", and fallback to `tFunc` for everything else.
    // Actually, `t` in original file was `translations[language].home.bottom_content` object.
    // I can continue to use `tFunc` for the static parts.

    // Derived values for the dynamic section
    const title = data?.title || tFunc("home.bottom_content.discover_magic.title");
    const text = data?.text || tFunc("home.bottom_content.discover_magic.p1");
    // Note: p2 is missing in Strapi migration logic I wrote earlier? I mapped `p1` to `text`.

    // For other sections, we must use tFunc strings.

    return (
        <>
            {/* Discover the Magic (Dynamic) */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{title}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed mb-6">
                        {text}
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {tFunc("home.bottom_content.discover_magic.p2")}
                    </p>
                </div>
            </section>

            {/* Embrace the Journey */}
            <section className="py-24 bg-secondary/5 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{tFunc("home.bottom_content.embrace_journey.title")}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {tFunc("home.bottom_content.embrace_journey.text")}
                    </p>
                </div>
            </section>

            {/* All-Inclusive */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{tFunc("home.bottom_content.all_inclusive.title")}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {tFunc("home.bottom_content.all_inclusive.text")}
                    </p>
                </div>
            </section>

            {/* Adventure Awaits */}
            <section className="py-24 bg-dark text-light text-center relative overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp')] bg-cover bg-center" />

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-8">{tFunc("home.bottom_content.adventure_awaits.title")}</h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-6">
                        {tFunc("home.bottom_content.adventure_awaits.p1")}
                    </p>
                    <p className="text-lg opacity-90 leading-relaxed mb-12">
                        {tFunc("home.bottom_content.adventure_awaits.p2")}
                    </p>

                    <Link
                        href="/holidays"
                        className="inline-block bg-primary hover:bg-green-700 text-light px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
                    >
                        {data?.cta || tFunc("home.bottom_content.cta")}
                    </Link>
                </div>
            </section>
        </>
    );
}
