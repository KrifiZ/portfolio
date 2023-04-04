const ProjectOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed top-1/2 left-1/2 z-30 h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2 overflow-x-hidden rounded-lg bg-slate-800 drop-shadow-2xl ${
				overlayClass ? "" : "bg-opacity-50 backdrop-blur-md"
			}`}
		>
			<div className="flex h-full flex-col p-4">{children}</div>
		</div>
	);
};

export { ProjectOverlay };
