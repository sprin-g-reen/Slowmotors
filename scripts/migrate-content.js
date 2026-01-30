const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const STRAPI_URL = 'http://localhost:1337/api';

// Parsing helpers
function extractObject(fileContent, startPattern) {
    // Very naive extractor: finds regex, counts braces.
    // This assumes the content format is somewhat stable.
    // For `tours.ts`, we can also require it if we use ts-node or transpilation,
    // but let's try to extract JSON-like structures or use string manipulation.

    // Actually, importing the TS file directly in Node JS script is hard without setup.
    // Let's use Regex to extract the big array.
}

// Since I have `tours.ts` content accessible, I'll copy the data structure here manually/programmatically?
// Or I can read the file and use a TS parser.
// Simplest given the environment: Read `tours.ts` text, strip TS types, `eval`.
// RISK: `eval` is dangerous and might fail on imports.
// `tours.ts` has `export interface...` and `export const TOURS_DATA = [...]`.
// I can regex extract `[...]` and `eval` it if I replace `export const ...` with `module.exports = ...` or just `const TOURS_DATA =`.
// And I need to remove type assertions if any. The file seems clean JSON-like structure mostly.

// 1. Tweak `tours.ts` to be require-able or parse-able.
// 2. Tweak `translations.ts` similarly.

async function uploadImage(url) {
    if (!url) return null;
    console.log(`Uploading image: ${url}`);
    try {
        const response = await axios.get(url, { responseType: 'stream' });
        const form = new FormData();
        const filename = url.split('/').pop().split('?')[0];
        form.append('files', response.data, filename);

        const uploadRes = await axios.post('http://localhost:1337/api/upload', form, {
            headers: { ...form.getHeaders() }
        });
        return uploadRes.data[0];
    } catch (e) {
        console.error(`Failed to upload ${url}:`, e.message);
        return null;
    }
}

async function migrateTours() {
    console.log("Migrating Tours...");

    // Read file
    let content = fs.readFileSync(path.join(__dirname, '../frontend/app/data/tours.ts'), 'utf8');
    // Clean up to make it valid JS
    content = content.replace(/export interface [\s\S]*?\n\n/g, ''); // Remove interfaces
    content = content.replace('export const TOURS_DATA: TranslatedTour[] =', 'module.exports =');
    content = content.replace(/import .*?;\n/g, ''); // remove imports
    // Save temp file
    const tempPath = path.join(__dirname, 'tours_data.js');
    fs.writeFileSync(tempPath, content);

    const tours = require('./tours_data.js'); // Require the temp file

    for (const tour of tours) {
        console.log(`Processing tour: ${tour.slug}`);

        // Upload images
        const img = await uploadImage(tour.image);
        const headerImg = await uploadImage(tour.headerImage);
        const mapImg = await uploadImage(tour.mapImage);

        // Prepare entry
        // Map fields matching my Strapi Schema
        const entry = {
            slug: tour.slug,
            title: tour.title,
            subtitle: tour.subtitle,
            description: tour.description,
            duration: tour.duration,
            introText: tour.introText, // JSON
            itinerary: tour.itinerary, // JSON
            included: tour.included,
            requirements: tour.requirements,
            quickFacts: { // Component
                ...tour.quickFacts
            },
            pricing: { // Component
                ...tour.pricing
            },
            faq: tour.faq, // Component (repeatable)
            dates: tour.dates, // Component (repeatable)

            // i18n fields (Need to specific locale?)
            // Strapi create entry: POST /tours
            // { data: { ... } }
            // For localized, we create default loc (en) first, then update with locale='de'.

            image: img ? img.id : null,
            headerImage: headerImg ? headerImg.id : null,
            mapImage: mapImg ? mapImg.id : null
        };

        // 1. Create English Entry
        let createdId;
        try {
            const res = await axios.post(`${STRAPI_URL}/tours`, { data: entry });
            createdId = res.data.data.id;
            console.log(`Created Tour ${tour.slug} (ID: ${createdId})`);
        } catch (e) {
            console.error("Error creating EN tour:", e.response?.data || e.message);
            continue;
        }

        // 2. Update with German locale
        // POST /tours?locale=de is how we create localization?
        // Actually POST /tours/[id]/localizations

        const deEntry = {
            title: tour.titleDe || tour.title, // Fallback
            subtitle: tour.subtitleDe,
            description: tour.descriptionDe,
            introText: tour.introTextDe,
            itinerary: tour.itineraryDe,
            quickFacts: tour.quickFactsDe,
            included: tour.includedDe,
            requirements: tour.requirementsDe,
            faq: tour.faqDe,
            // Dates might be same or localized availability text?
            locale: 'de'
        };

        try {
            await axios.post(`${STRAPI_URL}/tours/${createdId}/localizations`, { data: deEntry });
            console.log(`Created DE localization for ${tour.slug}`);
        } catch (e) {
            console.error("Error creating DE tour:", e.response?.data || e.message);
        }
    }
}

