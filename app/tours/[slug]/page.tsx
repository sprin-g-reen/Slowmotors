import { TOURS_DATA } from "@/app/data/tours";
import { TourDetailsClient } from "./TourDetailsClient";

export function generateStaticParams() {
  return TOURS_DATA.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = TOURS_DATA.find((t) => t.slug === slug);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return <TourDetailsClient tour={tour} />;
}
