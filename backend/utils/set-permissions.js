const path = require('path');
const Strapi = require('@strapi/strapi');

async function setPermissions() {
    const app = await Strapi.createStrapi({ distDir: path.join(__dirname, '../dist') }).load();
    await app.start();

    const publicRole = await app.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
    });

    if (!publicRole) {
        console.error('Public role not found');
        process.exit(1);
    }

    // Helper to add permission
    const addPermission = async (action) => {
        const existing = await app.db.query('plugin::users-permissions.permission').findOne({
            where: {
                role: publicRole.id,
                action: action,
            },
        });

        if (!existing) {
            await app.db.query('plugin::users-permissions.permission').create({
                data: {
                    role: publicRole.id,
                    action: action,
                    enabled: true,
                },
            });
            console.log(`Enabled ${action}`);
        } else {
            console.log(`Already enabled ${action}`);
        }
    };

    await addPermission('api::tour.tour.find');
    await addPermission('api::tour.tour.findOne');
    await addPermission('api::homepage.homepage.find');
    // Also need to enable 'upload' for images if needed? Usually find is enough for public.

    console.log('Permissions set.');
    process.exit(0);
}

setPermissions();
