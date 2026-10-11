import React, { useState } from "react";

import "../assets/css/main.css";
import "./Team.css";

import teamData from "../data/teamData";

const { executiveBoards } = teamData;

function OfficerCard({ officer }) {
	return (
		<article className="officer-card">
			{officer.image ? (
				<img
					className="officer-image"
					src={officer.image}
					alt={officer.name !== "Name pending" ? officer.name : ""}
					loading="lazy"
				/>
			) : (
				<div
					className="officer-image officer-image-placeholder"
					aria-hidden="true"
				>
					<span>
						{officer.name && officer.name !== "Name pending"
							? officer.name.charAt(0)
							: "?"}
					</span>
				</div>
			)}

			<div className="officer-info">
				<h3>{officer.name}</h3>

				{officer.position && <p>{officer.position}</p>}
			</div>
		</article>
	);
}

function Team() {
	const [selectedYear, setSelectedYear] = useState(
		executiveBoards[0]?.id ?? ""
	);

	const selectedBoard =
		executiveBoards.find((board) => board.id === selectedYear) ??
		executiveBoards[0];

	return (
		<div className="team-page">
			<main className="team-main">
				<section className="team-heading-section team-container">
					<p className="team-eyebrow">CSUN NSBE</p>

					<h1>Meet Our Executive Board</h1>

					<p className="team-heading-description">
						Meet the students helping lead the CSUN chapter of the National
						Society of Black Engineers.
					</p>
				</section>

				<section className="board-selector-section team-container">
					<label htmlFor="board-year">Board Year</label>

					<select
						id="board-year"
						value={selectedYear}
						onChange={(event) => setSelectedYear(event.target.value)}
					>
						{executiveBoards.map((board) => (
							<option key={board.id} value={board.id}>
								{board.label}
							</option>
						))}
					</select>
				</section>

				{selectedBoard && (
					<>
						{selectedBoard.groupPhoto && (
							<section
								className="team-photo-section team-container"
								aria-label={`${selectedBoard.label} CSUN NSBE executive board`}
							>
								<img
									className="team-group-photo"
									src={selectedBoard.groupPhoto}
									alt={`${selectedBoard.label} CSUN NSBE executive board`}
								/>
							</section>
						)}

						<section className="executive-board-section team-container">
							<div className="executive-board-heading">
								<p>Chapter Executive Board</p>
								<h2>{selectedBoard.label}</h2>
							</div>

							{selectedBoard.members.length > 0 ? (
								<div className="officer-grid">
									{selectedBoard.members.map((officer) => (
										<OfficerCard key={officer.id} officer={officer} />
									))}
								</div>
							) : (
								<p className="no-board-members">
									Executive board information for this year will be added soon.
								</p>
							)}
						</section>
					</>
				)}
			</main>
		</div>
	);
}

export default Team;