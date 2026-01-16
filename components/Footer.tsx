"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const navT = translations[language].nav;

    return (
        <footer className="bg-footer text-light pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <img
                            src="https://slowmoto.tours/wp-content/uploads/Logo-SMT-2021-full.svg"
                            alt="Slow Moto Tours Logo"
                            width={200}
                            height={70}
                            className="mb-6 brightness-0 invert"
                        />
                        <p className="text-sm opacity-80 leading-relaxed mb-6">
                            Experience authentic India on guided Royal Enfield motorcycle tours. Slow travel at its finest.
                        </p>
                        <img
                            src="https://slowmoto.tours/wp-content/uploads/RE-Partner-Badge-Platinum.webp"
                            alt="Royal Enfield Official Partner"
                            width={120}
                            height={120}
                            className="opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">{t.explore}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/tours" className="hover:text-primary transition-colors">{navT.tours}</Link></li>
                            <li><Link href="/holidays" className="hover:text-primary transition-colors">{navT.holidays}</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">{navT.about}</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">{navT.blog}</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter */}
                    <div>
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">{t.stay_in_touch}</h4>
                        <p className="text-sm opacity-80 mb-6">{t.newsletter_text}</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-green-700 px-4 py-2 rounded-r-md font-bold transition-colors"
                            >
                                {t.join}
                            </button>
                        </form>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">{t.follow_us}</h4>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/SlowMoto.Tours" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                                <Facebook size={28} />
                            </a>
                            <a href="https://www.instagram.com/slowmoto.tours/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                                <Instagram size={28} />
                            </a>
                            <a href="http://youtube.com/@slowmototours" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                                <Youtube size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
                    <p>© {new Date().getFullYear()} {t.rights}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:underline">{t.privacy}</Link>
                        <Link href="/terms" className="hover:underline">{t.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
