import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import Image from "next/image";

const TOURS = [
  {
    title: "The Seema Ride",
    subtitle: "6 Days Kochi Round Trip",
    description: "An impressive and diverse adventure motorcycle tour from the tropical climate at the Ocean into the mountains of the Munnar Hills. Through tiger and elephant sanctuaries, the mild air of tea plantations and cool forests to reach extraordinary stays.",
    duration: "6 DAYS",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800",
    alt: "Munnar Hills Motorcycle Ride"
  },
  {
    title: "Goa Ke Us Paar",
    subtitle: "6 Days Goa Round Trip",
    description: "A luxury motorcycle adventure tour through Goa’s serene hinterlands and stunning coastal regions, complemented by exclusive, handpicked activities, heritage stays, and authentic Goan cuisine.",
    duration: "6 DAYS",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
    alt: "Goa Motorcycle Adventure"
  },
  {
    title: "The Roads to Chirakkal",
    subtitle: "14 Days Kochi Round Trip",
    description: "Ride the legendary Royal Enfield Bullet along the border of Kerala, Tamil Nadu and Karnataka. From the Ocean through tea plantations, sunny paddy plains and cool jungle forests, up high mountains into Tiger- and Elephant- Sanctuaries.",
    duration: "14 DAYS",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800",
    alt: "Royal Enfield Kerala"
  },
  {
    title: "Goa Ka Rishta",
    subtitle: "12 Days Kochi → Goa",
    description: "An exciting one-way motorcycle adventure exploring the scenic landscapes of the Western Ghats. From Kerala over Tamil Nadu into Karnataka and Goa enjoy the rides through reserves and to natural wonders and serene stays.",
    duration: "12 DAYS",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800",
    alt: "Western Ghats Ride"
  },
  {
    title: "Goa Se Wapasi",
    subtitle: "12 Days Goa → Kochi",
    description: "A thrilling one-way motorcycle tour through the Western Ghats, Kerala's wildlife reserves, and Tamil Nadu's cultural landscapes, experiencing nature's splendour and the cultural diversity of Southern India.",
    duration: "12 DAYS",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
    alt: "South India Motorcycle Tour"
  },
  {
    title: "Your Custom Ride",
    subtitle: "Tailor-Made Adventures",
    description: "South India is yours! Let´s design your tailor-made Adventure Motorcycle Ride. Your timing, your route, your company - no limits. We'd love to design your custom all inclusive Royal Enfield Adventure.",
    duration: "CUSTOM",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800",
    alt: "Custom Motorcycle Trip Planning"
  }
];

export default function ToursPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="Our Motorcycle Rides"
                subtitle="Carefully curated routes through the heart of Southern India."
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TOURS.map((tour, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={tour.image}
                                        alt={tour.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold uppercase text-gray-900">{tour.title}</h3>
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                                            {tour.duration}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-3">{tour.subtitle}</h4>
                                    <p className="text-gray-600 text-sm mb-6 flex-grow">{tour.description}</p>
                                    <button className="w-full py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors uppercase text-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
