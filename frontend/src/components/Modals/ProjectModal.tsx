import { Modal } from "./Modal";
import { Image } from "../UI/Image";
import { OpenTabButton } from "../UI/LinkButton";

interface ProjectModalProps {
	openModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ openModal }) => (
	<Modal onHide={openModal} isOpen={false} overlayType="project">
		<div className="flex flex-row justify-between">
			<h2 className="text-3xl text-white">Task Manager</h2>
			<button>X</button>
		</div>
		<h3 className="text-xl text-white">Gallery</h3>
		<div className="flex flex-row flex-wrap gap-1">
			<Image src="" alt={""} className={""} />
			<Image src="" alt={""} className={""} />
			<Image src="" alt={""} className={""} />
		</div>

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
		<div className="flex flex-col gap-2 md:flex-row">
			<OpenTabButton text={"dupa"} size={"h-12 w-12"} redirectTo={"dupa.mp4"} />
			<OpenTabButton text={"dupa"} size={"h-12 w-12"} redirectTo={"dupa.mp4"} />
		</div>
	</Modal>
);

export { ProjectModal };
