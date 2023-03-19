interface TextAreaProps {
	textarea: {
		name: string;
		placeholder: string;
		value: string;
		onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
		onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
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
