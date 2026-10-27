export const FAQ = ({ items = [] }) => {
    return (
        <section>
            <h2 className="mb-6 text-2xl font-extrabold text-slate-900">
                Frequently Asked Questions
            </h2>

            <div className="flex flex-col">
                {items.map((item, index) => (
                    <details
                        key={index}
                        className="group border-b border-slate-200 py-4 first:pt-0"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:content-none">
                            {item.question}
                            <span
                                aria-hidden="true"
                                className="shrink-0 text-xl leading-none transition-transform group-open:rotate-45"
                            >
                                +
                            </span>
                        </summary>

                        <p className="mt-3 leading-[1.7] text-slate-700">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};
