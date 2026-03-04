import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-2xl z-[100] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto h-24 px-12 flex items-center justify-between">
        <div className="flex items-center">
          {/* Path fixed to match your local file: synapta-logo.png */}
          <img src="/assets/synapta-logo.png" alt="Synapta" className="h-7 w-auto block" />
        </div>
        
        <div className="flex items-center gap-10">
          <div className="px-6 py-2 bg-white/40 backdrop-blur-md border border-white/40 rounded-full text-[#6d4dc8] font-bold text-sm font-['Urbanist'] shadow-sm">
            Home
          </div>
          {['About', 'Blog', 'Roadmap', 'Investors'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-slate-700 hover:text-[#6d4dc8] transition-colors font-['Urbanist']">
              {item}
            </a>
          ))}
        </div>

        <button className="px-10 py-3 bg-gradient-to-r from-[#8e76d9] via-[#6d4dc8] to-[#3c59cf] text-white rounded-full font-bold text-sm shadow-[0_10px_25px_rgba(109,77,200,0.3)] hover:scale-105 transition-all font-['Urbanist']">
          Get Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;