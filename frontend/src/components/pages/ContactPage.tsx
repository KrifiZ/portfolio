import { useFormik } from "formik";
import { Hero } from "../Hero/Hero";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { SectionTitle } from "../UI/SectionTitle";
import { SubmitButton } from "../UI/SubmitButton";
import { TextArea } from "../UI/TextArea";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
	const [submitStatus, setSubmitStatus] = useState(false);
	const [submitButtonText, setSubmitButtonText] = useState(
		"Send Message" as string
	);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		onSubmit: async (values) => {
			if (formik.isValid) {
				const { name, email, message } = values;
				const data = {
					name,
					email,
					message,
				};
				try {
					setSubmitStatus(true);
					await axios.post(
						"https://formsubmit.co/e7863150eaaae542b6dbec7a6c141be9",
						data
					);
					setSubmitStatus(false);
					setSubmitButtonText("Message sent!");
					setTimeout(() => {
						setSubmitButtonText("Send Message");
					}, 2000);
					formik.resetForm();
				} catch (error) {
					setSubmitStatus(false);
					setSubmitButtonText("Try again later");
					setTimeout(() => {
						setSubmitButtonText("Send Message");
					}, 2000);
				}
			}
		},
		validationSchema: Yup.object({
			name: Yup.string().max(16, "Max 16 letters").required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			message: Yup.string().max(250, "Max 250 letters").required("Required"),
		}),
	});

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
					<h2 className="font-lato text-5xl uppercase text-white">Contact</h2>
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
				<SectionTitle styles="my-4" title="Get in touch" />
				<div className="flex flex-grow flex-col justify-center gap-2  py-8 md:flex-row-reverse ">
					<Card className="w-full max-w-[500px]">
						<form className="w-full p-1 " onSubmit={formik.handleSubmit}>
							<Input
								input={{
									type: "text",
									name: "name",
									placeholder: "Name",
									value: formik.values.name,
									onBlur: formik.handleBlur,
									onChange: formik.handleChange,
								}}
							/>
							{formik.errors.name && formik.touched.name ? (
								<div className="text-md text-red-500">{formik.errors.name}</div>
							) : null}
							<Input
								input={{
									type: "",
									name: "email",
									placeholder: "Email",
									value: formik.values.email,
									onChange: formik.handleChange,
									onBlur: formik.handleBlur,
								}}
							/>
							{formik.errors.email && formik.touched.email ? (
								<div className="text-md text-red-500">
									{formik.errors.email}
								</div>
							) : null}

							<TextArea
								textarea={{
									name: "message",
									placeholder: "Message",
									value: formik.values.message,
									onChange: formik.handleChange,
									onBlur: formik.handleBlur,
								}}
							/>
							{formik.errors.message && formik.touched.message ? (
								<div className="text-md text-red-500">
									{formik.errors.message}
								</div>
							) : null}

							<SubmitButton
								submitProcess={submitStatus}
								text={submitButtonText}
								size={"w-full"}
							/>
						</form>
					</Card>
					<div className="flex flex-col gap-2 md:gap-4">
						{icons.map((icon, index) => (
							<div className="flex items-center gap-2" key={index}>
								<Card className="max-h-[127px] min-h-[127px] min-w-[127px] max-w-[127px]">
									<img src={icon.icon} alt={icon.name} />
								</Card>
								<div className="flex flex-col justify-start break-words">
									<h3 className=" text-3xl uppercase">
										{description[icon.name].title}
									</h3>
									<p className="h-full  text-2xl ">
										{description[icon.name].text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export { ContactPage };
