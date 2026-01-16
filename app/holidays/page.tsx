import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import AccommodationGallery from "./AccommodationGallery";

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
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed space-y-4">
                            <p>
                                Welcome to your Motorbike Holidays in India! Take a deep breath and relax, you just arrived at our base.
                                Have some strengthening food, jump into the refreshing pool or the Arabian Sea.
                                Get comfortable in the saddle of your freshly serviced Royal Enfield.
                                Meet your fellow riders and our crew over a cold drink at the dinner table and take a good night of sleep before it gets really exciting.
                            </p>
                            <p>
                                From here we’ll start our guided motorcycle tour into the stunning beauty of Southern India.
                                We will ride with our road captain in front leading the convoy and the service truck with your luggage as our taillight.
                            </p>
                            <p>
                                We´ll start our days early to make the most of daylight and have several breaks each stage to enjoy a roadside cup of hot chai, some crispy masala vada and the spectacular views watching each others back for the food nicking monkeys.
                            </p>
                            <p>
                                While we’d love to feel our Royal Enfields positive vibrations forever under our butts, we ‘ll make sure to arrive at our stop for the night well in time to give you the opportunity to check out the cultural and recreational possibilities in and around our accommodation on your own.
                            </p>
                            <p>
                                This is India! It is beautiful! It is chaotic! And though we do our best to give you an all-out smooth experience, some unpredictabilities may occur. There might be blocked passage due to road slides or political unrest. This year’s temple festival which we all looked forward to might happen three weeks later because of the Gods inscrutable time table.
                                However, please be assured, our crew is giving all their comprehensive experience, local network, and dedication to provide you with even more than our promised offer.
                            </p>
                            <p>
                                A detailed day-to-day itinerary can be found in the description of each tour.
                            </p>
                        </div>
                    </section>

                    {/* Bikes */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                         <div>
                            <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Bikes</h2>
                            <div className="prose prose-lg text-dark/80 leading-relaxed space-y-4">
                                <p>
                                    The Royal Enfield 350 Classic and Bullet are great cruisers for general Indian road conditions and with their old-school style and one-of-a-kind sound rightly deserve the title of the Indian legend.
                                </p>
                                <p>
                                    Get on their saddle and you will feel as if you were born there.
                                </p>
                                <p>
                                    The comfortable seating position invites for easy long distance cruising.
                                </p>
                                <p>
                                    Their 20 hp engine is strong enough to have fun in mountain curves and delivers enough headroom to safely overtake the lame TukTuk in front of you.
                                </p>
                                <p>
                                    The Classic and Bullet 350 are lovely bikes for all skill levels and super reliable companions on all our guided motorcycle tours.
                                </p>
                                <p>
                                    All our bikes are expertly serviced by our Royal Enfield technician before and during our tours.
                                </p>
                                <p>
                                    We procure 2023 or later models of the 350 ccm Royal Enfield (Bullet / Classic) for our tours, depending on the availability.
                                </p>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <img src="https://slowmoto.tours/wp-content/uploads/Enfield-Sunset.webp" alt="Royal Enfield Sunset" className="rounded-2xl shadow-lg w-full" />
                            <img src="https://slowmoto.tours/wp-content/uploads/Royal-Enfield-Bullet-350.webp" alt="Royal Enfield Bullet" className="rounded-2xl shadow-lg w-full hidden md:block" />
                            <img src="https://slowmoto.tours/wp-content/uploads/RE-Bullet_Classic-Specifications.webp" alt="Royal Enfield Specifications" className="rounded-2xl shadow-lg w-full" />
                         </div>
                    </section>

                    {/* Safety */}
                    <section className="bg-orange-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">Safety on Indian roads</h2>
                        <div className="space-y-6 prose prose-lg text-dark/80 leading-relaxed max-w-none">
                            <p>
                                India is in many ways different from what you are used to in Western countries. But that´s part of why you booked your motorbike holidays here, right?
                            </p>
                            <p>
                                As we will spend a reasonable amount of time on the road, we need you to reflect about the Indian traffic conditions and your coolness before you hit the “book now” button.
                            </p>
                            <p>
                                Left-hand traffic prevails in India. Although they exist you can’t always rely on the traffic rules, and mutual consideration among Indian road users is not particularly pronounced. To preserve your physical integrity you should drive with extra foresight and be aware of your inferiority. Don´t be surprised with a cow loitering on the road or an ox cart driving the wrong way up your lane on a highway.
                            </p>
                            <p>
                                We will ride slow enough to accustom yourself to the adventure of Indian traffic. Only if you feel comfortable can you enjoy our road trip to the fullest, and after all, that’s what we want.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                                <div>
                                    <p>
                                        A helmet is prescribed by law, and for our riders proper shoes and gloves are mandatory.
                                    </p>
                                    <p className="mt-4">
                                        To grant a maximum of security we drive in convoy formation with our experienced road captain leading.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        In the event of a medical emergency, we carry a comprehensive first-aid kit and our entire crew is certified in first aid. Kerala has an advanced emergency medicine system, so in serious cases, you would soon be in the trustful hands of a professional medic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Accommodation */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">Accommodation</h2>
                         <div className="text-center mb-8">
                            <span className="bg-secondary/20 text-secondary font-bold px-4 py-2 rounded-full uppercase text-sm">Off the Saddle</span>
                         </div>
                         <div className="prose prose-lg max-w-4xl mx-auto text-dark/80 leading-relaxed text-center space-y-6">
                            <p>
                                After a day on the road on your motorbike holidays you deserve nothing but a kind treat.
                                Therefore we selected the most charming, outstanding and warm-hearted accommodations on our route to drop your helmet for the night.
                                We will live in beach- jungle- and farm- resorts, lovingly converted heritage buildings, contemporary architecture villas or eco villages.
                                All our accommodations offer the kind of luxury and well-being that is common and possible for the respective region.
                            </p>
                            <p>
                                Enjoy marvelous bucket showers gently rinsing off the day´s dust.
                                Lean back on the cozy veranda and let your spirit free. Dare to take a glance into the kitchen, be curious!
                                If you have any questions about whatsoever our crew will be around to translate for you and to provide you with unique insights into real life India.
                            </p>
                            <p>
                                Our offer is based on shared twin room accommodation. While two separate beds for double occupancy are not standard in many Indian accommodations, there will always be ensuite bathrooms.
                                If you are secretive about your sleep talking you might wanna bring a roommate. If you want to have a room to yourself, you may purchase our single accommodation supplement.
                            </p>
                         </div>
                         <div className="mt-12">
                            <AccommodationGallery />
                         </div>
                    </section>

                    {/* Food & Drinks */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                             <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                                <img src="https://slowmoto.tours/wp-content/uploads/indian-food-thali.webp" alt="Indian Food Thali" className="w-full h-full object-cover" />
                             </div>
                        </div>
                        <div className="order-1 md:order-2">
                             <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Food & Drinks</h2>
                             <div className="prose prose-lg text-dark/80 leading-relaxed space-y-4">
                                <p>
                                    Relax with the crew, a cold drink in one, an appetizer in the other hand, before we´ll all have a seat at the dinner table.
                                </p>
                                <p>
                                    Look forward to the most tasty curries you ever had, flavoured with exotic spices, hot as you please. We value local and seasonal offers like the fresh catch from the sea, a hearty mutton biryani or of course the huge variety of vegetarian specialties the kitchen garden has to offer.
                                </p>
                                <p>
                                    Despite Indias rich cuisine we do occasionally praise the global triumph of Pizza and Burger. And there is absolutely nothing wrong with an exquisite BBQ on the terrace of our Resort in the warm night.
                                </p>
                                <p>
                                    Before we kick our bikes into the new day, grant yourself a vitamin boost with a plate of fresh fruits, go full local with rice batter creations and chutneys or enjoy a rather continental breakfast.
                                </p>
                                <p>
                                    On the road we´ll anchor for famous Masala Chai tea, refresh with a mango juice almost straight from the tree and try out the crispy creations from the sizzling pan of street food vendors.
                                </p>
                                <p>
                                    Your motorbike holidays shall as well be a culinary journey through the Indian sub-continent.
                                </p>
                             </div>
                        </div>
                    </section>

                    {/* Beyond the Road */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">Beyond the Road</h2>
                        <div className="prose prose-lg text-dark/80 leading-relaxed space-y-6">
                            <p>
                                "Where are you from? What´s your name?" Prepare to be confronted with these questions whenever you´re spotted by the local people. They are equipped with an extra sensor for western faces, really curious about foreigners and you´ll meet them almost everywhere during your motorbike holidays.
                                We have an abundant choice of possibilities on our route to perfect the answers to above questions.
                            </p>
                            <p>
                                Let your spirit float in ancient Hindu temples shrouded in the scent of incense sticks. Give your body and mind some relief from the road with an Ajurvedic massage. Mingle with the crowd around the colourful mix of shops, mostly for domestic items and food, but don´t expect any nightlife. There are no street cafes or restaurants where you could hang out, the shops are closed and the boardwalks folded at 9 pm and that’s it.
                                As this foremost is a motorcycle tour into nature, in most cases we stay away from the noise anyway and you will be happy to simply sit by the campfire and let the plenty impressions sink in.
                            </p>
                            <p>
                                We might be able to attend an impressive colourful temple festival or a touring drama group performing popular plays from Hindi literature on incredible volume. Both follow their very own timetable and circumstances which unfortunately makes it impossible for us to guarantee they are actually happening on your specific booking dates.
                                What we can guarantee is that you´ll jump into the Arabian Sea, a freshwater river, or a swimming pool after a day on the road.
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-gray-50 p-8 md:p-16 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-12 uppercase text-primary text-center">FAQ</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <FaqItem question="Is there Wifi?" answer="Facilities such as electricity, Wifi and laundry are available at accommodations." />
                            <FaqItem question="Is it safe?" answer="For information on safety on the road please have a look at our “Safety” section. A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital. We´ll update you on precautions or restricions in case of any current medical situations like pandemics." />
                            <FaqItem question="How will the weather be like?" answer="The South of India is only a short distance away from the equator and therefore enjoys a tropical climate. While winter is freezing Europe, we are in dry season with plenty of sunshine and warm temperatures in the lower areas without much rain or humidity. The average daily temperature there is 28°C. At the hottest point of the day the temperature can rise up to 32°C. Evenings cool down to a pleasant 23°C after sunset. In the higher areas on our routes the daytime temperatures are on average around 20 – 22 °C, while during the nights, the temperatures can go as low as 9 °C. So make sure to bring some warm clothes as well. Proper rain gear to pull over should do the job. The sea temperature is comfortably high all-year round and with 29°C even higher than the average air temperature!" />
                            <FaqItem question="Am I fit and experienced enough?" answer="We want our riders to be fit enough to ride for 4-7 hours in a day under sunny conditions. While experience in long rides is not mandatory, it is always better that you have a few hundred kilometres of ride under your belt. Please check with your doctor if you have any preexisting medical conditions." />
                            <FaqItem question="How are the road conditions in India?" answer="On our route we will ride over pretty much everything that can be described under road surfaces. We will glide over brand new mountain curves and cruise four-lane highways abruptly leading on pothole dappled country roads, encounter narrow downtown alleys as well as slowly maneuver over gravel and sand sections. Don´t worry about the motorbikes handling, the Enfield is built precisely for the broad spectrum of Indian road conditions. All our routes are tested and carefully selected by us while we go for our scouting rides. It is our constant endeavor to select routes which are safe and comfortable for our rides. There might be unexpected/last minute obstacles which are out of our control. But rest assured, we will be best prepared for such eventualities." />
                            <FaqItem question="Will I get gastro-intestinal disease?" answer="Biking ain´t fun with an upset stomach. And while we cannot guarantee your system’s overall response to Indian conditions, we do place highest value on hygienic standards in our partner´s kitchens. All ingredients are fresh, washed with bottled water and no underdone food touches the plates." />
                            <FaqItem question="What if I have special dietary needs?" answer="Please do let us know in advanvce so that we can confirm its availability." />
                            <FaqItem question="What about luggage?" answer="Your general luggage will travel right behind you on our service truck to free you from carrying this burden. But as this is a bike tour, we suggest riders to travel light. For things you´ll need on the road, like a bottle of water, sunscreen lotion or camera, we recommend a separate small backpack. The space on our support truck is limited, so we request you to not exceed a luggage weight of 25 kg. We can arrange for your remaining heavy luggages to be stored safely while we are on the tour and can be retrieved at the end of the ride." />
                            <FaqItem question="Can I bring my own bike?" answer="It has many advantages if the whole group rides the same bike. Our tour is accompanied by an Enfield mechanic and we are equipped with the most common spare parts. Also in terms of safety and cruising speed, having the same body type and engine throughout the group is of great advantage. The cost to rent one of our Enfields is included in the price. However if you want to take the ride on your own bike, please contact us for custom motorcycle adventure holidays" />
                            <FaqItem question="What laws apply in difference to European standards?" answer="Unless you’re planning to occupy the Taj Mahal, you won’t get into trouble with the local authorities on a daily basis. But still there are a few laws and regulations to consider as a normal visitor to India: Some temples do not permit entry to non-Hindus. Strict dress codes are followed in most of the temples. Footwear is banned inside the temple premises. Nudity is not allowed in any Indian beach. Visitors to most Indian houses leave their footwear outside before entering the house. Hugging or kissing in public is not an accepted practice in India. Expect heavy penalties including imprisonment for possession of narcotic drugs." />
                            <FaqItem question="Do I need to bring a towel?" answer="No, the guesthouses provide. Keep your luggage light, but don´t forget to pack your swimming things." />
                            <FaqItem question="What if I crash?" answer="Hopefully you didn´t hurt yourself! Our own insurance covers material damage you do to the motorbike and material damage and personal injury you do to third parties with the bike. In case you did get hurt we carry a comprehensive first-aid kit and our entire crew is certified in first aid. The South has an advanced emergency medicine system, so in serious cases, you would soon be in the trustful hands of a professional medic. Your travel insurance will step in to cover these costs. One of the few requirements we place on you is that you take out travel insurance abroad." />
                            <FaqItem question="What if I need to cancel my booking?" answer="This is a great pity, but of course it’s possible. You can find the detailed Cancelation Policy in our Terms and Conditions." />
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
            <p className="text-dark/70 text-sm md:text-base">{answer}</p>
        </div>
    );
}
