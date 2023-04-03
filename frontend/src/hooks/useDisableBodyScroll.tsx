import { useEffect } from "react";

const useDisableBodyScroll = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
};

export { useDisableBodyScroll };
