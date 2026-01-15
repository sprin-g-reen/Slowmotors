import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function AboutPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="About Us"
                subtitle="The story behind Slow Moto Tours and our philosophy of travel."
                bgImage="https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp"
            >
                <div className="max-w-4xl mx-auto px-4 py-24">
                    <h2 className="text-3xl font-bold mb-8 uppercase text-center">Our Philosophy</h2>
                    <div className="prose prose-lg max-w-none text-dark/80 italic leading-relaxed text-center mb-16">
                        "We don't just ride motorcycles; we explore cultures, taste flavors, and build connections. Slow travel isn't about the speed; it's about the depth of the experience."
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <img src="https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp" className="rounded-2xl shadow-xl" alt="Jo and Pratish" />
                        <div>
                            <p className="mb-6">
                                Jo and Pratish have spent decades exploring the Indian subcontinent. They founded Slow Moto Tours to share their love for the Royal Enfield and the incredible diversity of Southern India.
                            </p>
                            <p>
                                Every tour is designed to be immersive, respectful of local communities, and as sustainable as possible. We keep our groups small to ensure a personal and safe experience for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
