import homePageMobileImage from "../assets/images/1.webp";
import formModalImage from "../assets/images/2.webp";
import homePageDesktopImage from "../assets/images/3.webp";

export type Project = {
	title: string;
	description: string;
	what_i_learned: string;
	tech_stack: string[];
	images?: { src: string; alt: string }[];
	links?: { source: string; live: string };
};

export const projects: Project[] = [
	{
		title: "Task Manager",
		description:
			"application allows users to create, edit, and delete tasks and mark tasks as completed.",
		what_i_learned:
			"I learned how to build a todo list using the MERN stack, which involved working with MongoDB, Express, React, and Node.js. Specifically, I gained experience using MongoDB for flexible and scalable data storage, Express for building web applications with features like routing and middleware, and TypeScript for adding type annotations and improving code maintainability. Through this project, I also gained familiarity with React for building user interfaces and Node.js for server-side development.",
		tech_stack: [
			"React",
			"Node.js",
			"Express.js",
			"Typescript",
			"MongoDB",
			"Docker",
		],
		images: [
			{
				src: homePageMobileImage,
				alt: "Home Page Mobile",
			},
			{
				src: formModalImage,
				alt: "Form Modal",
			},
			{
				src: homePageDesktopImage,
				alt: "Home Page Desktop",
			},
		],
		links: {
			source: "https://github.com/KrifiZ/todo",
			live: "",
		},
	},
	{
		title: "Portfolio",
		description:
			"project includes samples of work completed, case studies, and any relevant documentation that demonstrates my skills and expertise.",
		what_i_learned:
			"I have experience working with Tailwind CSS, TypeScript, and React. In particular, I learned how to use Tailwind CSS to create responsive and visually appealing user interfaces. I also gained experience with TypeScript for adding type safety to my code and improving code maintainability. Furthermore, I developed my skills in React for building dynamic and interactive user interfaces. Through these technologies, I have been able to create web applications that are both functional and aesthetically pleasing. I am excited to continue exploring these technologies and using them to create innovative web applications.",
		tech_stack: ["React", "Typescript", "Tailwind CSS"],
		links: {
			source: "https://github.com/KrifiZ/portfolio",
			live: "",
		},
	},
	{
		title: "e-commerce",
		description:
			"It allows customers to browse and purchase products or services from the comfort of their homes.",
		what_i_learned: "SOON",
		tech_stack: ["..."],
	},
];
