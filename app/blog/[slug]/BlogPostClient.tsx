"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import { BlogPost } from "@/app/data/blogPosts";
import { useLanguage } from "@/components/LanguageProvider";

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const { language } = useLanguage();

  const isDe = language === 'de';

  const title = isDe && post.titleDe ? post.titleDe : post.title;
  const content = isDe && post.contentDe ? post.contentDe : post.content;

  const backLabel = isDe ? "Zurück zu Geschichten" : "Back to Stories";

  return (
    <>
      <Header />
      <SubPageLayout
        title={title}
        subtitle={post.date}
        bgImage={post.image}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="prose prose-lg prose-headings:text-primary prose-p:text-dark/80 max-w-none">
                 <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                <a href="/blog" className="text-primary font-bold hover:underline inline-flex items-center">
                    ← {backLabel}
                </a>
            </div>
        </div>
      </SubPageLayout>
      <Footer />
    </>
  );
}
