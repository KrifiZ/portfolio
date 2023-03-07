import { useMediaQuery } from "react-responsive";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { NavBar } from "../NavBar/NavBar";
import { ProjectsSection } from "../Sections/ProjectsSection";
const HomePage = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

	return (
		<>
			<div className=" bg-stone-800 bg-pattern  bg-repeat p-4 shadow-lg">
				<div className={`${isTabletOrMobile ? "" : "mx-40"} flex-grow`}>
					<Hero />
				</div>
			</div>
			<div className={`${isTabletOrMobile ? "" : "mx-40"} flex-grow`}>
				<ProjectsSection />
			</div>
		</>
	);
};

export { HomePage };
