import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
	render() {
		return (
			<div
				key={this.props.name}
				className="row d-flex justify-content-between my-4"
			>
				<div className="col-7">
					<h3>{this.props.name}</h3>
					<h6 className="float-right italicise">{this.props.technologies}</h6>
					<h5 className="italicise">{this.props.app_type}</h5>
					<p>{this.props.description}</p>
				</div>
				<div className="col-4">
					<img
						className="img-fluid project-img"
						src={this.props.picture}
						alt={this.props.name}
					/>
				</div>
			</div>
		);
	}
}

export default Project;
