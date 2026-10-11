const donationUrl = "https://engage.csun.edu/ASNatlSocOfBlackEng";

const sponsorshipPackageUrl =
     "/documents/CSUN-NSBE-Company Sponsorship Package-2026-27.pdf";

const sponsorshipTiers = [
     {
          name: "Bronze",
          price: "$250–$499",
     },
     {
          name: "Silver",
          price: "$500–$999",
     },
     {
          name: "Gold",
          price: "$1,000–$2,499",
     },
     {
          name: "Platinum",
          price: "$2,500–$4,499",
     },
     {
          name: "Diamond",
          price: "$4,500+",
     },
];

function Sponsorship() {
     return (
          <main className="min-h-screen bg-white text-gray-900">
               {/* Hero */}
               <section className="bg-[#590000] px-6 py-20 text-center text-white">
                    <div className="mx-auto max-w-4xl">
                         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
                              Partner With CSUN NSBE
                         </p>

                         <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                              Sponsor CSUN NSBE
                         </h1>

                         <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100">
                              Support the academic, professional, and leadership development of
                              Black engineers at California State University, Northridge.
                         </p>

                         <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                              <a
                                   href={sponsorshipPackageUrl}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4c542] px-6 py-3 font-semibold text-[#590000] transition hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                              >
                                   View 2026–27 Sponsorship Package
                              </a>

                              <a
                                   href={donationUrl}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#590000] focus:outline-none focus:ring-4 focus:ring-white/50"
                              >
                                   Donate to CSUN NSBE
                              </a>
                         </div>
                    </div>
               </section>

               <div className="mx-auto max-w-6xl px-6 py-16">
                    {/* Why Sponsor */}
                    <section
                         aria-labelledby="why-sponsor-heading"
                         className="mx-auto max-w-3xl text-center"
                    >
                         <h2
                              id="why-sponsor-heading"
                              className="text-3xl font-bold text-[#590000]"
                         >
                              Why Partner With Us?
                         </h2>

                         <p className="mt-5 text-lg leading-8 text-gray-700">
                              Sponsorship helps CSUN NSBE provide conference opportunities,
                              professional development, networking, STEM outreach, academic
                              support, and other resources that prepare our members for success.
                         </p>
                    </section>

                    {/* Sponsorship Levels */}
                    <section
                         aria-labelledby="sponsorship-levels-heading"
                         className="mt-20"
                    >
                         <div className="text-center">
                              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#700014]">
                                   Partnership Options
                              </p>

                              <h2
                                   id="sponsorship-levels-heading"
                                   className="mt-2 text-3xl font-bold text-[#590000]"
                              >
                                   Sponsorship Levels
                              </h2>

                              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                                   Select a partnership level that fits your organization. Full
                                   benefits and package details are available in the official
                                   sponsorship package.
                              </p>
                         </div>

                         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                              {sponsorshipTiers.map((tier) => (
                                   <article
                                        key={tier.name}
                                        className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                   >
                                        <h3 className="text-xl font-bold text-[#590000]">
                                             {tier.name}
                                        </h3>

                                        <p className="mt-3 text-lg font-semibold text-gray-800">
                                             {tier.price}
                                        </p>
                                   </article>
                              ))}
                         </div>

                         <p className="mt-6 text-center text-sm text-gray-500">
                              Listed sponsorship prices may be negotiable upon request.
                         </p>
                    </section>

                    {/* Package CTA */}
                    <section className="mt-20 rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-10">
                         <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#700014]">
                              Learn More
                         </p>

                         <h2 className="mt-2 text-3xl font-bold text-[#590000]">
                              See What Each Sponsorship Includes
                         </h2>

                         <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-700">
                              The official 2026–27 package includes sponsorship benefits,
                              chapter information, programs and events, chapter expenses, and
                              partnership details.
                         </p>

                         <a
                              href={sponsorshipPackageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#590000] px-7 py-3 font-semibold text-white transition hover:bg-[#730000] focus:outline-none focus:ring-4 focus:ring-[#590000]/30"
                         >
                              Open Sponsorship Package
                         </a>
                    </section>

                    {/* Donate */}
                    <section
                         aria-labelledby="donate-heading"
                         className="mt-10 rounded-2xl border-2 border-[#590000] px-6 py-12 text-center sm:px-10"
                    >
                         <h2
                              id="donate-heading"
                              className="text-3xl font-bold text-[#590000]"
                         >
                              Make a Donation
                         </h2>

                         <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-700">
                              Prefer to support CSUN NSBE directly? Donations can be made through
                              our approved CSUN Engage destination.
                         </p>

                         <a
                              href={donationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#590000] px-7 py-3 font-semibold text-white transition hover:bg-[#730000] focus:outline-none focus:ring-4 focus:ring-[#590000]/30"
                         >
                              Donate Through CSUN
                         </a>
                    </section>

                    {/* Contact */}
                    <section
                         aria-labelledby="sponsorship-contact-heading"
                         className="mt-20 text-center"
                    >
                         <h2
                              id="sponsorship-contact-heading"
                              className="text-3xl font-bold text-[#590000]"
                         >
                              Questions About Sponsorship?
                         </h2>

                         <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                              Contact CSUN NSBE at{" "}
                              <a
                                   href="mailto:csun.nsbe@my.csun.edu"
                                   className="font-semibold text-[#590000] underline underline-offset-4 hover:text-[#730000]"
                              >
                                   csun.nsbe@my.csun.edu
                              </a>
                              .
                         </p>
                    </section>
               </div>
          </main>
     );
}

export default Sponsorship;