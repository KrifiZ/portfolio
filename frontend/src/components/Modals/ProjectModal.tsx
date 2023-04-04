import { Modal } from "./Modal";
import { Image } from "../UI/Image";
import { OpenTabButton } from "../UI/LinkButton";
import { Card } from "../UI/Card";

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

		<ul className="grid list-none auto-rows-[1fr] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] place-items-center justify-items-stretch	 gap-1 text-lg text-white">
			<Card className="p-8">
				<span>React</span>
			</Card>
			<Card className="p-8">
				<span>Node.js</span>
			</Card>
			<Card className="p-8">
				<span>Express.js</span>
			</Card>
			<Card className="p-8">
				<span>Typescript</span>
			</Card>
			<Card className="p-8">
				<span>MongoDB</span>
			</Card>
		</ul>
		<div className="flex flex-col gap-2 md:flex-row">
			<OpenTabButton text={"dupa"} size={"h-12 w-12"} redirectTo={"dupa.mp4"} />
			<OpenTabButton text={"dupa"} size={"h-12 w-12"} redirectTo={"dupa.mp4"} />
		</div>
	</Modal>
);

export { ProjectModal };
