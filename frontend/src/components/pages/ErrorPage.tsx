import { Link } from "react-router-dom";
import { Hero } from "../Hero/Hero";
import { motion } from "framer-motion";

const ErrorPage = () => {
	return (
		<>
			<Hero>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{ ease: "easeOut", duration: 0.8 }}
				>
					<h1 className="font-lato text-5xl text-white">Page not found</h1>
				</motion.div>
			</Hero>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ ease: "easeOut", duration: 0.8 }}
				className="flex flex-grow flex-col items-center justify-center"
			>
				<h1 className="font-lato text-5xl">404</h1>
				<p className="font-lato text-3xl">Something went wrong</p>
				<Link className="text-blue-500 underline hover:text-blue-700" to="/">
					Back to Home
				</Link>
			</motion.div>
		</>
	);
};

export { ErrorPage };
