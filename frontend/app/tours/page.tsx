"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { fetchAPI, getStrapiMedia } from "@/lib/api";
import { blocksToText } from "@/lib/strapiBlocks";
import { Tour } from '@/types/strapi';
import { useState, useEffect } from "react";

export default function ToursPage() {
    const { language } = useLanguage();
    const t = translations[language].tours;

    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTours = async () => {
            setLoading(true);
            try {
                const res = await fetchAPI('/tours', { populate: '*', locale: language });
                // Strapi v5 returns { data: [...] }
                setTours(res.data);
            } catch (error) {
                console.error("Failed to fetch tours:", error);
            } finally {
                setLoading(false);
            }
        };
        loadTours();
    }, [language]);

    return (
        <>
            <Header />
            <SubPageLayout
                title={t.title}
                subtitle={t.subtitle}
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.map((tour) => {
                                // Strapi returns localized content directly in 'title', 'subtitle', etc.
                                const imageUrl = getStrapiMedia(tour.image?.url || null);

                                return (
                                    <div key={tour.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                                        <div className="relative h-56 w-full">
                                            <Image
                                                src={imageUrl || '/images/placeholder.jpg'} // Fallback image
                                                alt={tour.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold uppercase text-gray-900">{tour.title}</h3>
                                                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                                                    {tour.duration}
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-500 mb-3">{tour.subtitle}</h4>
                                            <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                                                {typeof tour.description === 'string' ? tour.description : blocksToText(tour.description)}
                                            </p>
                                            <Link
                                                href={`/tours/${tour.slug}`}
                                                className="block text-center w-full py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors uppercase text-sm"
                                            >
                                                {t.view_details}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
