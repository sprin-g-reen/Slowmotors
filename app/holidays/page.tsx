import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";

export default function HolidaysPage() {
    return (
        <>
            <Header />
            <SubPageLayout
                title="Motorbike Holidays India"
                subtitle="Discover the Adventure of your Motorbike Holidays"
                bgImage="https://slowmoto.tours/wp-content/uploads/Gods-own-Country.webp"
            >
                <div className="max-w-6xl mx-auto px-4 py-24 space-y-24">

                    {/* On the Road */}
                    <section className="space-y-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold uppercase text-primary mb-2">On the Road</h2>
                            <p className="text-xl font-bold italic text-secondary">Riding slooow</p>
                        </div>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                            <p>
                                Welcome to your Motorbike Holidays in India! Take a deep breath and relax, you just arrived at our base.
                                Have some strengthening food, jump into the refreshing pool or the Arabian Sea.
                                Get comfortable in the saddle of your freshly serviced Royal Enfield.
                            </p>
                            <p>
                                From here we’ll start our guided motorcycle tour into the stunning beauty of Southern India.
                                We will ride with our road captain in front leading the convoy and the service truck with your luggage as our taillight.
                            </p>
                            <p>
                                This is India! It is beautiful! It is chaotic! And though we do our best to give you an all-out smooth experience, some unpredictabilities may occur.
                                However, please be assured, our crew is giving all their comprehensive experience to provide you with even more than our promised offer.
                            </p>
                        </div>
                    </section>

                    {/* Bikes */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                         <div>
                            <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Bikes</h2>
                            <div className="prose prose-lg text-dark/80 leading-relaxed">
                                <p className="mb-4">
                                    The Royal Enfield 350 Classic and Bullet are great cruisers for general Indian road conditions and with their old-school style and one-of-a-kind sound rightly deserve the title of the Indian legend.
                                </p>
                                <p className="mb-4">
                                    The comfortable seating position invites for easy long distance cruising.
                                    Their 20 hp engine is strong enough to have fun in mountain curves and delivers enough headroom to safely overtake.
                                </p>
                                <p>
                                    We procure 2023 or later models of the 350 ccm Royal Enfield (Bullet / Classic) for our tours.
                                </p>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <img src="https://slowmoto.tours/wp-content/uploads/Enfield-Sunset.webp" alt="Royal Enfield Sunset" className="rounded-2xl shadow-lg w-full" />
                            <img src="https://slowmoto.tours/wp-content/uploads/Royal-Enfield-Bullet-350.webp" alt="Royal Enfield Bullet" className="rounded-2xl shadow-lg w-full hidden md:block" />
                         </div>
                    </section>

                    {/* Safety */}
                    <section className="bg-orange-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">Safety on Indian roads</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="prose prose-lg text-dark/80 leading-relaxed">
                                <p className="mb-4">
                                    Left-hand traffic prevails in India. Although they exist you can’t always rely on the traffic rules.
                                    To preserve your physical integrity you should drive with extra foresight and be aware of your inferiority.
                                </p>
                                <p>
                                    Don´t be surprised with a cow loitering on the road or an ox cart driving the wrong way.
                                    We will ride slow enough to accustom yourself to the adventure of Indian traffic.
                                </p>
                            </div>
                             <div className="prose prose-lg text-dark/80 leading-relaxed">
                                <p className="mb-4">
                                    A helmet is prescribed by law, and for our riders proper shoes and gloves are mandatory.
                                    To grant a maximum of security we drive in convoy formation with our experienced road captain leading.
                                </p>
                                <p>
                                    In the event of a medical emergency, we carry a comprehensive first-aid kit and our entire crew is certified in first aid.
                                    Kerala has an advanced emergency medicine system.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Accommodation */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">Accommodation</h2>
                         <div className="text-center mb-8">
                            <span className="bg-secondary/20 text-secondary font-bold px-4 py-2 rounded-full uppercase text-sm">Off the Saddle</span>
                         </div>
                         <div className="prose prose-lg max-w-4xl mx-auto text-dark/80 leading-relaxed text-center">
                            <p className="mb-6">
                                After a day on the road on your motorbike holidays you deserve nothing but a kind treat.
                                Therefore we selected the most charming, outstanding and warm-hearted accommodations on our route.
                                We will live in beach- jungle- and farm- resorts, lovingly converted heritage buildings, or contemporary villas.
                            </p>
                            <p>
                                Our offer is based on shared twin room accommodation. While two separate beds for double occupancy are not standard in many Indian accommodations, there will always be ensuite bathrooms.
                            </p>
                         </div>
                    </section>

                    {/* Food & Drinks */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                             {/* Placeholder for Food image if available, using a generic placeholder or reuse layout */}
                             <div className="bg-gray-200 rounded-2xl h-64 md:h-full flex items-center justify-center text-gray-400">
                                <span className="text-lg">Delicious Indian Cuisine</span>
                             </div>
                        </div>
                        <div className="order-1 md:order-2">
                             <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Food & Drinks</h2>
                             <div className="prose prose-lg text-dark/80 leading-relaxed">
                                <p className="mb-4">
                                    This is heaven for food lovers! Look forward to the most tasty curries you ever had, flavoured with exotic spices.
                                    We value local and seasonal offers like the fresh catch from the sea or a hearty mutton biryani.
                                </p>
                                <p className="mb-4">
                                    Despite Indias rich cuisine we do occasionally praise the global triumph of Pizza and Burger.
                                    And there is absolutely nothing wrong with an exquisite BBQ on the terrace.
                                </p>
                                <p>
                                    On the road we´ll anchor for famous Masala Chai tea and refresh with a mango juice.
                                </p>
                             </div>
                        </div>
                    </section>

                    {/* Beyond the Road */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Beyond the Road</h2>
                        <div className="prose prose-lg text-dark/80 leading-relaxed">
                            <p className="mb-6">
                                "Where are you from? What´s your name?" Prepare to be confronted with these questions whenever you´re spotted by the local people.
                                They are curious about foreigners and you´ll meet them almost everywhere.
                            </p>
                            <p>
                                Let your spirit float in ancient Hindu temples shrouded in the scent of incense sticks.
                                Give your body and mind some relief from the road with an Ajurvedic massage.
                                Mingle with the crowd around the colourful mix of shops.
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-gray-50 p-8 md:p-16 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-12 uppercase text-primary text-center">FAQ</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <FaqItem question="Is there Wifi?" answer="Facilities such as electricity, Wifi and laundry are available at accommodations." />
                            <FaqItem question="Is it safe?" answer="Yes. We have trustful guides. Locals side with tourists. Malaria is not a risk, but Dengue exists so use repellants." />
                            <FaqItem question="How will the weather be like?" answer="Tropical climate. Dry season with plenty of sunshine (28-32°C). Higher areas are cooler (20-22°C). Bring warm clothes for nights." />
                            <FaqItem question="Am I fit and experienced enough?" answer="We want our riders to be fit enough to ride for 4-7 hours in a day. Experience is preferred but not mandatory if you are confident." />
                            <FaqItem question="How are the road conditions?" answer="Everything from brand new mountain curves to pothole dappled country roads. The Enfield is built for this." />
                            <FaqItem question="Will I get gastro-intestinal disease?" answer="We place highest value on hygienic standards in our partner´s kitchens. Ingredients are fresh and washed." />
                            <FaqItem question="What about luggage?" answer="Your general luggage (max 25kg) will travel on our service truck. Bring a small backpack for the road." />
                            <FaqItem question="Can I bring my own bike?" answer="It has many advantages if the whole group rides the same bike. Rental is included. Contact us for custom tours if you insist." />
                        </div>
                    </section>

                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="mb-4">
            <h4 className="text-lg font-bold mb-2 text-dark">{question}</h4>
            <p className="text-dark/70">{answer}</p>
        </div>
    );
}
