"use client";
import Modal from "./Modal";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface ItineraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function ItineraryModal({ isOpen, onClose, tour }: ItineraryModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.itinerary;

    const itinerary = tour ? (language === 'de' && tour.itineraryDe ? tour.itineraryDe.map((item, idx) => ({ ...tour.itinerary[idx], ...item })) : tour.itinerary) : [];
    const totalKm = tour?.quickFacts.totalDistance || "0 km";

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <div className="flex justify-center items-center gap-4 text-dark/70 font-bold italic">
                        <span>{t.overview}</span>
                        <span className="text-primary">•</span>
                        <span>{totalKm}</span>
                    </div>
                </div>

                {!tour ? (
                    <div className="text-center py-12 text-dark/50 font-medium">
                        Select a tour to view the day-by-day itinerary.
                    </div>
                ) : (
                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-10 pl-8 md:pl-10 pb-4">
                        {itinerary.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[41px] md:-left-[49px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-md z-10 transition-transform hover:scale-110"></span>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-3">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-md">
                                            {t.day} {item.day}
                                        </span>
                                        <span className="hidden md:inline text-gray-200">|</span>
                                        <span className="text-sm font-bold text-dark/60 italic">{item.km}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-dark mb-3 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-dark/80 leading-relaxed text-sm md:text-base font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Modal>
    );
}
