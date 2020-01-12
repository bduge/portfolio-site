import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#header">
						<h2> &lt; Bill DuGe &gt;</h2>
					</a>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<a class="shortcut" href="#experience">
							Experience
						</a>
						<a class="shortcut" href="#projects">
							Projects
						</a>
						<a class="shortcut" href="#skills">
							Skills
						</a>
						<a class="shortcut" href="#about">
							About
						</a>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
