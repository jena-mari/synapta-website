import React from 'react';
import HeroSection from "./HeroSection"; 
import MetricsPage from "./MetricsPage"; 
import Features from "./Features"; 
import TheFuture from "./TheFuture";
import Choose from "./Choose";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <HeroSection />
      
      {/* 1. The Problem */}
      <MetricsPage /> 
      
      {/* 2. The Solution Phases (Identify, Analyze, etc.) */}
      <Features /> 

      {/* 3. The Future of Fair, Fast, and Trusted Education. */}
      <TheFuture />

      {/* 4. The Call to Action */}
      <Choose />
    </div>
  );
};

export default Home;