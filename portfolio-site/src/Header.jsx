import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div id="header" className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-3">
							<img
								className="img-fluid headshot my-3 py-1"
								src="/images/headshot.jpg"
								alt="Headshot"
							></img>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<h1>Bill DuGe</h1>
					</div>
					<div className="row d-flex justify-content-center my-2">
						<a href="https://github.com/bduge/" className="mx-2">
							<i className="fab fa-github highlight"></i>
						</a>
						<a href="https://www.linkedin.com/in/bill-duge/" className="mx-2">
							<i className="fab fa-linkedin highlight"></i>
						</a>
						<a href="mailto:billduge11@gmail.com" className="mx-2">
							<i className="fas fa-envelope highlight"></i>{" "}
						</a>
					</div>
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-md-9">
							<p>
								Nice to meet you and thanks for visiting my website! My name is
								Bill and I'm a software developer. I am currently a co-op
								computer science student at the University of Waterloo in
								Canada, but I lived in Edmonton, Canada for most of my life.
							</p>
							<p>
								I am currently seeking a 4 month internship for Summer 2020.
								Scroll down to check out some of my past work experiences and
								projects below. If you are interested in working with me or just
								want to chat, feel free to send me an email or a message on
								LinkedIn.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
