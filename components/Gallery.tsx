"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

const galleryImages = [
    "https://slowmoto.tours/wp-content/uploads/Cherai-Beach-Front.webp",
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                            onClick={() => setSelectedImage(src)}
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

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Enlarged Gallery Image"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
