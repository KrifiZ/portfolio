import { useState } from "react";
import { Modal } from "../Modals/Modal";

interface ImageProps {
	src: string;
	alt: string;
}

const Image = ({ src, alt, ...props }: ImageProps) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<img
				onClick={openModal}
				className="h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 "
				alt={alt}
				src={src}
				loading="lazy"
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
						className="aspect-w-1 aspect-h-1 h-auto max-h-[95vh] w-auto max-w-[95vw] rounded-xl border-2 border-gray-400 object-cover shadow-lg"
						onClick={openModal}
						alt={alt}
						src={src}
						loading="lazy"
					></img>
				</Modal>
			)}
		</>
	);
};

export { Image };
