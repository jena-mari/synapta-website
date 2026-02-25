import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components 
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

// Page Components 
import Home from "@pages/home-page/Home"; 
import Blog from "@pages/Blog";
import Roadmap from "@pages/Roadmap";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}