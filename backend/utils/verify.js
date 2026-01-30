const path = require('path');
const Strapi = require('@strapi/strapi');

async function verify() {
    const app = await Strapi.createStrapi({ distDir: path.join(__dirname, '../dist') }).load();
    await app.start();

    const tourCount = await app.documents('api::tour.tour').count({ status: 'published' });
    const homepage = await app.documents('api::homepage.homepage').findFirst({ status: 'published' });

    console.log(`Tours Count: ${tourCount}`);
    console.log(`Homepage Exists: ${!!homepage}`);
    console.log(`Homepage Hero Title (EN): ${homepage?.hero?.title}`);

    // Check Localization
    const homepageDe = await app.documents('api::homepage.homepage').findFirst({ locale: 'de', status: 'published' });
    console.log(`Homepage Hero Title (DE): ${homepageDe?.hero?.title}`);

    process.exit(0);
}

verify();
