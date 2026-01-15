import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function ToursPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="Our Motorcycle Rides"
                subtitle="Carefully curated routes through the heart of Southern India."
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <img src="https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp" className="w-full h-64 object-cover rounded-xl mb-6" alt="Coast to Coast" />
                            <h3 className="text-2xl font-bold mb-4 uppercase">Coast to Coast</h3>
                            <p className="opacity-70 mb-6">A legendary journey from the Arabian Sea to the Bay of Bengal, traversing the Western Ghats and the Nilgiri hills.</p>
                            <div className="flex justify-between items-center text-primary font-bold">
                                <span>14 DAYS</span>
                                <span>EXPLORE</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl mb-6" alt="Kerala Backwaters" />
                            <h3 className="text-2xl font-bold mb-4 uppercase">Kerala Explorer</h3>
                            <p className="opacity-70 mb-6">Discover the lush greenery, winding canals, and tropical serenity of God's Own Country on two wheels.</p>
                            <div className="flex justify-between items-center text-primary font-bold">
                                <span>10 DAYS</span>
                                <span>EXPLORE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
