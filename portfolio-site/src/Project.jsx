import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
	render() {
		return (
			<div
				key={this.props.name}
				className="row d-flex justify-content-between my-5"
			>
				<div className="col-7">
					<h3 className="my-4">{this.props.name}</h3>
					<h6 className="float-right italicise">{this.props.technologies}</h6>
					<h5 className="italicise">{this.props.app_type}</h5>
					<p>{this.props.description}</p>
				</div>
				<div className="col-4">
					<a href={this.props.github} target="_blank" rel="noreferrer noopener">
						<img
							className="img-fluid picture"
							src={this.props.picture}
							alt={this.props.name}
						/>
					</a>
				</div>
			</div>
		);
	}
}

export default Project;
