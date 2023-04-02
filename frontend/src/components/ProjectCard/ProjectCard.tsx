import { useState } from "react";
import { Modal } from "../Modals/Modal";
import { ModalButton } from "../UI/ModalButton";
import { PatternCard } from "../UI/PatternCard";

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

			{modalIsOpen ? (
				<Modal onHide={openModal} isOverlay={true}>
					<div className="flex flex-row justify-between">
						<h2 className="text-3xl text-white">Task Manager</h2>
						<button>X</button>
					</div>
					<h3 className="text-xl	 text-white">Gallery</h3>
					<img alt="" src="../src/assets/images/pudzian.jpg"></img>
					<h4 className="text-xl	 text-white">Long story short</h4>
					<p className="text-lg text-white">
						An app that allows you to create, edit, delete and mark tasks as
						completed.
					</p>
					<h5 className="text-xl text-white">Tech stack</h5>

					<ul className="text-lg text-white">
						<li>React</li>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>Typescript</li>
						<li>MongoDB</li>
					</ul>
				</Modal>
			) : (
				""
			)}
		</PatternCard>
	);
};
export { ProjectCard };
