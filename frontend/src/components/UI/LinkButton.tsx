interface Props {
	text: string;
	size: string;
	redirectTo: string;
}

const OpenTabButton = (props: Props) => {
	const { text, size, redirectTo } = props;

	return (
		<a
			className={` flex w-full items-center justify-center rounded-xl bg-blue-500 p-2 text-white hover:bg-blue-400 hover:transition  hover:delay-150 hover:duration-300 hover:ease-in-out md:w-1/2 ${size}`}
			href={redirectTo}
		>
			{text}
		</a>
	);
};

export { OpenTabButton };
