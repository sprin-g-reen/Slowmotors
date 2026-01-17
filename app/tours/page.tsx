"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import Image from "next/image";
import Link from "next/link";
import { TOURS_DATA } from "@/app/data/tours";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function ToursPage() {
    const { language } = useLanguage();
    const t = translations[language].tours;

    return (
        <>
            <Header />
            <SubPageLayout
                title={t.title}
                subtitle={t.subtitle}
                bgImage="https://slowmoto.tours/wp-content/uploads/2024/09/sunset-mountains-misty-view-Desktop.webp"
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TOURS_DATA.map((tour) => {
                             const title = language === 'de' && tour.titleDe ? tour.titleDe : tour.title;
                             const subtitle = language === 'de' && tour.subtitleDe ? tour.subtitleDe : tour.subtitle;
                             const description = language === 'de' && tour.descriptionDe ? tour.descriptionDe : tour.description;

                             return (
                                <div key={tour.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                                    <div className="relative h-56 w-full">
                                        <Image
                                            src={tour.image}
                                            alt={tour.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold uppercase text-gray-900">{title}</h3>
                                            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                                                {tour.duration}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-gray-500 mb-3">{subtitle}</h4>
                                        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
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
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
