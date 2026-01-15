"use client";

import Modal from "./Modal";
import { FileText, ShieldCheck, HardHat } from "lucide-react";

interface RequirementsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequirementsModal({ isOpen, onClose }: RequirementsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Requirements">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Requirements</h3>
                    <p className="text-lg text-dark/80">Are you ready?</p>
                </div>

                <div className="space-y-6">
                    {/* Documents */}
                    <div className="flex items-start">
                        <div className="bg-blue-50 p-3 rounded-full mr-4">
                            <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark text-lg mb-2">Documents</h4>
                            <ul className="list-disc list-inside text-dark/80 space-y-1">
                                <li>Valid passport</li>
                                <li>Visa (get it <a href="https://indianvisaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>)</li>
                                <li>Valid international driving license for 350ccm motorbikes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Insurance */}
                    <div className="flex items-start">
                         <div className="bg-green-50 p-3 rounded-full mr-4">
                            <ShieldCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark text-lg mb-2">Insurance</h4>
                            <p className="text-dark/80">
                                International travel insurance covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad.
                            </p>
                        </div>
                    </div>

                    {/* Gear */}
                    <div className="flex items-start">
                         <div className="bg-orange-50 p-3 rounded-full mr-4">
                            <HardHat className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark text-lg mb-2">Personal Protective Equipment</h4>
                            <div className="mb-2">
                                <span className="font-bold text-sm uppercase text-red-500 tracking-wider">Mandatory</span>
                                <ul className="list-disc list-inside text-dark/80">
                                    <li>Helmet (we might have one, please check in advance)</li>
                                    <li>Proper shoes and gloves</li>
                                </ul>
                            </div>
                            <div>
                                <span className="font-bold text-sm uppercase text-primary tracking-wider">Highly Recommended</span>
                                <ul className="list-disc list-inside text-dark/80">
                                    <li>Protective clothing</li>
                                    <li>Raingear</li>
                                    <li>Dust protection</li>
                                    <li>Sunglasses and sun screen lotion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
