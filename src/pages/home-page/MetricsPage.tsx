import React from 'react';
import { TrendingDown, Hourglass, Sparkles, Briefcase } from 'lucide-react';

const MetricsPage = () => {
  return (
    <section className="relative w-full bg-transparent pt-4 pb-16 px-4 overflow-visible font-['Urbanist']">
      <div className="container max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-[1.1] tracking-tighter text-slate-900 font-normal">
            The{""}
            <span className="relative bg-gradient-to-r from-[#8e76d9] to-[#6366f1] bg-clip-text text-transparent inline-block px-6 pb-4 -mb-4">
            Problem
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-800 font-semibold mt-1 leading-snug">
            Education is built for the top 10%. <br />
            <span className="text-[#6d4dc8]">The rest are overwhelmed.</span>
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MetricCard 
            stat="25%+" 
            tag="Dropout and Lost Tuition"
            description='"First-year students don’t return—driving roughly $82B annually in lost tuition value and signalling a system failing to support learners."'
            icon={<TrendingDown className="w-5 h-5" />}
          />
          <MetricCard 
            stat="70%" 
            tag="Attention Decay Rate"
            description='"With ~70% attention decay, learning efficiency collapses—concepts can take 3x+ longer to master."'
            icon={<Hourglass className="w-5 h-5" />}
          />
          <MetricCard 
            stat="86%" 
            tag="AI Use is a Symptom"
            description='"Students use generative AI to survive poor assessment design and outdated delivery systems—often from desperation, not deceit."'
            icon={<Sparkles className="w-5 h-5" />}
          />
          <MetricCard 
            stat="20%+" 
            tag="Recruitment Waste"
            description='"Traditional resumes don’t prove real capability, over 20% of new hires become ‘bad hires’, driving massive waste and turnover."'
            icon={<Briefcase className="w-5 h-5" />}
          />
        </div>

        {/* Footer Statement */}
        <div className="text-center max-w-2xl mx-auto pb-6">
          <p className="text-base md:text-lg font-bold text-slate-900 leading-relaxed tracking-tight">
            Students aren't cheating out of malice — they're drowning in a system <br className="hidden md:block" />
            that wasn't designed for them. <span className="text-[#6d4dc8]">This is about desperation, not deceit.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ stat, tag, description, icon }: { stat: string, tag: string, description: string, icon: any }) => (
  <div className="bg-white/80 backdrop-blur-xl border border-white/90 p-8 rounded-[32px] shadow-[0_20px_40px_rgba(109,77,200,0.04)] relative flex flex-col justify-between h-full group hover:shadow-[0_30px_60px_rgba(109,77,200,0.08)] transition-all overflow-hidden">
    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-3">
      <h3 className="font-['DentonCondensed'] text-[70px] md:text-[80px] font-normal text-slate-900 leading-none tracking-tighter">
        {stat}
      </h3>
      <div className="bg-gradient-to-r from-[#8e76d9] to-[#3c59cf] px-4 py-2 rounded-full text-white text-[9px] tracking-widest font-bold shadow-sm max-w-[180px] text-center leading-tight uppercase">
        {tag}
      </div>
    </div>
    
    <div className="flex items-end justify-between gap-4">
      <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed font-medium italic max-w-[80%]">
        {description}
      </p>
      <div className="bg-white p-4 rounded-full text-[#6d4dc8] shrink-0 shadow-[0_10px_20px_rgba(109,77,200,0.15)] border border-slate-50 group-hover:scale-105 transition-transform">
        {icon}
      </div>
    </div>
  </div>
);

export default MetricsPage;