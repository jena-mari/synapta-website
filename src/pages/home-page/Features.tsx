import React from 'react';
import { ArrowDown } from 'lucide-react';

const Features = () => {
  return (
    <section className="relative w-full bg-transparent py-20 px-4 overflow-visible font-['Urbanist']">
      <div className="container max-w-[1000px] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-[0.85] tracking-tighter text-slate-900 font-normal">
            The <span className="bg-gradient-to-r from-[#6d4dc8] to-[#818cf8] bg-clip-text text-transparent italic inline-block">
              4-Phase
            </span> Solution
          </h2>
          <p className="text-lg md:text-xl text-slate-800 font-medium mt-2 max-w-2xl mx-auto leading-tight">
            A complete ecosystem that transforms the educational journey from integrity to employment.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <FeatureCard 
            title="SYPHER"
            subtitle="INTEGRITY"
            description="Beyond text matching. We map authorship fingerprints."
            detail="TEQSA-ready evidence in <30s"
            image="/assets/feature-glass-1.png"
            variant="purple" 
          />
          <FeatureCard 
            title="CRITORA"
            subtitle="ASSESSMENT"
            description="Grading at the speed of thought."
            detail="±3% variance from human marks"
            image="/assets/feature-glass-2.png"
            variant="blue" 
          />
          <FeatureCard 
            title="AXION"
            subtitle="RETENTION"
            description="The Artificial Second Brain"
            detail="Adapts to your learning curve."
            image="/assets/feature-glass-3.png"
            variant="purple" 
          />
          <FeatureCard 
            title="NEXCRUIT"
            subtitle="EMPLOYMENT"
            description="The Simulation Hiring Passport"
            detail="Blockchain-sealed skill verification."
            image="/assets/feature-glass-4.png"
            variant="blue" 
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, subtitle, description, detail, image, variant }: any) => {
  const isPurple = variant === "purple";
  
  // Purple: Your existing restored colors
  // Blue: Exact #3252C1 to #8E89F3 for Critora and Nexcruit
  const gradientClasses = isPurple 
    ? "from-[#8e76d9] to-[#6d4dc8]" 
    : "from-[#3252C1] to-[#8E89F3]";

  return (
    <div className="relative group bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[40px] p-10 md:p-14 overflow-hidden shadow-[0_20px_50px_rgba(109,77,200,0.05)] hover:shadow-[0_30px_60px_rgba(109,77,200,0.1)] transition-all flex justify-between items-center h-[300px]">
      
      <div className="relative z-10 max-w-md">
        <h3 className={`font-['DentonCondensed'] text-[75px] leading-none tracking-tight mb-1 bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
          {title}
        </h3>
        
        <p className={`font-bold tracking-[0.2em] text-sm mb-8 uppercase bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
          {subtitle}
        </p>
        
        <div className="space-y-1">
          <p className="text-slate-900 font-bold text-xl leading-tight">
            {description}
          </p>
          <p className={`font-medium text-base bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
            {detail}
          </p>
        </div>
      </div>

      <div className="relative h-full flex flex-col justify-between items-end py-2 pr-4 w-1/2">
        <img 
          src={image} 
          alt="" 
          className="absolute -right-24 -top-24 w-[500px] h-auto object-contain opacity-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
        />
        
        <div className={`mt-auto z-10 bg-gradient-to-r ${gradientClasses} p-4 rounded-full text-white shadow-xl group-hover:translate-y-1 transition-transform`}>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Features;