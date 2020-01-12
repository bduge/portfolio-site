import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div className="row d-flex my-3">
				<div className="col-3">
					<i class={this.props.icon}></i>
				</div>
				<div className="col-9">{this.props.name}</div>
			</div>
		);
	}
}

export default Skill;