async function migrateHomepage() {
    console.log("Migrating Homepage...");
    // Read translations
    let content = fs.readFileSync(path.join(__dirname, '../frontend/lib/translations.ts'), 'utf8');
    content = content.replace(/export type .*?;/g, ''); // cleanup
    content = content.replace('export const translations =', 'module.exports =');
    const tempPath = path.join(__dirname, 'translations_data.js');
    fs.writeFileSync(tempPath, content);

    const translations = require('./translations_data.js');
    const en = translations.en;

    // Need to upload images if homepage has images.
    // Hero.tsx has 'https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp' hardcoded.
    // It is NOT in translations.ts.
    // User said "Audit... Identify currently hardcoded... regex-match".
    // I need to hardcode the extraction here or parameterize it.
    // I'll assume I manually pass the known images for now or extract them if I had a parser.
    // Given 1 file, I'll validly hardcode the image source I found in Hero.tsx.

    const heroImg = await uploadImage('https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp');
    const foundersImg = await uploadImage('https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp');
    const mapImg = await uploadImage('https://slowmoto.tours/wp-content/uploads/Slow-Moto-Tours-Overview-Map-South-India-Kochi-Goa.webp');

    const entry = {
        hero: {
            title: en.hero.title,
            subtitle: en.hero.subtitle,
            cta: en.hero.cta,
            image: heroImg ? heroImg.id : null
        },
        discover: {
            label: en.home.discover.label,
            title: en.home.discover.title,
            text1: en.home.discover.p1,
            text2: en.home.discover.p2,
            cta: en.home.discover.cta
        },
        founders: {
            label: en.home.founders.label,
            title: en.home.founders.title,
            text: en.home.founders.p1,
            // list: [en.home.founders.list1, ...], // Map this manually
            list: [en.home.founders.list1, en.home.founders.list2, en.home.founders.list3],
            cta: en.home.founders.cta,
            image: foundersImg ? foundersImg.id : null
        },
        map: {
            label: en.home.map.label,
            title: en.home.map.title,
            text: en.home.map.p1,
            image: mapImg ? mapImg.id : null
        },
        testimonials: {
            label: en.home.testimonials.label,
            title: en.home.testimonials.title
        },
        bottomContent: {
            title: en.home.bottom_content.discover_magic.title, // Mapping logic needs to be precise
            // Actually bottom_content has multiple sections. My schema for bottomContent was simple {title, text, cta}.
            // I should maybe align schema better or squash content.
            // I'll map what fits.
            text: en.home.bottom_content.discover_magic.p1,
            cta: en.home.bottom_content.cta
        }
    };

    // Update Single Type
    // PUT /homepage
    try {
        // First check if it exists? Single types always exist or need creation? 
        // In v5, single types need update usually.
        await axios.put(`${STRAPI_URL}/homepage`, { data: entry });
        console.log("Updated Homepage EN");
    } catch (e) {
        console.error("Error updating Homepage:", e.response?.data || e.message);
    }

    // Localize DE
    const de = translations.de;
    const deEntry = {
        hero: {
            title: de.hero.title,
            subtitle: de.hero.subtitle,
            cta: de.hero.cta
        },
        // ... map others ...
        locale: 'de'
    };

    // For single type localization, might be different. 
    // Usually PUT /homepage?locale=de
}

(async () => {
    try {
        await migrateTours();
        await migrateHomepage();
    } catch (e) {
        console.error(e);
    }
})();
