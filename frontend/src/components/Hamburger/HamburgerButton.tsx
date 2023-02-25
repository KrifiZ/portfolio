const HamburgerButton: React.FC<{ icon: string; showMenu: () => void }> = ({
	icon,
	showMenu,
}) => {
	return (
		<button
			onClick={showMenu}
			className={` h-8 w-8 bg-[url('${icon}')] bg-contain bg-center bg-no-repeat `}
		></button>
	);
};

export { HamburgerButton };
