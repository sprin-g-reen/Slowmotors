"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: "url('https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp')",
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
                    {t("hero.title")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-light text-xl md:text-2xl mb-10 font-medium opacity-90 drop-shadow-md"
                >
                    {t("hero.subtitle")}
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
                        {t("hero.cta")}
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
