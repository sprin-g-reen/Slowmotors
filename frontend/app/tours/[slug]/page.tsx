import { fetchAPI } from "@/lib/api";
import { TourDetailsClient } from "./TourDetailsClient";
import { Tour } from "@/types/strapi";

export async function generateStaticParams() {
  try {
    const res = await fetchAPI('/tours', { fields: ['slug'], locale: 'all' });
    // Strapi v5 returns data array
    return res.data.map((tour: any) => ({
      slug: tour.slug,
    }));
  } catch (e) {
    console.error("Error generating static params", e);
    return [];
  }
}

export default async function TourDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch EN and DE versions to merge them for the client component
  // We fetch by slug. Filters usually work across locales if configured?
  // Or we fetch all locales for this slug.
  let toursData: Tour[] = [];
  try {
    const res = await fetchAPI('/tours', {
      filters: { slug: { $eq: slug } },
      populate: '*',
      locale: 'all'
    });
    toursData = res.data;
  } catch (e) {
    console.error("Error fetching tour details", e);
  }

  const enTour = toursData.find(t => t.locale === 'en' || !t.locale) || toursData[0]; // fallback
  const deTour = toursData.find(t => t.locale === 'de');

  if (!enTour) {
    return <div>Tour not found</div>;
  }

  // Merge to match TranslatedTour interface expected by Client
  const mergedTour = {
    ...enTour,
    // Map Strapi Image objects to string URLs if component expects string
    // But TranslatedTour in 'data/tours.ts' had `image: string` etc.
    // So I need to map image objects to URLs.
    // And I need to map 'titleDe' etc.

    image: enTour.image?.url || '',
    headerImage: enTour.headerImage?.url || '',
    mapImage: enTour.mapImage?.url || '',

    titleDe: deTour?.title,
    subtitleDe: deTour?.subtitle,
    descriptionDe: deTour?.description,
    introTextDe: deTour?.introText,
    itineraryDe: deTour?.itinerary,
    quickFactsDe: deTour?.quickFacts, // Note: might differ in structure if flat vs component
    includedDe: deTour?.included,
    requirementsDe: deTour?.requirements,
    faqDe: deTour?.faq,
    // Dates are same?

    // We might need to map quickFacts properly if they are component objects
    // The current Client uses them as objects, so passing the object is fine if keys match.
  };

  return <TourDetailsClient tour={mergedTour as any} />;
}
