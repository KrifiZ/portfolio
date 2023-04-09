interface ModalButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	size: string;
	onClick: () => void;
}

const ModalButton = (props: ModalButtonProps) => {
	const { text, size, onClick } = props;

	return (
		<button
			className={`flex items-center justify-center rounded-xl bg-blue-500 p-2 text-white hover:bg-blue-400  hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ${size}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export { ModalButton };
