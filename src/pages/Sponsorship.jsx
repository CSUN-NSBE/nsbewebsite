import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const sponsorshipPackageUrl =
     "/documents/CSUN-NSBE-Company Sponsorship Package-2026-27.pdf";

const donationUrl =
     "https://engage.csun.edu/ASNatlSocOfBlackEng";

const sponsorshipEmail =
     "mailto:csun.nsbe@my.csun.edu?subject=CSUN%20NSBE%20sponsorship";

// 2026–27 sponsorship tiers from the official CSUN-NSBE Sponsorship Package.
const tiers = [
     { name: "Bronze", range: "$250\u2013$499" },
     { name: "Silver", range: "$500\u2013$999" },
     { name: "Gold", range: "$1,000\u2013$2,499" },
     { name: "Platinum", range: "$2,500\u2013$4,499" },
     { name: "Diamond", range: "$4,500+" },
];

// "from" is the first tier (by index) that includes the benefit;
// every higher tier includes it too.
const benefits = [
     {
          label: "Personalized thank-you package from CSUN-NSBE",
          from: 0,
     },
     {
          label: "Event of your choosing with the chapter",
          from: 1,
     },
     {
          label: "Invitation to a general body meeting",
          from: 2,
     },
     {
          label: "Invitation to a networking mixer",
          from: 2,
     },
     {
          label: "Social media shoutout",
          from: 2,
     },
     {
          label: "Access to the CSUN-NSBE resume book",
          from: 2,
     },
     {
          label: "CSUN-NSBE merchandise",
          from: 3,
     },
     {
          label: "Invitation to an additional general body meeting",
          from: 3,
     },
     {
          label: "Two additional CSUN-NSBE events of your choice",
          from: 4,
     },
     {
          label: "Company logo on possible CSUN-NSBE merchandise",
          from: 4,
     },
];

// TODO: These figures come from the Chapter Expenses page of the
// sponsorship package. Confirm they are current before publishing.
const expenses = [
     {
          title: "Meetings, workshops, and events",
          detail:
               "Food for 10 events ($1,500) and pre-collegiate event supplies ($200).",
          amount: "$1,700",
     },
     {
          title: "Fall Regional Conference",
          detail:
               "15 expected participants: admission, airfare, and housing.",
          amount: "$11,318",
     },
     {
          title: "Annual National Convention",
          detail:
               "30 expected participants: admission, airfare, food, and housing.",
          amount: "$35,020",
     },
];

const ways = [
     {
          title: "Sponsor a scholarship",
          body:
               "Offer scholarships to members and set the qualifications. You can choose the winners, or we can.",
     },
     {
          title: "Mentor our members",
          body:
               "Send employee mentors to share practical guidance with students.",
     },
     {
          title: "Give in kind",
          body:
               "Contribute goods or services the chapter can put to use.",
     },
     {
          title: "Recruit at our events",
          body:
               "Speak with our members about your company and the roles you have open.",
     },
];

