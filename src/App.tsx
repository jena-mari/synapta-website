import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components 
import Navbar from "./app/components/layout/Navbar"; 
import Footer from "./app/components/layout/Footer";

// Page Components 
import Home from "./pages/home-page/Home"; 
import Blog from "./pages/Blog";
import Roadmap from "./pages/Roadmap";
import MetricsPage from "./pages/home-page/MetricsPage"; 

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/metrics" element={<MetricsPage />} /> 
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}