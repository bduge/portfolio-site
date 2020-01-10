import React, { Component } from "react";

class Project extends Component {
	render() {
		return (
			<div
				key={this.props.name}
				className="row d-flex justify-content-between my-5"
			>
				<div className="col-7">
					<h4>{this.props.name}</h4>
					<h6 className="float-right">{this.props.technologies}</h6>
					<h5>{this.props.app_type}</h5>
					<p>{this.props.description}</p>
				</div>
				<div className="col-">
					<img
						className="img-fluid"
						src={this.props.picture}
						alt={this.props.name}
					/>
				</div>
			</div>
		);
	}
}

export default Project;