function Sponsorship() {
     const reduceMotion = useReducedMotion();

     const reveal = {
          initial: {
               opacity: 0,
               y: reduceMotion ? 0 : 40,
          },
          whileInView: {
               opacity: 1,
               y: 0,
          },
          viewport: {
               once: true,
               margin: "-80px",
          },
          transition: {
               duration: 2,
               ease: [0.22, 1, 0.36, 1],
          },
     };

     const rise = (delay) => ({
          initial: {
               opacity: 0,
               y: reduceMotion ? 0 : 18,
          },
          animate: {
               opacity: 1,
               y: 0,
          },
          transition: {
               duration: 0.6,
               delay: reduceMotion ? 0 : delay,
               ease: [0.16, 1, 0.3, 1],
          },
     });

     return (
          <PageTransition>
               <div className="bg-paper font-body text-ink">
                    <section className="mx-auto max-w-[1320px] px-[6vw] pb-16 pt-16 lg:pt-24">
                         <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{
                                   duration: 0.7,
                                   delay: reduceMotion ? 0 : 0.1,
                                   ease: [0.16, 1, 0.3, 1],
                              }}
                              style={{ transformOrigin: "left" }}
                              className="h-0.5 w-20 bg-gold"
                         />

                         <motion.span
                              {...rise(0.18)}
                              className="mt-6 block text-xs font-semibold tracking-wide text-brand"
                         >
                              Partnership
                         </motion.span>

                         <motion.h1
                              {...rise(0.26)}
                              className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl"
                         >
                              Invest in the next generation of technical leadership.
                         </motion.h1>

                         <motion.p
                              {...rise(0.38)}
                              className="mt-7 max-w-xl text-base leading-relaxed text-ink/70"
                         >
                              Your support removes barriers, expands access, and creates
                              the direct industry connection our members need to move from
                              capable students to confident professionals.
                         </motion.p>
                    </section>

                    <motion.section
                         {...reveal}
                         className="mx-auto grid max-w-[1320px] gap-10 border-t border-rule px-[6vw] py-24 lg:grid-cols-[0.75fr_1.65fr] lg:gap-16"
                    >
                         <div>
                              <span className="text-xs font-semibold text-brand">
                                   Where it goes
                              </span>

                              <strong className="mt-6 block font-display text-7xl font-semibold leading-none tracking-tight text-brand lg:text-8xl">
                                   $48,038
                              </strong>

                              <p className="mt-6 max-w-[310px] text-sm leading-relaxed text-ink/70">
                                   Our estimated annual budget for chapter programs and
                                   conference travel.
                              </p>
                         </div>

                         <div>
                              {expenses.map((item) => (
                                   <div
                                        key={item.title}
                                        className="grid gap-2 border-b border-rule py-7 first:border-t-2 first:border-t-brand-dark sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10"
                                   >
                                        <div>
                                             <h3 className="font-display text-xl tracking-tight text-brand-dark">
                                                  {item.title}
                                             </h3>

                                             <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                                                  {item.detail}
                                             </p>
                                        </div>

                                        <strong className="font-display text-3xl font-medium text-ink">
                                             {item.amount}
                                        </strong>
                                   </div>
                              ))}
                         </div>
                    </motion.section>

                    <section className="mx-auto max-w-[1320px] px-[6vw] pb-24">
                         <motion.div
                              {...reveal}
                              className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
                         >
                              <div>
                                   <span className="text-xs font-semibold text-brand">
                                        Annual support
                                   </span>

                                   <h2 className="mt-2 font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">
                                        Sponsorship tiers
                                   </h2>
                              </div>

                              <p className="max-w-xs text-sm leading-relaxed text-muted">
                                   Every level includes a personalized thank-you package.
                                   Higher levels add more ways to connect with our members.
                              </p>
                         </motion.div>

                         <motion.div
                              {...reveal}
                              className="overflow-x-auto"
                         >
                              <table className="w-full min-w-[760px] border-t-2 border-brand-dark text-left">
                                   <thead>
                                        <tr className="border-b border-rule align-bottom">
                                             <th
                                                  scope="col"
                                                  className="py-5 pr-4 text-xs font-semibold text-muted"
                                             >
                                                  Benefit
                                             </th>

                                             {tiers.map((tier) => (
                                                  <th
                                                       key={tier.name}
                                                       scope="col"
                                                       className="px-3 py-5 text-center font-normal"
                                                  >
                                                       <span className="block font-display text-lg tracking-tight text-brand-dark">
                                                            {tier.name}
                                                       </span>

                                                       <span className="mt-1 block text-xs text-muted">
                                                            {tier.range}
                                                       </span>
                                                  </th>
                                             ))}
                                        </tr>
                                   </thead>

                                   <tbody>
                                        {benefits.map((benefit) => (
                                             <tr
                                                  key={benefit.label}
                                                  className="border-b border-rule"
                                             >
                                                  <th
                                                       scope="row"
                                                       className="py-4 pr-4 text-sm font-normal text-ink/80"
                                                  >
                                                       {benefit.label}
                                                  </th>

                                                  {tiers.map((tier, index) => (
                                                       <td
                                                            key={tier.name}
                                                            className="px-3 py-4 text-center text-brand"
                                                       >
                                                            {index >= benefit.from ? (
                                                                 <span aria-hidden="true">
                                                                      &#10003;
                                                                 </span>
                                                            ) : null}

                                                            <span className="sr-only">
                                                                 {index >= benefit.from
                                                                      ? "Included"
                                                                      : "Not included"}
                                                            </span>
                                                       </td>
                                                  ))}
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </motion.div>

                         <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                              <p className="text-xs text-muted">
                                   Listed prices are negotiable on request. Gifts of
                                   $1&ndash;$249 join as Matador Rider level sponsors.
                              </p>

                              <a
                                   href={sponsorshipPackageUrl}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-dark"
                              >
                                   View the full 2026&ndash;27 package
                                   <span className="h-px w-7 bg-brand transition-all group-hover:w-10" />
                              </a>
                         </div>
                    </section>

                    <motion.section
                         {...reveal}
                         className="mx-auto max-w-[1320px] px-[6vw] pb-24"
                    >
                         <span className="text-xs font-semibold text-brand">
                              Beyond financial support
                         </span>

                         <h2 className="mt-2 max-w-3xl font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">
                              There are many ways to build with us.
                         </h2>

                         <div className="mt-12 grid gap-10 border-t-2 border-brand-dark pt-10 sm:grid-cols-2 lg:grid-cols-4">
                              {ways.map((item) => (
                                   <div key={item.title}>
                                        <h3 className="font-display text-xl tracking-tight text-brand-dark">
                                             {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-muted">
                                             {item.body}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </motion.section>

                    <motion.section
                         {...reveal}
                         className="bg-brand-dark px-[10vw] py-20 text-white"
                    >
                         <span className="text-xs font-semibold text-gold">
                              Your next step
                         </span>

                         <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
                              Partner with CSUN-NSBE.
                         </h2>

                         <div className="mt-12 border-t border-white/30 pt-7">
                              <p className="max-w-3xl text-white/80">
                                   Support the chapter through the official CSUN giving page
                                   or contact us to begin a sponsorship partnership. Checks
                                   can be made out to &ldquo;CSUN Foundation - National
                                   Society Of Black Engineers&rdquo; and mailed to 18111
                                   Nordhoff Street, Valeria Hall 110, Northridge, CA
                                   91330-8296.
                              </p>

                              <div className="mt-7 flex flex-wrap gap-4">
                                   <a
                                        href={sponsorshipEmail}
                                        className="inline-flex min-h-[52px] items-center bg-paper px-6 text-sm font-semibold text-brand-dark transition-colors hover:bg-white"
                                   >
                                        Become a sponsor
                                   </a>

                                   <a
                                        href={donationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-[52px] items-center border border-white/70 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark"
                                   >
                                        Donate to CSUN NSBE
                                   </a>

                                   <a
                                        href={sponsorshipPackageUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-[52px] items-center border border-white/70 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark"
                                   >
                                        Sponsorship package
                                   </a>
                              </div>
                         </div>
                    </motion.section>
               </div>
          </PageTransition>
     );
}

export default Sponsorship;
