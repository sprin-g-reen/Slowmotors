const token = '4bf001275aa60e7ca15014e2b9285d9c96024025868b91dd0c458caf07ddaa960d9c122d35184cd18c07595962600e327bfe28d495cb70d245697f10443f1ec4349e58209aaaa841c485086c5d45e15e0b0695879352bf02802ed0c4bcb3ecc9b9ee187be86a39ea3559c183800de06f1216ed08dc5dbdebad878dbcc6d75650';

async function checkTours() {
    const url = 'http://127.0.0.1:1337/api/tours?populate=*&locale=all&publicationState=preview';
    console.log(`Fetching ${url} with token...`);
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) {
            console.error('Error:', res.status, res.statusText);
            try {
                const text = await res.text();
                console.error('Body:', text);
            } catch (e) { }
            return;
        }
        const data = await res.json();
        console.log('Response status:', res.status);
        console.log('Data structure keys:', Object.keys(data));
        if (data.data) {
            console.log('Number of tours found:', data.data.length);
            data.data.forEach(t => {
                console.log('Tour keys:', Object.keys(t));
                const slug = t.slug || t.attributes?.slug;
                const locale = t.locale || t.attributes?.locale;
                const documentId = t.documentId || t.id;
                const publishedAt = t.publishedAt || t.attributes?.publishedAt;
                console.log(`- ID: ${documentId}, Slug: ${slug}, Locale: ${locale}, PublishedAt: ${publishedAt}`);
            });
        } else {
            console.log('No data.data found. Full response:', JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error('Fetch failed:', e);
    }
}

checkTours();
