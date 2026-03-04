import React from 'react';
import HeroSection from "./HeroSection"; 
import MetricsPage from "./MetricsPage"; 
import Features from "./Features"; 
import CTA from "./CTA";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <HeroSection />
      
      {/* 1. The Problem */}
      <MetricsPage /> 
      
      {/* 2. The Solution Phases (Identify, Analyze, etc.) */}
      <Features /> 
      
      {/* 3. Metrics for the Future Section */}

      {/* 4. The Call to Action */}
      <CTA />
    </div>
  );
};

export default Home;