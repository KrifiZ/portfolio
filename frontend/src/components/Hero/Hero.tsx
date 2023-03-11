import { useMediaQuery } from "react-responsive";
import { Button } from "../UI/Button";

const Hero: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
	return (
		<div className="bg-stone-800 bg-pattern bg-repeat py-16 shadow-lg">
			<div className={`${isTabletOrMobile ? "" : "mx-12"}  flex-grow`}>
				<div className="  z-10 flex flex-wrap justify-between lg:flex-grow   ">
					{children}
				</div>
			</div>
		</div>
	);
};
export { Hero };
