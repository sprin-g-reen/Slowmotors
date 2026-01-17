import React, { useState } from 'react';
import Modal from './Modal';

export const Philosophy: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="philosophy" className="bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Section 1: Why We Ride / Riding slooow */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <span className="material-icons-outlined text-4xl">motorcycle</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Riding slooow</h2>
            <p className="text-xl md:text-2xl font-display text-primary font-medium">Why we ride</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                As travellers we want to experience everyday life as it feels for common people in our guest country. The truth is: everybody moves on two-wheelers! So we simply shove motorbikes under our buttocks and mingle with the locals.
              </p>
              <p>
                For India what vehicle could be more appealing than the iconic Royal Enfield.
              </p>
              <p className="font-medium text-primary text-xl">
                Playing an active part instead of being the spectators is part of our philosophy.
              </p>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mt-8">Skip the rocky path with us!</h3>
              <p>
                Don´t waste your time on dusty potholed roads and stuck between stinking exhaust fumes and mother-swearing rickshaw drivers in painful midday heat.
              </p>
              <p>
                Don’t waste your precious time looking for routes, things to do and places to eat. Leave the effort of all the planning to us.
              </p>
              <p>
                We´ll take you straight to the most spectacular and also the most intimate experiences our area has to offer.
              </p>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform -rotate-2 transition-transform duration-500 group-hover:rotate-1" />
              <img
                src="/images/Why-we-ride.webp"
                alt="Why we ride"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Riding slooow for peace of body and mind</h2>
            <p className="text-xl font-display text-primary">Our Philosophy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div className="relative order-2 lg:order-1">
               <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-2 transition-transform duration-500" />
                <img
                  src="/images/Caution-Elephant.webp"
                  alt="Caution Elephant Sign"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                />
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                   <span className="material-icons-outlined">visibility</span>
                   Being cautious.
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  India is a firework for all your senses. Everything in this chaos is reaching for your attention. Maze like roads filled with 2,3,4, multiple wheelers, humans and animals of all sizes and colours and everything else under the sun. But don´t worry. We will give you all the time to get Indianized.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                   <span className="material-icons-outlined">spa</span>
                   Being conscious.
                </h3>
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Slow Travelling is the art of travelling with open senses, engaging with people and places, discovering food and culture – and taking your time.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Slowing down the pace we give you the space and the security to be conscious and mindful, to immerse yourself in the beautiful chaos around you. Our desire is to give you an immersive and intimate experience that noticeably and sustainably enhances the quality of your life after your ride with us.
                </p>
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Slow Travelling is a fundamental pillar for sustainable tourism as you engage with the culture and the local people with joy, respect and appreciation, thereby preserving the diversity of customs, cuisine, folklore and language. It is above all more relaxed for you and more respectful for the environment and the locals.
                </p>
                <p className="text-lg font-medium text-primary italic">
                  And we care for our companion creatures: we ride our Enfields, but never Elephants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Crew */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Meet the Crew!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Our motivation is the joy of sharing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Aromal */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/images/Aromal.webp" alt="Aromal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">Aromal</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">Royal Enfield Technician</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  With profound knowledge of RE Bikes "The Moto Surgeon" keeps our Enfields fit and safe. Daily checks, services and customisations make him, our customers and our bikes very happy.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  Speaking English, Malayalam, Hindi and Tamil.
                </p>
              </div>
            </div>

             {/* Jo */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div
                className="aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("/images/Jo.webp")}
              >
                <img src="/images/Jo.webp" alt="Jo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">Jo</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">Co-Founder and Road Captain</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  Our Riders call him the "driving coach for foreigners on Indian roads". He leads our convoy resolutely and safely through all situations, constantly looking for the little roadside attractions and the next chance for a Chai.
                </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  Speaking English and German.
                </p>
              </div>
            </div>

            {/* Pratish */}
             <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div
                className="aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("/images/Pratish.webp")}
              >
                <img src="/images/Pratish.webp" alt="Pratish" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">Pratish</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">Co-Founder and Road Captain</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  Pratish is riding on our taillight position, having our backs. He keeps us trouble-free with cops and checkposts and is a caring host for our group on tea stops, restaurants and accommodations.
                </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  Speaking English, Malayalam, Hindi and Kannada.
                </p>
              </div>
            </div>

            {/* Nevinson */}
             <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/images/Nevinson.webp" alt="Nevinson" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">Nevinson</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">The Big Support</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  As a passionate and experienced traveller Nevin is our ace up the sleeve. He is driving the support truck with your luggage and the spare parts and is backup and support in all respects.
                </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  Speaking English, Malayalam, Hindi and Tamil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Section 4: Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
         <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
               <span className="material-icons-outlined text-4xl text-primary mb-4">history_edu</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
             </div>
             <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  In early 2020 Jo went on a 5000 km motorbike trip through the South of India on a Royal Enfield.
                </p>
                <p>
                  At one stopover he met Pratish, who turned out not only to be a perfectly caring host for this nights homestay, but also an Enfield enthusiast. The following day the two started their motorbikes and Pratish with his great feel for relaxed riding and knowledge of the local routes guided them across the area. Jo told Pratish about his experience of heavy hardships to get to the sweetest spots over the most beautiful routes and how much he´d love to make them accessible for likeminded travellers on a schedule, simply to share the beauty of this world.
                </p>
                <p>
                  Pratish was immediately hooked and they decided to team up for this venture to bundle their many years experiences in travelling, biking, hosting and guiding.
                </p>
                <p>
                  Although an immediate start was abruptly disrupted by the following pandemic, it gave them time to develop the concept in more depth. While Pratish started scouting routes in Kerala, Jo began to build the website in Austria.
                </p>
                <p>
                  To turn this idea into a solid company they decided to file for incorporation as a LLP in India because this way they could achieve the best possible coverage for their riders and themselves in all legal aspects. The gruelling bureaucratic process of incorporation itself was finally finished after one and a half years. As was the pandemic. And as soon as possible Jo returned to India, the company bought their first own Enfield Classic and all pieces came together to offer you what is now branded as <strong className="text-primary">Slow Moto Tours - Guided Motorcycle Tours India</strong>.
                </p>
             </div>
         </div>
      </section>

      {/* Section 5: Our Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Our Partners</h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
             <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="/images/RE-Tours-Logo.webp"
                  alt="Royal Enfield Tours"
                  className="max-h-32 md:max-h-40 w-auto object-contain"
                />
             </div>
             <div className="w-full md:w-2/3 text-left">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Royal Enfield Tours</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We’re proud to announce that Slow Moto Tours is now a listed partner on Royal Enfield Tours, the official touring platform of Royal Enfield.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This collaboration allows international riders to discover our immersive, all-inclusive motorcycle tours through Kerala, Tamil Nadu, Karnataka, and Goa — now featured alongside some of the most trusted motorcycle journeys in the world.
                </p>
                 <p className="text-gray-600 dark:text-gray-300">
                  We remain an independent operator and this partnership emphasises the quality and reliability of our offering and our ongoing commitment to premium experiences for our global riding community.
                </p>
             </div>
           </div>
        </div>
      </section>

       <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Crew Member"
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        )}
      </Modal>
    </div>
  );
};
