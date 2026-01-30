// Native fetch is available in Node 18+

const API_URL = 'http://127.0.0.1:1337/api';
const TOKEN = 'c494690e6eb39ca2902981431b89283b398627fecfbc4abd8963bcb136a518607cdda31c3a7e4c67b4c343f8885b7014ec4277b73fb274b3a032efec592fe46614cf7acec396cfe2584bd0f34b9d3ad15e9a3a7e72c65b22117a602432cc8fdc756e64c23ecb8236bd4a22c6c7c34bf9ae9f33ae45d4caf408d456e978eb457a';

async function verifyToken() {
    console.log(`Checking API at ${API_URL}`);

    const endpoints = [
        '/tours',
        '/homepage',
        '/homepage?populate=*',
        '/homepage?populate=*&locale=all'
    ];

    for (const ep of endpoints) {
        console.log(`Fetching ${ep}...`);
        try {
            const res = await fetch(`${API_URL}${ep}`, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(`Status: ${res.status} ${res.statusText}`);
            if (res.ok) {
                const data = await res.json();
                console.log(`Data found:`, data.data ? 'yes' : 'no');
            } else {
                console.log('Error Body:', await res.text());
            }
        } catch (e) {
            console.error('Fetch error:', e.message);
        }
        console.log('---');
    }
}

verifyToken();
