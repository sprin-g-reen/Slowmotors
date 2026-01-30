"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { HomepageHero } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/api";

interface HeroProps {
    dataEn?: HomepageHero;
    dataDe?: HomepageHero;
}

export default function Hero({ dataEn, dataDe }: HeroProps) {
    const { t: tFunc, language } = useLanguage();

    // Choose data based on language or fallback
    const data = language === 'de' ? dataDe : dataEn;

    // Fallback logic could optionally use tFunc if data is null, 
    // but here we prefer to gracefully handle potential nulls 
    // by falling back to tFunc values if specific field missing? 
    // Or just prefer tFunc calls if data completely missing.

    const title = data?.title || tFunc("hero.title");
    const subtitle = data?.subtitle || tFunc("hero.subtitle");
    const cta = data?.cta || tFunc("hero.cta");
    // Hardcoded fallback image from original file if no strapi image
    const bgImage = getStrapiMedia(data?.image?.url || null) || 'https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp';

    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-light text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-light text-xl md:text-2xl mb-10 font-medium opacity-90 drop-shadow-md"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="/tours"
                        className="inline-block bg-primary hover:bg-green-700 text-light px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
                    >
                        {cta}
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-4 bg-white"
                    />
                </div>
            </div>
        </section>
    );
}
