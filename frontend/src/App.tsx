import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { RootLayout } from "./components/pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/about", element: <HomePage /> },
			{ path: "/projects", element: <HomePage /> },
			{ path: "/contact", element: <HomePage /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
