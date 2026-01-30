"use client";
import Modal from "./Modal";
import { MapPin, Clock, Gauge, Users, Plane, Info } from "lucide-react";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface QuickFactsModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function QuickFactsModal({ isOpen, onClose, tour }: QuickFactsModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.quick_facts;

    // Fallback to empty strings if no tour is provided
    const factsData = tour ? (language === 'de' && tour.quickFactsDe ? { ...tour.quickFacts, ...tour.quickFactsDe } : tour.quickFacts) : null;

    const facts = [
        { icon: MapPin, label: t.starts_ends, value: factsData?.startEnd || "Kochi, Kerala, India" },
        { icon: Clock, label: t.duration, value: factsData?.tourDuration || "Select a tour for details" },
        { icon: Gauge, label: t.distance, value: factsData?.totalDistance || "Select a tour for details" },
        { icon: Users, label: t.group_size, value: factsData?.bikesMax || "6 Bikes max" },
        { icon: Plane, label: t.airport, value: factsData?.airport || "Kochi / Cochin / COK" },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <p className="text-lg text-dark/80 font-medium italic">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facts.map((fact, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                            <fact.icon className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                            <div>
                                <h5 className="font-bold text-dark">{fact.label}</h5>
                                <p className="text-dark/80 text-sm">{fact.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {factsData?.pillionNote && (
                    <div className="flex items-start p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <Info className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                        <p className="text-dark/80 text-sm leading-relaxed">
                            {factsData.pillionNote}
                        </p>
                    </div>
                )}
            </div>
        </Modal>
    );
}
