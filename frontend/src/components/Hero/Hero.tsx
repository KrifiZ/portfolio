import { Button } from "../UI/Button";

const Hero = () => {
	return (
		<div className="  flex flex-wrap justify-between">
			<div>
				<h2 className="font-lato text-2xl font-bold text-white">
					Hello, <span className="text-blue-500">I'm</span>
				</h2>
				<h2 className="font-lato text-5xl font-bold uppercase text-white">
					Michael Müller
				</h2>
				<h3 className="font-lato text-4xl font-bold text-white">
					Web Developer
				</h3>
				<p className="text-1xl font-lato text-white ">
					Passionate dev who is interested in MERN stack
				</p>
				<Button
					text="Let’s Talk"
					size=" my-4  uppercase font-lato h-8 w-40 text-1.5xl"
				/>
			</div>
			<div>
				<img src="../src/assets/images/developer.svg" alt="developer" />
			</div>
		</div>
	);
};
export { Hero };
