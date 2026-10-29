import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";

// Most descriptions come from the Programs & Events pages of the CSUN-NSBE Sponsorship Package PDF.
// TODO: confirm the "National NSBE membership" benefits against nsbe.org before publishing.
const resources = [
  { title: "Resume reviews and practice interviews", body: "Professional development events cover resume reviews, practice interviews, and networking.", tag: "Throughout the academic year" },
  { title: "Weekly study sessions", body: "Study halls three times a week give you a reliable place to study and collaborate with other members.", tag: "Three times a week" },
  { title: "Academic excellence workshops", body: "Note-taking, test prep, Python, and 3D printing workshops, and more.", tag: "Chapter workshops" },
  { title: "Recruiter access", body: "Recruitment events bring companies to speak with members, and career fairs at regional and national conferences connect members with companies hiring interns and full-time employees.", tag: "Recruitment events and career fairs" },
  { title: "Conferences", body: "The Fall Regional Conference, Region 6 Leadership Conference, and Annual National Convention offer workshops, networking, and career development.", tag: "Regional and national" },
  { title: "National NSBE membership", body: "Membership connects you to national scholarships, the NSBE Career Center, and discounted registration for conferences.", tag: "National" },
];

function Resources() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  };

  const rise = (delay) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <PageTransition>
      <div className="bg-paper font-body text-ink">
        <section className="mx-auto max-w-[1320px] px-[6vw] pb-16 pt-16 lg:pt-24">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} className="h-0.5 w-20 bg-gold" />
          <motion.span {...rise(0.18)} className="mt-6 block text-xs font-semibold tracking-wide text-brand">Member toolkit</motion.span>
          <motion.h1 {...rise(0.26)} className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">The support to get through. The access to go further.</motion.h1>
          <motion.p {...rise(0.38)} className="mt-7 max-w-xl text-base leading-relaxed text-ink/70">Strong engineers need more than coursework. We connect members to timely opportunities, tested knowledge, and people invested in their progress.</motion.p>
        </section>

        <motion.section {...reveal} className="mx-auto grid max-w-[1320px] gap-10 border-t border-rule px-[6vw] py-24 lg:grid-cols-[0.75fr_1.65fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold text-brand">Available now</span>
            <p className="mt-6 max-w-[310px] text-sm leading-relaxed text-ink/70">Everything here runs through the chapter. Email us and we will point you to the next step.</p>
            <a href="mailto:csun.nsbe@my.csun.edu?subject=CSUN%20NSBE%20member%20resources" className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand-dark">
              Email the chapter
              <span className="h-px w-7 bg-brand transition-all group-hover:w-10" />
            </a>
          </div>
          <div className="border-t-2 border-brand-dark">
            {resources.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-rule py-7 sm:grid-cols-[1fr_1.4fr] sm:items-start sm:gap-6">
                <div>
                  <h3 className="font-display text-xl tracking-tight text-brand-dark">{item.title}</h3>
                  <span className="mt-2 block text-xs text-muted">{item.tag}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} className="bg-brand-dark px-[10vw] py-20 text-white">
          <span className="text-xs font-semibold text-gold">Need something else?</span>
          <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">Tell us what would move you forward.</h2>
          <div className="mt-12 flex flex-col items-start justify-between gap-7 border-t border-white/30 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-xl text-white/80">If a resource is missing from this list, we want to hear about it.</p>
            <a href="mailto:csun.nsbe@my.csun.edu?subject=Member%20resource%20request" className="inline-flex min-h-[52px] items-center bg-paper px-6 text-sm font-semibold text-brand-dark transition-colors hover:bg-white">Send a resource request</a>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}

export default Resources;

