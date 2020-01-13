import React, { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
	render() {
		const experiences = this.props.experiences;

		const rows = experiences.map(experience => {
			return (
				<Experience
					key={experience.company}
					company={experience.company}
					location={experience.location}
					date={experience.date}
					logo={experience.logo}
					role={experience.role}
					description={experience.description}
				/>
			);
		});
		return (
			<div id="experience">
				<h2 className="highlight">Experience</h2>
				<div>{rows}</div>
			</div>
		);
	}
}

export default Experiences;
