import React from 'react';
import { ShieldCheck, MessageSquare, TrendingUp, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-24 pb-12 overflow-visible bg-white font-['Urbanist']">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img src="/assets/gradient-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-35" alt="" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col items-center relative z-10">
        
        <div className="text-center mb-12 mt-32">
          <h1 className="font-['DentonCondensed'] text-[72px] md:text-[95px] leading-[0.95] tracking-tight text-slate-900 pt-10 pb-4 font-normal transform -translate-y-2">
            From Cheat Code To <br />
            <span className="bg-gradient-to-r from-[#8e76d9] via-[#6d4dc8] to-[#3c59cf] bg-clip-text text-transparent inline-block pb-1">
              Learning Amplifier
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mt-2 leading-relaxed font-medium">
            The first end-to-end platform that detects AI integrity issues, automates feedback, 
            personalises retention and validates skills for employment.
          </p>
        </div>

        {/* Dashboard & Pills */}
        <div className="relative w-full max-w-[950px] mt-4">
          <div className="rounded-[3rem] overflow-hidden shadow-[0_45px_100px_rgba(109,77,200,0.15)] border border-white/80 bg-[#0a0a0a]">
            <video autoPlay loop muted playsInline className="w-full h-auto">
              <source src="/assets/dashboard_demo.mp4" type="video/mp4" />
            </video>
          </div>

          <GlassPill icon={<ShieldCheck className="w-5 h-5" />} text="Academic Integrity" className="-left-12 top-20" />
          <GlassPill icon={<MessageSquare className="w-5 h-5" />} text="Teaching Workflow Hub" className="-right-16 top-1/3" />
          <GlassPill icon={<TrendingUp className="w-5 h-5" />} text="Concept Progression" className="left-1/2 -translate-x-1/2 -bottom-8 scale-110" />
          <GlassPill icon={<Brain className="w-5 h-5" />} text="Artificial Second Brain" className="-left-20 bottom-16" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center pb-20">
          <button className="px-16 py-5 bg-gradient-to-r from-[#8e76d9] via-[#6d4dc8] to-[#3c59cf] text-white rounded-full font-bold text-2xl shadow-[0_15px_45px_rgba(109,77,200,0.25)] hover:scale-105 transition-all">
            Get Demo
          </button>
          <p className="mt-6 text-[#6d4dc8] font-bold text-base tracking-wide opacity-90">
            Help us democratise education.
          </p>
        </div>
      </div>
    </section>
  );
};

const GlassPill = ({ icon, text, className }: { icon: any, text: string, className: string }) => (
  <div className={`absolute ${className} backdrop-blur-3xl bg-white/60 border border-white h-14 px-8 rounded-full flex items-center gap-4 shadow-xl whitespace-nowrap z-30`}>
    <span className="text-[#6d4dc8]">{icon}</span>
    <span className="font-bold text-[#4c3585] text-sm uppercase tracking-wider">{text}</span>
  </div>
);

export default HeroSection;