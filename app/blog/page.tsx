import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function BlogPage() {
    const posts = [
        {
            title: "Traffic Rules, Road Conditions, and Safety in India",
            date: "Jan 15, 2025",
            excerpt: "A Survival Guide for First-Time Riders in the Land of Horns, Herds, and Holy Chaos. 10½ Hilariously Honest Observations.",
            image: "https://slowmoto.tours/wp-content/uploads/Crazy-Indian-Traffic-comic-style.webp"
        },
        {
            title: "Kickstarting our season - From Ha Giang loop to our Diwali tour",
            date: "Oct 20, 2024",
            excerpt: "Our upcoming season kicks off with our first tour in October, perfectly timed with Diwali, the festival of lights.",
            image: "https://slowmoto.tours/wp-content/uploads/Bike-Parade-leaving-Hasanur.webp"
        },
        {
            title: "Opening the Roads to Chirakkal",
            date: "Jan 01, 2023",
            excerpt: "As we rode through the bustling streets of Kochi, a mix of excitement and apprehension filled my mind. Would everything go according to plan?",
            image: "https://slowmoto.tours/wp-content/uploads/Collage-01012023.webp"
        }
    ];

    return (
        <>
            <Header />
            <SubPageLayout
                title="Slow Moto Stories"
                subtitle="Stories from the Slow Moto World. Dive into the exciting world of our adventure motorcycle trips in South India."
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {posts.map(post => (
                            <div key={post.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-secondary text-sm font-bold uppercase mb-2">{post.date}</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase leading-tight">{post.title}</h3>
                                    <p className="opacity-70 mb-6 flex-grow">{post.excerpt}</p>
                                    <button className="text-primary font-bold hover:underline text-left mt-auto">READ MORE</button>
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
