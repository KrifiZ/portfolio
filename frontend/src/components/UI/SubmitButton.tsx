interface ButtonProps {
	to: string;
	text: string;
	size: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ to, text, size }) => {
	return (
		<button
			className={`${size} flex items-center justify-center rounded-xl bg-blue-500 p-2 text-white  hover:bg-blue-400 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out`}
		>
			{text}
		</button>
	);
};
export { SubmitButton };
