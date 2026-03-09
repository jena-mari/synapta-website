import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, TrendingUp, Brain, Loader2 } from 'lucide-react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-12 pb-12 overflow-visible bg-white font-['Urbanist']">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img src="/assets/gradient-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-35" alt="" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col items-center relative z-10">
        
        <div className="text-center mb-12 mt-24 md:mt-32">
          {/* FIXED: Added leading and padding to prevent clipping of the gradient text */}
          <h1 className="font-['DentonCondensed'] text-[72px] md:text-[95px] leading-[1.1] tracking-tight text-slate-900 pt-10 font-normal">
            From Cheat Code To <br />
            <span className="relative bg-gradient-to-r from-[#8e76d9] via-[#6d4dc8] to-[#3c59cf] bg-clip-text text-transparent inline-block px-4 pb-4 -mb-4">
              Learning Amplifier
            </span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-bold opacity-100">
            The first end-to-end platform that detects AI integrity issues, automates feedback, 
            personalises retention and validates skills for employment.
          </p>
        </div>

        {/* Dashboard & Video with Loading State */}
        <div className="relative w-full max-w-[950px] mt-4">
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_45px_100px_rgba(109,77,200,0.12)] border border-white/80 bg-[#0a0a0a] min-h-[300px] flex items-center justify-center">
            
            {/* Loading Spinner Overlay */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0a0a]">
                <Loader2 className="w-10 h-10 text-[#8e76d9] animate-spin mb-4" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Initializing Dashboard
                </span>
              </div>
            )}

            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              onCanPlayThrough={() => setIsVideoLoaded(true)}
              className={`w-full h-auto transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/assets/dashboard_demo.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Glass Pills */}
          <GlassPill icon={<ShieldCheck className="w-4 h-4" />} text="Academic Integrity" className="-left-8 top-12 md:-left-12 md:top-20" />
          <GlassPill icon={<MessageSquare className="w-4 h-4" />} text="Teaching Workflow" className="-right-12 top-1/3 md:-right-16" />
          <GlassPill icon={<TrendingUp className="w-4 h-4" />} text="Concept Progression" className="left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-8 scale-100 md:scale-110" />
          <GlassPill icon={<Brain className="w-4 h-4" />} text="Artificial Second Brain" className="-left-12 bottom-12 md:-left-20 md:bottom-16" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 text-center pb-12">
          <button className="px-12 py-4 bg-gradient-to-r from-[#8e76d9] via-[#6d4dc8] to-[#3c59cf] text-white rounded-full font-bold text-xl md:text-2xl shadow-[0_15px_45px_rgba(109,77,200,0.2)] hover:scale-105 transition-all active:scale-95">
            Get Demo
          </button>
          <p className="mt-6 text-[#6d4dc8] font-bold text-sm md:text-base tracking-wide uppercase opacity-100">
            Help us democratise education.
          </p>
        </div>
      </div>
    </section>
  );
};

const GlassPill = ({ icon, text, className }: { icon: any, text: string, className: string }) => (
  <div className={`absolute ${className} backdrop-blur-3xl bg-white/70 border border-white/90 h-12 md:h-14 px-6 md:px-8 rounded-full flex items-center gap-3 md:gap-4 shadow-xl whitespace-nowrap z-30 transition-all`}>
    <span className="text-[#6d4dc8]">{icon}</span>
    <span className="font-bold text-[#4c3585] text-[10px] md:text-xs uppercase tracking-widest">{text}</span>
  </div>
);

export default HeroSection;