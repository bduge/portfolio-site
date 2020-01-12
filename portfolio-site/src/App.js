import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const experiences = [
	{
		company: "Youreka Canada",
		location: "Remote",
		date: "November 2019 - Present",
		logo: "images/youreka.png",
		role: "Software Developer",
		description: [
			"Developed full stack web application using Django to organize the submission and evaluation of applicants, greatly increasing efficiency of application processing",
			"Acting as technical consultant in meetings with organization executives to identify target areas which can be improved through software solutions"
		]
	},
	{
		company: "Connected",
		location: "Toronto, Ontario",
		date: "May 2019 - August 2019",
		logo: "images/connected.png",
		role: "QA Automation Developer Intern",
		description: [
			"Spearheaded creation of command line framework to automate submissions to the cloud platform TestRail, decreasing time for smoke and regression test suites by 40%",
			"Developed electron application to automate voice testing Alexa skills, allowing developers to easily create test cases and visualize conversations with Alexa",
			"Performed testing and on mobile application for multi-billionaire music speaker company"
		]
	},
	{
		company: "University of Waterloo Robotics Club",
		location: "Waterloo, Ontario",
		date: "October 2018 - April 2019",
		logo: "images/uw_robotics.png",
		role: "Software Developer",
		description: [
			"Developed software for a Mars rover to compete in the University Rover Challenge",
			"Created GUI for the rover's control interface that displays real time input from an XBOX 360 controller using ROS and C++, providing a seamless interface for drivers"
		]
	}
];

const projects = [
	{
		name: "Stylist.ai",
		app_type: "Android Application",
		github: "",
		picture: "images/*.png",
		technologies: "Django, ...",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod sequi hic enim tempore facilis at, amet rem dolore vitae cupiditate ullam eius ab eligendi odio ratione non exercitationem rerum."
	},
	{
		name: "Study Buddy",
		app_type: "Mobile web Application",
		github: "",
		picture: "images/*.png",
		technologies: "Express, ...",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod sequi hic enim tempore facilis at, amet rem dolore vitae cupiditate ullam eius ab eligendi odio ratione non exercitationem rerum."
	}
];

const skills = [
	{
		name: "React",
		type: "technology",
		level: "proficient",
		icon: "fab fa-react"
	},
	{
		name: "Python",
		type: "language",
		level: "experienced",
		icon: "fab fa-python"
	},
	{
		name: "HTML",
		type: "language",
		level: "experienced",
		icon: "fab fa-html5"
	},
	{
		name: "NodeJS",
		type: "technology",
		level: "experienced",
		icon: "fab fa-node"
	}
];

function App() {
	return (
		<div>
			<Navbar />

			<Header />
			<div className="container">
				<Experiences experiences={experiences} />
				<Projects projects={projects} />
				<Skills skills={skills} />
				<About />
			</div>
		</div>
	);
}

export default App;
