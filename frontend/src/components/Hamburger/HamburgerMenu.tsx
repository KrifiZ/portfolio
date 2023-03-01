import { useState } from "react";
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
					<a className="p-5 text-3xl text-white " href="About">
						About
					</a>
					<a className="p-5 text-3xl text-white" href="Projects">
						Projects
					</a>
					<a className="p-5 text-3xl text-white" href="Contact">
						Contact
					</a>
				</div>
			</div>
		</Modal>
	);
};

export { HamburgerMenu };
