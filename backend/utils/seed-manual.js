const path = require('path');
const fs = require('fs');
const Strapi = require('@strapi/strapi');

async function seedManual() {
    console.log('Initializing Strapi for manual seeding...');
    const app = await Strapi.createStrapi({
        distDir: path.join(__dirname, '../dist')
    }).load();

    try {
        await app.start();
    } catch (e) {
        console.error('Strapi start failed:', e);
        await app.destroy();
        process.exit(1);
    }

    try {
        const strapi = app;

        // Check if data exists
        const existingTours = await strapi.documents('api::tour.tour').findMany({ locale: 'all' });
        if (existingTours.length > 0) {
            console.log(`Tours already exist (${existingTours.length}). Skipping seeding.`);
            await app.destroy();
            process.exit(0);
        }

        console.log('Starting seeding process...');

        // Resolve paths relative to BACKEND ROOT (utils is in backend/utils, so .. is backend)
        // tours.ts is in ../frontend/app/data/tours.ts
        const frontendDir = path.join(__dirname, '../../frontend');
        const toursPath = path.join(frontendDir, 'app/data/tours.ts');

        if (!fs.existsSync(toursPath)) {
            console.warn(`Tours data file not found at ${toursPath}`);
            return;
        }

        console.log(`Reading tours from ${toursPath}`);
        let content = fs.readFileSync(toursPath, 'utf8');

        const dataIndex = content.indexOf('export const TOURS_DATA');
        if (dataIndex !== -1) {
            content = content.substring(dataIndex);
        }
        content = content.replace(/export const TOURS_DATA[\s\S]*?=/, 'module.exports =').replace(/export type .*?;/g, '');

        const tempPath = path.join(__dirname, 'temp_tours_manual.js');
        fs.writeFileSync(tempPath, content);
        const tours = require(tempPath);

        const formatDate = (dateStr) => {
            if (!dateStr) return null;
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return dateStr;
            return d.toISOString().split('T')[0];
        };

        for (const tour of tours) {
            console.log(`Seeding Tour: ${tour.slug}`);

            console.log('Formatting dates...');
            const formattedDates = tour.dates ? tour.dates.map(d => ({
                ...d,
                start: formatDate(d.start),
                end: formatDate(d.end)
            })) : [];
            console.log('Dates formatted.');

            const entryData = {
                slug: tour.slug,
                title: tour.title,
                subtitle: tour.subtitle,
                description: tour.description,
                duration: tour.duration,
                introText: tour.introText,
                itinerary: tour.itinerary,
                included: tour.included,
                requirements: tour.requirements,
                quickFacts: tour.quickFacts,
                pricing: tour.pricing,
                faq: tour.faq,
                dates: formattedDates,
            };

            // Check if exists
            const existingEntries = await strapi.documents('api::tour.tour').findMany({
                filters: { slug: tour.slug },
                locale: 'all',
                status: 'draft', // Check drafts too
            });

            let docId;
            if (existingEntries.length > 0) {
                console.log(`Tour ${tour.slug} exists. Updating...`);
                docId = existingEntries[0].documentId;
                // Update logic if needed, or just skip
            } else {
                console.log('Forcing new slug for test...');
                const data = { ...entryData, locale: 'en' };
                // data.slug = data.slug + '-v2'; // Comment out V2 hack to test clean
                console.log('Data slug:', data.slug); // Log slug specifically
                fs.writeFileSync(path.join(__dirname, 'seed_payload.json'), JSON.stringify(data, null, 2));

                const doc = await strapi.documents('api::tour.tour').create({
                    data: data,
                    status: 'published'
                });
                docId = doc.documentId;
            }

            if (docId) {
                await strapi.documents('api::tour.tour').update({
                    documentId: docId,
                    locale: 'de',
                    data: {
                        title: tour.titleDe || tour.title,
                        subtitle: tour.subtitleDe,
                        description: tour.descriptionDe,
                        introText: tour.introTextDe,
                        itinerary: tour.itineraryDe,
                        quickFacts: tour.quickFactsDe,
                        included: tour.includedDe,
                        requirements: tour.requirementsDe,
                        faq: tour.faqDe
                    },
                    status: 'published'
                });
            }
        }
        console.log('Seeding completed.');

    } catch (e) {
        console.error('Seeding failed. Writing detailed error to seed_error.log');
        fs.writeFileSync(path.join(__dirname, 'seed_error.log'), JSON.stringify(e, null, 2));
    }

    await app.destroy();
    process.exit(0);
}

seedManual();
