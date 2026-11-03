import Link from 'next/link';
import { blogPosts } from '../lib/blog';

export const metadata = {
    title: 'Instagram Reels Downloader Blog & Guides | SSInstagram',
    description: 'Explore Instagram Reels download guides, learn how to save videos on iPhone and Android, and find tips for using an online Reel downloader.',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Instagram Reels Downloader Blog & Guides | SSInstagram',
        description: 'Find helpful Instagram guides, including how to download Reels, save videos on iPhone and Android, and use an online downloader.',
        url: '/blog',
        siteName: 'SSInstagram',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary',
        title: 'Instagram Reels Downloader Blog & Guides | SSInstagram',
        description: 'Read Instagram Reels download guides and learn how to save supported videos on your phone or computer.',
    },
};

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-[#293a46] selection:bg-[#007FFF] selection:text-white">
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8 ">

                <header className="border-b border-slate-100 pb-4 mb-4">
                    <p className="mb-2 text-sm font-bold tracking-wide text-[#007FFF]">
                        SSInstagram Blog
                    </p>

                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                        Instagram Reels Download Guides and Tips
                    </h1>

                    <p className="mt-3 leading-relaxed text-slate-600">
                        Find helpful Instagram guides, learn how to download Reels,
                        save videos on your device, and use SSInstagram.
                    </p>
                </header>

                <section
                    aria-label="Blog posts"
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md sm:p-6"
                        >
                            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#007FFF]">
                                {post.category}
                            </p>

                            <h2 className="text-xl font-bold leading-snug tracking-tight text-[#041e49] transition-colors group-hover:text-[#007FFF]">
                                {post.title}
                            </h2>

                            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                                {post.description}
                            </p>

                            <p className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                                <time dateTime={post.publishedAt}>
                                    {new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString('en', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </p>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}
