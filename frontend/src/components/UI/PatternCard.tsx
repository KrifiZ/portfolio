import React from "react";

interface PatternCardProps {
	children: React.ReactNode;
}

const PatternCard: React.FC<PatternCardProps> = ({ children }) => {
	return (
		<div className="m-2 flex h-64 w-64 items-center justify-center rounded-3xl bg-blue-500 bg-black-pattern bg-repeat">
			<div className="flex h-56 w-56 flex-col items-center justify-between overflow-hidden rounded-3xl  bg-stone-800">
				{children}
			</div>
		</div>
	);
};

export { PatternCard };
