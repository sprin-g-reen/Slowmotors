"use client";
import Modal from "./Modal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface BookingProcessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingProcessModal({ isOpen, onClose }: BookingProcessModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.booking;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <p className="text-lg text-dark/80 font-medium italic">{t.subtitle}</p>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-4 space-y-12 pl-10 pb-4">
                    {t.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -left-[53px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary font-bold text-lg shadow-md border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {index + 1}
                            </div>
                            <div className="pt-1">
                                <h4 className="font-bold text-dark text-xl mb-3 tracking-tight uppercase">{step.title}</h4>
                                <p className="text-dark/80 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
