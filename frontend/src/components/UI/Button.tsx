interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	size: string;
}

const Button = (props: ButtonProps) => {
	const { text, size, ...rest } = props;

	return (
		// TODO add hover animation
		<button
			className={`flex items-center justify-center rounded-xl bg-blue-500 p-2 text-white hover:bg-blue-400  hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ${size}`}
			{...rest}
		>
			{text}
		</button>
	);
};

export { Button };
