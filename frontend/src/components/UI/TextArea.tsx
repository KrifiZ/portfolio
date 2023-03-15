interface TextAreaProps {
	textarea: {
		placeholder: string;
	};
}

const TextArea = (props: TextAreaProps) => {
	return (
		<>
			<textarea
				className="my-1 h-32 w-full rounded-sm bg-blue-50 p-2 placeholder-gray-800"
				{...props.textarea}
			/>
		</>
	);
};

export { TextArea };
