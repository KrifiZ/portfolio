import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { SectionTitle } from "../UI/SectionTitle";

const ContactPage = () => {
	return (
		<>
			<Hero>
				<h2 className="font-lato text-5xl uppercase text-white">Contact</h2>
			</Hero>
			<SectionTitle title="Get in touch" />
			<div className="flex flex-grow flex-col justify-center ">
				<Card>
					<input />
					<input />
					<input />
					<button>Submit</button>
				</Card>
			</div>
		</>
	);
};

export { ContactPage };
