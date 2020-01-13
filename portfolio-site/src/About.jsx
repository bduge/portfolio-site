import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div>
				<h2 className="highlight">About Me</h2>
				<p>
					Here are the things about me unrelated to work. I'm very passionate
					about coding but there's a lot of other things I like to do with my
					free time. Feel free to read more if you're interested!
				</p>
				<div className="row d-flex justify-content-between">
					<div className="col-10 col-md-3">
						<div className="jumbotron-fluid">
							<h4>Being Active</h4>
							<img
								className="img-fluid"
								src="/images/soccer.jpg"
								alt="soccer"
							></img>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								laoreet volutpat neque, vel mollis ex. Donec fringilla porttitor
								porta. Nulla sit amet odio varius, laoreet nisl quis, congue
								felis. Sed pulvinar elit eu ipsum varius, ac vestibulum urna
								tempor. Donec dictum euismod placerat. In lacus orci, cursus
								condimentum eros vestibulum.
							</p>
						</div>
					</div>
					<div className="col-10 col-md-3">
						<div className="jumbotron-fluid">
							<h4>Speech + Debate</h4>
							<img
								className="img-fluid"
								src="/images/debate.jpg"
								alt="debate"
							></img>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								laoreet volutpat neque, vel mollis ex. Donec fringilla porttitor
								porta. Nulla sit amet odio varius, laoreet nisl quis, congue
								felis. Sed pulvinar elit eu ipsum varius, ac vestibulum urna
								tempor. Donec dictum euismod placerat. In lacus orci, cursus
								condimentum eros vestibulum.
							</p>
						</div>
					</div>
					<div className="col-10 col-md-3">
						<div className="jumbotron-fluid">
							<h4>Piano</h4>
							<img
								className="img-fluid"
								src="/images/soccer.jpg"
								alt="soccer"
							></img>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								laoreet volutpat neque, vel mollis ex. Donec fringilla porttitor
								porta. Nulla sit amet odio varius, laoreet nisl quis, congue
								felis. Sed pulvinar elit eu ipsum varius, ac vestibulum urna
								tempor. Donec dictum euismod placerat. In lacus orci, cursus
								condimentum eros vestibulum.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
