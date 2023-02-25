import { Modal } from "../Modals/Modal";
import { HamburgerButton } from "./HamburgerButton";

const HamburgerMenu: React.FC<{ onHide: () => void }> = ({ onHide }) => {
	return (
		<Modal onHide={onHide}>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<HamburgerButton icon="./assets/x.svg" showMenu={onHide} />
					<a className="text-3xl text-white ease-in-out" href="About">
						About
					</a>
					<a className="text-3xl text-white" href="Projects">
						Projects
					</a>
					<a className="text-3xl text-white" href="Contact">
						Contact
					</a>
				</div>
			</div>
		</Modal>
	);
};
export { HamburgerMenu };
