import { useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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
		<div className="  flex justify-between">
			<h1 className="font-lato text-3xl  text-white ">Michael Müller</h1>

			{isTabletOrMobile ? (
				<HamburgerButton icon="bg-hamburger" showMenu={showMenuHandler} />
			) : (
				<div className=" flex w-96 items-center justify-between ">
					<div className="flex w-40 justify-between">
						<Link className="text-xl text-white	" to="/about">
							About
						</Link>
						<Link className="text-xl text-white	" to="/projects">
							Projects
						</Link>
					</div>

					<Button text="Contact Me" size="h-8 w-40" />
				</div>
			)}

			{isOpen ? <HamburgerMenu onHide={showMenuHandler} /> : ""}
		</div>
	);
};

export { NavBar };
