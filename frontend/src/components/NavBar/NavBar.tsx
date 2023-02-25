import { useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { HamburgerButton } from "../Hamburger/HamburgerButton";
import { HamburgerMenu } from "../Hamburger/HamburgerMenu";
import { Button } from "../UI/Button";

const NavBar = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
	const [isOpen, setIsOpen] = useState(false);

	const showMenuHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className=" flex justify-between">
			<h1 className="font-['Lato'] text-3xl text-white ">Michael Müller</h1>
			{isTabletOrMobile ? (
				<HamburgerButton
					icon="./assets/hamburger.svg"
					showMenu={showMenuHandler}
				/>
			) : (
				" "
			)}

			{isOpen ? <HamburgerMenu onHide={showMenuHandler} /> : ""}

			<MediaQuery query="(min-device-width: 1024px)">
				<div className=" flex w-96 items-center justify-between ">
					<div className="flex w-40 justify-between">
						<a className="text-xl text-white	" href="About">
							About
						</a>
						<a className="text-xl text-white" href="Projects">
							Projects
						</a>
					</div>

					<Button size="h-8 w-32">Contact Me</Button>
				</div>
			</MediaQuery>
		</div>
	);
};

export { NavBar };
