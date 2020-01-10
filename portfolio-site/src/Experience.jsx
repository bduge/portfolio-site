import React, { Component } from "react";

class Experience extends Component {
	render() {
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
					<h4>{this.props.company}</h4>
					<h6 className="float-right">{this.props.date}</h6>
					<h5>{this.props.role}</h5>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default Experience;
