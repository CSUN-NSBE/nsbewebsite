import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import csunlandscape from "../images/FORNSBEcsunlandscapepic.jpg";
import { events } from "../data/events";

const chapterInterestUrl = "https://forms.gle/Jt3p6G8jzoyraAgQA";
const nationalMembershipUrl = "https://mynsbe.nsbe.org/s/joinprocess";

const values = [
	{
		title: "Academic Excellence",
		body: "Peer study groups, tutoring connections, and accountability that carry us through.",
	},
	{
		title: "Professional Development",
		body: "Direct access to recruiters, alumni, technical workshops, and national conferences.",
	},
	{
		title: "Community",
		body: "A trusted network built to celebrate wins, navigate challenges, and give back together.",
	},
];

function Home() {
	const reduceMotion = useReducedMotion();

	const reveal = {
		initial: { opacity: 0, y: reduceMotion ? 0 : 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, margin: "-80px" },
		transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
	};

	return (
		<PageTransition>
			<div className="bg-paper font-body text-ink">
				<section className="mx-auto grid max-w-[1500px] items-center gap-10 px-[7vw] py-16 lg:grid-cols-2 lg:gap-[7vw] lg:py-24">
					<div className="max-w-xl">
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

						<p className="mt-6 text-xs font-semibold tracking-wide text-brand">
							CSUN chapter &middot; Region VI
						</p>

						<h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
							Engineering a future where we all succeed.
						</h1>

						<p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
							CSUN&rsquo;s chapter of the National Society of Black Engineers
							exists to increase the number of culturally responsible Black
							engineers who excel academically, succeed professionally, and
							give back.
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-8">
							<a
								href={chapterInterestUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-[52px] items-center bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
							>
								Become a member
							</a>

							<Link
								to="/vision"
								className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-dark"
							>
								Read our vision
								<span className="h-px w-7 bg-brand transition-all group-hover:w-10" />
							</Link>
						</div>
					</div>

					<div className="relative pb-8 pr-7">
						<div
							className="absolute bottom-0 right-0 z-0 h-2/3 w-[73%] bg-brand-dark"
							aria-hidden="true"
						/>

						<div className="relative z-10 border border-brand-dark bg-paper p-[11px]">
							<img
								src={csunlandscape}
								alt="CSUN campus"
								className="h-[440px] w-full object-cover"
								style={{
									filter: "saturate(0.82) contrast(1.05)",
								}}
							/>

							<span className="absolute bottom-5 right-5 bg-brand-dark px-2 py-1 font-display text-[9px] font-medium text-white">
								CSUN / NSBE
							</span>
						</div>
					</div>
				</section>

				<motion.section
					{...reveal}
					className="grid border-y border-rule lg:grid-cols-[0.75fr_1.65fr]"
				>
					<div className="border-b border-rule px-[7vw] py-14 lg:border-b-0 lg:border-r">
						<span className="block text-xs text-muted">
							Established at CSUN
						</span>

						<strong className="mt-4 block font-display text-7xl font-semibold leading-none tracking-tight text-brand lg:text-8xl">
							1977
						</strong>

						<p className="mt-7 max-w-[310px] text-sm leading-relaxed text-ink/70">
							Nearly five decades of Black excellence in engineering and
							technology at CSUN.
						</p>
					</div>

					<div className="px-[5vw] py-6 lg:py-10">
						{values.map((item) => (
							<div
								key={item.title}
								className="grid gap-3 border-b border-rule py-7 last:border-0 sm:grid-cols-[46px_minmax(180px,0.75fr)_1fr] sm:items-center sm:gap-6"
							>
								<span className="font-display text-xs font-semibold text-brand">
									&bull;
								</span>

								<h2 className="font-display text-xl tracking-tight text-brand-dark">
									{item.title}
								</h2>

								<p className="text-sm leading-relaxed text-muted">
									{item.body}
								</p>
							</div>
						))}
					</div>
				</motion.section>

				<motion.section
					{...reveal}
					className="mx-auto max-w-[1320px] px-[6vw] py-24"
				>
					<div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
						<div>
							<span className="text-xs font-semibold text-brand">
								On the calendar
							</span>

							<h2 className="mt-2 font-display text-4xl tracking-tight text-brand-dark sm:text-5xl">
								Upcoming events
							</h2>
						</div>

						<Link
							to="/events"
							className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-dark"
						>
							View full calendar
							<span className="h-px w-7 bg-brand transition-all group-hover:w-10" />
						</Link>
					</div>

					<div className="border-t-2 border-brand-dark">
						{events.slice(0, 3).map((event) => (
							<div
								key={event.id}
								className="grid gap-2 border-b border-rule py-7 sm:grid-cols-[105px_190px_1fr_230px] sm:items-center sm:gap-6"
							>
								<div className="flex items-baseline gap-2">
									<span className="text-xs font-semibold text-brand">
										{event.date.month}
									</span>

									<strong className="font-display text-3xl font-medium text-ink">
										{event.date.day}
									</strong>
								</div>

								<span className="w-fit border-l-2 border-gold pl-2.5 text-xs text-muted">
									{event.category}
								</span>

								<h3 className="font-display text-lg tracking-tight text-brand-dark">
									{event.title}
								</h3>

								<div className="grid gap-1.5 text-[13px] text-muted">
									<span>{event.time}</span>
									<span>{event.location}</span>
								</div>
							</div>
						))}
					</div>
				</motion.section>

				<motion.section
					{...reveal}
					id="join"
					className="bg-brand-dark px-[10vw] py-20 text-white"
				>
					<span className="text-xs font-semibold text-gold">
						Your next step
					</span>

					<h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
						You do not have to engineer your future alone.
					</h2>

					<div className="mt-12 flex flex-col items-start justify-between gap-7 border-t border-white/30 pt-7 sm:flex-row sm:items-center">
						<p className="text-white/80">
							Membership is open to every CSUN student who believes in our
							mission.
						</p>

						<a
							href={nationalMembershipUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex min-h-[52px] items-center bg-paper px-6 text-sm font-semibold text-brand-dark transition-colors hover:bg-white"
						>
							Start your membership
						</a>
					</div>
				</motion.section>
			</div>
		</PageTransition>
	);
}

export default Home;

