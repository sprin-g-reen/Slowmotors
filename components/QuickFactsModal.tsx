"use client";

import Modal from "./Modal";
import { MapPin, Clock, Gauge, Users, Plane, Info } from "lucide-react";

interface QuickFactsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuickFactsModal({ isOpen, onClose }: QuickFactsModalProps) {
    const facts = [
        { icon: MapPin, label: "Starts and Ends", value: "Kochi, Kerala, India" },
        { icon: Clock, label: "Tour Duration", value: "6 Days / 5 Nights / 4 Days on the Enfield" },
        { icon: Gauge, label: "Total Distance", value: "480 km (Avg 4.5 hrs/day)" },
        { icon: Users, label: "Group Size", value: "6 Bikes max" },
        { icon: Plane, label: "Nearest Airport", value: "Kochi / Cochin / COK" },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Quick Facts">
             <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Quick Facts</h3>
                    <p className="text-lg text-dark/80">to your adventure motorcycle trips</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facts.map((fact, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <fact.icon className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                            <div>
                                <h5 className="font-bold text-dark">{fact.label}</h5>
                                <p className="text-dark/80">{fact.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-start p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <Info className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <p className="text-dark/80 text-sm leading-relaxed">
                        Short stretches may be unsuitable for pillion riders. In such cases, pillion riders have a place in our support vehicle.
                    </p>
                </div>
            </div>
        </Modal>
    );
}
