import path from 'path';
import fs from 'fs';

export default {
  register() { },

  async bootstrap({ strapi }) {
    try {
      // Check if data exists
      const existingTours = await strapi.documents('api::tour.tour').findMany({ locale: 'all' });
      if (existingTours.length > 0) {
        strapi.log.info('Tours already exist. Skipping seeding.');
        return;
      }

      strapi.log.info('Starting seeding process...');

      // Resolve paths relative to dist/src (where index.js lives)
      // dist/src -> dist -> backend -> project-root (3 ups)
      const frontendDir = path.join(__dirname, '../../../frontend');
      const toursPath = path.join(frontendDir, 'app/data/tours.ts');

      if (!fs.existsSync(toursPath)) {
        strapi.log.warn(`Tours data file not found at ${toursPath}`);
        return;
      }

      strapi.log.info(`Reading tours from ${toursPath}`);
      let content = fs.readFileSync(toursPath, 'utf8');

      // Parse Logic (simplified from migrate.js)
      const dataIndex = content.indexOf('export const TOURS_DATA');
      if (dataIndex !== -1) {
        content = content.substring(dataIndex);
      }
      content = content.replace(/export const TOURS_DATA[\s\S]*?=/, 'module.exports =').replace(/export type .*?;/g, '');

      // We need to eval or temporary write. writing is safer.
      const tempPath = path.join(__dirname, 'temp_tours_data.js');
      fs.writeFileSync(tempPath, content);
      const tours = require(tempPath);

      // Helper
      const formatDate = (dateStr) => {
        if (!dateStr) return null;
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toISOString().split('T')[0];
      };

      for (const tour of tours) {
        strapi.log.info(`Seeding Tour: ${tour.slug}`);

        const formattedDates = tour.dates ? tour.dates.map(d => ({
          ...d,
          start: formatDate(d.start),
          end: formatDate(d.end)
        })) : [];

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

        const doc = await strapi.documents('api::tour.tour').create({
          data: { ...entryData, locale: 'en' },
          status: 'published'
        });

        await strapi.documents('api::tour.tour').update({
          documentId: doc.documentId,
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

      // Homepage Seeding
      const translationsPath = path.join(frontendDir, 'lib/translations.ts');
      if (fs.existsSync(translationsPath)) {
        strapi.log.info('Seeding Homepage...');
        let tContent = fs.readFileSync(translationsPath, 'utf8');
        tContent = tContent.replace(/export type .*?;/g, '');
        tContent = tContent.replace('export const translations =', 'module.exports =');
        const tTempPath = path.join(__dirname, 'temp_trans_data.js');
        fs.writeFileSync(tTempPath, tContent);
        const translations = require(tTempPath);

        const en = translations.en;
        const de = translations.de;

        const homepageData = {
          hero: { title: en.hero.title, subtitle: en.hero.subtitle, cta: en.hero.cta },
          discover: { label: en.home.discover.label, title: en.home.discover.title, text1: en.home.discover.p1, text2: en.home.discover.p2, cta: en.home.discover.cta },
          founders: { label: en.home.founders.label, title: en.home.founders.title, text: en.home.founders.p1, list: [en.home.founders.list1, en.home.founders.list2, en.home.founders.list3], cta: en.home.founders.cta },
          map: { label: en.home.map.label, title: en.home.map.title, text: en.home.map.p1 },
          testimonials: { label: en.home.testimonials.label, title: en.home.testimonials.title },
          bottomContent: { title: en.home.bottom_content.discover_magic.title, text: en.home.bottom_content.discover_magic.p1, cta: en.home.bottom_content.cta }
        };

        const existingHome = await strapi.documents('api::homepage.homepage').findFirst({ locale: 'all' });
        let docId;
        if (existingHome) {
          docId = existingHome.documentId; // Logic for update simplified
        } else {
          const create = await strapi.documents('api::homepage.homepage').create({
            data: { ...homepageData, locale: 'en' },
            status: 'published'
          });
          docId = create.documentId;
        }

        const deData = {
          hero: { title: de.hero.title, subtitle: de.hero.subtitle, cta: de.hero.cta },
          discover: { label: de.home.discover.label, title: de.home.discover.title, text1: de.home.discover.p1, text2: de.home.discover.p2, cta: de.home.discover.cta },
          founders: { label: de.home.founders.label, title: de.home.founders.title, text: de.home.founders.p1, list: [de.home.founders.list1, de.home.founders.list2, de.home.founders.list3], cta: de.home.founders.cta },
          map: { label: de.home.map.label, title: de.home.map.title, text: de.home.map.p1 },
          testimonials: { label: de.home.testimonials.label, title: de.home.testimonials.title },
          bottomContent: { title: de.home.bottom_content.discover_magic.title, text: de.home.bottom_content.discover_magic.p1, cta: de.home.bottom_content.cta }
        };

        await strapi.documents('api::homepage.homepage').update({
          documentId: docId,
          locale: 'de',
          data: deData,
          status: 'published'
        });
      }

      strapi.log.info('Seeding completed successfully.');

      // Check/Create API Token
      const tokenService = strapi.services['admin::api-token'];
      if (tokenService) {
        const existingToken = await tokenService.exists({ name: 'frontend-token' });
        let accessKey;
        if (!existingToken) {
          strapi.log.info('Creating frontend-token...');
          const token = await tokenService.create({
            name: 'frontend-token',
            type: 'full-access',
            lifespan: null,
            description: 'Token for frontend'
          });
          accessKey = token.accessKey;
          strapi.log.info('Token created.');
        } else {
          // If exists, we can't easily get the accessKey as it is hashed?
          // Actually, create returns the key. Retrieve might not.
          // If we wiped DB, it shouldn't exist.
          // If it exists, we might need to regenerate?
          // But let's assume if it exists, the keys in .env.local matches? No, we deleted DB.
          // So it won't exist.
        }

        if (accessKey) {
          const tokenPath = path.join(__dirname, '../../../token.txt');
          fs.writeFileSync(tokenPath, accessKey);
          strapi.log.info(`Token written to ${tokenPath}`);
        }
      }

    } catch (error) {
      strapi.log.error('Bootstrap seeding failed:', error);
    }
  },
};
