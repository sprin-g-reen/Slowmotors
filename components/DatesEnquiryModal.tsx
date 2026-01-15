"use client";

import Modal from "./Modal";

interface DatesEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DatesEnquiryModal({ isOpen, onClose }: DatesEnquiryModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Dates and Enquiry">
            <div className="space-y-8">
                {/* Intro Text */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Dates for your adventure motorcycle trips</h3>
                    <p className="text-lg text-dark/80 font-medium">Will be back in season 26/27!</p>
                </div>

                {/* Dates Table (Example structure) */}
                <div className="overflow-x-auto border border-gray-100 rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-dark uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">Start Date</th>
                                <th className="px-6 py-4">End Date</th>
                                <th className="px-6 py-4">Availability</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                             {/* Example Row */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium">Nov 15, 2026</td>
                                <td className="px-6 py-4 font-medium">Nov 20, 2026</td>
                                <td className="px-6 py-4 text-green-600 font-bold">Available</td>
                                <td className="px-6 py-4">
                                    <button className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-orange-600 transition-colors">
                                        ENQUIRE
                                    </button>
                                </td>
                            </tr>
                             <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium">Dec 01, 2026</td>
                                <td className="px-6 py-4 font-medium">Dec 06, 2026</td>
                                <td className="px-6 py-4 text-orange-500 font-bold">Few Seats</td>
                                <td className="px-6 py-4">
                                    <button className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-orange-600 transition-colors">
                                        ENQUIRE
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Enquiry Form */}
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-dark mb-4">Make an Enquiry</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-dark/70 mb-1">Name</label>
                                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dark/70 mb-1">Email</label>
                                <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark/70 mb-1">Message</label>
                            <textarea className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" rows={3} placeholder="Tell us about your trip plans..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-dark text-white font-bold py-3 rounded-md hover:bg-black transition-colors">
                            SEND ENQUIRY
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
