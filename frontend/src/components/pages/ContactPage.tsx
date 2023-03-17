import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { SectionTitle } from "../UI/SectionTitle";
import { SubmitButton } from "../UI/SubmitButton";
import { TextArea } from "../UI/TextArea";

const icons = [
	{
		name: "email",
		icon: "../src/assets/images/email.svg",
	},
	{
		name: "discord",
		icon: "../src/assets/images/discord.svg",
	},
	{
		name: "github",
		icon: "../src/assets/images/github.svg",
	},
];

const description: { [key: string]: { title: string; text: string } } = {
	email: {
		title: "Email",
		text: "michalmuller\u200B@onet.eu",
	},
	discord: {
		title: "Discord",
		text: "KrifiZ#6922",
	},
	github: {
		title: "Github",
		text: "KrifiZ",
	},
};

const ContactPage = () => {
	return (
		<>
			<Hero>
				<h2 className="font-lato text-5xl uppercase text-white">Contact</h2>
			</Hero>
			<SectionTitle title="Get in touch" />
			<div className="flex flex-grow flex-col justify-center gap-2 p-2  ">
				<Card>
					<form className="p-1">
						<Input
							input={{
								type: "text",
								placeholder: "Name",
							}}
						/>
						<Input
							input={{
								type: "",
								placeholder: "Email",
							}}
						/>
						<TextArea
							textarea={{
								placeholder: "Message",
							}}
						/>
						<SubmitButton to={""} text={"Send Message"} size={"w-full"} />
					</form>
				</Card>
				{icons.map((icon, index) => (
					<div className="flex items-center" key={index}>
						<Card className="max-h-[127px] min-h-[127px] min-w-[127px] max-w-[127px]">
							<img src={icon.icon} alt={icon.name} />
						</Card>
						<div className="flex flex-col justify-start break-words">
							<h3 className=" text-3xl uppercase">
								{description[icon.name].title}
							</h3>
							<p className="h-full  text-2xl ">{description[icon.name].text}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export { ContactPage };
