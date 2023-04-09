const NavbarOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed right-0 z-30 h-full w-2/4 ${
				overlayClass ? "animate-slideInRight" : "animate-slideInLeft"
			} bg-slate-900`}
		>
			{children}
		</div>
	);
};

export { NavbarOverlay };
