import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div id="about">
				<h2 className="highlight my-4">About Me</h2>
				<p>
					Here are the things about me unrelated to work. I'm very passionate
					about coding but there's a lot of other things I like to do with my
					free time. Feel free to read more if you're interested!
				</p>
				<div className="row d-flex justify-content-between my-4">
					<div className="col-10 col-md-4 px-4">
						<div className="jumbotron-fluid">
							<h4>Being Active</h4>
							<img
								className="img-fluid picture my-3"
								src="/images/soccer.jpg"
								alt="soccer"
							></img>
							<p>
								I've loved playing sports all my life. It's always been a great
								way to make new friends and stay healthy. I played club soccer
								and badminton and served as the captain of the soccer and
								badminton teams at my high school. In university now that I am
								no longer playing organized sports, but I still enjoy going on
								runs, playing pickup basketball, and working out.
							</p>
						</div>
					</div>
					<div className="col-10 col-md-4 px-4">
						<div className="jumbotron-fluid">
							<h4>Speech + Debate</h4>
							<img
								className="img-fluid picture my-3"
								src="/images/debate.jpg"
								alt="debate"
							></img>
							<p>
								I initially joined debate club at my middle school as a way to
								help improve my public speaking but I quickly discovered a very
								fun, educational, and rewarding extracirricular. I participated
								as a member on my high school's speech and debate team and
								returned to my middle school as a volunteer coach. I enjoyed
								participating various events including tournaments, HSMUN, and
								Mock Trials.
							</p>
						</div>
					</div>
					<div className="col-10 col-md-4 px-4">
						<div className="jumbotron-fluid">
							<h4>Travel</h4>
							<img
								className="img-fluid picture my-3"
								src="/images/travel.jpeg"
								alt="soccer"
							></img>
							<p>
								I find travelling to be a great way to spend time with my family
								since I'm away studying in University. My favourite experiences
								are discovering beautiful places in the world. Everyone
								(including me) needs breaks and sometimes taking a step away
								from work to somewhere new is the best way to destress and
								recharge.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
