import { blogPosts } from "@/app/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageLayout from "@/components/SubPageLayout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <SubPageLayout
                title={post.title}
                subtitle={post.date}
                bgImage={post.image}
            >
                <div className="max-w-4xl mx-auto px-4 py-24">
                    <div className="text-gray-800 leading-relaxed text-lg">
                         <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </SubPageLayout>
            <Footer />
        </>
    );
}
