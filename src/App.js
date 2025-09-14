import React from "react";
import "./App.css";
import Homecontent from "./components/home/Homecontent";
import Projects from "./components/projects/Projects"
import Education from "./components/Education/Education";
import Passions from "./components/Passions/Passions";
import AnimatedCursorBackground from "./AnimatedCursorBackground";
import Navbar from "./components/home/navbar";
import Footer from "./components/home/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <AnimatedCursorBackground />
      <Navbar />
      <Routes>
      <Route path="/" element={<Homecontent />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Passions" element={<Passions />} />
       {/* fallback for wrong urls */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
