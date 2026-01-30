"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { useRef } from "react";
import { HomepageTestimonials } from "@/types/strapi";

interface TestimonialsProps {
    dataEn?: HomepageTestimonials;
    dataDe?: HomepageTestimonials;
}

export default function Testimonials({ dataEn, dataDe }: TestimonialsProps) {
    const { language } = useLanguage();
    const t = translations[language].home.testimonials;
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const isDe = language === 'de';
    const data = isDe ? dataDe : dataEn;
    const label = data?.label || t.label;
    const title = data?.title || t.title;

    const testimonialsData = [
        {
            name: "Peter Birch",
            text: t.peter_birch,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Peter-Birch-Profile-Pic.webp",
            country: "NZ"
        },
        {
            name: "Marc Newman",
            text: t.marc_newman,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Marc-Newman-Profile-Pic.webp",
            country: "AU"
        },
        {
            name: "Rob Bridgewater",
            text: t.rob_bridgewater,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Rob-Bridgewater-Profile-Pic.webp",
            country: "GB"
        },
        {
            name: "Peter Schaechinger",
            text: t.peter_schaechinger,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Peter-Schaechinger-Profile-Pic.webp",
            country: "DE"
        },
        {
            name: "Harald Richter",
            text: t.harald_richter,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Harald-Richter-Profile-Pic.webp",
            country: "AT"
        },
        {
            name: "Nigel Lambert",
            text: t.nigel_lambert,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Nigel-Lambert-Profile-Pic.webp",
            country: "GB"
        },
        {
            name: "Kirsten Tisch",
            text: t.kirsten_tisch,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Kirsten-Tisch-Profile-Pic.webp",
            country: "AT"
        },
        {
            name: "Oliver Pokorny",
            text: t.oliver_pokorny,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Oliver-Pokorny-Profile-Pic.webp",
            country: "AT"
        },
        {
            name: "Peter Hofmann",
            text: t.peter_hofmann,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Peter-Hoffman-Profile-Pic.webp",
            country: "DE"
        },
        {
            name: "Peter Jahn",
            text: t.peter_jahn,
            rating: 5,
            image: "https://slowmoto.tours/wp-content/uploads/Peter-Jahn-Profile-Pic.webp",
            country: "AT"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-secondary text-lg font-bold uppercase tracking-widest mb-4">{label}</h2>
                    <h3 className="text-4xl font-bold text-dark uppercase">{title}</h3>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonialsData.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="min-w-[300px] md:min-w-[400px] bg-zinc-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow snap-center flex flex-col"
                            >
                                <Quote className="text-secondary/20 absolute top-6 right-6 w-12 h-12" />

                                <div className="flex mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                                    ))}
                                </div>

                                <p className="text-dark/80 italic mb-8 relative z-10 flex-grow text-sm md:text-base leading-relaxed">
                                    &quot;{item.text}&quot;
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">{item.name}</h4>
                                        <span className="text-xs font-bold text-gray-400">{item.country}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-dark p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-20 hidden md:flex"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-dark p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-20 hidden md:flex"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
