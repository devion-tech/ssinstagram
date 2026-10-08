export const metadata = {
    title: "Contact Us | SSInstagram",
    description: "Contact SSInstagram for questions, technical issues, feedback, or other inquiries about our Instagram video and Reel downloader.",
};

export default function ContactUsPage() {
    return (
        <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-6">
                <h1 className="mb-4 text-2xl font-extrabold text-slate-900">
                    Contact Us
                </h1>

                <p className="mb-10 text-slate-600">
                    If you have a question, technical issue, or feedback about
                    SSInstagram, you can contact us using the email address below.
                </p>

                <div className="space-y-8 leading-[1.7] text-slate-700">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Get in Touch
                        </h2>

                        <p>
                            For questions about the SSInstagram website, Instagram video
                            downloads, Reel downloads, or technical issues, please contact
                            our support team by email.
                        </p>

                        <p className="mt-4">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:ssinsta.online@proton.me"
                                className="text-blue-600 underline underline-offset-[3px]"
                            >
                                ssinsta.online@proton.me
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Technical Issues
                        </h2>

                        <p>
                            If an Instagram video or Reel is not downloading correctly,
                            please include the issue you are experiencing in your message.
                            You may also include the relevant Instagram URL if necessary
                            to help us understand the problem.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            General Inquiries
                        </h2>

                        <p>
                            You can also contact us for general questions, feedback,
                            suggestions, or other inquiries related to SSInstagram.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-slate-900">
                            Response Time
                        </h2>

                        <p>
                            We aim to review and respond to support requests as soon as
                            reasonably possible. Response times may vary depending on the
                            type and volume of inquiries received.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}