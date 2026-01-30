"use client";

import { motion } from "framer-motion";

interface SubPageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    bgImage?: string;
}

export default function SubPageLayout({ title, subtitle, children, bgImage }: SubPageLayoutProps) {
    return (
        <div className="min-h-screen pt-20">
            {/* Page Header */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${bgImage || "https://slowmoto.tours/wp-content/uploads/Enfield-Hero.webp"}')`,
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-light text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4"
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-light text-xl opacity-90 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </section>

            {/* Page Content */}
            <div className="bg-white/60 backdrop-blur-sm min-h-[50vh]">
                {children}
            </div>
        </div>
    );
}
