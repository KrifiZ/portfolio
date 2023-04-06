import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../UI/SectionTitle";
import { projects, Project } from "../../data/projectData";

const ProjectsSection = () => {
	return (
		<>
			<SectionTitle title="PROJECTS" />
			<div className="flex  flex-wrap justify-center ">
				{projects.map((project: Project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</>
	);
};

export { ProjectsSection };
