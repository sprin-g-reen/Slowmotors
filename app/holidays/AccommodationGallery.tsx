"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { X } from "lucide-react";

const ACCOMMODATION_IMAGES = [
    "https://slowmoto.tours/wp-content/uploads/Cherai-Villa-inside.webp",
    "https://slowmoto.tours/wp-content/uploads/Cherai-outside-backwaters.webp",
    "https://slowmoto.tours/wp-content/uploads/Coconest-Villa-outside-2.webp",
    "https://slowmoto.tours/wp-content/uploads/Dahanagiri-inside.webp",
    "https://slowmoto.tours/wp-content/uploads/De-Rock-Bedroom.webp",
    "https://slowmoto.tours/wp-content/uploads/De-Rock-View.webp",
    "https://slowmoto.tours/wp-content/uploads/Dhanagiri-outside.webp",
    "https://slowmoto.tours/wp-content/uploads/Ecotones-outside-1.webp",
    "https://slowmoto.tours/wp-content/uploads/Ecotones-outside-2.webp",
    "https://slowmoto.tours/wp-content/uploads/Jungle-Stay-Bathroom.webp",
    "https://slowmoto.tours/wp-content/uploads/Jungle-Stay-Bedroom.webp",
    "https://slowmoto.tours/wp-content/uploads/Jungle-Stay-Pool.webp",
    "https://slowmoto.tours/wp-content/uploads/Jungle-Stay-Surroundings.webp",
    "https://slowmoto.tours/wp-content/uploads/On-the-Rocks-outside.webp",
    "https://slowmoto.tours/wp-content/uploads/Orchid-Trails-Pool.webp",
    "https://slowmoto.tours/wp-content/uploads/Orchid-Trails-inside.webp",
    "https://slowmoto.tours/wp-content/uploads/Plantation-Valley-Athirappilly.webp",
    "https://slowmoto.tours/wp-content/uploads/RR-Kodai-inside.webp",
    "https://slowmoto.tours/wp-content/uploads/RR-outside.webp",
    "https://slowmoto.tours/wp-content/uploads/Raindrops-outside.webp",
    "https://slowmoto.tours/wp-content/uploads/Seashell-Terrace.webp",
    "https://slowmoto.tours/wp-content/uploads/Seashell-from-Beach-1.webp",
];

export default function AccommodationGallery() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
                View Accommodation Gallery
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Accommodation Gallery">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ACCOMMODATION_IMAGES.map((src, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md group">
                            <img
                                src={src}
                                alt={`Accommodation ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
}
