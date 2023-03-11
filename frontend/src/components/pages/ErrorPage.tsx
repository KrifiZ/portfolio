import { Link } from "react-router-dom";
import { Hero } from "../Hero/Hero";

const ErrorPage = () => {
	return (
		<>
			<Hero>
				<h1 className="font-lato text-5xl text-white">Page not found</h1>
			</Hero>
			<div className="flex flex-grow flex-col items-center justify-center">
				<h1 className="font-lato text-5xl">404</h1>
				<p className="font-lato text-3xl">Something went wrong</p>
				<Link className="text-blue-500 underline hover:text-blue-700" to="/">
					Back to Home
				</Link>
			</div>
		</>
	);
};

export { ErrorPage };
