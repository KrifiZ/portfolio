const SectionTitle: React.FC<{ title: string; styles?: string }> = ({
	title,
	styles,
}) => {
	return (
		<h2 className={`text-center text-4xl uppercase ${styles} text-stone-800`}>
			{title}
		</h2>
	);
};

export { SectionTitle };
