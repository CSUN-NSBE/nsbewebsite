import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
import "../assets/css/fontawesome-all.min.css";
import "./Home.css";
import csunlandscape from "../images/FORNSBEcsunlandscapepic.jpg";
import eboard from "../images/team/2024-25/SP25/group/nsbe-ceb-group-sp25.webpz";

function Home() {
	return (
		<div id="wrapper" className="is-preload home-page">
			<div id="main">
				{/* Hero - preserve CSUN NSBE visual identity */}
				<section className="home-hero" aria-labelledby="home-title">
					<img
						src={csunlandscape}
						alt="California State University Northridge campus"
						className="home-hero__image"
					/>

					<div className="home-hero__content">
						<p className="home-hero__chapter">
							California State University - Northridge Chapter
						</p>

						<h1 id="home-title" className="home-hero__title">
							National Society of Black Engineers
						</h1>
					</div>
				</section>

				{/* Mission */}
				<section className="home-mission" aria-labelledby="mission-heading">
					<h2 id="mission-heading">Our Mission</h2>

					<div className="home-mission__layout">
						<div className="home-mission__content">
							<p>
								The National Society of Black Engineers (NSBE) is a 501(c)(3)
								nonprofit organization that is owned and managed by its
								members. With more than 30,000 members around the world, NSBE
								is one of the largest student-governed organizations based in
								the United States.
								<br />
								<br />
								NSBE's mission is "to increase the number of culturally
								responsible Black engineers who excel academically, succeed
								professionally, and positively impact the community."
							</p>

							<Link to="/vision" className="button home-mission__button">
								Learn More About Our Vision
							</Link>
						</div>

						<div className="home-mission__image-wrapper">
							<img
								src={eboard}
								alt="CSUN NSBE executive board"
								className="home-mission__image"
							/>
						</div>
					</div>
				</section>

				{/* Primary Calls to Action */}
				<section
					className="home-involvement"
					aria-labelledby="get-involved-heading"
				>
					<div className="home-involvement__intro">
						<p className="home-involvement__eyebrow">Get Involved</p>

						<h2 id="get-involved-heading">
							Be Part of the CSUN NSBE Community
						</h2>

						<p>
							Whether you're a student looking for community and professional
							growth or an organization interested in supporting Black
							engineers, there is a place for you to get involved.
						</p>
					</div>

					<div className="home-involvement__grid">
						<article className="home-action-card">
							<i
								className="fas fa-users home-action-card__icon"
								aria-hidden="true"
							></i>

							<h3>Join CSUN NSBE</h3>

							<p>
								Connect with fellow students, build professional skills, attend
								chapter events, and become part of a community committed to
								academic and professional success.
							</p>

							<Link to="/join" className="button home-action-card__button">
								Explore Membership
							</Link>
						</article>

						<article className="home-action-card">
							<i
								className="fas fa-handshake home-action-card__icon"
								aria-hidden="true"
							></i>

							<h3>Partner With CSUN NSBE</h3>

							<p>
								Help support professional development, conferences, STEM
								outreach, academic programming, and opportunities for CSUN
								NSBE members.
							</p>

							<Link
								to="/sponsorship"
								className="button home-action-card__button"
							>
								Explore Sponsorship
							</Link>
						</article>
					</div>
				</section>

				<div className="mini-posts"></div>
			</div>
		</div>
	);
}

export default Home;


