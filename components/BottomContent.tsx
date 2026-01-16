"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export default function BottomContent() {
    const { language } = useLanguage();
    const t = translations[language].home.bottom_content;

    return (
        <>
            {/* Discover the Magic */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{t.discover_magic.title}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed mb-6">
                        {t.discover_magic.p1}
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {t.discover_magic.p2}
                    </p>
                </div>
            </section>

            {/* Embrace the Journey */}
            <section className="py-24 bg-secondary/5 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{t.embrace_journey.title}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {t.embrace_journey.text}
                    </p>
                </div>
            </section>

            {/* All-Inclusive */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-dark mb-8">{t.all_inclusive.title}</h2>
                    <p className="text-lg text-dark/80 leading-relaxed">
                        {t.all_inclusive.text}
                    </p>
                </div>
            </section>

            {/* Adventure Awaits */}
            <section className="py-24 bg-dark text-light text-center relative overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp')] bg-cover bg-center" />

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-8">{t.adventure_awaits.title}</h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-6">
                        {t.adventure_awaits.p1}
                    </p>
                    <p className="text-lg opacity-90 leading-relaxed mb-12">
                        {t.adventure_awaits.p2}
                    </p>

                    <Link
                        href="/holidays"
                        className="inline-block bg-primary hover:bg-green-700 text-light px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
                    >
                        {t.cta}
                    </Link>
                </div>
            </section>
        </>
    );
}
