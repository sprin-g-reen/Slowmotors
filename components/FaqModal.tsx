"use client";

import Modal from "./Modal";

interface FaqModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FaqModal({ isOpen, onClose }: FaqModalProps) {
    const faqs = [
        { q: "Is there Wifi?", a: "Facilities such as electricity, Wifi and laundry are available at accommodations." },
        { q: "Is it safe?", a: "Yes. You can rely on our trustful guides. Locals side with tourists. Malaria is not a risk in South India, but Dengue exists so use repellants." },
        { q: "How will the weather be like?", a: "Tropical climate. Dry season with plenty of sunshine (28-32°C). Higher areas are cooler (20-22°C). Bring warm clothes for nights." },
        { q: "Am I fit and experienced enough?", a: "We want our riders to be fit enough to ride for 4-7 hours a day. Experience is preferred (few hundred km under your belt) but not mandatory if confident." },
        { q: "How are the road conditions in India?", a: "Everything from brand new mountain curves to pothole dappled country roads. The Enfield is built for this." },
        { q: "Will I get gastro-intestinal disease?", a: "We place highest value on hygienic standards in our partner´s kitchens. Ingredients are fresh and washed with bottled water." },
        { q: "What if I have special dietary needs?", a: "Please let us know in advance so that we can confirm availability." },
        { q: "What about luggage?", a: "Your general luggage (max 25kg) will travel on our service truck. Bring a small backpack for the road." },
        { q: "Can I bring my own bike?", a: "It has advantages if the whole group rides the same bike (parts, speed). Rental is included. Contact us for custom tours if you insist." },
        { q: "What laws apply?", a: "Strict dress codes in temples. No nudity on beaches. Footwear outside houses. No public affection. Drug possession carries heavy penalties." },
        { q: "Do I need to bring a towel?", a: "No, guesthouses provide them. Don't forget swimming things." },
        { q: "What if I crash?", a: "Our insurance covers material damage to the bike and third parties. For personal injury, our crew is certified in first aid and we have access to advanced medical systems. Your travel insurance covers costs." },
        { q: "Cancellation?", a: "Possible. Please check our detailed Cancellation Policy in Terms and Conditions." }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="FAQ">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">FAQ</h3>
                    <p className="text-lg text-dark/80">for your adventure motorcycle trips</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-bold text-dark mb-2">{item.q}</h5>
                            <p className="text-dark/80 text-sm leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
