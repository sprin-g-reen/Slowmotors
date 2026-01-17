"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImprintPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-16 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-2 text-primary">Imprint and Disclaimer for Slow Moto Tours LLP</h1>
                    <p className="text-gray-500 mb-8 italic">Guided motorcycle tours in India</p>

                    <section className="space-y-8 text-dark/80 leading-relaxed">
                        <p>
                            If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <a href="mailto:hello@slowmoto.tours" className="text-primary hover:underline">hello@slowmoto.tours</a>.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">Disclaimers for slowmoto.tours</h2>
                            <p className="mb-4">
                                From our website (<a href="https://slowmoto.tours" className="text-primary hover:underline">https://slowmoto.tours</a>), you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
                            </p>
                            <p className="mb-4">
                                Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">Consent</h2>
                            <p>
                                By using our website, you hereby consent to our disclaimer and agree to its terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">Update</h2>
                            <p>
                                Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">Imprint</h2>
                            <address className="not-italic">
                                <strong>Slow Moto Tours LLP</strong><br />
                                Directors: Jochen Petri and Pratish Preman<br />
                                LLPIN: ABC-6088<br />
                                Goods and Services Tax Identification Number: 32AEVFS1362J1ZO<br />
                                <br />
                                39/2475-B1, Suite 819,<br />
                                LR Towers, SJRRA 104,<br />
                                South Janatha Road, Palarivattom,<br />
                                Kochi, Kerala 682025<br />
                                <br />
                                <a href="mailto:hello@slowmoto.tours" className="text-primary hover:underline">hello@slowmoto.tours</a>
                            </address>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
