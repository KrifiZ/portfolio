import React from "react";
import ReactDOM from "react-dom";
import { PatternCard } from "../UI/PatternCard";
import { NavbarOverlay } from "../Overlays/NavbarOverlay";
import { ProjectOverlay } from "../Overlays/ProjectOverlay";
import { ImageOverlay } from "../Overlays/ImageOverlay";

interface ModalProps {
	onHide: () => void;
	isOverlay: boolean;
	children: React.ReactNode;
	overlayType: "project" | "image" | "navbar";
}

const Backdrop: React.FC<{ onHide: () => void; backdropClass: boolean }> = ({
	onHide,
	backdropClass,
}) => {
	return (
		<div
			onClick={onHide}
			className={` fixed z-20 h-screen w-full ${
				backdropClass ? " " : "bg-[rgba(0,0,0,.12)] bg-opacity-25"
			}   `}
		></div>
	);
};

const portal = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ModalProps> = ({
	children,
	onHide,
	isOverlay,
	overlayType,
}) => {
	let overlayClass: React.ReactElement | undefined;
	if (overlayType === "navbar") {
		overlayClass = (
			<NavbarOverlay overlayClass={isOverlay}>{children}</NavbarOverlay>
		);
	} else if (overlayType === "project") {
		overlayClass = (
			<ProjectOverlay overlayClass={isOverlay}>{children}</ProjectOverlay>
		);
	} else if (overlayType === "image") {
		overlayClass = (
			<ImageOverlay overlayClass={isOverlay}>{children}</ImageOverlay>
		);
	}

	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHide={onHide} backdropClass={isOverlay} />,
				portal
			)}
			{ReactDOM.createPortal(overlayClass, portal)}
		</React.Fragment>
	);
};

export { Modal };
