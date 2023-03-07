import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";

const RootLayout = () => {
	return (
		<div className="flex h-screen flex-col scroll-auto">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export { RootLayout };
