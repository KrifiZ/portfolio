import React from "react";
import ReactDOM from "react-dom";

const Backdrop: React.FC<{ onHide: () => void }> = ({ onHide }) => {
	return (
		<div
			onClick={onHide}
			className="fixed z-10 h-screen w-full bg-slate-900/50  "
		></div>
	);
};

const Overlay: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className="fixed z-20 w-full bg-slate-900">{children} </div>;
};

const portal = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ children: React.ReactNode; onHide: () => void }> = ({
	children,
	onHide,
}) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop onHide={onHide} />, portal)}
			{ReactDOM.createPortal(<Overlay>{children}</Overlay>, portal)}
		</React.Fragment>
	);
};

export { Modal };
