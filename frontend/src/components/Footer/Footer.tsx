import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex h-56  flex-col items-center justify-start gap-3  bg-stone-800 text-white">
			<h3 className="wrap flex text-3xl uppercase">
				michalmuller
				<br />
				@onet.eu
			</h3>
			<button className="h-20 w-20 bg-arrow bg-contain bg-no-repeat"></button>
			<div className="flex w-full justify-center  gap-4 ">
				<Link className="justify-start text-2xl text-white" to="/about">
					About
				</Link>
				<Link className="justify-start text-2xl text-white" to="/projects">
					Projects
				</Link>
			</div>
		</div>
	);
};

export { Footer };
