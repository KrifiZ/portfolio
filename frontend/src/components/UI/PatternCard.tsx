import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface PatternCardProps {
	children: React.ReactNode;
}

const PatternCard: React.FC<PatternCardProps> = ({ children }) => {
	const ref = useRef(null);
	const inView = useInView(ref);

	return (
		<motion.div
			initial="hidden"
			animate={{
				opacity: inView ? 1 : 0,
				y: inView ? 0 : 20,
			}}
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ ease: "easeOut", duration: 0.8 }}
			className={`m-2 flex h-64 w-64 items-center justify-center rounded-3xl bg-blue-500 bg-black-pattern bg-repeat`}
			ref={ref}
		>
			<div className="flex h-56 w-56 flex-col items-center justify-between overflow-hidden rounded-3xl  bg-stone-800">
				{children}
			</div>
		</motion.div>
	);
};

export { PatternCard };
