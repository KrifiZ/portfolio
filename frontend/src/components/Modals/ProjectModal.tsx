import { Modal } from "./Modal";
import { Image } from "../UI/Image";
import { OpenTabButton } from "../UI/LinkButton";
import { Card } from "../UI/Card";
import { CloseButton } from "../UI/CloseButton";
import { Project } from "../../data/projectData";
interface ProjectModalProps {
	project: Project;
	openModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ openModal, project }) => (
	<Modal onHide={openModal} isOpen={false} overlayType="project">
		<div className="flex flex-row justify-between">
			<h2 className="text-3xl text-white">{project.title}</h2>
			<CloseButton onClick={openModal} />
		</div>
		<h3 className="my-2 text-xl text-white">Gallery</h3>
		<div className="flex flex-row flex-wrap gap-1">
			{project.images ? (
				project.images.map((img, index: number) => (
					<Image key={index} src={img.src} alt={img.alt} />
				))
			) : (
				<p className="text-white">No images</p>
			)}
		</div>

		<h4 className="my-2	text-xl text-white">What did I learn?</h4>
		<p className="text-lg text-white">{project.what_i_learned}</p>
		<h5 className="my-2 text-xl text-white">Tech stack</h5>

		<ul className="my-2 grid list-none auto-rows-[1fr] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] place-items-center justify-items-stretch	 gap-1 text-lg text-white">
			{project.tech_stack.map((tech: string, index: number) => (
				<Card key={index} className="p-8">
					{tech}
				</Card>
			))}
		</ul>
		<div className="mb-2 flex flex-grow flex-col items-end justify-end gap-2 md:flex-row">
			<OpenTabButton
				text={"source"}
				size={"h-12 w-12"}
				redirectTo={project.links?.source}
			/>
			<OpenTabButton
				text={"live"}
				size={"h-12 w-12"}
				redirectTo={project.links?.live}
			/>
		</div>
	</Modal>
);

export { ProjectModal };
