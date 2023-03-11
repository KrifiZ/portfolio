import { PropsWithChildren } from "react";

interface CardProp extends PropsWithChildren<{}> {
	className?: string;
}

const Card: React.FC<CardProp> = ({ children, className }) => {
	return (
		<div
			className={`flex flex-col ${className} items-center justify-center rounded-lg bg-stone-800 p-4`}
		>
			{children}
		</div>
	);
};

export { Card };
