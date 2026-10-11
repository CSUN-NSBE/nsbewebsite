import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Vision from "./pages/Vision";
import Sponsorship from "./pages/Sponsorship";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/join" element={<Join />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;