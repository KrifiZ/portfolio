interface Props {
	text: string;
	size: string;
	redirectTo?: string;
}

const OpenTabButton = (props: Props) => {
	const { text, size, redirectTo } = props;
	const disabled = typeof redirectTo === "undefined" || redirectTo.length === 0;

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (disabled) {
			event.preventDefault();
		}
	};

	return (
		<a
			className={` flex w-full items-center justify-center rounded-xl ${
				disabled
					? "bg-gray-500 text-white hover:bg-gray-400"
					: "bg-blue-500 text-white hover:bg-blue-400  hover:transition  hover:delay-150 hover:duration-300 hover:ease-in-out"
			} p-2 md:w-1/2 ${size}`}
			href={redirectTo}
			onClick={handleClick}
		>
			{text}
		</a>
	);
};

export { OpenTabButton };
