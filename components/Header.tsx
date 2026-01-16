"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import DatesEnquiryModal from "./DatesEnquiryModal";
import PricingModal from "./PricingModal";
import QuickFactsModal from "./QuickFactsModal";
import ItineraryModal from "./ItineraryModal";
import IncludedModal from "./IncludedModal";
import RequirementsModal from "./RequirementsModal";
import BookingProcessModal from "./BookingProcessModal";
import FaqModal from "./FaqModal";

type ModalType = "dates" | "pricing" | "facts" | "itinerary" | "included" | "requirements" | "booking" | "faq" | null;

export default function Header() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    const navLinks = [
        { name: t("nav.tours"), href: "/tours" },
        { name: t("nav.holidays"), href: "/holidays" },
    ];

    const secondaryNavLinks = [
        { name: t("nav.about"), href: "/about" },
        { name: t("nav.blog"), href: "/blog" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openModal = (type: ModalType) => {
        setActiveModal(type);
        setIsMobileMenuOpen(false);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const experienceItems = [
        { label: "Dates & Enquiry", type: "dates" as const },
        { label: "Pricing", type: "pricing" as const },
        { label: "Quick Facts", type: "facts" as const },
        { label: "Itinerary", type: "itinerary" as const },
        { label: "Included", type: "included" as const },
        { label: "Requirements", type: "requirements" as const },
        { label: "Booking Process", type: "booking" as const },
        { label: "FAQ", type: "faq" as const },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://slowmoto.tours/wp-content/uploads/Logo-SMT-2021-full.svg"
                            alt="Slow Moto Tours Logo"
                            width={180}
                            height={60}
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Experience Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-dark hover:text-primary font-medium transition-colors py-2">
                                {t("nav.experience")} <ChevronDown size={16} className="ml-1" />
                            </button>
                            <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left border border-gray-100 flex flex-col">
                                {experienceItems.map((item) => (
                                    <button
                                        key={item.type}
                                        onClick={() => openModal(item.type)}
                                        className="text-left px-4 py-3 text-dark hover:bg-gray-50 hover:text-primary transition-colors font-medium border-b border-gray-50 last:border-0"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {secondaryNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* RE Partner Badge & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:block">
                            <LanguageToggle />
                        </div>
                        <Image
                            src="https://slowmoto.tours/wp-content/uploads/RE-Partner-Badge-Platinum.webp"
                            alt="Royal Enfield Partner Badge"
                            width={100}
                            height={40}
                            className="hidden sm:block h-10 w-auto"
                        />
                        <button
                            className="lg:hidden p-2 text-dark"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark hover:text-primary font-medium text-lg py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Experience Mobile */}
                        <div className="border-t border-gray-50 pt-2">
                            <button
                                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                                className="flex items-center justify-between w-full text-dark hover:text-primary font-medium text-lg py-2"
                            >
                                {t("nav.experience")} <ChevronDown size={20} className={`transform transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isExperienceOpen && (
                                <div className="pl-4 flex flex-col space-y-2 mt-1 mb-2 bg-gray-50 rounded-lg p-2">
                                    {experienceItems.map((item) => (
                                        <button
                                            key={item.type}
                                            onClick={() => openModal(item.type)}
                                            className="text-left text-dark/80 hover:text-primary font-medium py-2 px-2 rounded-md hover:bg-white transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {secondaryNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark hover:text-primary font-medium text-lg py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-gray-100 flex flex-col items-center gap-4">
                            <LanguageToggle />
                            <Image
                                src="https://slowmoto.tours/wp-content/uploads/RE-Partner-Badge-Platinum.webp"
                                alt="Royal Enfield Partner Badge"
                                width={120}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </div>
                    </div>
                )}
            </header>

            <DatesEnquiryModal isOpen={activeModal === "dates"} onClose={closeModal} />
            <PricingModal isOpen={activeModal === "pricing"} onClose={closeModal} />
            <QuickFactsModal isOpen={activeModal === "facts"} onClose={closeModal} />
            <ItineraryModal isOpen={activeModal === "itinerary"} onClose={closeModal} />
            <IncludedModal isOpen={activeModal === "included"} onClose={closeModal} />
            <RequirementsModal isOpen={activeModal === "requirements"} onClose={closeModal} />
            <BookingProcessModal isOpen={activeModal === "booking"} onClose={closeModal} />
            <FaqModal isOpen={activeModal === "faq"} onClose={closeModal} />
        </>
    );
}
