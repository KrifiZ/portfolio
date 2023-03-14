import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { SectionTitle } from "../UI/SectionTitle";
import { SubmitButton } from "../UI/SubmitButton";

const ContactPage = () => {
	return (
		<>
			<Hero>
				<h2 className="font-lato text-5xl uppercase text-white">Contact</h2>
			</Hero>
			<SectionTitle title="Get in touch" />
			<div className="flex flex-grow flex-col justify-center ">
				<Card>
					<Input
						input={{
							id: "name",
							type: "text",
							placeholder: "Name",
						}}
						label={""}
					/>
					<Input
						input={{
							id: "",
							type: "",
							placeholder: "Email",
						}}
						label={""}
					/>
					<Input
						input={{
							id: "",
							type: "textarea",
							placeholder: "Message",
						}}
						label={""}
					/>

					<SubmitButton to={""} text={"Send Message"} size={"w-full"} />
				</Card>
			</div>
		</>
	);
};

export { ContactPage };
