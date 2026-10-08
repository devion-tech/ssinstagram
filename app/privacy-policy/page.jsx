export const metadata = {
    title: "Privacy Policy | SSInstagram",
    description: "Read the SSInstagram Privacy Policy to understand how information is handled when you use our Instagram video and Reel downloader.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-6">
                <h1 className="mb-4 text-2xl font-extrabold text-slate-900">
                    Privacy Policy
                </h1>

                <p className="mb-10 text-slate-600">
                    This Privacy Policy explains how SSInstagram handles information when
                    you use our website and Instagram video and Reel downloader.
                </p>

                <div className="space-y-8 leading-[1.7] text-slate-700">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            1. Information We Collect
                        </h2>

                        <p>
                            SSInstagram is designed to provide a simple browser-based
                            downloading service. Depending on how you use the website, basic
                            technical information may be processed by our hosting,
                            analytics, security, advertising, or other service providers.
                        </p>

                        <p className="mt-3">
                            When you submit an Instagram video or Reel URL, the URL may be
                            processed by our service to retrieve and prepare the requested
                            media for download.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            2. Download URLs and Media
                        </h2>

                        <p>
                            SSInstagram does not require you to provide your Instagram
                            username or password to use the downloader. We do not ask users
                            to provide Instagram account credentials.
                        </p>

                        <p className="mt-3">
                            Submitted URLs and requested media may be temporarily processed
                            by our systems to complete a download request. We do not claim
                            ownership of the Instagram content processed through the
                            service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            3. Cookies and Analytics
                        </h2>

                        <p>
                            SSInstagram may use cookies or similar technologies where
                            necessary for website functionality, analytics, advertising, or
                            measuring website performance.
                        </p>

                        <p className="mt-3">
                            Third-party services used on the website may collect information
                            according to their own privacy policies and terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            4. Third-Party Services
                        </h2>

                        <p>
                            Our website may use third-party services for hosting, analytics,
                            advertising, security, or other website functionality. These
                            services may process certain technical information when you visit
                            or use the website.
                        </p>

                        <p className="mt-3">
                            SSInstagram does not control the privacy practices of
                            third-party services. We recommend reviewing their respective
                            privacy policies for more information about how they handle
                            data.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            5. Data Security
                        </h2>

                        <p>
                            We take reasonable measures to protect information handled by
                            the service. Website connections may use HTTPS/TLS encryption to
                            help protect data transmitted between your browser and our
                            servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            6. Children's Privacy
                        </h2>

                        <p>
                            SSInstagram is not intended to knowingly collect personal
                            information from children. If you believe that a child has
                            provided personal information through the website, please contact
                            us so that the matter can be reviewed.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            7. Changes to This Privacy Policy
                        </h2>

                        <p>
                            We may update this Privacy Policy from time to time to reflect
                            changes to the website, services, or applicable requirements. Any
                            updated version will be published on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            8. Contact Us
                        </h2>

                        <p>
                            If you have questions about this Privacy Policy or how
                            information is handled by SSInstagram, you can contact us at:
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