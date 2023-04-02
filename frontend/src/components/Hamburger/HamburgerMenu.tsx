import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
		<Modal onHide={hideOverlay} isOverlay={isCustomClass} overlayType="navbar">
			<div className=" flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<HamburgerButton icon="bg-close" showMenu={hideOverlay} />
					<NavLink className="p-5 text-3xl text-white " to="/">
						Home
					</NavLink>
					<NavLink className="p-5 text-3xl text-white " to="/about">
						About
					</NavLink>
					<a
						className="p-5 text-3xl text-white"
						href="https://github.com/KrifiZ"
						target="_blank"
					>
						Github
					</a>
					<NavLink className="p-5 text-3xl text-white" to="/contact">
						Contact
					</NavLink>
				</div>
			</div>
		</Modal>
	);
};

export { HamburgerMenu };
