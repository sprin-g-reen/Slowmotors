"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function Testimonials() {
    const { language } = useLanguage();
    const t = translations[language].home.testimonials;

    const testimonialsData = [
        {
            name: "Oliver Pokorny",
            text: t.t1,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Oliver-Pokorny-Profile-Pic.webp"
        },
        {
            name: "Peter Hoffman",
            text: t.t2,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Peter-Hoffman-Profile-Pic.webp"
        },
        {
            name: "Sarah Jenkins",
            text: t.t3,
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{t.label}</h2>
                    <h3 className="text-4xl font-bold text-dark uppercase">{t.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-zinc-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Quote className="text-secondary/20 absolute top-6 right-6 w-12 h-12" />

                            <div className="flex mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                                ))}
                            </div>

                            <p className="text-dark/80 italic mb-8 relative z-10">&quot;{item.text}&quot;</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-dark">{item.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
