const path = require('path');
const Strapi = require('@strapi/strapi');

async function checkInternal() {
    console.log('Initializing Strapi to check data...');
    const app = await Strapi.createStrapi({
        distDir: path.join(__dirname, '../dist')
    }).load();

    await app.start();

    try {
        const tours = await app.documents('api::tour.tour').findMany({
            locale: 'all',
            status: 'draft' // Check even drafts
        });
        console.log(`[Internal] Tours found: ${tours.length}`);
        tours.forEach(t => {
            console.log(`- Slug: ${t.slug}, Locale: ${t.locale}, Status: ${t.publishedAt ? 'Published' : 'Draft'}, ID: ${t.documentId}`);
        });

        const users = await app.documents('plugin::users-permissions.user').findMany();
        console.log(`[Internal] Users found: ${users.length}`);

    } catch (e) {
        console.error('Error checking internal data:', e);
    }

    process.exit(0);
}

checkInternal();
