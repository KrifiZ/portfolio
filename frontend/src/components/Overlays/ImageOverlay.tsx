const ImageOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed top-1/2 left-1/2 z-50  -translate-x-1/2 -translate-y-1/2   `}
		>
			<div className="overflow-hidden  rounded-lg outline-dashed">
				{children}
			</div>
		</div>
	);
};

export { ImageOverlay };
