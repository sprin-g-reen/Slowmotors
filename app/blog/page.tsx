import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function BlogPage() {
    const posts = [
        { title: "The Magic of the Western Ghats", date: "Oct 12, 2025", excerpt: "Riding through the mist-covered mountains of the spice coast..." },
        { title: "Meeting the Locals: A Village Stop in Karnataka", date: "Sep 28, 2025", excerpt: "How a flat tire led to the best chai of our lives..." },
        { title: "Why the Royal Enfield Himalayan is the Perfect Bike for India", date: "Sep 05, 2025", excerpt: "Testing the limits of the Enfield in the rough terrain of Nilgiris..." }
    ];

    return (
        <>
            <Header />
            <SubPageLayout
                title="Slow Moto Stories"
                subtitle="Tales from the road, travel tips, and cultural insights."
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {posts.map(post => (
                            <div key={post.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-secondary text-sm font-bold uppercase mb-2">{post.date}</div>
                                <h3 className="text-xl font-bold mb-4 uppercase">{post.title}</h3>
                                <p className="opacity-70 mb-6">{post.excerpt}</p>
                                <button className="text-primary font-bold hover:underline">READ MORE</button>
                            </div>
                        ))}
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
