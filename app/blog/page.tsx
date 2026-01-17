"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import { blogPosts } from "@/app/data/blogPosts";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function BlogPage() {
    const { language } = useLanguage();
    const t = translations[language].blog;
    const posts = blogPosts;

    return (
        <>
            <Header />
            <SubPageLayout
                title={t.title}
                subtitle={t.subtitle}
            >
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {posts.map(post => {
                             const title = language === 'de' && post.titleDe ? post.titleDe : post.title;
                             const excerpt = language === 'de' && post.excerptDe ? post.excerptDe : post.excerpt;

                             return (
                                <div key={post.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
                                    <div className="h-48 overflow-hidden relative group">
                                        {post.youtubeId ? (
                                            <div className="w-full h-full flex justify-center bg-black">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${post.youtubeId}?playlist=${post.youtubeId}&loop=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                                                    title={title}
                                                    className="h-full aspect-[9/16] pointer-events-none"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        ) : (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        )}
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="text-secondary text-sm font-bold uppercase mb-2">{post.date}</div>
                                        <h3 className="text-xl font-bold mb-4 uppercase leading-tight">{title}</h3>
                                        <p className="opacity-70 mb-6 flex-grow">{excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className="text-primary font-bold hover:underline text-left mt-auto">{t.read_more}</Link>
                                    </div>
                                </div>
                             );
                        })}
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
