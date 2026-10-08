export const metadata = {
    title: "Terms and Conditions | SSInstagram",
    description: "Read the Terms and Conditions for using SSInstagram, an online Instagram video and Reel downloader.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-6">
                <h1 className="mb-4 text-2xl font-extrabold text-slate-900">
                    Terms and Conditions
                </h1>

                <p className="mb-10 text-slate-600">
                    These Terms and Conditions explain the rules for using SSInstagram
                    and its Instagram video and Reel downloading service.
                </p>

                <div className="space-y-8 leading-[1.7] text-slate-700">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            1. Use of the Service
                        </h2>
                        <p>
                            SSInstagram provides a browser-based tool for downloading
                            supported publicly accessible Instagram videos and Reels. By
                            using the website, you agree to use the service responsibly and
                            in accordance with these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            2. Content and Copyright
                        </h2>
                        <p>
                            Content available through Instagram may be protected by
                            copyright, trademark, or other intellectual property rights. The
                            rights to videos and Reels remain with their respective owners
                            and creators.
                        </p>
                        <p className="mt-3">
                            You are responsible for ensuring that you have the necessary
                            permission or legal right to download, save, use, or share any
                            content obtained through the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            3. Acceptable Use
                        </h2>
                        <p>
                            You agree not to use SSInstagram for unlawful purposes or in a
                            way that violates the rights of content creators, Instagram, or
                            any other third party.
                        </p>
                        <p className="mt-3">
                            You must not attempt to interfere with the operation of the
                            website, abuse the service, or use automated methods that place
                            an unreasonable load on our systems.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            4. Availability of the Service
                        </h2>
                        <p>
                            We aim to keep SSInstagram available and functional, but we do
                            not guarantee that the service will always be available or that
                            every Instagram video or Reel can be processed successfully.
                        </p>
                        <p className="mt-3">
                            Service availability may be affected by maintenance, technical
                            problems, changes to third-party platforms, network issues, or
                            other circumstances outside our control.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            5. No Guarantee of Downloads
                        </h2>
                        <p>
                            SSInstagram does not guarantee that every submitted Instagram
                            URL will result in a downloadable video. Availability may depend
                            on the accessibility and compatibility of the requested content.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            6. Third-Party Platforms
                        </h2>
                        <p>
                            SSInstagram is an independent service and is not affiliated with,
                            sponsored by, or officially endorsed by Instagram or Meta
                            Platforms, Inc.
                        </p>
                        <p className="mt-3">
                            Instagram is a third-party platform, and its availability,
                            features, policies, and content are outside our control.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            7. Disclaimer of Warranties
                        </h2>
                        <p>
                            SSInstagram is provided on an &quot;as is&quot; and &quot;as
                            available&quot; basis. We make no guarantee that the website or
                            downloading service will be uninterrupted, error-free, or
                            suitable for every particular purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            8. Limitation of Liability
                        </h2>
                        <p>
                            To the extent permitted by applicable law, SSInstagram and its
                            operators will not be responsible for losses or damages arising
                            from your use of the website, inability to use the service, or
                            your use of content downloaded through the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            9. Changes to These Terms
                        </h2>
                        <p>
                            We may update these Terms and Conditions from time to time to
                            reflect changes to the website, service, or applicable
                            requirements. Updated terms will be published on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            10. Contact Us
                        </h2>
                        <p>
                            If you have questions about these Terms and Conditions, you can
                            contact us at:
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