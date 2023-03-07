import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center">
			<h1 className="font-lato text-5xl">404</h1>
			<p className="font-lato text-3xl">Page not found</p>
			<Link to="/">Back to Home</Link>
		</div>
	);
};

export { ErrorPage };
