const path = require('path');
const Strapi = require('@strapi/strapi');

async function generateToken() {
    console.log('Initializing Strapi to generate token...');
    const app = await Strapi.createStrapi({
        distDir: path.join(__dirname, '../dist')
    }).load();

    await app.start();

    try {
        const tokenService = app.services['admin::api-token'];
        if (!tokenService) {
            console.error('API Token service not found!');
            return;
        }

        console.log('Checking for existing token...');
        const existingToken = await tokenService.exists({ name: 'frontend-token' });
        let accessKey;

        if (!existingToken) {
            console.log('Creating frontend-token...');
            const token = await tokenService.create({
                name: 'frontend-token',
                type: 'full-access',
                lifespan: null,
                description: 'Token for frontend'
            });
            accessKey = token.accessKey;
            console.log('Token created.');
        } else {
            console.log('Token already exists. Creating a NEW one for safety.');
            const newToken = await tokenService.create({
                name: `frontend-token-${Date.now()}`,
                type: 'full-access',
                lifespan: null,
                description: 'Temp token'
            });
            accessKey = newToken.accessKey;
        }

        console.log(`ACCESS_KEY:${accessKey}`);
        const fs = require('fs');
        const tPath = path.join(__dirname, 'token_output.txt');
        fs.writeFileSync(tPath, accessKey);
        console.log(`Token written to ${tPath}`);

    } catch (e) {
        console.error('Error generating token:', e);
    }

    await app.destroy();
    process.exit(0);
}

generateToken();
