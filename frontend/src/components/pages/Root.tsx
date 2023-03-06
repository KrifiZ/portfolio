import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export { RootLayout };
