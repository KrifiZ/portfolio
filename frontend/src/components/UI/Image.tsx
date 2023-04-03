import { useState } from "react";
import { Modal } from "../Modals/Modal";

interface ImageProps {
	src: string;
	alt: string;
	className: string;
}

const Image = ({ src, alt, className, ...props }: ImageProps) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<img
				onClick={openModal}
				className="h-24 w-24"
				alt=""
				src="../src/assets/images/pudzian.jpg"
			></img>
			{modalIsOpen && (
				<Modal
					zIndex={40}
					onHide={openModal}
					isOpen={false}
					overlayType="image"
					blurred={true}
					disabledScroll={false}
				>
					<img
						className="h-full w-full "
						onClick={openModal}
						alt=""
						src="../src/assets/images/pudzian.jpg"
					></img>
				</Modal>
			)}
		</>
	);
};

export { Image };
