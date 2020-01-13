import React, { Component } from "react";
import "./Experience.css";

class Experience extends Component {
	render() {
		const description = this.props.description;
		const bulletPoints = description.map(bullet => {
			return <p key={bullet}>• {bullet}</p>;
		});

		return (
			<div
				key={this.props.company}
				className="row d-flex justify-content-between my-5"
			>
				<div className="col-4">
					<img
						className="img-fluid"
						src={this.props.logo}
						alt={this.props.company}
					/>
				</div>
				<div className="col-7">
					<div className="row d-flex justify-content-between align-items-end">
						<h4>{this.props.company}</h4>
						<h6 className="float-right">{this.props.location}</h6>
					</div>
					<div className="row d-flex justify-content-between align-items-end">
						<h5>{this.props.role}</h5>
						<h6 className="float-right">{this.props.date}</h6>
					</div>
					<div className="job-description">{bulletPoints}</div>
				</div>
			</div>
		);
	}
}

export default Experience;
