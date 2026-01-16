"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

const galleryImages = [
    "https://slowmoto.tours/wp-content/uploads/Rustic-Ox-Cart.webp",
    "https://slowmoto.tours/wp-content/uploads/Backwaters.webp",
    "https://slowmoto.tours/wp-content/uploads/Virgin-Beach.webp",
    "https://slowmoto.tours/wp-content/uploads/Country-Road-Yellow-Blossoms.webp",
    "https://slowmoto.tours/wp-content/uploads/Theyem.webp",
    "https://slowmoto.tours/wp-content/uploads/View-to-Munnar.webp",
    "https://slowmoto.tours/wp-content/uploads/Comunist-Paddy-Fields.webp",
    "https://slowmoto.tours/wp-content/uploads/Country-Road-Greenery.webp",
    "https://slowmoto.tours/wp-content/uploads/Munnar-Tea-Plantations.webp",
    "https://slowmoto.tours/wp-content/uploads/Dhanagiri-Misty-Morning.webp",
    "https://slowmoto.tours/wp-content/uploads/Hundu-Temple.webp",
    "https://slowmoto.tours/wp-content/uploads/Red-Sunset.webp",
    "https://slowmoto.tours/wp-content/uploads/Jungle-River.webp",
    "https://slowmoto.tours/wp-content/uploads/Misty-Cliff.webp",
    "https://slowmoto.tours/wp-content/uploads/Kodaikanal.webp",
    "https://slowmoto.tours/wp-content/uploads/Hasanr-Sunset.webp",
    "https://slowmoto.tours/wp-content/uploads/Comedy-Performance.webp",
    "https://slowmoto.tours/wp-content/uploads/Seashell-from-Beach.webp",
    "https://slowmoto.tours/wp-content/uploads/Country-Road-Pastel-Houses.webp",
    "https://slowmoto.tours/wp-content/uploads/Streetlife-Sunset.webp",
    "https://slowmoto.tours/wp-content/uploads/Palms-mirroring-in-River.webp",
    "https://slowmoto.tours/wp-content/uploads/Road-to-Mountains-with-Rusty-Sign.webp",
    "https://slowmoto.tours/wp-content/uploads/Wayanad-Dam-and-Mountains.webp",
    "https://slowmoto.tours/wp-content/uploads/Roadside-Shrine.webp",
    "https://slowmoto.tours/wp-content/uploads/Seashell-Beach.webp",
    "https://slowmoto.tours/wp-content/uploads/Tea-Plantation-Road.webp",
    "https://slowmoto.tours/wp-content/uploads/View-over-Wayanad.webp"
];

export default function Gallery() {
    const { language } = useLanguage();
    const t = translations[language].home.gallery;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{t.label}</h2>
                    <h3 className="text-4xl font-bold text-dark uppercase">{t.title}</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
