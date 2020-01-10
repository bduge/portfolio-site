import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Experience from "./Experience";

const experiences = [
	{
		company: "Youreka Canada",
		date: "November 2019 - Present",
		logo: "images/youreka.png",
		role: "Software Developer",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod sequi hic enim tempore facilis at, amet rem dolore vitae cupiditate ullam eius ab eligendi odio ratione non exercitationem rerum."
	},
	{
		company: "Connected",
		date: "May 2019 - August 2019",
		logo: "images/connected.png",
		role: "QA Automation Developer Intern",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod sequi hic enim tempore facilis at, amet rem dolore vitae cupiditate ullam eius ab eligendi odio ratione non exercitationem rerum."
	},
	{
		company: "University of Waterloo Robotics Club",
		date: "October 2018 - April 2019",
		logo: "images/uw_robotics.png",
		role: "Software Developer",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod sequi hic enim tempore facilis at, amet rem dolore vitae cupiditate ullam eius ab eligendi odio ratione non exercitationem rerum."
	}
];

function App() {
	return (
		<div>
			<Navbar />

			<Header />
			<div className="container">
				<Experience experiences={experiences} />
			</div>
		</div>
	);
}

export default App;
