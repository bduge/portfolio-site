import React, { Component } from "react";
import "./Skill.css";

class Skill extends Component {
	render() {
		return (
			<div className="row d-flex justify-content-start my-3">
				<div className="col-3 icon">
					<i class={this.props.icon}></i>
				</div>
				<div className="col-9 d-flex align-items-center">{this.props.name}</div>
			</div>
		);
	}
}

export default Skill;
