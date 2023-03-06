const Footer = () => {
	return (
		<div className="flex h-56 flex-grow flex-col items-center justify-start gap-3 overflow-hidden bg-stone-800 text-white">
			<h3 className="wrap flex text-3xl uppercase">
				michalmuller
				<br />
				@onet.eu
			</h3>
			<button className="h-20 w-20 bg-arrow bg-contain bg-no-repeat"></button>
			<div className="flex w-full justify-center  gap-4 ">
				<a className="justify-start text-2xl text-white" href="About">
					About
				</a>
				<a className="justify-start text-2xl text-white" href="Projects">
					Projects
				</a>
			</div>
		</div>
	);
};

export { Footer };
