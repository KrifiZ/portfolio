interface ButtonProps {
	to: string;
	text: string;
	size: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ to, text, size }) => {
	return (
		<button
			type="submit"
			className={`${size} flex items-center  justify-center rounded-sm bg-blue-500 p-2 text-2xl text-white  hover:bg-blue-400 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out`}
		>
			{text}
		</button>
	);
};
export { SubmitButton };
