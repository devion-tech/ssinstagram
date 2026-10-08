export const metadata = {
    title: "About SSInstagram | Instagram Video Downloader",
    description: "Learn about SSInstagram, a browser-based tool for downloading supported Instagram videos and Reels as MP4 files.",
};

export default function AboutPage() {
    return (
        <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-6">
                <h1 className="mb-4 text-2xl font-extrabold text-slate-900">
                    About SSInstagram
                </h1>

                <p className="mb-10 text-slate-600">
                    SSInstagram is a browser-based tool designed to make downloading
                    supported Instagram videos and Reels simple and straightforward.
                </p>

                <div className="space-y-8 leading-[1.7] text-slate-700">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            What is SSInstagram?
                        </h2>

                        <p>
                            SSInstagram provides an online way to download supported
                            Instagram videos and Reels as MP4 files. You can use the service
                            directly from a web browser without installing a separate
                            downloader application.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Simple Download Experience
                        </h2>

                        <p>
                            The downloader is designed around a simple process. Copy the URL
                            of an Instagram video or Reel, paste it into SSInstagram, and
                            start the download. Once the video has been processed, you can
                            save the available MP4 file to your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Built for Mobile and Desktop
                        </h2>

                        <p>
                            SSInstagram can be accessed from modern web browsers on phones,
                            tablets, and computers. The goal is to provide a straightforward
                            downloading experience without requiring additional software.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Independent Service
                        </h2>

                        <p>
                            SSInstagram is an independent service and is not affiliated with,
                            sponsored by, or officially endorsed by Instagram or Meta
                            Platforms, Inc.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Contact Us
                        </h2>

                        <p>
                            If you have questions, feedback, or need help with the service,
                            you can contact us at:
                        </p>

                        <p className="mt-3">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:ssinsta.online@proton.me"
                                className="text-blue-600 underline underline-offset-[3px]"
                            >
                                ssinsta.online@proton.me
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}