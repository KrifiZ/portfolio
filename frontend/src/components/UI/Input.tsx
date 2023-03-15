interface InputProps {
	input: {
		type: string;
		placeholder: string;
	};
}

const Input = (props: InputProps) => {
	return (
		<>
			<input
				className="my-1 h-10 w-full rounded-sm bg-blue-50 p-2 placeholder-gray-800"
				{...props.input}
			/>
		</>
	);
};

export { Input };
