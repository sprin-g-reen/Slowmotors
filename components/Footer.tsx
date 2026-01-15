"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-footer text-light pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <Image
                            src="https://slowmoto.tours/wp-content/uploads/Logo-SMT-2021-full.svg"
                            alt="Slow Moto Tours Logo"
                            width={200}
                            height={70}
                            className="mb-6 brightness-0 invert"
                        />
                        <p className="text-sm opacity-80 leading-relaxed">
                            Experience authentic India on guided Royal Enfield motorcycle tours. Slow travel at its finest.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/tours" className="hover:text-primary transition-colors">Our Motorcycle Rides</Link></li>
                            <li><Link href="/holidays" className="hover:text-primary transition-colors">Your Motorbike Holidays</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About us / our Philosophy</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Slow Moto Stories</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter */}
                    <div>
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">Stay in touch</h4>
                        <p className="text-sm opacity-80 mb-6">Sign up for our newsletter to get tour updates and stories.</p>
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
                                JOIN
                            </button>
                        </form>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-secondary font-bold mb-6 text-lg uppercase tracking-wider">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" className="hover:text-primary transition-all hover:scale-110">
                                <Facebook size={28} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-primary transition-all hover:scale-110">
                                <Instagram size={28} />
                            </a>
                            <a href="https://youtube.com" className="hover:text-primary transition-all hover:scale-110">
                                <Youtube size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
                    <p>© {new Date().getFullYear()} Slow Moto Tours. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
