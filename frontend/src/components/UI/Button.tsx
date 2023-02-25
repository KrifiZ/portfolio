interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	size: string;
}

const Button = (props: ButtonProps) => {
	const { children, size, ...rest } = props;

	return (
		<button
			className={`flex items-center justify-center rounded-xl bg-blue-500 p-2 text-white ${size}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export { Button };
