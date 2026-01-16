export interface Tour {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string; // Thumbnail
  alt: string;
  headerImage: string; // Large header image
  mapImage?: string;
  introText: string[]; // Introduction paragraphs
  itinerary: {
    day: number;
    title: string;
    km: string;
    description: string;
    image?: string;
  }[];
  pricing: {
    rider: number;
    pillion: number;
    singleRoom: number;
  };
  quickFacts: {
    startEnd?: string;
    tourDuration?: string;
    totalDistance?: string;
    averageRiding?: string;
    bikesMax?: string;
    airport?: string;
    pillionNote?: string;
  };
  included: string[];
  requirements: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const TOURS_DATA: Tour[] = [
  {
    slug: "the-seema-ride",
    title: "The Seema Ride",
    subtitle: "6 Days Kochi Round Trip",
    description: "An impressive and diverse adventure motorcycle tour from the tropical climate at the Ocean into the mountains of the Munnar Hills. Through tiger and elephant sanctuaries, the mild air of tea plantations and cool forests to reach extraordinary stays.",
    duration: "6 DAYS",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800",
    alt: "Munnar Hills Motorcycle Ride",
    headerImage: "https://slowmoto.tours/wp-content/uploads/6-days-adventure-motorcycle-trips-Kochi-Header-Desktop.webp",
    mapImage: "https://slowmoto.tours/wp-content/uploads/SMT-Map-Seema-1440.svg",
    introText: [
      "Join us on an unforgettable adventure motorcycle trip called „The Seema Ride“!",
      "Seema, derived from Hindi, translates to “borderlands”, and our journey takes us through the captivating borderlands of Kerala and Tamil Nadu, covering 480 kilometers of scenic beauty and cultural discovery.",
      "Soak in the serene atmosphere of our beachside base near Kochi before gearing up for the adventure ahead. As you hop on your Enfield, get ready to experience the perfect blend of coastal charm and rural activity on your way to the majestic Athirappilly Falls.",
      "Venture deeper into the forested mountains of wildlife sanctuaries, bravely traversing the untamed wilderness and navigating 40 hairpin bends down on your route to Pollachi. Immerse yourself in the unique spirituality of an inspiring eco-village, where luxurious villas await amidst the sounds of nature.",
      "Continue your adventure motorcycle trip through coconut plantations, entering the breathtaking mountain scenery of the Anamalai Tiger Reserve en route to Munnar. Marvel at the steep hills cloaked in tea plantations, relax in a secluded nature resort before descending back to Kochi, where your ride concludes with fond memories of an adventure motorcycle trip that exceeds all expectations."
    ],
    itinerary: [
      {
        day: 1,
        title: "Your Arrival Day, Kochi",
        km: "0 km",
        description: "Welcome to our base at the beach. Take a deep breath, relax and jump into the Arabian Sea. Have a seat on your Enfield. Meet your fellow riders and our crew over a cold drink at the dinner table and take a good night of sleep before it gets really exciting.",
        image: "https://slowmoto.tours/wp-content/uploads/Cherai-Beach-Front.webp"
      },
      {
        day: 2,
        title: "Kochi to Athirappilly Falls",
        km: "80 km",
        description: "We´ll take it nice and easy on your first day on the Enfields and you´ll experience an average of what to expect from upcoming traffic and road conditions. From the dense coastal region we will soon reach rural areas and finally glide over a winding road into the cooler forest climate to the impressive Athirappilly Waterfalls. Overnight we stay at a secluded contemporary Villa next to a gorgeous jungle river.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Athirappilly-Falls.webp"
      },
      {
        day: 3,
        title: "Athirappilly Falls to Pollachi",
        km: "145 km",
        description: "Four hours over beautiful roads we will ride our Enfields deeper into the forest and mountains of a wildlife sanctuary. Everyday we pray to all available Gods that the road isn´t closed due to wild Elephants being actually wild. We pass the small town of Valparai and turn North over endless curves through tea plantations and 40 hairpin bends down to the plains where we will soon reach our destination. A dreamy eco-village, nestled in a coconut grove in the tranquil countryside of Pollachi, awaits us, ready for us to relax and spend the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Pollachi-e1711122985589.webp"
      },
      {
        day: 4,
        title: "Pollachi to Munnar",
        km: "120 km",
        description: "Through coconut plantations we ride our Enfields towards the rising sun to the forest check post of Anaimalai Tiger Reserve. On a small road we navigate deeper and higher into the magnificent landscapes of this wildlife sanctuary. We scratch the 2000 meters mark and find ourselves on a broad and perfect road that must have been designed by a motorcycle enthusiast. Endless curves through tea plantations are accompanied by breathtaking views. We reach the city of Munnar, todays destination. Our beautiful nature resort is situated a little lower, away from noise and tourists.",
        image: "https://slowmoto.tours/wp-content/uploads/Pollachi-Munnar-e1711123343596.webp"
      },
      {
        day: 5,
        title: "Munnar to Kochi",
        km: "135 km",
        description: "On our final route we leave the beautiful hills of Munnar. With mountain views we glide slowly in two hours over winding roads in great conditions down the hills back to the Kochi area. As the climate is getting hotter again, so is the traffic. We ride back to the coastal areas and to our starting point at the Ocean, where you might want to jump in straight away.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kochi-e1711123192621.webp"
      },
      {
        day: 6,
        title: "Check-Out in Kochi",
        km: "0 km",
        description: "Take a last dip in the Arabian Sea and carry all those memories with you. Share your amazing experience with your family and friends. Have a relaxed and safe onward journey and keep your eyes open for our next rides. We are already working on new routes and destinations.",
        image: "https://slowmoto.tours/wp-content/uploads/Check-out-Kochi.webp"
      }
    ],
    pricing: {
      rider: 1390,
      pillion: 1140,
      singleRoom: 150
    },
    quickFacts: {
      startEnd: "Kochi, Kerala, India",
      tourDuration: "6 Days / 5 Nights / 4 Days on the Enfield",
      totalDistance: "480 km",
      averageRiding: "4,5 hours/day including breaks",
      bikesMax: "6 Bikes max",
      airport: "Kochi / Cochin / COK",
      pillionNote: "Short stretches may be unsuitable for pillion riders. In such cases, pillion riders have a place in our support vehicle."
    },
    included: [
      "Royal Enfield Classic 350 motorbike including gas and kilometers",
      "English speaking tour guide and support crew",
      "A dedicated Royal Enfield mechanic is with us all the time",
      "Support truck for luggage and spare equipment",
      "Accommodation (Double Room or Single Accommodation according to your booking)",
      "Breakfast, lunch and dinner",
      "All non-alcoholic drinks",
      "Insurance for the bike (covering material damage to the motorbike and material damage and personal injury to third parties)",
      "Entrance fees for sights, nature reserves, road tolls",
      "Oceans, rivers, swimming pools",
      "Our gratitude for booking with us :-)"
    ],
    requirements: [
      "valid passport",
      "visa (get your official visa here: https://indianvisaonline.gov.in)",
      "valid internationl driving license for 350ccm motorbikes",
      "international travel insurance (covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad)",
      "personal protective equipment (mandatory: helmet, proper shoes and gloves; highly recommended: protective clothing, raingear, dust protection, sunglasses and sun screen lotion)"
    ],
    faq: [
      {
        question: "Is there Wifi?",
        answer: "Facilities such as electricity, Wifi and laundry are available at accommodations."
      },
      {
        question: "Is it safe?",
        answer: "For information on safety on the road please have a look at our “Safety” section. A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital."
      },
      {
        question: "How will the weather be like?",
        answer: "The South of India is only a short distance away from the equator and therefore enjoys a tropical climate. While winter is freezing Europe, we are in dry season with plenty of sunshine and warm temperatures in the lower areas without much rain or humidity. The average daily temperature there is 28°C. At the hottest point of the day the temperature can rise up to 32°C. Evenings cool down to a pleasant 23°C after sunset. In the higher areas on our routes the daytime temperatures are on average around 20 – 22 °C, while during the nights, the temperatures can go as low as 9 °C. So make sure to bring some warm clothes as well. Proper rain gear to pull over should do the job. The sea temperature is comfortably high all-year round and with 29°C even higher than the average air temperature!"
      },
      {
        question: "Am I fit and experienced enough?",
        answer: "We want our riders to be fit enough to ride for 4-7 hours in a day under sunny conditions. While experience in long rides is not mandatory, it is always better that you have a few hundred kilometres of ride under your belt. Please check with your doctor if you have any preexisting medical conditions."
      },
      {
        question: "How are the road conditions in India?",
        answer: "On our route we will ride over pretty much everything that can be described under road surfaces. We will glide over brand new mountain curves and cruise four-lane highways abruptly leading on pothole dappled country roads, encounter narrow downtown alleys as well as slowly maneuver over gravel and sand sections. Don´t worry about the motorbikes handling, the Enfield is built precisely for the broad spectrum of Indian road conditions."
      },
      {
        question: "Will I get gastro-intestinal disease?",
        answer: "Biking ain´t fun with an upset stomach. And while we cannot guarantee your system’s overall response to Indian conditions, we do place highest value on hygienic standards in our partner´s kitchens. All ingredients are fresh, washed with bottled water and no underdone food touches the plates."
      },
      {
        question: "Can I bring my own bike?",
        answer: "It has many advantages if the whole group rides the same bike. Our tour is accompanied by an Enfield mechanic and we are equipped with the most common spare parts. Also in terms of safety and cruising speed, having the same body type and engine throughout the group is of great advantage. The cost to rent one of our Enfields is included in the price. However if you want to take the ride on your own bike, please contact us."
      }
    ]
  },
  {
    slug: "goa-ke-us-paar",
    title: "Goa Ke Us Paar",
    subtitle: "6 Days Goa Round Trip",
    description: "A luxury motorcycle adventure tour through Goa’s serene hinterlands and stunning coastal regions, complemented by exclusive, handpicked activities, heritage stays, and authentic Goan cuisine.",
    duration: "6 DAYS",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
    alt: "Goa Motorcycle Adventure",
    headerImage: "https://slowmoto.tours/wp-content/uploads/6-days-adventure-motorcycle-trips-Goa-Header-Desktop.webp",
    mapImage: "https://slowmoto.tours/wp-content/uploads/Route-Goa-Ke-Us-Paar-adventure-motorcycle-trips-India.svg",
    introText: [
      "Discover the hidden gems of Goa on „Goa Ke Us Paar” – The Other Side of Goa, a premium adventure motorcycle trip in Goa. Over six days, experience the thrill of riding the iconic Royal Enfield through Goa’s serene hinterlands and stunning coastal regions, complemented by exclusive, handpicked activities, heritage stays, and authentic Goan cuisine.",
      "Each morning, embark on scenic rides of around three hours, cruising through charming villages, lush forests, and along the world famous beaches. Afternoons and evenings are reserved for curated experiences, including tours of historic sites like the Basilica of Bom Jesus and Cabo de Rama Fort, food tastings, and heritage walks through Panaji’s Latin Quarters.",
      "Stay in luxurious, handpicked accommodations that showcase Goan heritage and coastal beauty, from serene jungle retreats to beachfront resorts. Savor authentic Goan meals prepared with local ingredients, and immerse yourself in the vibrant culture with opportunities to explore buzzing nightlife, serene island life, and even a floating casino.",
      "This guided motorcycle tour in Goa offers an unparalleled blend of adventure, comfort, and exclusivity, perfect for discerning travelers seeking to explore the other side of Goa. Join us for a ride that redefines motorbike tours, combining luxury with unforgettable experiences."
    ],
    itinerary: [
      {
        day: 1,
        title: "Your Arrival Day, Vagator, Goa",
        km: "0 km",
        description: "Welcome to North Goa! Check in to a tranquil jungle-themed accommodation, far from the bustling beaches. Relax amidst nature with the soothing sounds of birds in a calm, serene environment. In the evening, we’ll take you to North Goa’s iconic beaches, where the vibrant party scenes come alive. Soak in the buzzing atmosphere, enjoy the music, and experience the nightlife that makes Goa famous. We’ll round off the day with a delightful dinner featuring fresh, local seafood specialties, perfectly crafted to satisfy your taste buds.",
        image: "https://slowmoto.tours/wp-content/uploads/morjim-9.webp"
      },
      {
        day: 2,
        title: "The Old Goa, a Rich Heritage",
        km: "80 km",
        description: "We start our day with a scenic ride through charming village roads, passing fields and coconut groves. Immerse yourself in Goa’s laidback lifestyle as you arrive at our accommodation, a heritage bungalow steeped in history. Experience a guided tour by the owner, who shares tales of their family’s rich heritage. Savor an authentic, homemade Goan lunch. After a relaxing afternoon, we’ll embark on a journey through Goa’s rich heritage, starting with a visit to the iconic Basilica of Bom Jesus in Old Goa, a UNESCO World Heritage Site. Marvel at the grandeur of the Church of St. Francis of Assisi and the majestic Se Cathedral, each offering a glimpse into Goa’s Portuguese past and religious significance. As the evening sets in, we’ll return to the bungalow to indulge in a delicious spread of authentic Goan dishes, lovingly prepared to give you a taste of the region’s culinary heritage.",
        image: "https://slowmoto.tours/wp-content/uploads/1-rider-icon.webp"
      },
      {
        day: 3,
        title: "Village Life and Seaside Serenity",
        km: "135 km",
        description: "Today’s ride takes us deep into the heart of Goa’s countryside. As we glide through picturesque Goan villages, you’ll experience the quiet charm of rural Goan life. Cruise through the lush Netravali forest, a green paradise where the cool temperatures provide a refreshing break from the plains. We arrive at our accommodation at Agonda Beach for a delicious seaside lunch. After a refreshing break, we’ll set off to explore the historic Cabo De Rama Fort, a site steeped in legends and offering breathtaking views of the coastline. From there, make your way to the Cabo De Rama beach nearby to witness a mesmerizing sunset, where the golden hues meet the Arabian Sea. As the day winds down, savor a delectable dinner at one of the seaside restaurants, soaking in the ambiance of the ocean under the stars.",
         image: "https://slowmoto.tours/wp-content/uploads/Pillion-Icon.webp"
      },
      {
        day: 4,
        title: "Coastal Ride to Goa’s Capital, Panaji",
        km: "80 km",
        description: "Our journey today follows the scenic beach roads towards Goa’s capital, Panaji and we experience the vibrant charm of Goa’s real-life traffic. We check in to a boutique stay in the ancient Latin Quarters, where history whispers from every corner. In the evening, we take to the charming streets of the old Latin Quarters and sample the best culinary delights Panaji has to offer on a Goan Feni & Tapas Food Trail! A night full of delicious food, premium Feni and exotic Feni-based cocktails are sure to leave you in high spirits (quite literally)! And if you fancy an adventure and think you’re in luck today, you can visit one of Goa’s famous floating casinos later on, where you can try your hand at gambling in a lively atmosphere.",
         image: "https://slowmoto.tours/wp-content/uploads/single-room.webp"
      },
      {
        day: 5,
        title: "Island Hopping and the Road Back to North Goa",
        km: "40 km",
        description: "We begin the day with a ferry ride to Divar Island, taking our motorbikes along for an exciting exploration. Ride through the peaceful island, soaking in its idyllic, untouched beauty, before heading back to North Goa for a delightful lunch. In the evening, we’ll explore the vibrant flea markets of North Goa, where you can browse for unique trinkets, thoughtful gifts for loved ones, or memorable souvenirs to take home. The colorful stalls and bustling atmosphere are a feast for the senses. Afterward, we’ll head to a carefully selected spot for a delightful dinner, capping off the day with a delicious culinary experience.",
         image: "https://slowmoto.tours/wp-content/uploads/morjim-9.webp"
      },
      {
        day: 6,
        title: "Farewell to Goa",
        km: "0 km",
        description: "Good morning Vagator! After a leisurely breakfast, it’s time to check out. Take a moment to reflect on the beautiful memories of your Goa adventure before heading back home.",
        image: "https://slowmoto.tours/wp-content/uploads/morjim-9.webp"
      }
    ],
    pricing: {
      rider: 1990,
      pillion: 1740,
      singleRoom: 200
    },
    quickFacts: {
      startEnd: "Vagator, Goa, India",
      tourDuration: "6 Days / 5 Nights / 4 Days on the Enfield",
      totalDistance: "335 km",
      averageRiding: "3 hours/day including breaks",
      bikesMax: "6 Bikes max",
      airport: "Manohar International Airport, Mopa / GOX"
    },
    included: [
      "Royal Enfield Classic 350 motorbike including gas and kilometers",
      "English speaking tour guide",
      "Support truck for luggage",
      "Accommodation (Double Room or Single Accommodation according to your booking)",
      "Breakfast, lunch and dinner",
      "All non-alcoholic drinks",
      "Insurance for the bike (covering material damage to the motorbike and material damage and personal injury to third parties)",
      "Entrance fees for sights, nature reserves, road tolls",
      "Oceans, rivers, swimming pools",
      "Our gratitude for booking with us :-)"
    ],
    requirements: [
       "valid passport",
      "visa (get your official visa here: https://indianvisaonline.gov.in)",
      "valid internationl driving license for 350ccm motorbikes",
      "international travel insurance (covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad)",
      "personal protective equipment (mandatory: proper shoes and gloves, helmet; highly recommended: protective clothing, raingear, dust protection, sunglasses and sun screen lotion)"
    ],
    faq: [
      {
        question: "Is there Wifi?",
        answer: "Facilities such as electricity, Wifi and laundry are available at accommodations."
      },
      {
        question: "Is it safe?",
        answer: "A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital."
      }
    ]
  },
  {
    slug: "the-roads-to-chirakkal",
    title: "The Roads to Chirakkal",
    subtitle: "14 Days Kochi Round Trip",
    description: "Ride the legendary Royal Enfield Bullet along the border of Kerala, Tamil Nadu and Karnataka. From the Ocean through tea plantations, sunny paddy plains and cool jungle forests, up high mountains into Tiger- and Elephant- Sanctuaries.",
    duration: "14 DAYS",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800",
    alt: "Royal Enfield Kerala",
    headerImage: "https://slowmoto.tours/wp-content/uploads/14-days-adventure-motorcycle-trips-Kochi-Header-Desktop.webp",
    mapImage: "https://slowmoto.tours/wp-content/uploads/SMT-Map-Chirakkal-1440.svg",
    introText: [
      "Embark on an epic adventure motorcycle trip through the heart of South India with our “The Roads to Chirakkal” tour, spanning 1700 kilometers of breathtaking tropical landscapes and cultural experiences.",
      "Named after Chirakkal, the seat of an ancient dynasty that ruled over Northern Kerala, this thrilling adventure promises to unveil the hidden treasures of the region while tracing the historic paths that lead to its rich heritage. Starting from our beachside base near Kochi to the majestic Athirappilly Falls, from the lofty Wayanad plateau to vibrant Kannur, and onward into the mystical realms of Tamil Nadu and the scenic Munnar Hills, each day promises thrilling rides through diverse landscapes.",
      "Endless bends guide us through wildlife reserves and mountainous terrain, providing glimpses of exotic animals and breathtaking panoramas. With every twist and turn, uncover the beauty and wonders of this captivating region.",
      "Navigate through lush jungle forests, tea estates, and bustling towns, feeling the pulse of every rev of your Royal Enfield engine. Immerse yourself in the vibrant tapestry of South Indian life, relax in secluded villas and indulge in the luxury of heritage resorts. Spend a leisurely day by the beach, savoring traditional cuisine and exploring bustling markets, before embarking again on exhilarating rides along winding roads and picturesque mountain routes.",
      "Each day presents new sights and experiences, making it a truly unforgettable adventure motorcycle trip through the heart of South India."
    ],
    itinerary: [
      {
        day: 1,
        title: "Your Arrival Day, Kochi",
        km: "0 km",
        description: "Welcome to our base at the beach. Take a deep breath and relax, jump into the refreshing pool or the Arabian Sea. Have a seat on your Enfield. Meet your fellow riders and our crew over a cold drink at the dinner table and take a good night of sleep before it gets really exciting.",
        image: "https://slowmoto.tours/wp-content/uploads/Cherai-Beach-Front.webp"
      },
      {
        day: 2,
        title: "Kochi to Athirappilly Falls",
        km: "80 km",
        description: "We´ll take it nice and easy on your first day on the Enfields and you´ll experience an average of what to expect from upcoming traffic and road conditions. From the dense coastal region we will soon reach rural areas and finally glide over a winding road into the cooler forest climate to the impressive Athirappilly Waterfalls. Overnight we stay at a secluded contemporary Villa next to a gorgeous jungle river.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Athirappilly-Falls.webp"
      },
      {
        day: 3,
        title: "Athirappilly Falls to Pollachi",
        km: "140 km",
        description: "Four hours over beautiful roads we will ride our Enfields deeper into the forest and mountains of a wildlife sanctuary. Everyday we pray to all available Gods that the road isn´t closed due to wild Elephants being actually wild. We pass the small town of Valparai and turn North over endless curves through tea plantations and 40 hairpin bends down to the plains where we will soon reach our destination, a luxury resort that’s nestled in a coconut grove in the serene countryside of Pollachi.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Pollachi-e1711122985589.webp"
      },
      {
        day: 4,
        title: "Pollachi to Coonoor",
        km: "170 km",
        description: "Today we´ll speed across industrial plains bypassing the big city of Coimbatore to reach the foot of the mountains up to the Wayanad district. We wind our way over hairpin bends through dense jungle, breathtaking views and monkeys up to our destination of the day, the town of Coonoor on 1800 meters above sea level. On our way up the temperature will drop noticeable. Nesting high above the plains a cozy little resort will cater us with excellent food and exceptional accommodation.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Coonoor-e1711123268412.webp"
      },
      {
        day: 5,
        title: "Coonoor to Sulthan Bathery",
        km: "130 km",
        description: "In north-western direction our journey leads us over the elevated plateau of Wayanad towards the town of Sulthan Bathery. The climate is very pleasant and the road is legendary amongst riders and puts smiles in enthusiasts faces for its soft curved line through the hills of the tea plantations. Adjacent to wide paddy fields, in a small forest, lies our wild and naturally beautiful resort for the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Sulthan-Bathery-e1711123081733.webp"
      },
      {
        day: 6,
        title: "Sulthan Bathery to Kannur",
        km: "150 km",
        description: "Over a nice road, good surface, through cool forest and some downtown traffic (what a mix) we reach a steep sheer leading us down to the coastal areas of the Kannur district. Just like the climate, traffic is slowly changing to hotter. Still rural areas dominate as we approach our next two days stop near the city of Kannur. Get ready to relax from the past days on the road in a lovingly run resort on a cliff right at the Arabian Sea. Sleep tight with the sound of the waves in your ears.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kannur-e1711123217873.webp"
      },
      {
        day: 7,
        title: "Day Off in Kannur",
        km: "0 km",
        description: "Relax. Enjoy the delicious homemade traditional food. Enjoy the beach and the warm Ocean. Enjoy the view to the horizon. Do you want an Ayurvedic massage? Do you want to visit the vivid Kannur Market? Do you really want to smell the fishing harbour? Do whatever you please on our day off. We’ll help you make it happen.",
        image: "https://slowmoto.tours/wp-content/uploads/Day-Off-Kannur-e1711123393648.webp"
      },
      {
        day: 8,
        title: "Kannur to Noolpuzha",
        km: "190 km",
        description: "With a short detour over *surprise* we ride back up into the Wayanad district, of course on a different route. Local tourist love it on weekends because of the scenery, but we enjoy this almost for ourself. Up through forests and monkeys and the climate change we know already, into the tea and coffee plantations. In south-eastern direction we swing through the hills to our destination, a very tastefully renovated heritage resort situated on the banks of a river.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Noolpuzha-e1711123114229.webp"
      },
      {
        day: 9,
        title: "Noolpuzha to Hasanur",
        km: "170 km",
        description: "The nice and easy curves of the Hill Highway lead us into the Bandipur Tiger Reserve. A good road and actually great chances to see Elephants, Dear, Peacock, the regular Rhesus Monkeys, but also Gray Langur. An hour later we ride on long straight country roads through agricultural areas right into the next wildlife sanctuary with same chances of spotting these animals. A wonderful road through huge Bamboos brings us into the heart of Elephant land. Things are a bit more rustic here. The roads as well as the simple but warmly run farm resort, where we stay for the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Hasanur-e1711123245516.webp"
      },
      {
        day: 10,
        title: "Hasanur to Erode",
        km: "120 km",
        description: "We leave Elephant land through a wide valley and over 27 hairpin bends and spectacular views down to the Erode plains. Along the foot of the mountain range we ride straight long and easy country roads. As the traffic becomes denser we reach todays destination, the lively city of Erode. Here we will stay at a proper hotel right in the heart of the town.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Erode-e1711123287579.webp"
      },
      {
        day: 11,
        title: "Erode to Kodaikanal",
        km: "180 km",
        description: "The day starts on long straight country roads, not much traffic, perfect surfaces through rural areas with a lot of impressions of Tamil Nadu life on the country side. Many temples and shrines, lots of animals. After three hours we reach the small colourful pilgrim town of Palani. From there we ride up to 1700 meters. Hairpin bends lead us through beautiful forests along fantastic viewpoints further into the mountains on perfectly winding roads until we reach todays destination, Kodaikanal. For the night we stay in our private contemporary Villa with a great view of the town.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kodaikanal-e1711123162526.webp"
      },
      {
        day: 12,
        title: "Kodaikanal to Munnar",
        km: "190 km",
        description: "Riding down the Kodai mountains with stunning views over mostly good road conditions we reach a short speedy stretch through the Periyakulam plains. Much fun, not much traffic, to the next mountain range. 17 hairpin bends, great road conditions and again breathtaking views, up to 1400 meters. From there we glide on a perfect broad road another 2 hours over the highest point at 1800 meter to the city of Munnar, todays destination. Our beautiful nature resort is situated a little lower, away from noise and tourists.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Munnar-e1711123136142.webp"
      },
      {
        day: 13,
        title: "Munnar to Kochi",
        km: "140 km",
        description: "On our final route we leave the beautiful hills of Munnar. With mountain views we glide slowly in two hours over winding roads in great conditions down the hills back to the Kochi area. As the climate is getting hotter again, so is the traffic. We ride back to the coastal areas and to our starting point at the Ocean, where you might want to jump in straight away.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kochi-e1711123192621.webp"
      },
      {
        day: 14,
        title: "Check-Out in Kochi",
        km: "0 km",
        description: "Take a last dip in the Arabian Sea and carry all those memories with you. Share your amazing experience with your family and friends. Have a relaxed and safe onward journey and keep your eyes open for our next rides. We are already working on new routes and destinations.",
        image: "https://slowmoto.tours/wp-content/uploads/Check-out-Kochi.webp"
      }
    ],
    pricing: {
      rider: 2950,
      pillion: 2430,
      singleRoom: 390
    },
    quickFacts: {
      startEnd: "Kochi, Kerala, India",
      tourDuration: "14 Days / 13 Nights / 11 Days on the Enfield",
      totalDistance: "1700 km",
      averageRiding: "6 hours/day, including breaks",
      bikesMax: "6 Bikes max",
      airport: "Kochi / Cochin / COK",
      pillionNote: "Short stretches may be unsuitable for pillion riders. In such cases, pillion riders have a place in our support vehicle."
    },
    included: [
      "Royal Enfield Classic 350 motorbike including gas and kilometers",
      "English speaking tour guide and support crew",
      "A dedicated Royal Enfield mechanic is with us all the time",
      "Support truck for luggage and spare equipment",
      "Accommodation (Double Room or Single Accommodation according to your booking)",
      "Breakfast, lunch and dinner",
      "All non-alcoholic drinks",
      "Insurance for the bike (covering material damage to the motorbike and material damage and personal injury to third parties)",
      "Entrance fees for sights, nature reserves, road tolls",
      "Oceans, rivers, swimming pools",
      "Our gratitude for booking with us :-)"
    ],
    requirements: [
       "valid passport",
      "visa (get your official visa here: https://indianvisaonline.gov.in)",
      "valid internationl driving license for 350ccm motorbikes",
      "international travel insurance (covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad)",
      "personal protective equipment (mandatory: proper shoes and gloves, helmet; highly recommended: protective clothing, raingear, dust protection, sunglasses and sun screen lotion)"
    ],
    faq: [
      {
        question: "Is there Wifi?",
        answer: "Facilities such as electricity, Wifi and laundry are available at accommodations."
      },
      {
        question: "Is it safe?",
        answer: "A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital."
      }
    ]
  },
  {
    slug: "goa-ka-rishta",
    title: "Goa Ka Rishta",
    subtitle: "12 Days Kochi → Goa",
    description: "An exciting one-way motorcycle adventure exploring the scenic landscapes of the Western Ghats. From Kerala over Tamil Nadu into Karnataka and Goa enjoy the rides through reserves and to natural wonders and serene stays.",
    duration: "12 DAYS",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800",
    alt: "Western Ghats Ride",
    headerImage: "https://slowmoto.tours/wp-content/uploads/12-days-adventure-motorcycle-trips-Kochi-to-Goa-Header-Desktop.webp",
    mapImage: "https://slowmoto.tours/wp-content/uploads/SMT-Map-GoaKaRishta-1440.svg",
    introText: [
      "Embark on the “Goa Ka Rishta” adventure motorcycle trip, a 1400 km one-way ride from Kochi to Goa. The term “Goa Ka Rishta” translates to “Connection to Goa” in Hindi, symbolizing this tour’s link to the vibrant state of Goa.",
      "As we ride our Enfields through the scenic landscapes, rural towns, and picturesque vistas of South India, we immerse ourselves in the rich cultural tapestry of the region. Highlights of this adventure motorcycle trip include rides through Tiger- and Elephant-Reserves, visits to breathtaking natural wonders such as Athirappilly Falls or Jog Falls, serene stays at handpicked nature resorts, and traversing the mountainous terrain of Wayanad and Coorg.",
      "The route also features a leisurely stop in Kannur by the beach, where we can enjoy Ayurvedic massages and unwind amidst the tranquil surroundings. We cruise through Madikeri and Chikmagaluru, encountering lush forests, fragrant coffee plantations, and charming villages along the way.",
      "Each leg of this adventure motorcycle trip promises an exhilarating ride, punctuated by moments of awe-inspiring beauty and cultural immersion. Whether you’re roaring along winding country roads or enjoying the pool at a jungle resort, we guarantee an unforgettable experience, that will deepen your bond with the diverse and captivating landscape of South India."
    ],
    itinerary: [
      {
        day: 1,
        title: "Your Arrival Day, Kochi",
        km: "0 km",
        description: "Welcome to our base at the beach. Take a deep breath, relax and jump into the Arabian Sea. Have a seat on your Enfield. Get her adjusted to your needs by our mechanic. Meet your fellow riders and our crew over a cold drink at the dinner table and take a good night of sleep before it gets really exciting.",
        image: "https://slowmoto.tours/wp-content/uploads/Cherai-Beach-Front.webp"
      },
      {
        day: 2,
        title: "Kochi to Athirappilly Falls",
        km: "80 km",
        description: "On your inaugural day with the Enfields, we’ll keep it relaxed and leisurely, giving you a taste of the typical traffic and road conditions ahead. Departing from the bustling coastal region, we’ll gradually transition into serene rural landscapes before navigating our way along a winding road to the refreshing coolness of the forested area surrounding the magnificent Athirappilly Waterfalls. Resting for the night, we’ll be accommodated in a secluded, modern villa nestled beside a picturesque jungle river.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Athirappilly-Falls.webp"
      },
      {
        day: 3,
        title: "Athirappilly Falls to Pollachi",
        km: "140 km",
        description: "Over a small beautiful road we will ride our Enfields deep into the forest and mountains of a wildlife sanctuary. Everyday we pray to all available Gods that this road isn´t closed due to wild Elephants being actually wild. We pass the small town of Valparai and turn North over endless curves through tea plantations and 40 hairpin bends down to the plains where we will soon reach our destination, a dreamy eco-village, nestled in a coconut grove in the tranquil countryside of Pollachi, ready for us to relax and spend the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Pollachi-e1711122985589.webp"
      },
      {
        day: 4,
        title: "Pollachi to Coonoor",
        km: "170 km",
        description: "Today we´ll speed across industrial plains bypassing the big city of Coimbatore to reach the foot of the mountains up to the Wayanad plateau. We wind our way over hairpin bends through dense jungle, breathtaking views and monkeys up to our destination of the day, the town of Coonoor on 1800 meters above sea level. On our way up the temperature will drop noticeable. Nesting high above the plains a cozy little resort will cater us with excellent food and exceptional accommodation.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Coonoor-e1711123268412.webp"
      },
      {
        day: 5,
        title: "Coonoor to Sulthan Bathery",
        km: "130 km",
        description: "In north-western direction over an elevation of 2400 meter above sea level our journey leads us on the Wayanad plateau towards the town of Sulthan Bathery. The climate is very pleasant and the road is legendary amongst riders and puts smiles in enthusiasts faces for its soft curved line through the hills of the tea plantations. Adjacent to wide paddy fields, in a small forest, lies our wild and naturally beautiful resort for the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Sulthan-Bathery-e1711123081733.webp"
      },
      {
        day: 6,
        title: "Sulthan Bathery to Kannur",
        km: "150 km",
        description: "Over a nice road, good surface, through cool forest and some downtown traffic (what a mix) we reach a steep sheer leading us down to the coastal areas of the Kannur district. Just like the climate, traffic is slowly changing to hotter. Still rural areas dominate as we approach our next two days stop near the city of Kannur. A quick encounter with city traffic brings us on quiet backroads to our beautiful resort in a quiet location right at the Arabian Sea. Get ready to relax from the past days on the road with the sound of the waves lulling you to sleep.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kannur-e1711123217873.webp"
      },
      {
        day: 7,
        title: "Day Off in Kannur",
        km: "0 km",
        description: "Take a well-deserved break and enjoy the amenities of our resort. Indulge in delicious homemade traditional food, relax on the beach, or explore the local market. Whether you opt for an Ayurvedic massage or a visit to the fishing harbour, it’s your day to unwind and rejuvenate. Do whatever you please on our day off. We help you get through it.",
        image: "https://slowmoto.tours/wp-content/uploads/Day-Off-Kannur-e1711123393648.webp"
      },
      {
        day: 8,
        title: "Kannur to Madikeri",
        km: "125 km",
        description: "Starting from Kannur, we leave coastal traffic behind for Karnataka. Ascending the Western Ghats, we head to Coorg, known as the “Scotland of India”. Expect enchanting roads through lush coffee plantations, stunning scenery, and pleasant weather. Passing Madikeri, we continue on tiny forest road to a serene overnight stop nestled amidst the jungle—a truly tranquil spot.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Madikeri-1.webp"
      },
      {
        day: 9,
        title: "Madikeri to Chikmagaluru",
        km: "145 km",
        description: "Our journey starts through a lush jungle and plantations, leading to Madikeri on flawless roads with stunning views. Beyond Madikeri, a scenic route perfect for motorcycling winds through pristine jungle and fragrant coffee plantations. With excellent road conditions and minimal traffic, this stretch offers an exhilarating ride. Further ahead, we pass picturesque paddy fields and rural life. A swift dash on well-maintained roads brings us to our overnight stop, a truly grand mansion surrounded by coffee plantations.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Chikmagaluru-1.webp"
      },
      {
        day: 10,
        title: "Chikmagaluru to Jog Falls",
        km: "230 km",
        description: "The morning starts with the mesmerising experience of a ride ride through jungle and coffee plantations up and down the misty mountains. We will transition into our thrilling speed day on quaint roads. Cruising on well-maintained stretches, we navigate endless curves through stunning landscapes—a delight for motorcycling enthusiasts. Transitioning to a charming forest road, we leisurely traverse amidst serene surroundings and optimal conditions. Returning to our speedy route, we encounter minimal traffic and excellent roads, leading us to our evening stop at the majestic Jog Falls, India’s second highest plunge waterfalls.",
        image: "https://slowmoto.tours/wp-content/uploads/Jog-Falls.jpeg"
      },
      {
        day: 11,
        title: "Jog Falls to Palolem",
        km: "220 km",
        description: "Our final day on the Enfields begins on a picturesque country road winding through verdant paddy plains, offering glimpses of tranquil village life. Despite occasional patchy spots, the mostly good road conditions add adventure. Transitioning to gently rolling hills with lush forests and quaint villages, we descend from the mountain range onto a narrow forest road. Emerging, we find a wide, impeccably paved road leading to the coast. Following the coastal highway, we reach our final destination – Palolem Beach.",
        image: "https://slowmoto.tours/wp-content/uploads/Small-Highway-to-Goa-on-guided-motorcycle-tours-India.webp"
      },
      {
        day: 12,
        title: "Check-out in Palolem",
        km: "0 km",
        description: "On our last day, we enjoy one final swim in the Arabian Sea before wrapping up our adventure. With memories of exciting rides and beautiful sights, we check out, ready to move on. As we bid goodbye to Goa, we carry the experiences of this journey with us, looking forward to future adventures.",
        image: "https://slowmoto.tours/wp-content/uploads/Agonda-Beach.webp"
      }
    ],
    pricing: {
      rider: 2580,
      pillion: 2130,
      singleRoom: 330
    },
    quickFacts: {
      startEnd: "Starts in Kochi, Ends in Palolem",
      tourDuration: "12 Days / 11 Nights / 9 Days on the Enfield",
      totalDistance: "1400 km",
      averageRiding: "6 hours/day including breaks",
      bikesMax: "6 Bikes max",
      airport: "Kochi (COK) / Dabolim (GOI)",
      pillionNote: "Short stretches may be unsuitable for pillion riders. In such cases, pillion riders have a place in our support vehicle."
    },
    included: [
      "Royal Enfield Classic 350 motorbike including gas and kilometers",
      "English speaking tour guide and support crew",
      "A dedicated Royal Enfield mechanic is with us all the time",
      "Support truck for luggage and spare equipment",
      "Accommodation (Double Room or Single Accommodation according to your booking)",
      "Breakfast, lunch and dinner",
      "All non-alcoholic drinks",
      "Insurance for the bike (covering material damage to the motorbike and material damage and personal injury to third parties)",
      "Entrance fees for sights, nature reserves, road tolls",
      "Oceans, rivers, swimming pools",
      "Our gratitude for booking with us :-)"
    ],
    requirements: [
       "valid passport",
      "visa (get your official visa here: https://indianvisaonline.gov.in)",
      "valid internationl driving license for 350ccm motorbikes",
      "international travel insurance (covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad)",
      "personal protective equipment (mandatory: proper shoes and gloves, helmet; highly recommended: protective clothing, raingear, dust protection, sunglasses and sun screen lotion)"
    ],
    faq: [
      {
        question: "Is there Wifi?",
        answer: "Facilities such as electricity, Wifi and laundry are available at accommodations."
      },
      {
        question: "Is it safe?",
        answer: "A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital."
      }
    ]
  },
  {
    slug: "goa-se-wapasi",
    title: "Goa Se Wapasi",
    subtitle: "12 Days Goa → Kochi",
    description: "A thrilling one-way motorcycle tour through the Western Ghats, Kerala's wildlife reserves, and Tamil Nadu's cultural landscapes, experiencing nature's splendour and the cultural diversity of Southern India.",
    duration: "12 DAYS",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
    alt: "South India Motorcycle Tour",
    headerImage: "https://slowmoto.tours/wp-content/uploads/12-days-adventure-motorcycle-trips-Goa-to-Kochi-Header-Desktop.webp",
    mapImage: "https://slowmoto.tours/wp-content/uploads/SMT-Map-GoaKaRishta-1440.svg",
    introText: [
      "Prepare for an extraordinary adventure motorcycle trip as we embark on the unforgettable journey called ‘Goa Se Wapasi’—a term in Hindi symbolizing the return from Goa’s sun-drenched beaches. This one-way adventure motorcycle trip isn’t just a mere excursion; it’s a saga from the lively beaches of Goa through the tropical beauty of the Western Ghats to the city of Kochi in Kerala.",
      "Get ready to be captivated as we traverse along scenic routes, meticulously designed for the passionate rider. Our path meanders through the lush tapestry of the Western Ghats, offering a serene blend of twists and turns that embrace every rider’s spirit.",
      "Amidst this breathtaking scenery, we navigate our Enfields through the Tiger- and Elephant-reserves in Kerala, and ascending the lofty Wayanad Plateau, revealing nature’s pristine beauty.",
      "As our wheels roll through Tamil Nadu, the landscape unfolds like a painting, each stretch revealing a new facet of its culture. Crossing back into Kerala, we’re greeted by the majestic vistas of the Munnar Hills—a sight to behold and a sheer pleasure to conquer. Descending towards Kochi, we reach our final destination at the Arabian Sea, where the journey concludes amidst the soothing sounds of the ocean waves."
    ],
    itinerary: [
      {
        day: 1,
        title: "Your Arrival Day, Palolem, Goa",
        km: "0 km",
        description: "Welcome to Palolem Beach! Take a moment to relax and soak in the beautiful surroundings. Enjoy a refreshing swim in the Arabian Sea, walk along the bustling beach at sunset. Get to know your fellow riders and our crew over a cold drink at dinner. Rest up for the exciting journey ahead.",
        image: "https://slowmoto.tours/wp-content/uploads/Agonda-Beach.webp"
      },
      {
        day: 2,
        title: "Palolem to Jog Falls",
        km: "220 km",
        description: "We start our tour from Palolem, riding along the coastal highway, enjoying scenic views of the coastline. Transitioning to gently rolling hills and lush forests, we ascend into the mountain range of the Western Ghats, navigating through quaint villages and verdant paddy plains. Our day ends at the majestic Jog Falls, India’s second highest plunge waterfalls.",
        image: "https://slowmoto.tours/wp-content/uploads/Jog-Falls.jpeg"
      },
      {
        day: 3,
        title: "Jog Falls to Chikmagaluru",
        km: "230 km",
        description: "Leaving Jog Falls behind, we continue our ride through picturesque countryside, passing through charming forest roads and serene surroundings. Enjoy the thrill of motorcycling on well-maintained stretches amidst stunning landscapes. Our day concludes at a truly grand mansion surrounded by coffee plantations near Chikmagaluru.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Jog-Falls-1.webp"
      },
      {
        day: 4,
        title: "Chikmagaluru to Madikeri",
        km: "170 km",
        description: "Today’s journey starts in a lush valley with pristine jungle. Enjoy the enchanting roads and minimal traffic as we ride through fragrant forest and coffee plantations. A straight speedy stretch is followed by perfectly winding roads made for motorcycling. We continue our cruise to Madikeri on fantastic stretches and it´s just pure fun riding there. Stunning views and rural life before reaching our serene overnight stop nestled amidst the jungle.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Chikmagaluru-1.webp"
      },
      {
        day: 5,
        title: "Madikeri to Kannur",
        km: "120 km",
        description: "Starting from Madikeri on a small forest road we are back on the main roads to descend from the Western Ghats to the Kannur district. Enjoy the changing scenery as we ride through cool forests and rural areas into the hot and bustling coastal area. A quick encounter with city traffic in Kannur brings us on quiet backroads to our beautiful resort in a quiet location right at the Arabian Sea. Relax with the sound of the waves lulling you to sleep.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Madikeri.webp"
      },
      {
        day: 6,
        title: "Day Off in Kannur",
        km: "0 km",
        description: "Take a well-deserved break and enjoy the amenities of our resort. Indulge in delicious homemade traditional food, relax on the beach, or explore the local market. Whether you opt for an Ayurvedic massage or a visit to the fishing harbour, it’s your day to unwind and rejuvenate. Do whatever you please on our day off. We help you get through it.",
        image: "https://slowmoto.tours/wp-content/uploads/Day-Off-Kannur-e1711123393648.webp"
      },
      {
        day: 7,
        title: "Kannur to Sulthan Bathery",
        km: "170 km",
        description: "Leaving Kannur behind, we ride up the mountains to the Wayanad plateau before reaching the town of Sulthan Bathery. Enjoy the winding road through the hills of tea plantations, with pleasant climate and stunning views. Rest for the night at a wild and naturally beautiful resort amidst a small forest.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Kannur-e1711123217873.webp"
      },
      {
        day: 8,
        title: "Sulthan Bathery to Coonoor",
        km: "120 km",
        description: "Our journey takes us in a south-easterly direction towards the rim of the Wayanad plateau. Enjoy the soft curves of the legendary “Hill Highway”, a dream come true for every biker. We ascend to over 2400 meters above sea level before we reach Coonoor, where a cozy resort awaits us, offering excellent food and accommodation and a fantastic view over the plain far below.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Sulthan-Bathery-e1711123081733.webp"
      },
      {
        day: 9,
        title: "Coonoor to Pollachi",
        km: "160 km",
        description: "We are starting this morning in cool and clear mountain air on a beautiful narrow and winding road through the tea plantations. The descent from the Wayanad plateau downhill leads us over perfect tarmac on a broad road to the foot of the hills. In the hotter plains we are bypassing the major industrial city of Coimbatore on broad roads, back roads and even highways. A dreamy eco-village, nestled in a coconut grove in the tranquil countryside of Pollachi, awaits us, ready for us to relax and spend the night.",
        image: "https://slowmoto.tours/wp-content/uploads/to-Coonoor-e1711123268412.webp"
      },
      {
        day: 10,
        title: "Pollachi to Munnar",
        km: "120 km",
        description: "Through coconut plantations we ride our Enfields towards the rising sun to the forest check post of Anaimalai Tiger Reserve. On a small road we navigate deeper and higher into the magnificent landscapes of this wildlife sanctuary. We scratch the 2000 meters mark and find ourselves on a broad and perfect road that mus have been designed by a motocycle enthusiast. Endless curves through tea plantations are accompanied by breathtaking views. We reach the city of Munnar, todays destination. Our beautiful nature resort is situated a little lower, away from noise and tourists.",
        image: "https://slowmoto.tours/wp-content/uploads/In-Anamalai-Tiger-Reserve-on-guided-motorcycle-tours-India.webp"
      },
      {
        day: 11,
        title: "Munnar to Kochi",
        km: "130 km",
        description: "On our final riding day, we journey back to Kochi, transitioning from cool jungle mountains and serene rural landscapes to the bustling coastal region. Enjoy the leisurely ride and the taste of typical traffic as we get closer to our final destination, a charming traditional guesthouse at the beach near Kochi.",
        image: "https://slowmoto.tours/wp-content/uploads/Munnar-tea-plantaions-on-guided-motorcycle-tours-india.webp"
      },
      {
        day: 12,
        title: "Check-out in Kochi",
        km: "0 km",
        description: "As our adventure comes to an end, take one last swim in the Arabian Sea before checking out. Reflect on the memories of the journey as you bid farewell to Kochi, carrying with you the unforgettable experiences of this adventure motorcycle trip.",
        image: "https://slowmoto.tours/wp-content/uploads/Cherai-Beach-Front.webp"
      }
    ],
    pricing: {
      rider: 2580,
      pillion: 2130,
      singleRoom: 330
    },
    quickFacts: {
      startEnd: "Starts in Palolem, Ends in Kochi",
      tourDuration: "12 Days / 11 Nights / 9 Days on the Enfield",
      totalDistance: "1400 km",
      averageRiding: "6 hours/day including breaks",
      bikesMax: "6 Bikes max",
      airport: "Dabolim (GOI) / Kochi (COK)",
      pillionNote: "Short stretches may be unsuitable for pillion riders. In such cases, pillion riders have a place in our support vehicle."
    },
    included: [
      "Royal Enfield Classic 350 motorbike including gas and kilometers",
      "English speaking tour guide and support crew",
      "A dedicated Royal Enfield mechanic is with us all the time",
      "Support truck for luggage and spare equipment",
      "Accommodation (Double Room or Single Accommodation according to your booking)",
      "Breakfast, lunch and dinner",
      "All non-alcoholic drinks",
      "Insurance for the bike (covering material damage to the motorbike and material damage and personal injury to third parties)",
      "Entrance fees for sights, nature reserves, road tolls",
      "Oceans, rivers, swimming pools",
      "Our gratitude for booking with us :-)"
    ],
    requirements: [
       "valid passport",
      "visa (get your official visa here: https://indianvisaonline.gov.in)",
      "valid internationl driving license for 350ccm motorbikes",
      "international travel insurance (covering costs of outpatient and inpatient treatment and prescribed remedies if you are acutely ill or have an accident abroad)",
      "personal protective equipment (mandatory: proper shoes and gloves, helmet; highly recommended: protective clothing, raingear, dust protection, sunglasses and sun screen lotion)"
    ],
    faq: [
      {
        question: "Is there Wifi?",
        answer: "Facilities such as electricity, Wifi and laundry are available at accommodations."
      },
      {
        question: "Is it safe?",
        answer: "A good thing about our guided tours is that you can rely on our trustful guides to have an eye on you. As anywhere else in the world you can expect the odd pickpockets and conmen. But unlike other places, the locals will side with the tourists rather than their own people. Malaria is not a risk in South India. There are big mosquitoes, but they cause nothing but the usual itching. Dengue fever is endemic to South India, particularly during monsoon season, so good precautions such as strong repellants and nets are vital."
      }
    ]
  },
  {
    slug: "your-custom-ride",
    title: "Your Custom Ride",
    subtitle: "Tailor-Made Adventures",
    description: "South India is yours! Let´s design your tailor-made Adventure Motorcycle Ride. Your timing, your route, your company - no limits. We'd love to design your custom all inclusive Royal Enfield Adventure.",
    duration: "CUSTOM",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800",
    alt: "Custom Motorcycle Trip Planning",
    headerImage: "https://slowmoto.tours/wp-content/uploads/Sunset-River-our-rides.webp",
    introText: [
      "Based on your ideas, group size and timeframe, we will put together a wonderful tailor-made package for you. With all our creativity, experience and local knowledge.",
      "Start wherever you want – end wherever you want – choose your area. Whatever your ideas of brilliant custom motorcycle adventure holidays are, we will help you make it happen. With all our experience, our local knowledge, our contacts and our bikes. Or your own bikes if you wish."
    ],
    itinerary: [],
    pricing: {
      rider: 0,
      pillion: 0,
      singleRoom: 0
    },
    quickFacts: {
      startEnd: "Flexible",
      tourDuration: "Flexible",
      totalDistance: "Flexible",
      averageRiding: "Flexible",
      bikesMax: "Flexible",
      airport: "Dependent on Route"
    },
    included: [],
    requirements: [],
    faq: []
  }
];
