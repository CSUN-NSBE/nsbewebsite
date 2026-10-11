import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Vision from "./pages/Vision";
import Sponsorship from "./pages/Sponsorship";
import Join from "./pages/Join";
import Events from "./pages/Events";
import Resources from "./pages/Resources";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence
			mode="wait"
			onExitComplete={() => window.scrollTo(0, 0)}
		>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/vision" element={<Vision />} />
				<Route path="/sponsorship" element={<Sponsorship />} />
				<Route path="/events" element={<Events />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/join" element={<Join />} />
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	return (
		<Router>
			<Nav />
			<AnimatedRoutes />
			<Footer />
		</Router>
	);
}

export default App;