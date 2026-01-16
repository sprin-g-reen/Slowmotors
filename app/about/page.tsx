"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function AboutPage() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <>
            <Header />
            <SubPageLayout
                title={t.title}
                subtitle={t.subtitle}
                bgImage="https://slowmoto.tours/wp-content/uploads/Pratish-and-Jo-desktop.webp"
            >
                <div className="max-w-6xl mx-auto px-4 py-24 space-y-24">

                    {/* Why we ride */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.why_we_ride.title}</h2>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                            <p className="mb-6">
                                {t.why_we_ride.p1}
                            </p>
                            <p className="mb-6">
                                {t.why_we_ride.p2}
                            </p>
                            <h3 className="text-xl font-bold mt-8 mb-4">{t.why_we_ride.sub_title}</h3>
                            <p>
                                {t.why_we_ride.p3}
                            </p>
                        </div>
                    </section>

                    {/* Our Philosophy */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.philosophy.title}</h2>
                            <h3 className="text-xl font-bold mb-4">{t.philosophy.sub1}</h3>
                            <p className="text-dark/80 mb-8 leading-relaxed">
                                {t.philosophy.p1}
                            </p>
                            <h3 className="text-xl font-bold mb-4">{t.philosophy.sub2}</h3>
                            <p className="text-dark/80 leading-relaxed mb-6">
                                {t.philosophy.p2}
                            </p>
                            <p className="text-dark/80 leading-relaxed">
                                {t.philosophy.p3}
                            </p>
                        </div>
                        <div className="relative">
                            <img src="https://slowmoto.tours/wp-content/uploads/Why-we-ride.webp" alt="Why we ride" className="rounded-2xl shadow-xl w-full" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                <p className="text-secondary font-bold italic">{t.philosophy.image_caption}</p>
                            </div>
                        </div>
                    </section>

                    {/* Meet the Crew */}
                    <section>
                        <h2 className="text-3xl font-bold mb-12 uppercase text-center text-primary">{t.crew.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Aromal */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Aromal.webp" alt="Aromal" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Aromal</h3>
                                <div className="text-secondary text-sm font-bold mb-4">{t.crew.aromal.role}</div>
                                <p className="text-sm opacity-70">
                                    {t.crew.aromal.desc}
                                </p>
                            </div>

                            {/* Jo */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Jo-blessed.webp" alt="Jo" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Jo</h3>
                                <div className="text-secondary text-sm font-bold mb-4">{t.crew.jo.role}</div>
                                <p className="text-sm opacity-70">
                                    {t.crew.jo.desc}
                                </p>
                            </div>

                            {/* Pratish */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/pP-with-pink-drink.webp" alt="Pratish" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Pratish</h3>
                                <div className="text-secondary text-sm font-bold mb-4">{t.crew.pratish.role}</div>
                                <p className="text-sm opacity-70">
                                    {t.crew.pratish.desc}
                                </p>
                            </div>

                            {/* Nevinson */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img src="https://slowmoto.tours/wp-content/uploads/Nevinson.webp" alt="Nevinson" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Nevinson</h3>
                                <div className="text-secondary text-sm font-bold mb-4">{t.crew.nevinson.role}</div>
                                <p className="text-sm opacity-70">
                                    {t.crew.nevinson.desc}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Story */}
                    <section className="bg-gray-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.story.title}</h2>
                        <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                            <p className="mb-4">
                                {t.story.p1}
                            </p>
                            <p className="mb-4">
                                {t.story.p2}
                            </p>
                            <p>
                                {t.story.p3}
                            </p>
                        </div>
                    </section>

                     {/* Partners */}
                     <section className="text-center">
                        <h2 className="text-3xl font-bold mb-8 uppercase text-primary">{t.partners.title}</h2>
                        <div className="max-w-3xl mx-auto flex flex-col items-center">
                             <img src="https://slowmoto.tours/wp-content/uploads/RE-Tours-Logo.webp" alt="Royal Enfield Tours" className="h-24 mb-6" />
                             <h3 className="text-xl font-bold mb-4">{t.partners.sub_title}</h3>
                             <p className="text-dark/80">
                                {t.partners.desc}
                             </p>
                        </div>
                     </section>

                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
