"use client";
import Modal from "./Modal";
import { Check, Wallet, CreditCard } from "lucide-react";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface IncludedModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function IncludedModal({ isOpen, onClose, tour }: IncludedModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.included;

    const includedItems = tour ? (language === 'de' && tour.includedDe ? tour.includedDe : tour.included) : translations[language].holidays.faq.a1.split(". "); // Fallback or better use a global list

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <p className="text-lg text-dark/80 font-medium italic">{t.subtitle}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {includedItems.map((item, index) => (
                            <li key={index} className="flex items-start group">
                                <div className="bg-white p-1 rounded-full shadow-sm mr-3 mt-0.5 group-hover:bg-primary transition-colors">
                                    <Check className="w-3.5 h-3.5 text-green-500 group-hover:text-white" />
                                </div>
                                <span className="text-dark/80 text-sm font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-gray-100 flex items-start bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                            <Wallet className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h5 className="font-bold text-dark mb-1 uppercase text-sm tracking-wider">{t.pocket_money}</h5>
                            <p className="text-xs text-dark/70 font-medium leading-relaxed">
                                {t.pocket_money_note}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl border border-gray-100 flex items-start bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                            <CreditCard className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h5 className="font-bold text-dark mb-1 uppercase text-sm tracking-wider">{t.payments}</h5>
                            <p className="text-xs text-dark/70 font-medium leading-relaxed">
                                {t.payments_note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
