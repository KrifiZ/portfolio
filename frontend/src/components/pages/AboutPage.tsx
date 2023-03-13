import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { SectionTitle } from "../UI/SectionTitle";

const icons = [
	{
		name: "HTML",
		icon: "../src/assets/images/html.svg",
	},
	{
		name: "CSS",
		icon: "../src/assets/images/css.svg",
	},
	{
		name: "JavaScript",
		icon: "../src/assets/images/javascript.svg",
	},
	{
		name: "TypeScript",
		icon: "../src/assets/images/typescript.svg",
	},
	{
		name: "React",
		icon: "../src/assets/images/react.svg",
	},
	{
		name: "Node",
		icon: "../src/assets/images/node.svg",
	},
	{
		name: "MongoDB",
		icon: "../src/assets/images/mongodb.svg",
	},
];

const AboutPage = () => {
	return (
		<>
			<Hero>
				<h1 className="font-lato text-5xl uppercase text-white">About me</h1>
			</Hero>
			<div className="justify-cente flex flex-grow flex-col items-center">
				<SectionTitle title="Interests" />
				<Card className=" mx-8 flex max-w-[600px] p-2">
					<p className=" text-2xl text-white">
						I'm an avid gamer and chess enthusiast, and I believe that gaming
						and chess can teach us valuable lessons about problem-solving and
						critical thinking. When I'm not working on frontend development
						projects, you can often find me playing chess or exploring new
						games. If you're a fellow chess enthusiast or gamer, feel free to
						connect with me to discuss our favorite games and strategies!
					</p>
				</Card>
			</div>
			<h3 className="text-center text-5xl uppercase">SKILLS</h3>
			<div className=" mb-8 flex flex-wrap items-center justify-center gap-2">
				{icons.map((icon) => (
					<Card className="h-[127px] w-[127px]">
						<img
							src={icon.icon}
							className="h-[75px] w-[75px] items-center justify-center"
						/>
						<p className="text-center text-xl text-white">{icon.name}</p>
					</Card>
				))}
			</div>
		</>
	);
};

export { AboutPage };
