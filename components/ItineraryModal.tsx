"use client";

import Modal from "./Modal";

interface ItineraryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ItineraryModal({ isOpen, onClose }: ItineraryModalProps) {
    const days = [
        {
            day: "Day 1",
            km: "0 km",
            title: "Your Arrival Day, Kochi",
            description: "Welcome to our base at the beach. Take a deep breath, relax and jump into the Arabian Sea. Have a seat on your Enfield. Meet your fellow riders and our crew over a cold drink at the dinner table and take a good night of sleep before it gets really exciting."
        },
        {
            day: "Day 2",
            km: "80 km",
            title: "Kochi to Athirappilly Falls",
            description: "We´ll take it nice and easy on your first day on the Enfields and you´ll experience an average of what to expect from upcoming traffic and road conditions. From the dense coastal region we will soon reach rural areas and finally glide over a winding road into the cooler forest climate to the impressive Athirappilly Waterfalls. Overnight we stay at a secluded contemporary Villa next to a gorgeous jungle river."
        },
        {
            day: "Day 3",
            km: "145 km",
            title: "Athirappilly Falls to Pollachi",
            description: "Four hours over beautiful roads we will ride our Enfields deeper into the forest and mountains of a wildlife sanctuary. We pass the small town of Valparai and turn North over endless curves through tea plantations and 40 hairpin bends down to the plains where we will soon reach our destination. A dreamy eco-village, nestled in a coconut grove in the tranquil countryside of Pollachi, awaits us."
        },
        {
            day: "Day 4",
            km: "120 km",
            title: "Pollachi to Munnar",
            description: "Through coconut plantations we ride our Enfields towards the rising sun to the forest check post of Anaimalai Tiger Reserve. On a small road we navigate deeper and higher into the magnificent landscapes of this wildlife sanctuary. We scratch the 2000 meters mark and find ourselves on a broad and perfect road. We reach the city of Munnar, todays destination."
        },
        {
            day: "Day 5",
            km: "135 km",
            title: "Munnar to Kochi",
            description: "On our final route we leave the beautiful hills of Munnar. With mountain views we glide slowly in two hours over winding roads in great conditions down the hills back to the Kochi area. We ride back to the coastal areas and to our starting point at the Ocean, where you might want to jump in straight away."
        },
        {
            day: "Day 6",
            km: "0 km",
            title: "Check-Out in Kochi",
            description: "Take a last dip in the Arabian Sea and carry all those memories with you. Share your amazing experience with your family and friends. Have a relaxed and safe onward journey and keep your eyes open for our next rides."
        }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Itinerary">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Itinerary for your adventure motorcycle trips</h3>
                    <div className="flex justify-center items-center gap-4 text-dark/70 font-medium">
                        <span>Overview</span>
                        <span>•</span>
                        <span>480 km</span>
                    </div>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8 pl-8 md:pl-10">
                    {days.map((item, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] md:-left-[49px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-sm z-10"></span>
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-2">
                                    <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.day}</span>
                                    <span className="hidden md:inline text-gray-300">|</span>
                                    <span className="text-sm font-bold text-dark/60">{item.km}</span>
                                </div>
                                <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                                <p className="text-dark/80 leading-relaxed text-sm md:text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
