"use client";
import Modal from "./Modal";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface FaqModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function FaqModal({ isOpen, onClose, tour }: FaqModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.faq;

    // Explicit list for the general modal, but context-aware if tour is provided
    const holidaysFaq = translations[language].holidays.faq;
    const tourFaq = tour ? (language === 'de' && tour.faqDe ? tour.faqDe : tour.faq) : null;

    const displayFaqs = tourFaq || [
        { q: holidaysFaq.q1, a: holidaysFaq.a1 },
        { q: holidaysFaq.q2, a: holidaysFaq.a2 },
        { q: holidaysFaq.q3, a: holidaysFaq.a3 },
        { q: holidaysFaq.q4, a: holidaysFaq.a4 },
        { q: holidaysFaq.q5, a: holidaysFaq.a5 },
        { q: holidaysFaq.q6, a: holidaysFaq.a6 }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <p className="text-lg text-dark/80 font-medium italic">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {displayFaqs.map((item: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h5 className="font-bold text-dark mb-3 text-lg tracking-tight">{(item.q || item.question)}</h5>
                            <p className="text-dark/80 text-sm leading-relaxed font-medium">{(item.a || item.answer)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
