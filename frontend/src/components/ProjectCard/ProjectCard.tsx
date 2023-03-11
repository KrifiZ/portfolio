import { Button } from "../UI/Button";

interface ProjectCardProps {
	project: {
		title: string;
		description: string;
	};
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className="m-2 flex h-64 w-64 items-center justify-center  rounded-3xl bg-blue-500 bg-black-pattern bg-repeat">
			<div className="flex h-56 w-56 flex-col items-center justify-between	 overflow-hidden rounded-3xl bg-stone-800">
				<h2 className="m-4  text-2xl uppercase text-white">{project.title}</h2>
				<p className="text-center  text-xs uppercase  text-white">
					{project.description}
				</p>
				<Button to="" text="Check out" size="w-40 h-8 m-4" />
			</div>
		</div>
	);
};
export { ProjectCard };
