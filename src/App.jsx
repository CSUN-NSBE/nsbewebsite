import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Vision from "./Pages/Vision";
import Sponsorship from "./Pages/Sponsorship";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
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