interface InputProps {
	input: {
		type: string;
		name: string;
		placeholder: string;
		value: string;
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
