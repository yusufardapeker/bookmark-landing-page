import "./styles/reset.css";
import "./styles/main.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Hero />
				<Features />
				<Downloads />
				<FAQ />
			</div>
			<Footer />
		</>
	);
}

export default App;
