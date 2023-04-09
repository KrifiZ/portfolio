import { motion } from "framer-motion";
import { useState } from "react";

const ProjectOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed top-1/2 left-1/2 z-30 h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg bg-slate-800 drop-shadow-2xl ${
				overlayClass ? "" : "bg-opacity-50 backdrop-blur-md"
			}`}
		>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ ease: "easeIn", duration: 0.4 }}
				className="flex h-full  flex-col  p-4"
			>
				{children}
			</motion.div>
		</div>
	);
};

export { ProjectOverlay };
