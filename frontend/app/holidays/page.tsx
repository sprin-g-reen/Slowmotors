"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import AccommodationGallery from "./AccommodationGallery";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function HolidaysPage() {
    const { language } = useLanguage();
    const t = translations[language].holidays;

    return (
        <>
            <Header />
            <SubPageLayout
                title={t.title}
                subtitle={t.subtitle}
                bgImage="https://slowmoto.tours/wp-content/uploads/Gods-own-Country.webp"
            >
                <div className="max-w-6xl mx-auto px-4 py-24 space-y-24">

                    {/* On the Road */}
                    <section className="space-y-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold uppercase text-primary mb-2">{t.on_road.title}</h2>
                            <p className="text-xl font-bold italic text-secondary">{t.on_road.subtitle}</p>
                        </div>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed space-y-4">
                            <p>{t.on_road.p1}</p>
                            <p>{t.on_road.p2}</p>
                            <p>{t.on_road.p3}</p>
                            <p>{t.on_road.p4}</p>
                            <p>{t.on_road.p5}</p>
                            <p>{t.on_road.p6}</p>
                        </div>
                    </section>

                    {/* Bikes */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                         <div>
                            <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.bikes.title}</h2>
                            <div className="prose prose-lg text-dark/80 leading-relaxed space-y-4">
                                <p>{t.bikes.p1}</p>
                                <p>{t.bikes.p2}</p>
                                <p>{t.bikes.p3}</p>
                                <p>{t.bikes.p4}</p>
                                <p>{t.bikes.p5}</p>
                                <p>{t.bikes.p6}</p>
                                <p>{t.bikes.p7}</p>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <img src="https://slowmoto.tours/wp-content/uploads/Enfield-Sunset.webp" alt="Royal Enfield Sunset" className="rounded-2xl shadow-lg w-full" />
                            <img src="https://slowmoto.tours/wp-content/uploads/Royal-Enfield-Bullet-350.webp" alt="Royal Enfield Bullet" className="rounded-2xl shadow-lg w-full hidden md:block" />
                            <img src="https://slowmoto.tours/wp-content/uploads/RE-Bullet_Classic-Specifications.webp" alt="Royal Enfield Specifications" className="rounded-2xl shadow-lg w-full" />
                         </div>
                    </section>

                    {/* Safety */}
                    <section className="bg-orange-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">{t.safety.title}</h2>
                        <div className="space-y-6 prose prose-lg text-dark/80 leading-relaxed max-w-none">
                            <p>{t.safety.p1}</p>
                            <p>{t.safety.p2}</p>
                            <p>{t.safety.p3}</p>
                            <p>{t.safety.p4}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                                <div>
                                    <p>{t.safety.p5}</p>
                                    <p className="mt-4">{t.safety.p6}</p>
                                </div>
                                <div>
                                    <p>{t.safety.p7}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Accommodation */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 uppercase text-primary text-center">{t.accommodation.title}</h2>
                         <div className="text-center mb-8">
                            <span className="bg-secondary/20 text-secondary font-bold px-4 py-2 rounded-full uppercase text-sm">{t.accommodation.tag}</span>
                         </div>
                         <div className="prose prose-lg max-w-4xl mx-auto text-dark/80 leading-relaxed text-center space-y-6">
                            <p>{t.accommodation.p1}</p>
                            <p>{t.accommodation.p2}</p>
                            <p>{t.accommodation.p3}</p>
                         </div>
                         <div className="mt-12">
                            <AccommodationGallery />
                         </div>
                    </section>

                    {/* Food & Drinks */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                             <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                                <img src="https://slowmoto.tours/wp-content/uploads/indian-food-thali.webp" alt="Indian Food Thali" className="w-full h-full object-cover" />
                             </div>
                        </div>
                        <div className="order-1 md:order-2">
                             <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.food.title}</h2>
                             <div className="prose prose-lg text-dark/80 leading-relaxed space-y-4">
                                <p>{t.food.p1}</p>
                                <p>{t.food.p2}</p>
                                <p>{t.food.p3}</p>
                                <p>{t.food.p4}</p>
                                <p>{t.food.p5}</p>
                                <p>{t.food.p6}</p>
                             </div>
                        </div>
                    </section>

                    {/* Beyond the Road */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.beyond.title}</h2>
                        <div className="prose prose-lg text-dark/80 leading-relaxed space-y-6">
                            <p>{t.beyond.p1}</p>
                            <p>{t.beyond.p2}</p>
                            <p>{t.beyond.p3}</p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-gray-50 p-8 md:p-16 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-12 uppercase text-primary text-center">{t.faq.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <FaqItem question={t.faq.q1} answer={t.faq.a1} />
                            <FaqItem question={t.faq.q2} answer={t.faq.a2} />
                            <FaqItem question={t.faq.q3} answer={t.faq.a3} />
                            <FaqItem question={t.faq.q4} answer={t.faq.a4} />
                            <FaqItem question={t.faq.q5} answer={t.faq.a5} />
                            <FaqItem question={t.faq.q6} answer={t.faq.a6} />
                            <FaqItem question={t.faq.q7} answer={t.faq.a7} />
                            <FaqItem question={t.faq.q8} answer={t.faq.a8} />
                            <FaqItem question={t.faq.q9} answer={t.faq.a9} />
                            <FaqItem question={t.faq.q10} answer={t.faq.a10} />
                            <FaqItem question={t.faq.q11} answer={t.faq.a11} />
                            <FaqItem question={t.faq.q12} answer={t.faq.a12} />
                            <FaqItem question={t.faq.q13} answer={t.faq.a13} />
                        </div>
                    </section>

                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="mb-4">
            <h4 className="text-lg font-bold mb-2 text-dark">{question}</h4>
            <p className="text-dark/70 text-sm md:text-base">{answer}</p>
        </div>
    );
}
