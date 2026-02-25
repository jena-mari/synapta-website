import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow and blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-synaptaPurple to-synaptaBlue rounded-lg shadow-lg shadow-synaptaPurple/30" />
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            Synapta
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Blog', 'Roadmap', 'Investors'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-600 hover:text-synaptaPurple transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Glowing Action Button */}
        <button className="relative group">
          {/* The Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-synaptaPurple to-synaptaBlue rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          
          <div className="relative px-6 py-2 bg-synaptaPurple text-white rounded-full font-bold text-sm leading-none flex items-center transition-all group-hover:bg-synaptaBlue">
            Get Demo
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;