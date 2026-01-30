"use client";
import Modal from "./Modal";
import { FileText, ShieldCheck, HardHat } from "lucide-react";
import { TranslatedTour } from "@/app/data/tours";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

interface RequirementsModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour?: TranslatedTour;
}

export default function RequirementsModal({ isOpen, onClose, tour }: RequirementsModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.requirements;

    const requirements = tour ? (language === 'de' && tour.requirementsDe ? tour.requirementsDe : tour.requirements) : [];

    // Fallback logic for general requirements if no tour is provided
    const displayRequirements = requirements.length > 0 ? requirements : [
        "valid passport",
        "visa",
        "valid international driving license",
        "international travel insurance",
        "personal protective equipment"
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                    <p className="text-lg text-dark/80 font-medium italic">{t.subtitle}</p>
                </div>

                <div className="space-y-8">
                    {/* Documents */}
                    <div className="flex items-start">
                        <div className="bg-primary/10 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-sm">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-bold text-dark text-xl mb-3 tracking-tight">{t.documents}</h4>
                            <ul className="space-y-2">
                                {displayRequirements.filter(r => r.toLowerCase().includes('passport') || r.toLowerCase().includes('visa') || r.toLowerCase().includes('license')).map((req, idx) => (
                                    <li key={idx} className="flex items-start text-dark/80 font-medium">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span dangerouslySetInnerHTML={{ __html: req.replace(/https:\/\/\S+/g, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${url.includes('indianvisa') ? 'here' : url}</a>`) }}></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Insurance */}
                    <div className="flex items-start">
                        <div className="bg-primary/10 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-sm">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-bold text-dark text-xl mb-3 tracking-tight">{t.insurance}</h4>
                            <p className="text-dark/80 font-medium leading-relaxed">
                                {displayRequirements.find(r => r.toLowerCase().includes('insurance')) || "International travel insurance covering medical costs abroad is mandatory."}
                            </p>
                        </div>
                    </div>

                    {/* Gear */}
                    <div className="flex items-start">
                        <div className="bg-primary/10 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-sm">
                            <HardHat className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-bold text-dark text-xl mb-3 tracking-tight">{t.gear}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <span className="inline-block font-bold text-[10px] uppercase text-red-500 tracking-widest mb-2 border border-red-200 px-2 py-0.5 rounded-full bg-red-50">{t.mandatory}</span>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center text-dark/80 text-sm font-medium">
                                            <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                                            Helmet
                                        </li>
                                        <li className="flex items-center text-dark/80 text-sm font-medium">
                                            <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                                            Proper shoes and gloves
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="inline-block font-bold text-[10px] uppercase text-primary tracking-widest mb-2 border border-primary/20 px-2 py-0.5 rounded-full bg-primary/5">{t.recommended}</span>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center text-dark/80 text-sm font-medium">
                                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                            Protective clothing & Raingear
                                        </li>
                                        <li className="flex items-center text-dark/80 text-sm font-medium">
                                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                            Sun screen & Sunglasses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
