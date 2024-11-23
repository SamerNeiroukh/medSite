import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Courses from "./components/Courses";
import Registration from "./components/Register";
import Contact from "./components/ContactForm";
import "./App.css"; // Ensure you include the CSS

function App() {
  return (
    <Router basename="/medSite">
      <div className="app-container">
        {/* Header always visible */}
        <Header />
        
        {/* Routes for the main content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer sticks to the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
