import React, { useState, useRef } from 'react';
import { ArrowDown, X, Play, Loader2, Pause, Volume2, VolumeX, Maximize, Calendar, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const togglePhase = (id: string) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <section className="relative w-full bg-transparent py-24 px-4 overflow-visible font-['Urbanist']">
      <div className="container max-w-[1100px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-[1.1] tracking-tighter text-slate-900 font-normal">
            The{" "}
            <span className="relative bg-gradient-to-r from-[#6d4dc8] to-[#818cf8] bg-clip-text text-transparent italic inline-block px-6 pb-4 -mb-4">
              4-Phase
            </span>{" "}
            Solution
          </h2>
          <p className="text-base md:text-lg text-slate-800 font-bold mt-2 max-w-xl mx-auto leading-snug">
            A complete ecosystem that transforms the educational journey from integrity to employment.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <FeatureCard 
            id="sypher"
            title="SYPHER"
            subtitle="INTEGRITY"
            description="Beyond text matching. We map authorship fingerprints."
            detail="TEQSA-ready evidence in <30s"
            longDescription="Sypher employs advanced **AI and machine learning** to detect various types of plagiarism, including AI-generated content and nuanced paraphrasing. Its algorithms create **personalised student writing profiles**, allowing for precise identification of discrepancies in style and tone, thus upholding academic integrity."
            image="/assets/feature-glass-1.png"
            videoSrc="/assets/sypher-demo.mp4"
            variant="purple" 
            isExpanded={expandedPhase === 'sypher'}
            onToggle={() => togglePhase('sypher')}
          />
          
          <FeatureCard 
            id="critora"
            title="CRITORA"
            subtitle="ASSESSMENT"
            description="Grading at the speed of thought."
            detail="±3% variance from human marks"
            longDescription="Critora redefines the feedback loop by providing **instantaneous, high-fidelity grading** that aligns with institutional rubrics. It ensures **consistency across large cohorts** while maintaining a human-like touch in qualitative commentary."
            image="/assets/feature-glass-2.png"
            videoSrc="/assets/critora-placeholder.mp4"
            variant="blue" 
            isExpanded={expandedPhase === 'critora'}
            onToggle={() => togglePhase('critora')}
          />

          <FeatureCard 
            id="axion"
            title="AXION"
            subtitle="RETENTION"
            description="The Artificial Second Brain"
            detail="Adapts to your learning curve."
            longDescription="Combining advanced AI with immersive media to create a **fully adaptive learning environment** that evolves with you. Master information, don't just consume it."
            image="/assets/feature-glass-3.png"
            variant="purple" 
            isExpanded={expandedPhase === 'axion'}
            onToggle={() => togglePhase('axion')}
            isComingSoon={true}
          />

          <FeatureCard 
            id="nexcruit"
            title="NEXCRUIT"
            subtitle="EMPLOYMENT"
            description="The Simulation Hiring Passport"
            detail="Blockchain-sealed skill verification."
            longDescription="Bridges the gap between academia and industry by turning **verified learning milestones** into secure, simulation-backed credentials. Employers see **real-world readiness**, not just self-reporting."
            image="/assets/feature-glass-4.png"
            variant="blue" 
            isExpanded={expandedPhase === 'nexcruit'}
            onToggle={() => togglePhase('nexcruit')}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ id, title, subtitle, description, detail, longDescription, image, videoSrc, variant, isExpanded, onToggle, isComingSoon }: any) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isPurple = variant === "purple";
  const gradientClasses = isPurple ? "from-[#8e76d9] to-[#6d4dc8]" : "from-[#3252C1] to-[#8E89F3]";

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => 
      part.startsWith('**') && part.endsWith('**') 
        ? <strong key={i} className={`font-extrabold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>{part.slice(2, -2)}</strong> 
        : part
    );
  };

  return (
    <div 
      className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden bg-white/80 backdrop-blur-2xl rounded-[45px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50 ${
        isExpanded ? 'p-10 md:p-16' : 'h-[280px] p-10 md:p-12 cursor-pointer hover:shadow-[0_40px_80px_rgba(109,77,200,0.12)]'
      }`}
      onClick={!isExpanded ? onToggle : undefined}
    >
      {/* Glass Ornament - Fixed Position and always present */}
      <div className={`absolute transition-all duration-1000 ease-out ${isExpanded ? 'right-[-100px] top-[-50px] opacity-20 scale-125' : 'right-[-20px] bottom-[-20px] opacity-100 scale-100'} w-[350px] md:w-[480px] pointer-events-none z-0`}>
         <img src={image} className="w-full h-auto object-contain" alt="" />
      </div>

      <div className="flex flex-col h-full relative z-10">
        {/* Header Section */}
        <div className="mb-4">
          <h3 className={`font-['DentonCondensed'] transition-all duration-500 ${isExpanded ? 'text-[80px] md:text-[95px]' : 'text-[65px] md:text-[75px]'} leading-[0.9] tracking-tighter bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
            {title}
          </h3>
          <p className={`font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent mt-1`}>
            {subtitle}
          </p>
          {isExpanded && id === 'axion' && (
             <p className="text-xl font-bold text-slate-400 italic mt-2 animate-in fade-in duration-500">Your Artificial <span className="text-[#6d4dc8]">Second Brain</span></p>
          )}
        </div>

        {/* Primary Content (Always Visible Description/Detail) */}
        <div className={`transition-all duration-500 ${isExpanded ? 'mb-12' : 'flex-grow flex flex-col justify-end'}`}>
          <div className="max-w-md pb-4">
            <p className="text-slate-900 font-bold text-xl md:text-2xl leading-tight mb-1">{description}</p>
            <p className={`font-semibold text-base bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>{detail}</p>
          </div>
          
          {!isExpanded && (
            <div className={`absolute right-12 bottom-12 p-4 rounded-full bg-gradient-to-r ${gradientClasses} text-white shadow-xl transition-transform hover:scale-110`}>
              <ArrowDown size={24} />
            </div>
          )}
        </div>

        {/* Expanded View Content */}
        {isExpanded && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* AXION & NEXCRUIT: Justified Narrative at TOP */}
            {(id === 'axion' || id === 'nexcruit') && (
              <div className="max-w-3xl text-slate-800 text-lg md:text-xl font-medium leading-relaxed text-justify">
                {renderDescription(longDescription)}
              </div>
            )}

            {/* SYPHER & CRITORA: Video FIRST */}
            {(id === 'sypher' || id === 'critora') && (
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-slate-900 shadow-2xl bg-black aspect-video max-w-[900px] mx-auto group">
                {!videoLoaded && <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900"><Loader2 className="w-10 h-10 text-white/50 animate-spin" /></div>}
                <video ref={videoRef} playsInline muted={isMuted} onCanPlayThrough={() => setVideoLoaded(true)} className="w-full h-full object-cover">
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button onClick={handlePlayPause} className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 hover:scale-110 active:scale-95 transition-all">
                    {isPlaying ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" className="ml-1" />}
                  </button>
                </div>
              </div>
            )}

            {/* SYPHER & CRITORA: Narrative SECOND */}
            {(id === 'sypher' || id === 'critora') && (
              <div className="max-w-3xl text-slate-800 text-lg md:text-xl font-medium leading-relaxed text-justify">
                {renderDescription(longDescription)}
              </div>
            )}

            {/* AXION: Feature Grid and Roadmap */}
            {id === 'axion' && (
              <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px]">
                  {['Adaptive Learning Pathways', 'Immersive Multi-Media', 'AI-Driven Retention', 'Knowledge Hierarchy'].map((f, i) => (
                    <div key={i} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-start gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradientClasses} text-white`}><CheckCircle2 size={20} /></div>
                      <div><p className="font-bold text-slate-900 mb-1">{f}</p><p className="text-sm text-slate-600">Precision mastery through AI cycles.</p></div>
                    </div>
                  ))}
                </div>
                {/* Roadmap Placeholder */}
                <div className="max-w-[800px] space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2"><Calendar size={20} /> Product Roadmap</h4>
                  <div><p className="text-sm font-bold text-purple-600">Q2 2027</p><p className="font-bold text-slate-800">Alpha Rollout (Forgetting Curve Engine)</p></div>
                  <div><p className="text-sm font-bold text-slate-400">Q3 2027</p><p className="font-bold text-slate-800">Core Retention Modules (L1-L2)</p></div>
                </div>
              </div>
            )}

            {/* NEXCRUIT: Simulation Cards */}
            {id === 'nexcruit' && (
              <div className="space-y-6 max-w-[900px]">
                 {['Simulation-Based Candidate Proof (AR/VR)', 'Avatar + Behavioural Performance Model', 'Verifiable Hiring Passport'].map((card, i) => (
                   <div key={i} className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{card}</h4>
                      <p className="text-blue-600 font-bold text-sm mb-4">Real-world readiness, not self-reporting</p>
                   </div>
                 ))}
              </div>
            )}

            {/* CTA and Close */}
            <div className="flex flex-col items-center gap-8 pt-8 relative">
              <button className={`px-14 py-5 bg-gradient-to-r ${gradientClasses} text-white rounded-full font-bold text-2xl shadow-2xl hover:scale-105 transition-all`}>
                {id === 'axion' ? 'Join the Waitlist' : 'Get a Demo'}
              </button>
              <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className={`absolute right-0 bottom-0 p-5 rounded-full bg-gradient-to-r ${gradientClasses} text-white shadow-2xl hover:scale-110 z-50`}><X size={28} strokeWidth={3} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;