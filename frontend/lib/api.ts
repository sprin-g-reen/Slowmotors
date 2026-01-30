import qs from 'qs';

export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ? { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}` } : {}),
        },
        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${STRAPI_API_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    // Debug
    console.log(`[API] Fetching: ${requestUrl}`);
    console.log(`[API] Token Present: ${!!process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`);

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(`[API] Error: ${response.status} ${response.statusText}`);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${STRAPI_API_URL}${url}`;
}
