import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
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
			{ path: "/projects", element: <HomePage /> },
			{ path: "/contact", element: <HomePage /> },
			{ path: "*", element: <ErrorPage /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
