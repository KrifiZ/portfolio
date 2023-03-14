interface InputProps {
	input: {
		id: string;
		type: string;
		placeholder: string;
	};
	label: string;
}

const Input = (props: InputProps) => {
	return (
		<>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input className="h-8 w-full rounded-sm bg-blue-50" {...props.input} />
		</>
	);
};

export { Input };
