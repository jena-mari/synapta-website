import React from 'react';
import { TrendingDown, Hourglass, Sparkles, Briefcase } from 'lucide-react';

const MetricsPage = () => {
  return (
    /* pt-4 significantly reduces the gap between this and the HeroSection */
    <section className="relative w-full bg-transparent pt-4 pb-24 px-4 overflow-visible font-['Urbanist']">
      
      <div className="container max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-[0.85] tracking-tighter text-slate-900 font-normal">
          The <span className="bg-gradient-to-r from-[#8e76d9] to-[#6366f1] bg-clip-text text-transparent italic inline-block">
            Problem
          </span>
        </h2>
          <p className="text-lg md:text-xl text-slate-800 font-semibold mt-1">
            Education is built for the top 10%. <br />
            <span className="text-[#6d4dc8]">The rest are overwhelmed.</span>
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <MetricCard 
            stat="25%+" 
            tag="Dropout and Lost Tuition"
            description='"First-year students don’t return—driving roughly $82B annually in lost tuition value and signalling a system failing to support learners."'
            icon={<TrendingDown className="w-6 h-6" />}
          />
          <MetricCard 
            stat="70%" 
            tag="Attention Decay Rate"
            description='"With ~70% attention decay, learning efficiency collapses—concepts can take 3x+ longer to master."'
            icon={<Hourglass className="w-6 h-6" />}
          />
          <MetricCard 
            stat="86%" 
            tag="AI Use is a Symptom of Outdated Infrastructure"
            description='"Students use generative AI to survive poor assessment design and outdated delivery systems—often from desperation, not deceit—reducing genuine learning rates."'
            icon={<Sparkles className="w-6 h-6" />}
          />
          <MetricCard 
            stat="20%+" 
            tag="Recruitment Waste Problem"
            description='"Traditional resumes don’t prove real capability, over 20% of new hires become ‘bad hires’, driving massive waste and avoidable turnover."'
            icon={<Briefcase className="w-6 h-6" />}
          />
        </div>

        {/* Footer Statement - Scaled down as requested */}
        <div className="text-center max-w-3xl mx-auto pb-10">
          <p className="text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight">
            Students aren't cheating out of malice — they're drowning in a system <br />
            that wasn't designed for them. <span className="text-[#6d4dc8]">This is about desperation, not deceit.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ stat, tag, description, icon }: { stat: string, tag: string, description: string, icon: any }) => (
  <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-10 rounded-[40px] shadow-[0_30px_60px_rgba(109,77,200,0.05)] relative flex flex-col justify-between h-full group hover:shadow-[0_40px_80px_rgba(109,77,200,0.1)] transition-all overflow-hidden">
    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
      <h3 className="font-['DentonCondensed'] text-[85px] font-normal text-slate-900 leading-none tracking-tighter">
        {stat}
      </h3>
      {/* Constraints added to the Tag Pill */}
      <div className="bg-gradient-to-r from-[#8e76d9] to-[#3c59cf] px-5 py-2.5 rounded-full text-white text-[10px] tracking-wider font-bold shadow-md max-w-[200px] text-center leading-tight">
        {tag}
      </div>
    </div>
    
    <div className="flex items-end justify-between gap-6">
      <p className="text-slate-600 text-[17px] leading-[1.5] font-medium italic max-w-[85%] [text-wrap:balance]">
        {description}
      </p>
      <div className="bg-white p-5 rounded-full text-[#6d4dc8] shrink-0 shadow-[0_15px_30px_rgba(109,77,200,0.2)] border border-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </div>
  </div>
);

export default MetricsPage;