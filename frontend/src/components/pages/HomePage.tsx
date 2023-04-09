import { useMediaQuery } from "react-responsive";
import { Hero } from "../Hero/Hero";
import { ProjectsSection } from "../Sections/ProjectsSection";
import { Button } from "../UI/Button";
import { motion } from "framer-motion";
import { useRef } from "react";

const HomePage = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
	return (
		<>
			<Hero>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{ ease: "easeOut", duration: 0.8 }}
				>
					<h2 className="font-lato text-2xl font-bold text-white">
						Hello, <span className="text-blue-500">I'm</span>
					</h2>
					<h2 className="font-lato text-5xl font-bold uppercase text-white lg:text-6xl">
						Michael Müller
					</h2>
					<h3 className="font-lato text-4xl font-bold text-white">
						Web Developer
					</h3>
					<p className="font-lato text-xl text-white ">
						Passionate dev who is interested in MERN stack
					</p>
					<Button
						text="Let’s Talk"
						size=" my-4  uppercase font-lato h-8 w-40 text-1.5xl"
						to="/contact"
					/>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{ ease: "easeOut", duration: 0.8 }}
				>
					<img
						src="../src/assets/images/developer.svg"
						className="sm:h-[200px] md:h-[225px] lg:h-[250px]"
						alt="developer"
					/>
				</motion.div>
			</Hero>

			<div className={`${isTabletOrMobile ? "" : "mx-12"} flex-grow`}>
				<ProjectsSection />
			</div>
		</>
	);
};

export { HomePage };
