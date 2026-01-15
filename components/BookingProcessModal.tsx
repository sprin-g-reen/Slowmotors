"use client";

import Modal from "./Modal";

interface BookingProcessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingProcessModal({ isOpen, onClose }: BookingProcessModalProps) {
    const steps = [
        {
            title: "Your Tour Selection",
            description: "Check the 'Dates and Enquiry' section for available dates. A click on the date takes you to the enquiry form."
        },
        {
            title: "Your Enquiry",
            description: "Please fill out the enquiry form. We ask for your current place of residence to provide you with the most favourable payment method. You will receive an automatic confirmation email."
        },
        {
            title: "Let´s get things going",
            description: "As soon as we can, we will contact you personally by email to discuss your enquiry, concerns and wishes."
        },
        {
            title: "Your Reservation",
            description: "When you are ready, we will send you an invoice along with our terms and conditions. Once paid, you will receive a receipt, your booking confirmation and the exact start location address."
        },
        {
            title: "See you in India",
            description: "Get all your required documents and adequate travel insurance and have a relaxed journey to South India. We´re looking forward to meeting you!"
        }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Booking Process">
             <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Booking procedure</h3>
                    <p className="text-lg text-dark/80">for your adventure motorcycle trips</p>
                </div>

                <div className="relative border-l-2 border-gray-200 ml-4 space-y-8 pl-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                             <div className="absolute -left-[42px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm shadow-md">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-dark text-lg mb-2">{step.title}</h4>
                                <p className="text-dark/80 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
