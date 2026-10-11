import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import eboardPhoto from "../images/eboardPHOTO.jpg";
import tabby2526 from "../images/tabby_ceb2526.jpg";
import sherry2526 from "../images/sherry_ceb2526.jpg";
import justin2526 from "../images/justin_ceb2526.jpg";
import avatarPlaceholder from "../images/avatar.jpg";

// TODO: swap avatarPlaceholder for real headshots as they're collected.
// Names, roles, and majors are from the 2025-26 board mockup; confirm they are still accurate before publishing.
const executiveBoard = [
  { id: "tabitha-sulaiman", name: "Tabitha Sulaiman", role: "President", major: "Computer Science", image: tabby2526 },
  { id: "justin-smith", name: "Justin Smith", role: "External Vice-President", major: "Electrical Engineering", image: justin2526 },
  { id: "aichetou-camara", name: "Aichetou Camara", role: "Internal Vice-President", major: "Mechanical Engineering", image: avatarPlaceholder },
  { id: "chloe-joy-parker", name: "Chloe Joy Parker", role: "Secretary", major: "Comp. Eng. & Mechanical Eng.", image: avatarPlaceholder },
  { id: "emmanuel-wandji", name: "Emmanuel Wandji", role: "Treasurer", major: "Engineering Management Technology", image: avatarPlaceholder },
  { id: "uche-osuji", name: "Uche Osuji", role: "Marketing Committee Lead / Senator 1", major: "Computer Science", image: avatarPlaceholder },
  { id: "imran-kassim", name: "Imran Kassim", role: "Acting Membership Chair / Parliamentarian / Senator 2", major: "Computer Engineering", image: avatarPlaceholder },
  { id: "junior-munoko", name: "Junior Munoko", role: "Programs Chair", major: "Mechanical Engineering", image: avatarPlaceholder },
  { id: "sherifat-solebo", name: "Sherifat Solebo", role: "Academic Excellence (A.E.X.) Chair", major: "Computer Engineering", image: sherry2526 },
  { id: "naomih-black-gikanga", name: "Naomih Black-Gikanga", role: "Social Media Chair", major: "Computer Science", image: avatarPlaceholder },
];

function Team() {
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
          <motion.span {...rise(0.18)} className="mt-6 block text-xs font-semibold tracking-wide text-brand">01 / Leadership</motion.span>
          <motion.h1 {...rise(0.26)} className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">Meet the people moving our chapter forward.</motion.h1>
          <motion.p {...rise(0.38)} className="mt-7 max-w-xl text-base leading-relaxed text-ink/70">Our executive board serves the chapter through disciplined leadership, shared accountability, and a commitment to every member&rsquo;s growth.</motion.p>
        </section>

        <motion.section {...reveal} className="mx-auto max-w-[1320px] px-[6vw] py-10">
          <figure>
            <img src={eboardPhoto} alt="CSUN NSBE executive board group photo" className="h-[360px] w-full object-cover sm:h-[520px]" style={{ filter: "saturate(0.85) contrast(1.04)" }} />
            <figcaption className="mt-3 flex justify-between border-b border-rule pb-3 text-xs text-muted">
              <span>Executive board &middot; 2025&ndash;26</span>
              <span>CSUN, Northridge CA</span>
            </figcaption>
          </figure>
        </motion.section>

        <section className="mx-auto max-w-[1320px] px-[6vw] pb-24 pt-14">
          <motion.div {...reveal} className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold text-brand">02 / Executive board</span>
              <h2 className="mt-2 font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">Ten leaders, one charge.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">Each officer owns a distinct part of the chapter while working as one system.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {executiveBoard.map((officer, index) => (
              <motion.article key={officer.id} initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.6, delay: reduceMotion ? 0 : (index % 5) * 0.15, ease: [0.22, 1, 0.36, 1] }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-rule">
                  <img src={officer.image} alt={`${officer.name}, ${officer.role}`} loading="lazy" className="h-full w-full object-cover object-top" style={{ filter: "saturate(0.85)" }} />
                  <span className="absolute bottom-2 right-2 bg-brand-dark px-1.5 py-0.5 font-display text-[9px] font-medium text-white">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-display text-base tracking-tight text-brand-dark">{officer.name}</h3>
                <p className="mt-1 text-xs font-semibold text-brand">{officer.role}</p>
                <p className="mt-1 text-xs text-muted">{officer.major}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section {...reveal} className="bg-brand-dark px-[10vw] py-16 text-white">
          <h2 className="font-display text-3xl tracking-tight sm:text-5xl">Interested in joining the team?</h2>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/30 pt-6 sm:flex-row sm:items-center">
            {/* TODO: confirm the application timeline and point this at a real application form */}
            <p className="text-white/80">Applications open Fall 2026.</p>
            <a href="mailto:csun.nsbe@my.csun.edu?subject=CSUN%20NSBE%20board%20interest" className="inline-flex min-h-[52px] items-center bg-paper px-6 text-sm font-semibold text-brand-dark transition-colors hover:bg-white">Join our team</a>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}

export default Team;