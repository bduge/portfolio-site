import React, { Component } from "react";
import Skill from "./Skill";
import "./Skill.css";

class Skills extends Component {
	renderSkills(skills) {
		return skills.map(skill => {
			return <Skill key={skill.name} icon={skill.icon} name={skill.name} />;
		});
	}

	render() {
		const skills = this.props.skills;

		const experiencedLanguages = skills.filter(
			skill => skill.type === "language" && skill.level === "experienced"
		);

		const proficientLanguages = skills.filter(
			skill => skill.type === "language" && skill.level === "proficient"
		);

		const experiencedTechnologies = skills.filter(
			skill => skill.type === "technology" && skill.level === "experienced"
		);

		const proficientTechnologies = skills.filter(
			skill => skill.type === "technology" && skill.level === "proficient"
		);

		return (
			<div id="skills">
				<div className="row my-2">
					<h2 className="highlight">Skills</h2>
				</div>
				<div className="row">
					<div className="col-6">
						<h3 className="my-4">Lanugages</h3>
						<div className="row">
							<div className="col-6">
								<h5>Experienced</h5>
								<div>{this.renderSkills(experiencedLanguages)}</div>
							</div>
							<div className="col-6">
								<h5>Proficient</h5>
								<div>{this.renderSkills(proficientLanguages)}</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<h3 className="my-4">Technologies</h3>
						<div className="row">
							<div className="col-6">
								<h5>Experienced</h5>
								<div>{this.renderSkills(experiencedTechnologies)}</div>
							</div>
							<div className="col-6">
								<h5>Proficient</h5>
								<div>{this.renderSkills(proficientTechnologies)}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
