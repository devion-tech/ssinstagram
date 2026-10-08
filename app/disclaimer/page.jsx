export const metadata = {
    title: "Disclaimer | SSInstagram",
    description: "Read the SSInstagram disclaimer regarding our independent Instagram video and Reel downloader service and third-party content.",
};

export default function DisclaimerPage() {
    return (
        <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-5  py-6">
                <h1 className="mb-4 text-2xl font-extrabold text-slate-900">
                    Disclaimer
                </h1>

                <p className="mb-10 text-slate-600">
                    This disclaimer explains the relationship between SSInstagram and
                    third-party platforms and content accessed through the service.
                </p>

                <div className="space-y-8 leading-[1.7] text-slate-700">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            1. Independent Service
                        </h2>

                        <p>
                            SSInstagram is an independent web application and is not
                            affiliated with, sponsored by, or officially endorsed by
                            Instagram or Meta Platforms, Inc.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            2. Instagram and Third-Party Content
                        </h2>

                        <p>
                            Instagram is a third-party platform. SSInstagram does not own or
                            claim ownership of videos, Reels, or other content available on
                            Instagram.
                        </p>

                        <p className="mt-3">
                            Any trademarks, logos, names, and other intellectual property
                            associated with Instagram or Meta Platforms, Inc. belong to
                            their respective owners.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            3. Responsibility for Downloaded Content
                        </h2>

                        <p>
                            Users are responsible for ensuring that their use of downloaded
                            content complies with applicable laws, copyright requirements,
                            and the rights of the original content creator or owner.
                        </p>

                        <p className="mt-3">
                            SSInstagram does not grant users ownership or redistribution
                            rights over content downloaded through the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            4. Service Availability
                        </h2>

                        <p>
                            SSInstagram does not guarantee that every Instagram video or Reel
                            will be available for download or that the service will always
                            operate without interruption.
                        </p>

                        <p className="mt-3">
                            Availability may be affected by changes to third-party platforms,
                            technical issues, maintenance, network conditions, or other
                            factors outside our control.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            5. No Legal or Ownership Claim
                        </h2>

                        <p>
                            Providing access to the downloader does not mean that SSInstagram
                            owns, controls, or endorses any content processed through the
                            service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            6. Contact Us
                        </h2>

                        <p>
                            If you have questions regarding this disclaimer, you can contact
                            us at:
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