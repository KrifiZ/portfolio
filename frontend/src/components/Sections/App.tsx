import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { RootLayout } from "../pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/about", element: <AboutPage /> },
			{ path: "/projects", element: <HomePage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "*", element: <ErrorPage /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
