import { useMediaQuery } from "react-responsive";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { NavBar } from "../NavBar/NavBar";
import { ProjectsSection } from "../Sections/ProjectsSection";
import { Button } from "../UI/Button";
const HomePage = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

	return (
		<>
			<Hero>
				<div>
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
				</div>

				<img
					src="../src/assets/images/developer.svg"
					className="sm:h-[200px] md:h-[225px] lg:h-[250px]"
					alt="developer"
				/>
			</Hero>

			<div className={`${isTabletOrMobile ? "" : "mx-12"} flex-grow`}>
				<ProjectsSection />
			</div>
		</>
	);
};

export { HomePage };
