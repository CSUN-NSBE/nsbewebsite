import { Link } from "react-router-dom";
import "../assets/css/fontawesome-all.min.css";
import csunlandscape from "../images/FORNSBEcsunlandscapepic.jpg";
import { events } from "../data/events";

const highlights = [
  {
    icon: "fa-briefcase",
    title: "Career Opportunities",
    description:
      "Access to internships, scholarships, and connections with top engineering companies.",
  },
  {
    icon: "fa-chart-line",
    title: "Professional Development",
    description:
      "Build leadership, networking, and technical skills through workshops and conferences.",
  },
  {
    icon: "fa-users",
    title: "Community & Belonging",
    description:
      "Join a family of Black STEM students uplifting each other academically and personally.",
  },
];

function Home() {
  return (
    <div>
      <section
        className="relative flex min-h-[520px] items-end bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.75)), url(${csunlandscape})`,
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Building Black Leaders.
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Empowering Black Engineers. Impacting Communities.
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            To increase the number of culturally responsible Black engineers
            who excel academically, succeed professionally, and positively
            impact the community.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/vision"
              className="rounded bg-maroon px-6 py-3 font-semibold hover:bg-maroon-light transition-colors"
            >
              Our Mission
            </Link>
            <Link
              to="/resources"
              className="rounded border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/10 text-maroon sm:mx-0">
                <i className={`fas ${item.icon} text-xl`} aria-hidden="true"></i>
              </div>
              <h3 className="mb-2 text-lg font-bold text-maroon">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Link to="/events" className="text-sm font-semibold text-gold hover:underline">
              View all events &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.slice(0, 4).map((event) => (
              <div key={event.id} className="rounded-lg bg-white/5 p-4">
                <div className="mb-3 inline-block rounded bg-maroon px-3 py-1 text-xs font-bold uppercase">
                  {event.date.month} {event.date.day}
                </div>
                <h3 className="mb-1 text-sm font-semibold">{event.title}</h3>
                <p className="text-xs text-white/60">{event.time}</p>
                <p className="text-xs text-white/60">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-8 text-center text-white">
        <p className="text-lg font-semibold">
          Your Network. Your Legacy. <span className="text-gold">Your NSBE.</span>
        </p>
      </section>
    </div>
  );
}

export default Home;