import { useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import { HamburgerButton } from "../Hamburger/HamburgerButton";
import { HamburgerMenu } from "../Hamburger/HamburgerMenu";
import { Button } from "../UI/Button";
import { motion } from "framer-motion";

const NavBar = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
	const [isOpen, setIsOpen] = useState(false);

	const showMenuHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className="absolute z-10 mt-2 w-screen ">
			<div
				className={`flex h-full items-center ${
					isTabletOrMobile ? "mx-2" : "mx-12"
				} justify-between `}
			>
				<NavLink className=" font-lato text-3xl  text-white " to="/">
					Michael Müller
				</NavLink>

				{isTabletOrMobile ? (
					<HamburgerButton icon="bg-hamburger  " showMenu={showMenuHandler} />
				) : (
					<div className=" flex w-96 items-center justify-between ">
						<div className="flex w-40 justify-between">
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { x: "50px" },
									visible: { x: 0 },
								}}
								transition={{ ease: "easeOut", duration: 0.8 }}
							>
								<NavLink className="text-xl text-white	" to="/about">
									About
								</NavLink>
							</motion.div>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { x: "50px" },
									visible: { x: 0 },
								}}
								transition={{ ease: "easeOut", duration: 1.0 }}
							>
								<a
									className="text-xl text-white	"
									href="https://github.com/KrifiZ"
									target="_blank"
								>
									Github
								</a>
							</motion.div>
						</div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { x: "40px" },
								visible: { x: 0 },
							}}
							transition={{ ease: "easeOut", duration: 1.2 }}
						>
							<Button to="/contact" text="Contact Me" size="h-8 w-40" />
						</motion.div>
					</div>
				)}
			</div>
			{isOpen ? <HamburgerMenu onHide={showMenuHandler} /> : ""}
		</div>
	);
};

export { NavBar };
