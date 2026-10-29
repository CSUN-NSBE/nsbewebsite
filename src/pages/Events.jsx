import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { events } from "../data/events";

const filters = ["All", "Social", "Academic Support", "Professional Development"];

// Program descriptions come from the Programs & Events pages of the CSUN-NSBE Sponsorship Package PDF.
const chapterPrograms = [
  { title: "General body meetings", body: "New and returning members learn about NSBE, our mission for the year, upcoming events, and how to get involved, and meet others in attendance." },
  { title: "Professional development events", body: "Workshops through the academic year, including resume reviews, practice interviews, and networking events." },
  { title: "Weekly study sessions", body: "Study halls three times a week give members a reliable place to study and collaborate with other NSBE members." },
  { title: "Recruitment events", body: "Companies come to speak with members about their organizations and open roles, and recruiters network with members for internships and jobs." },
  { title: "Academic excellence workshops", body: "Note-taking, test prep, Python, and 3D printing workshops, and more, to help members succeed in class and stand out in the job market." },
  { title: "Pre-collegiate initiative events", body: "Events for K-12 students in the community that build interest in college and in pursuing STEM degrees." },
];

const regionalPrograms = [
  { title: "Region 6 Leadership Conference", body: "Three days of position-focused training and leadership development for chapter and professional leaders, with time to network with peers across the region." },
  { title: "Zone summits", body: "Chapters in our zone meet to network and take part in activities and workshops." },
  { title: "Fall Regional Conference", body: "Our region's own mini-convention, with programming on cultural development, financial literacy, leadership, and academic success, plus a career fair." },
  { title: "Annual National Convention", body: "NSBE's flagship gathering, with speakers, workshops, competitions, networking, and the premier career fair for Black people in STEM." },
];

function ProgramList({ items }) {
  return (
    <div className="border-t-2 border-brand-dark">
      {items.map((item) => (
        <div key={item.title} className="grid gap-3 border-b border-rule py-7 sm:grid-cols-[1fr_1.4fr] sm:items-start sm:gap-6">
          <h3 className="font-display text-xl tracking-tight text-brand-dark">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function Events() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? events : events.filter((event) => event.category === filter);

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
          <motion.span {...rise(0.18)} className="mt-6 block text-xs font-semibold tracking-wide text-brand">Gather with purpose</motion.span>
          <motion.h1 {...rise(0.26)} className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">Learn together. Meet the industry. Build community.</motion.h1>
          <motion.p {...rise(0.38)} className="mt-7 max-w-xl text-base leading-relaxed text-ink/70">Our calendar balances the complete student experience, from focused study sessions to recruiter access and the moments that turn classmates into community.</motion.p>
        </section>

        <motion.section {...reveal} className="mx-auto max-w-[1320px] px-[6vw] pb-24">
          {/* TODO: src/data/events.js still holds placeholder events from the design mockups. Replace them with real dates and locations. */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-rule pb-4">
            <span className="text-xs text-muted">Filter by</span>
            {filters.map((item) => (
              <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`border-b-2 pb-1 text-sm transition-colors ${filter === item ? "border-brand text-brand" : "border-transparent text-ink/70 hover:text-brand"}`}>{item}</button>
            ))}
          </div>
          <div className="hidden border-b border-rule py-3 text-xs text-muted sm:grid sm:grid-cols-[105px_190px_1fr_230px] sm:gap-6">
            <span>Date</span>
            <span>Category</span>
            <span>Event</span>
            <span>Details</span>
          </div>
          {visible.length === 0 ? (
            <p className="border-b border-rule py-10 text-sm text-muted">No events in this category yet. Check back soon.</p>
          ) : (
            visible.map((event) => (
              <div key={event.id} className="grid gap-2 border-b border-rule py-7 sm:grid-cols-[105px_190px_1fr_230px] sm:items-center sm:gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-brand">{event.date.month}</span>
                  <strong className="font-display text-3xl font-medium text-ink">{event.date.day}</strong>
                </div>
                <span className="w-fit border-l-2 border-gold pl-2.5 text-xs text-muted">{event.category}</span>
                <h3 className="font-display text-lg tracking-tight text-brand-dark">{event.title}</h3>
                <div className="grid gap-1.5 text-[13px] text-muted">
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            ))
          )}
          <p className="mt-4 text-xs text-muted">Dates and locations are subject to change.</p>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-[1320px] px-[6vw] pb-24">
          <span className="text-xs font-semibold text-brand">Chapter events</span>
          <h2 className="mb-12 mt-2 max-w-3xl font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">What we run for members.</h2>
          <ProgramList items={chapterPrograms} />
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-[1320px] px-[6vw] pb-24">
          <span className="text-xs font-semibold text-brand">Regional and national</span>
          <h2 className="mb-12 mt-2 max-w-3xl font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">Where the chapter connects beyond CSUN.</h2>
          <ProgramList items={regionalPrograms} />
        </motion.section>
      </div>
    </PageTransition>
  );
}

export default Events;

