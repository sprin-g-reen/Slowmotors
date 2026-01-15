"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Compass, Anchor } from "lucide-react";

const values = [
    {
        icon: <Compass className="w-10 h-10" />,
        title: "Authentic",
        text: "True experiences off the beaten track."
    },
    {
        icon: <Heart className="w-10 h-10" />,
        title: "Passionate",
        text: "We love what we do and it shows."
    },
    {
        icon: <Anchor className="w-10 h-10" />,
        title: "Reliable",
        text: "Safe and well-maintained Royal Enfields."
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Safe",
        text: "Experienced guides and mechanics on every trip."
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Small Groups",
        text: "Personal attention and local immersion."
    }
];

export default function Values() {
    return (
        <section className="py-24 bg-white/80 backdrop-blur-sm relative border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-secondary mb-4 p-4 rounded-full bg-secondary/5 border border-secondary/10">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-dark mb-2 uppercase tracking-wide">{item.title}</h3>
                            <p className="text-sm opacity-70 leading-snug max-w-[150px]">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
