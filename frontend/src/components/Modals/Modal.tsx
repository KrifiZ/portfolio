import React from "react";
import ReactDOM from "react-dom";

const Backdrop: React.FC<{ onHide: () => void; backdropClass: boolean }> = ({
	onHide,
	backdropClass,
}) => {
	return (
		<div
			onClick={onHide}
			className={` fixed z-20 h-screen w-full ${
				backdropClass ? " " : "bg-slate-500/50"
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
				<Overlay overlayClass={isOverlay}>{children}</Overlay>,
				portal
			)}
		</React.Fragment>
	);
};

export { Modal };
