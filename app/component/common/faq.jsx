export const FAQ = ({ items = [] }) => {
    return (
        <section>
            <h2 className="mb-6 text-2xl font-extrabold text-slate-900">
                Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                    <div key={index}>
                        <h3 className="mb-2 font-semibold text-slate-900">
                            {item.question}
                        </h3>

                        <p className="leading-[1.7] text-slate-700">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
