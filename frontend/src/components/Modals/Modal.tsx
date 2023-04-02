import React from "react";
import ReactDOM from "react-dom";
import { PatternCard } from "../UI/PatternCard";

const Backdrop: React.FC<{ onHide: () => void; backdropClass: boolean }> = ({
	onHide,
	backdropClass,
}) => {
	return (
		<div
			onClick={onHide}
			className={` fixed z-20 h-screen w-full ${
				backdropClass ? "bg-[rgba(0,0,0,.12)] bg-opacity-25 " : ""
			}   `}
		></div>
	);
};

const Overlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed right-0 z-30 h-full w-2/4 ${
				overlayClass ? "animate-slideInRight" : "animate-slideInLeft"
			} bg-slate-900`}
		>
			{children}
		</div>
	);
};
// "fixed top-1/2 left-1/2 z-30 w-2/4 -translate-x-1/2 -translate-y-1/2  transform"
const ProjectOverlay: React.FC<{
	children: React.ReactNode;
	overlayClass: boolean;
}> = ({ children, overlayClass }) => {
	return (
		<div
			className={`fixed top-1/2 left-1/2 z-30 h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-slate-800 drop-shadow-2xl ${
				overlayClass ? "bg-opacity-50 backdrop-blur-md" : ""
			}`}
		>
			<div className="p-4">{children}</div>
		</div>
	);
};

const portal = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{
	children: React.ReactNode;
	onHide: () => void;
	isOverlay: boolean;
}> = ({ children, onHide, isOverlay }) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHide={onHide} backdropClass={isOverlay} />,
				portal
			)}
			{ReactDOM.createPortal(
				<ProjectOverlay overlayClass={isOverlay}>{children}</ProjectOverlay>,
				portal
			)}
		</React.Fragment>
	);
};

export { Modal };
