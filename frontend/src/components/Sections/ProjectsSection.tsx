import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../UI/SectionTitle";

const projects = [
	{
		title: "Task Manager",
		description:
			"application allows users to create, edit, and delete tasks and mark tasks as completed.",
	},
	{
		title: "Portfolio",
		description:
			"project includes samples of work completed, case studies, and any relevant documentation that demonstrates my skills and expertise.",
	},
	{
		title: "e-commerce",
		description:
			"It allows customers to browse and purchase products or services from the comfort of their homes.",
	},
];

const ProjectsSection = () => {
	return (
		<>
			<SectionTitle title="PROJECTS" />
			<div className="flex  flex-wrap justify-center ">
				{projects.map(
					(project: { title: string; description: string }, index) => (
						<ProjectCard key={index} project={project} />
					)
				)}
			</div>
		</>
	);
};

export { ProjectsSection };
