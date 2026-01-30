// Native fetch used in Node 18+

const token = '4bf001275aa60e7ca15014e2b9285d9c96024025868b91dd0c458caf07ddaa960d9c122d35184cd18c07595962600e327bfe28d495cb70d245697f10443f1ec4349e58209aaaa841c485086c5d45e15e0b0695879352bf02802ed0c4bcb3ecc9b9ee187be86a39ea3559c183800de06f1216ed08dc5dbdebad878dbcc6d75650';

async function createTour() {
    const url = 'http://127.0.0.1:1337/api/tours';

    // Minimal payload to test creation
    const data = {
        data: {
            slug: "the-seema-ride",
            title: "The Seema Ride",
            subtitle: "6 Days Kochi Round Trip",
            description: "Test Description via API",
            duration: "6 DAYS",
            introText: ["Intro 1"],
            locale: "en",
            // publishedAt: new Date().toISOString() // Explicitly publish
        }
    };

    console.log('Creating tour via API...');
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const json = await res.json();
        console.log('Status:', res.status);
        console.log('Response:', JSON.stringify(json, null, 2));
    } catch (e) {
        console.error('Error:', e);
    }
}

createTour();
