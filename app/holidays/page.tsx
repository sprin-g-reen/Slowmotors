import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function HolidaysPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="Motorbike Holidays"
                subtitle="Bespoke private tours tailored to your pace and preferences."
            >
                <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                    <h2 className="text-3xl font-bold mb-8 uppercase">Your Trip, Your Way</h2>
                    <p className="text-lg text-dark/70 mb-12">
                        Looking for something specific? We specialize in creating custom motorcycle holidays for individuals, couples, and private groups. Tell us where you want to go, and we'll handle the rest.
                    </p>
                    <div className="bg-secondary/10 p-12 rounded-3xl border border-secondary/20">
                        <h3 className="text-2xl font-bold mb-6 uppercase">Request a Custom Tour</h3>
                        <p className="mb-8">Contact us to start planning your dream motorcycle adventure in Southern India.</p>
                        <button className="bg-primary text-light px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
