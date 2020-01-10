import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<h2>Bill DuGe</h2>
					</a>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<button className="btn btn-primary">Hello</button>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
