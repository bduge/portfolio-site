import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top py-1">
				<div className="container-fluid">
					<a className="navbar-brand" href="#header">
						<h2 className="highlight"> &lt; Bill DuGe &gt;</h2>
					</a>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<a className="shortcut highlight" href="#experience">
							Experience
						</a>
						<a className="shortcut highlight" href="#projects">
							Projects
						</a>
						<a className="shortcut highlight" href="#skills">
							Skills
						</a>
						<a className="shortcut highlight" href="#about">
							About
						</a>
						<a
							className="shortcut highlight"
							href="resume/billduge-resume.pdf"
							target="_blank"
							rel="noreferrer noopener"
						>
							Resume
						</a>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
