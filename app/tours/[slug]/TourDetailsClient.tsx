"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import Image from "next/image";
import { Calendar, Map, Clock, Users, Plane, Info, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { TranslatedTour } from "@/app/data/tours";
import { useState } from "react";
import DatesEnquiryModal from "@/components/DatesEnquiryModal";

interface TourDetailsClientProps {
  tour: TranslatedTour;
}

export function TourDetailsClient({ tour }: TourDetailsClientProps) {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const isDe = language === 'de';

  const title = isDe && tour.titleDe ? tour.titleDe : tour.title;
  const subtitle = isDe && tour.subtitleDe ? tour.subtitleDe : tour.subtitle;
  const introText = isDe && tour.introTextDe ? tour.introTextDe : tour.introText;
  const quickFacts = isDe && tour.quickFactsDe ? { ...tour.quickFacts, ...tour.quickFactsDe } : tour.quickFacts;
  const itinerary = isDe && tour.itineraryDe ? tour.itineraryDe.map((item, idx) => ({ ...tour.itinerary[idx], ...item })) : tour.itinerary;
  const included = isDe && tour.includedDe ? tour.includedDe : tour.included;
  const requirements = isDe && tour.requirementsDe ? tour.requirementsDe : tour.requirements;
  const faq = isDe && tour.faqDe ? tour.faqDe : tour.faq;

  // Labels
  const aboutLabel = isDe ? "Über die Reise" : "About the Ride";
  const quickFactsLabel = isDe ? "Fakten" : "Quick Facts";
  const routeLabel = isDe ? "Route" : "Route";
  const durationLabel = isDe ? "Dauer" : "Duration";
  const distanceLabel = isDe ? "Distanz" : "Distance";
  const groupSizeLabel = isDe ? "Gruppengröße" : "Group Size";
  const airportLabel = isDe ? "Flughafen" : "Airport";
  const itineraryLabel = isDe ? "Reiseverlauf" : "Itinerary";
  const pricingLabel = isDe ? "Preise" : "Pricing";
  const riderLabel = isDe ? "Fahrer" : "Rider";
  const pillionLabel = isDe ? "Sozius" : "Pillion";
  const singleRoomLabel = isDe ? "Einzelzimmer" : "Single Room";
  const perRiderLabel = isDe ? "pro Fahrer im Doppelzimmer" : "per rider in double room";
  const perPillionLabel = isDe ? "pro Sozius im Doppelzimmer" : "per pillion in double room";
  const supplementLabel = isDe ? "Zuschlag pro Person" : "supplement per person";
  const gstLabel = isDe ? "Preise beinhalten 5% indische \"Goods and Service Tax\"." : "Prices include 5% Indian \"Goods and Service Tax\".";
  const bookButtonLabel = isDe ? "DIESE TOUR BUCHEN" : "BOOK THIS TOUR";
  const includedLabel = isDe ? "Inklusive" : "Included";
  const requirementsLabel = isDe ? "Anforderungen" : "Requirements";
  const faqLabel = isDe ? "Häufig gestellte Fragen" : "Frequently Asked Questions";
  const dayLabel = isDe ? "Tag" : "Day";
  const noImageLabel = isDe ? "Kein Bild" : "No Image";


  return (
    <>
      <Header tour={tour} />
      <SubPageLayout
        title={title}
        subtitle={subtitle}
        bgImage={tour.headerImage}
      >
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 uppercase">{aboutLabel}</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                {introText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative w-full h-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {tour.mapImage && (
                <Image
                  src={tour.mapImage}
                  alt={`${tour.title} Map`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 uppercase mb-8 border-b pb-4">{quickFactsLabel}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Map className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">{routeLabel}</h4>
                  <p className="text-gray-600 text-sm">{quickFacts.startEnd}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">{durationLabel}</h4>
                  <p className="text-gray-600 text-sm">{quickFacts.tourDuration}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Info className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">{distanceLabel}</h4>
                  <p className="text-gray-600 text-sm">{quickFacts.totalDistance}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">{groupSizeLabel}</h4>
                  <p className="text-gray-600 text-sm">{quickFacts.bikesMax}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Plane className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">{airportLabel}</h4>
                  <p className="text-gray-600 text-sm">{quickFacts.airport}</p>
                </div>
              </div>
            </div>
            {quickFacts.pillionNote && (
              <div className="mt-6 flex items-start space-x-2 bg-yellow-50 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">{quickFacts.pillionNote}</p>
              </div>
            )}
          </div>

          {/* Itinerary */}
          {itinerary.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 uppercase mb-8">{itineraryLabel}</h2>
              <div className="space-y-8">
                {itinerary.map((day, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      {day.image ? (
                        <Image
                          src={day.image}
                          alt={day.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">{noImageLabel}</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                        {dayLabel} {day.day}
                      </div>
                    </div>
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                        <span className="text-sm font-semibold text-primary mt-2 md:mt-0">{day.km}</span>
                      </div>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold uppercase mb-8 text-center">{pricingLabel}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">{riderLabel}</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {tour.pricing.rider > 0 ? `€${tour.pricing.rider}` : "Custom"}
                </div>
                <p className="text-sm opacity-80">{perRiderLabel}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">{pillionLabel}</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {tour.pricing.pillion > 0 ? `€${tour.pricing.pillion}` : "Custom"}
                </div>
                <p className="text-sm opacity-80">{perPillionLabel}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">{singleRoomLabel}</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {tour.pricing.singleRoom > 0 ? `+€${tour.pricing.singleRoom}` : "Custom"}
                </div>
                <p className="text-sm opacity-80">{supplementLabel}</p>
              </div>
            </div>
            <div className="mt-8 text-center text-sm opacity-60">
              {gstLabel}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold uppercase hover:bg-primary/90 transition-colors"
              >
                {bookButtonLabel}
              </button>
            </div>
          </div>

          {/* Included & Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                {includedLabel}
              </h2>
              <ul className="space-y-3">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-primary mr-3" />
                {requirementsLabel}
              </h2>
              <ul className="space-y-3">
                {requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          {faq.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 uppercase mb-8 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary mr-3" />
                {faqLabel}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {faq.map((f, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </SubPageLayout>
      <Footer />
      <DatesEnquiryModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tour={tour}
      />
    </>
  );
}
