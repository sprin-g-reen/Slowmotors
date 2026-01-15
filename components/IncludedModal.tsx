"use client";

import Modal from "./Modal";
import { Check, Wallet, CreditCard } from "lucide-react";

interface IncludedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function IncludedModal({ isOpen, onClose }: IncludedModalProps) {
    const services = [
        "Royal Enfield Classic 350 motorbike including gas and kilometers",
        "English speaking tour guide and support crew",
        "A dedicated Royal Enfield mechanic is with us all the time",
        "Support truck for luggage and spare equipment",
        "Accommodation (Double Room or Single Accommodation according to your booking)",
        "Breakfast, lunch and dinner",
        "All non-alcoholic drinks",
        "Insurance for the bike (covering material damage to the motorbike and third parties)",
        "Entrance fees for sights, nature reserves, road tolls",
        "Oceans, rivers, swimming pools",
        "Our gratitude for booking with us :-)"
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Included">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Included in your adventure motorcycle trips</h3>
                    <p className="text-lg text-dark/80">Carefree package</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <ul className="space-y-4">
                        {services.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-dark/80">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg border border-gray-100 flex items-start">
                        <Wallet className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h5 className="font-bold text-dark mb-1">Pocket Money</h5>
                            <p className="text-sm text-dark/70">
                                Recommended: 15 to 30 €uro / 1.500 to 3.000 INR per day for shopping, alcohol, etc.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-100 flex items-start">
                        <CreditCard className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h5 className="font-bold text-dark mb-1">Payments</h5>
                            <p className="text-sm text-dark/70">
                                Credit cards accepted at big places. Digital payments (Google Pay) are common. ATMs available but variable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
