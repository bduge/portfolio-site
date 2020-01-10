import React, { Component } from "react";

class Experience extends Component {
	experiences = this.props.experiences;

	rows = this.experiences.map(experience => {
		return (
			<div
				key={experience.company}
				className="row d-flex justify-content-between my-5"
			>
				<div className="col-4">
					<img
						className="img-fluid"
						src={experience.logo}
						alt={experience.company}
					/>
				</div>
				<div className="col-7">
					<h4>{experience.company}</h4>
					<h6 className="float-right">{experience.date}</h6>
					<h5>{experience.role}</h5>
					<p>{experience.description}</p>
				</div>
			</div>
		);
	});

	render() {
		return (
			<div id="experience">
				<h2>Experience</h2>
				<div>{this.rows}</div>
			</div>
		);
	}
}

export default Experience;
