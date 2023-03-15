import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { SectionTitle } from "../UI/SectionTitle";
import { SubmitButton } from "../UI/SubmitButton";
import { TextArea } from "../UI/TextArea";

const ContactPage = () => {
	return (
		<>
			<Hero>
				<h2 className="font-lato text-5xl uppercase text-white">Contact</h2>
			</Hero>
			<SectionTitle title="Get in touch" />
			<div className="flex flex-grow flex-col justify-center  ">
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
			</div>
		</>
	);
};

export { ContactPage };
