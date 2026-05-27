import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
// import { Button } from "@/components/ui/button"; 
import { blogPosts } from "@/lib/blog-data";
import { getBlogPost, getBlogPosts } from "@/lib/wordpress-blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ShareBox } from "@/components/blog/share-box";
import { FAQSection } from "@/components/blog/faq-section";
import { FAQSchema } from "@/components/blog/faq-schema";
import { CitableQuotes } from "@/components/blog/citable-quotes";
import { Breadcrumbs } from "@/components/ui/breadcrumbs"; // New
import Image from "next/image";
import { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify";

const TITLE_ALLOWED_TAGS = ["em", "strong", "i", "b", "span"];

export const revalidate = 300;

// Helper to decode HTML entities (basic)
function decodeHTML(html: string) {
    if (!html) return "";
    return html.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');
}

// -----------------------------------------------------------------------------
// 1. Dynamic Metadata Generation for SEO
// -----------------------------------------------------------------------------
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // getBlogPost está envuelto en React.cache(): generateMetadata y el componente comparten resultado.
    const wpPost = await getBlogPost(slug);
    const localPost = blogPosts.find((p) => p.slug === slug);

    if (!wpPost && !localPost) return {};

    const isWP = !!wpPost;
    const title = decodeHTML(isWP ? wpPost.title : localPost!.title);
    const excerpt = isWP ? wpPost.blogFields.blogExcerpt : localPost!.excerpt;
    const featuredImage = isWP && wpPost.blogFields.featuredImage?.sourceUrl
        ? wpPost.blogFields.featuredImage.sourceUrl
        : '/opengraph-image'; // Fallback: OG image global del sitio (app/opengraph-image.tsx)

    return {
        title: `${title} | Blog LABDEN`,
        description: excerpt,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            title: title,
            description: excerpt,
            type: 'article',
            url: `/blog/${slug}`,
            images: [
                {
                    url: featuredImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: excerpt,
            images: [featuredImage],
        }
    };
}

// -----------------------------------------------------------------------------
// 2. Static Params (SSG)
// -----------------------------------------------------------------------------
export async function generateStaticParams() {
    const localSlugs = blogPosts.map((post) => post.slug);
    const wpPosts = await getBlogPosts();
    const wpSlugs = wpPosts.map((post) => post.slug);
    const allSlugs = new Set<string>([...localSlugs, ...wpSlugs]);
    return Array.from(allSlugs).map((slug) => ({ slug }));
}

// -----------------------------------------------------------------------------
// 3. Main Page Component
// -----------------------------------------------------------------------------
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const wpPost = await getBlogPost(slug);
    const localPost = blogPosts.find((p) => p.slug === slug);

    if (!wpPost && !localPost) notFound();

    // Adapter normalization
    const isWP = !!wpPost;
    const post = isWP ? {
        title: wpPost.title,
        excerpt: wpPost.blogFields.blogExcerpt,
        category: wpPost.blogFields.blogCategory,
        content: wpPost.blogFields.blogContent,
        date: new Date(wpPost.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
        readTime: wpPost.blogFields.blogReadTime,
        featuredImage: wpPost.blogFields.featuredImage,
        citableQuotes: wpPost.blogFields.citableQuotes
            ? wpPost.blogFields.citableQuotes.split('\n').filter((q: string) => q.trim()).map((q: string) => ({ quoteText: q.trim() }))
            : [],
        faq: wpPost.blogFields.faq
    } : {
        title: localPost!.title,
        excerpt: localPost!.excerpt,
        category: localPost!.category,
        content: localPost!.content, // Markdown
        date: localPost!.date,
        readTime: localPost!.readTime,
        featuredImage: localPost!.featuredImage ? { sourceUrl: localPost!.featuredImage, altText: localPost!.title } : null,
        citableQuotes: localPost!.citableQuotes || [],
        faq: localPost!.faq || []
    };

    // Prepare Breadcrumbs Data
    const breadcrumbs = [
        { label: "Blog", href: "/blog" },
        { label: typeof post.title === 'string' ? decodeHTML(post.title).substring(0, 30) + '...' : 'Artículo', href: `/blog/${slug}` }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-sky-500/30 transition-colors duration-300">
            <FAQSchema faqs={post.faq ?? []} />
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">

                    {/* Breadcrumbs */}
                    <Breadcrumbs items={breadcrumbs} />

                    {/* Header Section */}
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wide mb-6 border border-border">
                            {post.category}
                        </span>

                        <h1
                            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(post.title, { ALLOWED_TAGS: TITLE_ALLOWED_TAGS }),
                            }}
                        />

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                            {post.excerpt}
                        </p>

                        <div className="flex gap-4 text-sm text-muted-foreground mt-6 font-medium">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.featuredImage?.sourceUrl && (
                        <div className="mb-12 rounded-xl overflow-hidden shadow-lg border border-border bg-muted aspect-video relative">
                            <Image
                                src={post.featuredImage.sourceUrl}
                                alt={post.featuredImage.altText || post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}

                    {/* Citable Quotes (Top) */}
                    {post.citableQuotes && post.citableQuotes.length > 0 && (
                        <CitableQuotes quotes={post.citableQuotes} />
                    )}

                    {/* Content Body */}
                    {isWP ? (
                        <div
                            className="prose prose-lg prose-slate dark:prose-invert max-w-none
                            prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-tight
                            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-6
                            prose-li:text-muted-foreground prose-li:my-2 prose-li:leading-normal
                            prose-strong:text-foreground
                            prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-secondary/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-secondary-foreground prose-blockquote:my-8 prose-blockquote:font-medium
                            prose-a:text-sky-600 hover:prose-a:text-sky-500
                            prose-img:rounded-xl prose-img:shadow-md
                            prose-table:border-border prose-th:bg-secondary prose-th:text-foreground prose-td:border-border"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(post.content, { USE_PROFILES: { html: true } }),
                            }}
                        />
                    ) : (
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                            prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-tight
                            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-6
                            prose-li:text-muted-foreground prose-li:my-2 prose-li:leading-normal
                            prose-strong:text-foreground 
                            prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-secondary/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-secondary-foreground prose-blockquote:my-8 prose-blockquote:font-medium
                            prose-a:text-sky-600 hover:prose-a:text-sky-500
                            prose-table:border-border prose-th:bg-secondary prose-th:text-foreground prose-td:border-border">
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>{post.content}</ReactMarkdown>
                        </div>
                    )}

                    {/* FAQs Section */}
                    {post.faq && post.faq.length > 0 && (
                        <FAQSection faqs={post.faq} />
                    )}

                    {/* Separator */}
                    <div className="h-px w-full bg-border my-20"></div>

                    {/* Navigation - Sigue profundizando */}
                    <div className="mb-20">
                        <div className="flex items-center gap-2 mb-8 text-foreground font-bold text-2xl">
                            <ArrowLeft className="rotate-180 text-sky-500" /> Sigue profundizando
                        </div>
                        <div className="grid gap-6">
                            <Link href="/blog" className="block group bg-card p-6 rounded-xl border border-border hover:border-sky-200 dark:hover:border-sky-500/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">📖</span>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2 group-hover:text-sky-600 transition-colors font-bold uppercase tracking-wider">Volver al Blog</p>
                                        <h4 className="text-lg font-bold text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">Explora más artículos y guías</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Functional Share Box */}
                    <ShareBox title={typeof post.title === 'string' ? post.title : 'Articulo LABDEN'} slug={slug} />

                </div>
            </article>

            <Footer />
        </main>
    );
}
