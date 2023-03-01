import { NavBar } from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="rounded-lg bg-gray-100 p-4 shadow-lg">
			<NavBar />
			<h1 className="animate-slideInRight text-2xl font-bold text-gray-900">
				Welcome to my app!
			</h1>
			<p className="mt-2 text-gray-600">This is some sample text.</p>
		</div>
	);
}

export default App;
