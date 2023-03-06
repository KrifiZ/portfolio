import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../Modals/Modal";
import { HamburgerButton } from "./HamburgerButton";

const HamburgerMenu: React.FC<{ onHide: () => void }> = ({ onHide }) => {
	const [isCustomClass, setIsCustomClass] = useState<boolean>(false);

	const hideOverlay = () => {
		setIsCustomClass(true);
		setTimeout(() => {
			setIsCustomClass(false);
			onHide();
		}, 295);
	};

	return (
		<Modal onHide={hideOverlay} isOverlay={isCustomClass}>
			<div className=" flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<HamburgerButton icon="bg-close" showMenu={hideOverlay} />
					<Link className="p-5 text-3xl text-white " to="/about">
						About
					</Link>
					<Link className="p-5 text-3xl text-white" to="/projects">
						Projects
					</Link>
					<Link className="p-5 text-3xl text-white" to="/contact">
						Contact
					</Link>
				</div>
			</div>
		</Modal>
	);
};

export { HamburgerMenu };
