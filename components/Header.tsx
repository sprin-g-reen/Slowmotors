"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import DatesEnquiryModal from "./DatesEnquiryModal";

const navLinks = [
    { name: "Our Motorcycle Rides", href: "/tours" },
    { name: "Your Motorbike Holidays", href: "/holidays" },
];

const secondaryNavLinks = [
    { name: "About us / our Philosophy", href: "/about" },
    { name: "Slow Moto Stories", href: "/blog" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDatesModalOpen, setIsDatesModalOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openDatesModal = () => {
        setIsDatesModalOpen(true);
        setIsMobileMenuOpen(false);
    };

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
                                Experience <ChevronDown size={16} className="ml-1" />
                            </button>
                            <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left border border-gray-100">
                                <button
                                    onClick={openDatesModal}
                                    className="block w-full text-left px-4 py-3 text-dark hover:bg-gray-50 hover:text-primary transition-colors font-medium"
                                >
                                    Dates & Enquiry
                                </button>
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
                                Experience <ChevronDown size={20} className={`transform transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isExperienceOpen && (
                                <div className="pl-4 flex flex-col space-y-2 mt-1 mb-2 bg-gray-50 rounded-lg p-2">
                                    <button
                                        onClick={openDatesModal}
                                        className="text-left text-dark/80 hover:text-primary font-medium py-2 px-2 rounded-md hover:bg-white transition-colors"
                                    >
                                        Dates & Enquiry
                                    </button>
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

                        <div className="pt-4 border-t border-gray-100 flex justify-center">
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

            <DatesEnquiryModal isOpen={isDatesModalOpen} onClose={() => setIsDatesModalOpen(false)} />
        </>
    );
}
