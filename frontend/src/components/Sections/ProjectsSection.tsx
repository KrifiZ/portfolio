import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../UI/SectionTitle";
import { projects, Project } from "../../data/projectData";
import { motion } from "framer-motion";

const ProjectsSection = () => (
	<>
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ ease: "easeOut", duration: 0.8 }}
		>
			<SectionTitle title="PROJECTS" />
		</motion.div>

		<div className="flex  flex-wrap justify-center ">
			{projects.map((project: Project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	</>
);

export { ProjectsSection };
