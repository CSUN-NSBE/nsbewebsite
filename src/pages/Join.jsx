const chapterInterestUrl = "https://forms.gle/Jt3p6G8jzoyraAgQA";
const nationalMembershipUrl = "https://mynsbe.nsbe.org/s/joinprocess";

function Join() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero */}
            <section className="bg-[#590000] px-6 py-16 text-center text-white sm:py-20">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
                        Join CSUN NSBE
                    </p>

                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                        Become Part of the Community
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100">
                        Joining CSUN NSBE and becoming a national NSBE member are two
                        separate steps. Choose the option that matches what you need.
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
                {/* Explanation */}
                <section
                    aria-labelledby="membership-options-heading"
                    className="text-center"
                >
                    <h2
                        id="membership-options-heading"
                        className="text-3xl font-bold text-[#590000]"
                    >
                        Two Ways to Get Started
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
                        You can express interest in the CSUN chapter, register as an
                        official national NSBE member, or complete both.
                    </p>
                </section>

                {/* Membership choices */}
                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    {/* Chapter Interest */}
                    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <div
                            aria-hidden="true"
                            className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#590000] text-lg font-bold text-white"
                        >
                            1
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#700014]">
                            CSUN Chapter
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-[#590000]">
                            Express Interest in CSUN NSBE
                        </h3>

                        <p className="mt-4 flex-grow leading-7 text-gray-700">
                            Let the CSUN NSBE chapter know that you are interested in
                            participating in chapter meetings, events, professional
                            development, community activities, and other opportunities.
                        </p>

                        <p className="mt-5 rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                            <strong>This is chapter interest.</strong> Completing this form
                            does not replace national NSBE membership.
                        </p>

                        <a
                            href={chapterInterestUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#590000] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#730000] focus:outline-none focus:ring-4 focus:ring-[#590000]/30"
                        >
                            Complete Chapter Interest Form
                        </a>
                    </article>

                    {/* National Membership */}
                    <article className="flex flex-col rounded-2xl border-2 border-[#590000] bg-white p-6 shadow-md sm:p-8">
                        <div
                            aria-hidden="true"
                            className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c542] text-lg font-bold text-[#590000]"
                        >
                            2
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#700014]">
                            National NSBE
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-[#590000]">
                            Become a National Member
                        </h3>

                        <p className="mt-4 flex-grow leading-7 text-gray-700">
                            National membership provides official membership in the National
                            Society of Black Engineers and access to national NSBE
                            opportunities and resources.
                        </p>

                        <div className="mt-5 rounded-lg bg-[#fff8dc] p-4">
                            <p className="text-sm font-semibold text-[#590000]">
                                Collegiate Membership
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#590000]">
                                $20
                            </p>
                        </div>

                        <a
                            href={nationalMembershipUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#f4c542] px-6 py-3 text-center font-semibold text-[#590000] transition hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                        >
                            Join National NSBE
                        </a>
                    </article>
                </section>

                {/* Guidance */}
                <section
                    aria-labelledby="recommended-heading"
                    className="mt-10 rounded-2xl bg-gray-50 px-5 py-8 text-center sm:px-8"
                >
                    <h2
                        id="recommended-heading"
                        className="text-2xl font-bold text-[#590000]"
                    >
                        Not Sure Which One to Complete?
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-700">
                        If you want to be involved with CSUN NSBE and also become an
                        official NSBE member, complete the chapter interest form and the
                        national membership process.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default Join;