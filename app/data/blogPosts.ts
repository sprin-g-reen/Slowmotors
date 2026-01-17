export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    content: string;
    titleDe?: string;
    excerptDe?: string;
    contentDe?: string;
    youtubeId?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "traffic-rules-road-conditions-and-safety-in-india",
        title: "Traffic Rules, Road Conditions, and Safety in India",
        date: "Jan 15, 2025",
        excerpt: "A Survival Guide for First-Time Riders in the Land of Horns, Herds, and Holy Chaos. 10½ Hilariously Honest Observations.",
        image: "https://slowmoto.tours/wp-content/uploads/Crazy-Indian-Traffic-comic-style.webp",
        content: `
<p class="mb-4">Planning your first motorcycle tour in India? First, pat yourself on the back. Then, tighten that helmet and open your heart to a nation where the rules of the road are more like gentle suggestions, and traffic flows like water—chaotic, unpredictable, but somehow always moving.</p>
<p class="mb-4">Here’s the thing most newcomers don’t realize: Indians are unconsciously hyper-aware on the road. They may not glance at the rear-view mirror. They may not hear your horn consciously. But their sixth sense is dialled in. They’re tuned to the frequency of chaos, always ready for a sudden swerve, a holy cow, or a rogue pedestrian mid-moonwalk. Assume anything could happen. Because it probably will.</p>
        `,
        titleDe: "Verkehrsregeln, Straßenverhältnisse und Sicherheit in Indien",
        excerptDe: "Ein Überlebensführer für Erstfahrer im Land der Hupen, Herden und des heiligen Chaos. 10½ urkomisch ehrliche Beobachtungen.",
        contentDe: `
<p class="mb-4">Planst du deine erste Motorradtour in Indien? Klopf dir erst mal auf die Schulter. Dann zieh den Helm fest und öffne dein Herz für ein Land, in dem Verkehrsregeln eher sanfte Vorschläge sind und der Verkehr wie Wasser fließt – chaotisch, unvorhersehbar, aber irgendwie immer in Bewegung.</p>
        `
    },
    {
        slug: "into-anamalai-tiger-reserve-with-slow-moto-tours",
        title: "Into Anamalai Tiger Reserve with Slow Moto Tours",
        date: "Dec 10, 2024",
        excerpt: "Riding through the lush green forests of the Anamalai Tiger Reserve is an experience that stays with you forever.",
        image: "https://slowmoto.tours/wp-content/uploads/Into-Anamalai-Tiger-Reserve.webp",
        youtubeId: "uG3pxFAKFFA",
        content: "Content placeholder for Anamalai Tiger Reserve post."
    },
    {
        slug: "kickstarting-our-season-from-ha-giang-loop-to-our-diwali-tour",
        title: "Kickstarting our season - From Ha Giang loop to our Diwali tour",
        date: "Oct 20, 2024",
        excerpt: "Our upcoming season kicks off with our first tour in October, perfectly timed with Diwali, the festival of lights.",
        image: "https://slowmoto.tours/wp-content/uploads/Bike-Parade-leaving-Hasanur.webp",
        content: `
<p class="mb-4">Pratish has been to Vietnam on the famous Ha Giang Loop and is sharing his impressions in this blog post.</p>
        `,
        titleDe: "Saisonstart - Vom Ha Giang Loop zu unserer Diwali-Tour",
        excerptDe: "Unsere kommende Saison beginnt mit unserer ersten Tour im Oktober, perfekt abgestimmt auf Diwali, das Lichterfest.",
        contentDe: `
<p class="mb-4">Pratish war in Vietnam auf dem berühmten Ha Giang Loop und teilt seine Eindrücke in diesem Blogpost.</p>
        `
    },
    {
        slug: "sacred-trees-of-india",
        title: "Sacred Trees of India",
        date: "Sep 05, 2024",
        excerpt: "Discover the spiritual significance and majestic beauty of India's sacred trees.",
        image: "https://slowmoto.tours/wp-content/uploads/Sacred-Trees-of-India-Title.webp",
        youtubeId: "p8C9J07QPc8",
        content: "Content placeholder for Sacred Trees post."
    },
    {
        slug: "chai-sutta-breaks",
        title: "Chai Sutta Breaks",
        date: "Aug 15, 2024",
        excerpt: "The quintessential Indian road trip experience isn't complete without the legendary Chai Sutta breaks.",
        image: "https://slowmoto.tours/wp-content/uploads/Chai-Sutta-Breaks-Titel.webp",
        youtubeId: "DSQPgX2Fw_s",
        content: "Content placeholder for Chai Sutta Breaks post."
    },
    {
        slug: "opening-the-roads-to-chirakkal",
        title: "Opening the Roads to Chirakkal",
        date: "Jan 01, 2023",
        excerpt: "As we rode through the bustling streets of Kochi, a mix of excitement and apprehension filled my mind. Would everything go according to plan?",
        image: "https://slowmoto.tours/wp-content/uploads/Collage-01012023.webp",
        youtubeId: "L8oRHYpAEO0",
        content: `
<p class="mb-4">Did we work hard enough to ensure a flawless experience for our riders? And so, the moment arrived, and we embarked on our much-anticipated opening tour “The Roads to Chirakkal.”</p>
        `,
        titleDe: "Die Eröffnung der Straßen nach Chirakkal",
        excerptDe: "Als wir durch die belebten Straßen von Kochi fuhren, füllte eine Mischung aus Aufregung und Besorgnis meinen Geist. Würde alles nach Plan laufen?",
        contentDe: `
<p class="mb-4">Haben wir hart genug gearbeitet, um unseren Fahrern ein makelloses Erlebnis zu bieten? Und so kam der Moment, und wir begaben uns auf unsere lang ersehnte Eröffnungstour „The Roads to Chirakkal“.</p>
        `
    },
    {
        slug: "invisible-elephants",
        title: "Invisible Elephants",
        date: "Jul 20, 2023",
        excerpt: "Sometimes the most majestic creatures are the ones you don't see, but you know they are there.",
        image: "https://slowmoto.tours/wp-content/uploads/invisible-Elephants-Title.webp",
        youtubeId: "_Ezti0eQtOg",
        content: "Content placeholder for Invisible Elephants post."
    },
    {
        slug: "massive-electric-mortar",
        title: "Massive Electric Mortar",
        date: "Jun 10, 2023",
        excerpt: "Exploring the traditional ways of grinding spices in India, powered by massive electric mortars.",
        image: "https://slowmoto.tours/wp-content/uploads/Massive-Electric-Mortar-Title.webp",
        youtubeId: "uG3pxFAKFFA",
        content: "Content placeholder for Massive Electric Mortar post."
    },
    {
        slug: "the-only-impossible-journey-is",
        title: "The only impossible journey is the one you never begin.",
        date: "Oct 15, 2022",
        excerpt: "In heavy rain and 14 degrees, we were riding our Enfields through the mountains to scout a route when a thought flashed through my mind for a brief second.",
        image: "https://slowmoto.tours/wp-content/uploads/Collage-01012023.webp",
        content: `
<p class="mb-4">“I´m going straight back to Kochi now and on the next plain home! I´m ready to give up now!”</p>
<p class="mb-4">A moment later I was laughing out loud about this surprise my mind offered me.</p>
        `,
        titleDe: "Die einzige unmögliche Reise ist die, die du nie beginnst.",
        excerptDe: "Bei starkem Regen und 14 Grad fuhren wir mit unseren Enfields durch die Berge, um eine Route zu erkunden, als mir für eine kurze Sekunde ein Gedanke durch den Kopf schoss.",
        contentDe: `
<p class="mb-4">„Ich fahre jetzt direkt zurück nach Kochi und mit dem nächsten Flugzeug nach Hause! Ich bin bereit aufzugeben!“</p>
<p class="mb-4">Einen Moment später lachte ich laut über diese Überraschung, die mir mein Geist bot.</p>
        `
    }
];
