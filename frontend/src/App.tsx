import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { ProjectsSection } from "./components/Sections/ProjectsSection";

function App() {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

	return (
		<div className="flex h-screen flex-col scroll-auto">
			<div className=" bg-stone-800 bg-pattern  bg-repeat p-4 shadow-lg">
				<div className={`${isTabletOrMobile ? "" : "mx-40"} flex-grow`}>
					<NavBar />
					<Hero />
				</div>
			</div>
			<div className={`${isTabletOrMobile ? "" : "mx-40"} flex-grow`}>
				<ProjectsSection />
			</div>

			<div className="flex justify-between bg-stone-800 py-4 text-white">
				<Footer />
			</div>
		</div>
	);
}

export default App;
