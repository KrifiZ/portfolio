import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { HomePage } from "./components/pages/HomePage";
import { RootLayout } from "./components/pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/about", element: <AboutPage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "*", element: <ErrorPage /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
