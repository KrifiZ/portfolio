import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../UI/SectionTitle";

const testProject = {
	title: "Task Manager",
	status: "In Progress",
	description:
		"application allows users to create, edit, and delete tasks and mark tasks as completed.",
	startDate: "01/01/2021",
	endDate: "01/01/2022",
	budget: "$100,000",
};

const ProjectsSection = () => {
	return (
		<>
			<SectionTitle title="PROJECTS" />
			<div className="flex  flex-wrap justify-center ">
				<ProjectCard project={testProject} />
				<ProjectCard project={testProject} />
				<ProjectCard project={testProject} />
			</div>
		</>
	);
};

export { ProjectsSection };
