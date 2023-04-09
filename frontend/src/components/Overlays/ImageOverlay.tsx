import { motion } from "framer-motion";

const ImageOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ ease: "easeIn", duration: 0.4 }}
			className="pointer-events-none fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center"
		>
			{children}
		</motion.div>
	);
};

export { ImageOverlay };
