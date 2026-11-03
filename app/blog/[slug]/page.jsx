import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '../../lib/blog';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {};
    }

    return {
        title: post.seoTitle,
        description: post.seoDescription,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seoTitle,
            description: post.seoDescription,
            url: `/blog/${post.slug}`,
            siteName: 'SSInstagram',
            locale: 'en_US',
            type: 'article',
            publishedTime: post.publishedAt,
            tags: [post.category],
        },
        twitter: {
            card: 'summary',
            title: post.seoTitle,
            description: post.seoDescription,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const articleStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.seoDescription,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        articleSection: post.category,
        mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
        publisher: {
            '@type': 'Organization',
            name: 'SSInstagram',
            url: baseUrl,
        },
    };

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-[#293a46] selection:bg-[#007FFF] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleStructuredData).replace(/</g, '\\u003c'),
                }}
            />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-4xl">
                    <Link
                        href="/blog"
                        className="text-sm font-semibold text-[#007FFF] transition-colors hover:text-[#0066CC] hover:underline"
                    >
                        <span aria-hidden="true">← </span>All blog posts
                    </Link>
                    <article className="mt-7">

                        <header className="mb-6 border-b border-slate-100">
                            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#007FFF]">
                                {post.category}
                            </p>
                            <h1 className="text-xl md:text-3xl font-extrabold leading-tight tracking-tight text-[#041e49] ">
                                {post.title}
                            </h1>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                                {post.description}
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                                <time dateTime={post.publishedAt}>
                                    {new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString('en', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </p>
                        </header>

                        <div
                            className="max-w-5xl leading-7 [&_h2]:scroll-mt-24 [&_h2]:text-balance [&_p]:text-slate-700 [&_a]:text-blue-600 [&_a:hover]:underline"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                </div>
            </main>
        </div>
    );
}
