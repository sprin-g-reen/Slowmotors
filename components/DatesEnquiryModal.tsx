import { useState } from "react";
import Modal from "./Modal";
import InquiryForm from "./InquiryForm";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";
import { TranslatedTour } from "@/app/data/tours";

interface DatesEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour: TranslatedTour | null;
}

export default function DatesEnquiryModal({ isOpen, onClose, tour }: DatesEnquiryModalProps) {
    const { language } = useLanguage();
    const t = translations[language].experience.itinerary;
    const [selectedSubject, setSelectedSubject] = useState("");

    if (!tour) return null;

    const dates = tour.dates || [
        { start: "TBA", end: "TBA", availability: language === 'de' ? "Auf Anfrage" : "On Request", status: "available" }
    ];

    const handleEnquire = (dateStr: string) => {
        setSelectedSubject(`Inquiry for Tour: ${tour.title} (${dateStr})`);
        const formElement = document.getElementById("enquiry-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={language === 'de' ? "Termine & Anfrage" : "Dates and Enquiry"}>
            <div className="space-y-8">
                {/* Intro Text */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">
                        {tour[language === 'de' ? 'titleDe' : 'title'] || tour.title}
                    </h3>
                    <p className="text-lg text-dark/80 font-medium italic">
                        {language === 'de' ? "Termine für diese Tour" : "Dates for this tour"}
                    </p>
                </div>

                {/* Dates Table */}
                <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-dark uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">{language === 'de' ? "Startdatum" : "Start Date"}</th>
                                <th className="px-6 py-4">{language === 'de' ? "Enddatum" : "End Date"}</th>
                                <th className="px-6 py-4">{language === 'de' ? "Verfügbarkeit" : "Availability"}</th>
                                <th className="px-6 py-4">{language === 'de' ? "Aktion" : "Action"}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {dates.map((date, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-dark">{date.start}</td>
                                    <td className="px-6 py-4 font-bold text-dark">{date.end}</td>
                                    <td className={`px-6 py-4 font-bold ${date.status === 'available' ? 'text-green-600' :
                                            date.status === 'warning' ? 'text-orange-500' : 'text-red-500'
                                        }`}>
                                        {language === 'de' && date.availabilityDe ? date.availabilityDe : date.availability}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleEnquire(`${date.start} - ${date.end}`)}
                                            className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-green-700 transition-all uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer"
                                        >
                                            {language === 'de' ? "ANFRAGEN" : "ENQUIRE"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Enquiry Form */}
                <div id="enquiry-form" className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner">
                    <div className="mb-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-dark mb-2 uppercase tracking-wide">
                            {language === 'de' ? "Stelle eine Anfrage" : "Make an Enquiry"}
                        </h3>
                        <p className="text-dark/60 font-medium">
                            {language === 'de' ? "Fülle das Formular aus und wir melden uns mit allen Details bei dir." : "Fill out the form below and we'll get back to you with all the details."}
                        </p>
                    </div>

                    <InquiryForm subject={selectedSubject} />
                </div>
            </div>
        </Modal>
    );
}
