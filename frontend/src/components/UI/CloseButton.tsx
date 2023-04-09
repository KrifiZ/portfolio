interface CloseButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	className?: string;
}

const CloseButton = ({ onClick, className }: CloseButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`h-8 w-8 ${className} rounded-xl bg-slate-500 bg-contain bg-center bg-no-repeat  text-slate-200`}
		>
			X
		</button>
	);
};

export { CloseButton };
