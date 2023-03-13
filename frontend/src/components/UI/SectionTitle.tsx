const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<h2 className="text-center text-4xl uppercase text-stone-800">{title}</h2>
	);
};

export { SectionTitle };
