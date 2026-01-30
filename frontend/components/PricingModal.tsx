"use client";
import Modal from "./Modal";
import { User, Users, BedDouble } from "lucide-react";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function PricingModal({ isOpen, onClose, tour }: PricingModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.pricing;

    const pricing = tour?.pricing || { rider: 0, pillion: 0, singleRoom: 0 };
    const duration = tour?.duration || "your";

    const title = t.title.replace("{duration}", duration);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.rider}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rider */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <User size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">{t.rider}</h4>
                        <div className="text-3xl font-bold text-primary mb-4">
                            {pricing.rider > 0 ? `€ ${pricing.rider},-` : "Custom"}
                        </div>
                        <p className="text-sm text-dark/70 leading-relaxed font-medium">
                            {t.rider_note}
                        </p>
                    </div>

                    {/* Pillion */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <Users size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">{t.pillion}</h4>
                        <div className="text-3xl font-bold text-primary mb-4">
                            {pricing.pillion > 0 ? `€ ${pricing.pillion},-` : "Custom"}
                        </div>
                        <p className="text-sm text-dark/70 leading-relaxed font-medium">
                            {t.pillion_note}
                        </p>
                    </div>

                    {/* Single Room */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <BedDouble size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">{t.single_room}</h4>
                        <div className="text-3xl font-bold text-primary mb-4">
                            {pricing.singleRoom > 0 ? `€ ${pricing.singleRoom},-` : "Custom"}
                        </div>
                        <p className="text-sm text-dark/70 leading-relaxed font-medium">
                            {t.single_note}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
