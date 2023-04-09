import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Footer = () => {
	const isMobile = useMediaQuery({ maxWidth: 720 });

	return (
		<div className="flex h-56 flex-col items-center justify-start gap-3 bg-stone-800 p-4  text-white md:flex-row">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ ease: "easeOut", duration: 0.8 }}
			>
				<div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
					<h3 className="wrap flex text-3xl uppercase">
						michalmuller
						{isMobile && <br />}
						@onet.eu
					</h3>

					<Link
						className="h-12 w-12 bg-arrow bg-contain  bg-no-repeat"
						to="/contact"
					/>
				</div>
				<div className="flex w-full justify-between md:justify-start md:gap-4  ">
					<Link className="justify-start text-2xl text-white" to="/about">
						About
					</Link>
					<a
						className="text-2xl text-white"
						href="https://github.com/KrifiZ"
						target="_blank"
					>
						Github
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export { Footer };
