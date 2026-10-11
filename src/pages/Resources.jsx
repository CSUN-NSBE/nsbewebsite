
import "../assets/css/fontawesome-all.min.css";

// TODO: replace mailto/hrefs with real links once each resource has an
// actual destination (internship board, scholarship list, booking link, etc.)
const resources = [
  {
    icon: "fa-briefcase",
    title: "Internships & Jobs",
    description:
      "Find internship opportunities and job postings from our industry partners.",
  },
  {
    icon: "fa-graduation-cap",
    title: "Scholarships",
    description: "Find scholarships specifically designed to support Black students in STEM.",
  },
  {
    icon: "fa-file-alt",
    title: "Resume Reviews",
    description: "Get your resume reviewed by professionals and chapter alumni.",
  },
  {
    icon: "fa-hands-helping",
    title: "Mentorship",
    description: "Connect with alumni and industry professionals who will guide you on your journey.",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Workshops",
    description: "Attend workshops that build technical, soft, and leadership skills.",
  },
  {
    icon: "fa-users",
    title: "Conferences",
    description: "Attend regional and national conferences to elevate your career.",
  },
];

function Resources() {
  return (
    <div>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold">Resources</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Tools and opportunities to help you grow academically, professionally, and personally.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-lg border border-gray-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <i className={`fas ${resource.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="mb-2 font-bold text-maroon">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-maroon px-6 py-10 text-center text-white">
        <h2 className="mb-2 text-xl font-bold">Need something else?</h2>
        <p className="mb-4 text-white/80">Reach out to us and we&apos;ll point you in the right direction.</p>
         <a href="mailto:csun.nsbe@my.csun.edu"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-maroon hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Resources;