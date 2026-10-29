import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import matador from "../images/admitted-day-matadors-banner-Web2.png";

const statements = [
  { label: "Mission", text: "To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community." },
  { label: "Vision", text: "In the spirit of excellence, NSBE envisions a world where Black engineers are recognized as leaders in their fields, driving innovation and creating positive change in their communities." },
];

const goals = [
  { title: "Ensure strong chapter representation at the NSBE Convention", body: "Through early planning, outreach, and logistical support." },
  { title: "Prepare members professionally", body: "With resume workshops, mock interviews, and convention-readiness sessions." },
  { title: "Secure funding for convention participation", body: "Via fundraising, sponsorships, and campus partnerships." },
  { title: "Strengthen connections with alumni", body: "Through mentorship programs, networking events, and professional panels." },
  { title: "Expand career development resources", body: "By offering workshops, resume reviews, and interview prep." },
  { title: "Host more intentional, intricate, and engaging events", body: "That offer deeper value and memorable experiences for members." },
  { title: "Inspire the next generation of Black engineers", body: "By mentoring NSBE Jr., hosting STEM outreach, and fostering early exposure to engineering." },
];

function Vision() {
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
        <section className="mx-auto max-w-[1320px] px-[6vw] pb-10 pt-16 lg:pt-24">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} className="h-0.5 w-20 bg-gold" />
          <motion.span {...rise(0.18)} className="mt-6 block text-xs font-semibold tracking-wide text-brand">Our direction</motion.span>
          <motion.h1 {...rise(0.26)} className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">A chapter built for impact beyond the classroom.</motion.h1>
          <motion.p {...rise(0.38)} className="mt-7 max-w-xl text-base leading-relaxed text-ink/70">Our work begins at CSUN, but the standard we set travels with every member into industry, research, and the communities they serve.</motion.p>
        </section>

        <motion.section {...reveal} className="mx-auto max-w-[1320px] px-[6vw] py-10">
          <figure>
            <img src={matador} alt="The Matador statue on the CSUN campus at sunset" className="h-[320px] w-full object-cover sm:h-[460px]" style={{ filter: "saturate(0.9) contrast(1.04)" }} />
            <figcaption className="mt-3 flex justify-between border-b border-rule pb-3 text-xs text-muted">
              <span>CSUN-NSBE</span>
              <span>CSUN, Northridge CA</span>
            </figcaption>
          </figure>
        </motion.section>

        <div className="mx-auto max-w-[1320px] px-[6vw] pt-10">
          <motion.div {...reveal} className="border-y border-rule">
            {statements.map((item) => (
              <div key={item.label} className="grid gap-4 border-b border-rule py-10 last:border-0 lg:grid-cols-[180px_1fr] lg:gap-16">
                <span className="text-xs font-semibold text-brand">{item.label}</span>
                <blockquote className="max-w-3xl font-display text-2xl leading-snug tracking-tight text-brand-dark sm:text-3xl">{item.text}</blockquote>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.section {...reveal} className="mx-auto grid max-w-[1320px] gap-10 px-[6vw] py-24 lg:grid-cols-[0.75fr_1.65fr] lg:gap-16">
          <div>
            <span className="block text-xs text-muted">Established at CSUN</span>
            <strong className="mt-4 block font-display text-7xl font-semibold leading-none tracking-tight text-brand lg:text-8xl">1977</strong>
          </div>
          <div>
            <span className="text-xs font-semibold text-brand">About the chapter</span>
            <h2 className="mt-2 font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">Rooted in Northridge. Connected nationwide.</h2>
            {/* TODO: confirm the member counts below are current */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">Founded in 1977, CSUN-NSBE is the preeminent organization for Black students pursuing STEM degrees at our college. CSUN-NSBE is a proud affiliate of Region Six, which spans over 13 states and is home to over 30 chapters. With over 15 active members, CSUN-NSBE accounts for about 33 members in total.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">Through the support of the national organization, the Andrew J. Anagnost College of Engineering and Computer Science, and corporate sponsorship, CSUN-NSBE supports Black STEM students by helping them develop socially, academically, and professionally.</p>
          </div>
        </motion.section>

        <section className="mx-auto max-w-[1320px] px-[6vw] pb-24">
          <motion.div {...reveal} className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold text-brand">What guides the work</span>
              <h2 className="mt-2 font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">Chapter goals</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">Seven priorities guide how we plan, partner, and serve our members.</p>
          </motion.div>
          <div className="border-t-2 border-brand-dark">
            {goals.map((goal) => (
              <motion.div key={goal.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} className="grid gap-3 border-b border-rule py-7 sm:grid-cols-[1fr_1fr] sm:items-start sm:gap-6">
                <h3 className="font-display text-xl tracking-tight text-brand-dark">{goal.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{goal.body}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Vision;

