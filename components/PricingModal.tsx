"use client";

import Modal from "./Modal";
import { User, Users, BedDouble } from "lucide-react";

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Pricing">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Pricing for your 6 days adventure motorcycle trips</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rider */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <User size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">Rider</h4>
                        <div className="text-3xl font-bold text-primary mb-4">€ 1390,-</div>
                        <p className="text-sm text-dark/70 leading-relaxed">
                            per rider in double room.<br />
                            Only available when booking with own room partner.<br />
                            As a single rider, please add single room supplement.
                        </p>
                    </div>

                    {/* Pillion */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <Users size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">Pillion</h4>
                        <div className="text-3xl font-bold text-primary mb-4">€ 1140,-</div>
                        <p className="text-sm text-dark/70 leading-relaxed">
                            per pillion in double room.<br />
                            Only available when booking with own riding- and room- partner.
                        </p>
                    </div>

                    {/* Single Room */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                            <BedDouble size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">Single Room</h4>
                        <div className="text-3xl font-bold text-primary mb-4">€ 150,-</div>
                        <p className="text-sm text-dark/70 leading-relaxed">
                            supplement per person.<br />
                            Prices include 5% Indian "Goods and Service Tax".
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
