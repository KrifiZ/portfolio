import { useState } from "react";
import { Modal } from "../Modals/Modal";
import { ModalButton } from "../UI/ModalButton";
import { PatternCard } from "../UI/PatternCard";
import { Image } from "../UI/Image";
import { OpenTabButton } from "../UI/LinkButton";
import { ProjectModal } from "../Modals/ProjectModal";

interface ProjectCardProps {
	project: {
		title: string;
		description: string;
	};
}
const ProjectCard = ({ project }: ProjectCardProps) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen((prevState) => !prevState);
	};

	return (
		<PatternCard>
			<h2 className="m-4 text-2xl uppercase text-white">{project.title}</h2>
			<p className="text-center text-xs uppercase  text-white">
				{project.description}
			</p>
			<ModalButton onClick={openModal} text="Check out" size="w-40 h-8 m-4" />

			{modalIsOpen ? <ProjectModal openModal={openModal} /> : null}
		</PatternCard>
	);
};
export { ProjectCard };
