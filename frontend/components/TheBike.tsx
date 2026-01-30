"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function TheBike() {
    const { language } = useLanguage();
    const t = translations[language].home.the_bike;

    return (
        <section className="py-24 bg-secondary/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-primary text-lg font-bold uppercase tracking-widest mb-4">{t.label}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-dark mb-8 uppercase">{t.title}</h3>
                    <p className="text-xl text-dark/80 leading-relaxed mb-6">
                        {t.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-tight">{t.himalayan.title}</h4>
                            <p className="text-sm opacity-70">{t.himalayan.desc}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-tight">{t.classic_500.title}</h4>
                            <p className="text-sm opacity-70">{t.classic_500.desc}</p>
                        </div>
                    </div>
                    <p className="text-lg text-dark/70 font-medium italic mb-8">
                        &quot;{t.quote}&quot;
                    </p>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2">
                            <img
                                src="https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp"
                                alt="Royal Enfield Himalayan"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Decal / Accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 mix-blend-multiply opacity-20 blur-xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 mix-blend-multiply opacity-20 blur-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
