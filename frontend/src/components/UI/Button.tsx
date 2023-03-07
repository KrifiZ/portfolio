import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	size: string;
	to: string;
}

const Button = (props: ButtonProps) => {
	const { text, size, to } = props;

	return (
		// TODO add hover animation
		<Link
			className={`flex items-center justify-center rounded-xl bg-blue-500 p-2 text-white hover:bg-blue-400  hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ${size}`}
			to={to}
		>
			{text}
		</Link>
	);
};

export { Button };
