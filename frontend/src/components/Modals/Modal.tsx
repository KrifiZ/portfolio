import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { PatternCard } from "../UI/PatternCard";
import { NavbarOverlay } from "../Overlays/NavbarOverlay";
import { ProjectOverlay } from "../Overlays/ProjectOverlay";
import { ImageOverlay } from "../Overlays/ImageOverlay";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

interface ModalProps {
	onHide: () => void;
	isOpen: boolean;
	children: React.ReactNode;
	overlayType: "project" | "image" | "navbar";
	zIndex?: number;
	blurred?: boolean;
	disabledScroll?: boolean;
}

const Backdrop: React.FC<{
	onHide: () => void;
	backdropClass: boolean;
	zIndex: number;
	blurred?: boolean;
}> = ({ onHide, backdropClass, zIndex, blurred }) => {
	return (
		<div
			onClick={onHide}
			className={`fixed h-screen w-full ${
				backdropClass ? "" : "bg-[rgba(0,0,0,.12)] bg-opacity-100"
			} ${blurred ? "backdrop-blur-md" : ""}`}
			style={{ zIndex }}
		></div>
	);
};

const portal = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ModalProps> = ({
	children,
	onHide,
	isOpen,
	overlayType,
	zIndex,
	blurred,
	disabledScroll = true,
}) => {
	if (disabledScroll) {
		useDisableBodyScroll();
	}

	let overlayClass: React.ReactElement | undefined;
	if (overlayType === "navbar") {
		overlayClass = (
			<NavbarOverlay overlayClass={isOpen}>{children}</NavbarOverlay>
		);
	} else if (overlayType === "project") {
		overlayClass = (
			<ProjectOverlay overlayClass={isOpen}>{children}</ProjectOverlay>
		);
	} else if (overlayType === "image") {
		overlayClass = (
			<ImageOverlay overlayClass={isOpen}>{children}</ImageOverlay>
		);
	}
	let zIndexClass = zIndex ? zIndex : 20;
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop
					onHide={onHide}
					backdropClass={isOpen}
					zIndex={zIndexClass}
					blurred={blurred}
				/>,
				portal
			)}
			{ReactDOM.createPortal(overlayClass, portal)}
		</React.Fragment>
	);
};

export { Modal };
