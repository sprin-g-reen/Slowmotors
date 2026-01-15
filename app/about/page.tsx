import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function AboutPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="About us - our Philosophy"
                subtitle="Riding slooow"
                bgImage="https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp"
            >
                <div className="max-w-6xl mx-auto px-4 py-24 space-y-24">

                    {/* Why we ride */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Why we ride</h2>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                            <p className="mb-6">
                                As travellers we want to experience everyday life as it feels for common people in our guest country.
                                The truth is: everybody moves on two-wheelers! So we simply shove motorbikes under our buttocks and mingle with the locals.
                            </p>
                            <p className="mb-6">
                                For India what vehicle could be more appealing than the iconic Royal Enfield.
                                Playing an active part instead of being the spectators is part of our philosophy.
                            </p>
                            <h3 className="text-xl font-bold mt-8 mb-4">Skip the rocky path with us!</h3>
                            <p>
                                Don´t waste your time on dusty potholed roads and stuck between stinking exhaust fumes and mother-swearing rickshaw drivers in painful midday heat.
                                Don’t waste your precious time looking for routes, things to do and places to eat. Leave the effort of all the planning to us.
                                We´ll take you straight to the most spectacular and also the most intimate experiences our area has to offer.
                            </p>
                        </div>
                    </section>

                    {/* Our Philosophy */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Our Philosophy</h2>
                            <h3 className="text-xl font-bold mb-4">Being cautious.</h3>
                            <p className="text-dark/80 mb-8 leading-relaxed">
                                India is a firework for all your senses. Everything in this chaos is reaching for your attention.
                                Maze like roads filled with 2,3,4, multiple wheelers, humans and animals of all sizes and colours and everything else under the sun.
                                But don´t worry. We will give you all the time to get Indianized.
                            </p>
                            <h3 className="text-xl font-bold mb-4">Being conscious.</h3>
                            <p className="text-dark/80 leading-relaxed mb-6">
                                Slow Travelling is the art of travelling with open senses, engaging with people and places, discovering food and culture – and taking your time.
                                Slowing down the pace we give you the space and the security to be conscious and mindful, to immerse yourself in the beautiful chaos around you.
                            </p>
                            <p className="text-dark/80 leading-relaxed">
                                And we care for our companion creatures: we ride our Enfields, but never Elephants.
                            </p>
                        </div>
                        <div className="relative">
                            <img src="https://slowmoto.tours/wp-content/uploads/Why-we-ride.webp" alt="Why we ride" className="rounded-2xl shadow-xl w-full" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                <p className="text-secondary font-bold italic">"Riding slooow for peace of body and mind"</p>
                            </div>
                        </div>
                    </section>

                    {/* Meet the Crew */}
                    <section>
                        <h2 className="text-3xl font-bold mb-12 uppercase text-center text-primary">Meet the Crew !</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Aromal */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Aromal.webp" alt="Aromal" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Aromal</h3>
                                <div className="text-secondary text-sm font-bold mb-4">Royal Enfield Technician</div>
                                <p className="text-sm opacity-70">
                                    With profound knowledge of RE Bikes “The Moto Surgeon” keeps our Enfields fit and safe.
                                </p>
                            </div>

                            {/* Jo */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Jo-blessed.webp" alt="Jo" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Jo</h3>
                                <div className="text-secondary text-sm font-bold mb-4">Co-Founder & Road Captain</div>
                                <p className="text-sm opacity-70">
                                    “Driving coach for foreigners”. Leads our convoy resolutely and safely, constantly looking for chai stops.
                                </p>
                            </div>

                            {/* Pratish */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/pP-with-pink-drink.webp" alt="Pratish" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Pratish</h3>
                                <div className="text-secondary text-sm font-bold mb-4">Co-Founder & Road Captain</div>
                                <p className="text-sm opacity-70">
                                    Rides on our taillight position. Keeps us trouble-free with cops and is a caring host.
                                </p>
                            </div>

                            {/* Nevinson */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Nevinson.webp" alt="Nevinson" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Nevinson</h3>
                                <div className="text-secondary text-sm font-bold mb-4">The Big Support</div>
                                <p className="text-sm opacity-70">
                                    Driving the support truck with your luggage and spare parts. Backup and support in all respects.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Story */}
                    <section className="bg-gray-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                            <p className="mb-4">
                                In early 2020 Jo went on a 5000 km motorbike trip through the South of India on a Royal Enfield.
                                At one stopover he met Pratish, who turned out not only to be a perfectly caring host for this nights homestay, but also an Enfield enthusiast.
                            </p>
                            <p className="mb-4">
                                The following day the two started their motorbikes and Pratish with his great feel for relaxed riding and knowledge of the local routes guided them across the area.
                                Jo told Pratish about his experience of heavy hardships to get to the sweetest spots over the most beautiful routes and how much he´d love to make them accessible for likeminded travellers.
                            </p>
                            <p>
                                Pratish was immediately hooked and they decided to team up. While Pratish started scouting routes in Kerala, Jo began to build the website in Austria.
                                And here we are now, sharing our love and passion for riding to other enthusiasts around the world.
                            </p>
                        </div>
                    </section>

                     {/* Partners */}
                     <section className="text-center">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Our Partners</h2>
                        <div className="max-w-3xl mx-auto flex flex-col items-center">
                             <img src="https://slowmoto.tours/wp-content/uploads/RE-Tours-Logo.webp" alt="Royal Enfield Tours" className="h-24 mb-6" />
                             <h3 className="text-xl font-bold mb-4">Royal Enfield Tours</h3>
                             <p className="text-dark/80">
                                We’re proud to announce that Slow Moto Tours is now a listed partner on Royal Enfield Tours, the official touring platform of Royal Enfield.
                                This collaboration allows international riders to discover our immersive, all-inclusive motorcycle tours through Kerala, Tamil Nadu, Karnataka, and Goa.
                             </p>
                        </div>
                     </section>

                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
