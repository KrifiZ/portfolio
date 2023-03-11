import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Footer = () => {
	const isMobile = useMediaQuery({ maxWidth: 720 });
	console.log(isMobile);

	return (
		<div className="flex h-56 flex-col items-center justify-start gap-3 bg-stone-800 p-4  text-white md:flex-row">
			<div>
				<div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
					<h3 className="wrap flex text-3xl uppercase">
						michalmuller
						{isMobile && <br />}
						@onet.eu
					</h3>

					<button className="h-12 w-12 bg-arrow bg-contain  bg-no-repeat"></button>
				</div>
				<div className="flex w-full justify-between md:justify-start md:gap-4  ">
					<Link className="justify-start text-2xl text-white" to="/about">
						About
					</Link>
					<Link className="justify-start text-2xl text-white" to="/projects">
						Projects
					</Link>
				</div>
			</div>
		</div>
	);
};

export { Footer };
