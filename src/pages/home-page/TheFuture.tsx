import React from 'react';

const StatPill = ({ label, value, sublabel, isSpecial, colSpan, variant }: any) => {
  // Map the variants to your actual PNG file paths
  const getBackgroundImage = () => {
    switch(variant) {
      case 'purple-glow': return "/assets/purple-glow.png";
      case 'blue-glow': return "/assets/blue-glow.png";
      case 'blue-stripes': return "/assets/blue-stripes.png";
      case 'center-gradient': return "/assets/center-gradient.png";
      case 'soft-glass': return "/assets/soft-glass.png";
      default: return null;
    }
  };

  const bgImage = getBackgroundImage();

  return (
    <div className={`
      ${colSpan} 
      relative overflow-hidden bg-white/60
      backdrop-blur-2xl border border-white/90 rounded-[35px] 
      p-5 md:p-6 flex flex-col items-center justify-center text-center
      shadow-[0_10px_40px_rgba(109,77,200,0.04)]
      hover:-translate-y-1 transition-all duration-500 min-h-[180px]
    `}>
      
      {/* Background PNG Layer */}
      {bgImage && (
        <img 
          src={bgImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60" 
        />
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {isSpecial ? (
          <>
            <span className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-none tracking-tight text-slate-900">
              {value}
            </span>
            <p className="text-slate-800 font-bold text-lg md:text-xl leading-tight mt-1 whitespace-pre-line">
              {label}
            </p>
          </>
        ) : (
          <>
            {value && (
              <span className="font-['DentonCondensed'] text-[65px] md:text-[80px] leading-none tracking-tight text-slate-900">
                {value}
              </span>
            )}
            <p className="text-slate-800 font-bold text-sm md:text-[15px] leading-[1.2] whitespace-pre-line mt-2 max-w-[240px]">
              {label}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const Future = () => {
  const stats = [
    { label: "Industry-leading identification of\nAI-generated vs human-written text\n(vs ~80% industry average)", value: "", colSpan: "col-span-12 md:col-span-7", variant: "purple-glow" },
    { label: "False Positive\nAccuracy", value: "<0.2%", colSpan: "col-span-12 md:col-span-5" },
    { label: "Alignment with Academic\nIntegrity Frameworks", value: "100%", colSpan: "col-span-12 md:col-span-5" },
    { label: "Full Document Analysis\nReal-time scanning of\n10,000+ word submissions", value: "20-Sec", colSpan: "col-span-12 md:col-span-7", variant: "blue-glow" },
    { label: "Fewer Grade\nAppeals", value: "80%", colSpan: "col-span-12 md:col-span-4", variant: "blue-stripes" },
    { label: "More Detailed Feedback", value: "3x", isSpecial: true, colSpan: "col-span-12 md:col-span-4", variant: "center-gradient" },
    { label: "Reduction in\nGrading Time", value: "<75%", colSpan: "col-span-12 md:col-span-4" },
    { label: "Feedback Turnaround\nImproves concept\nretention by +40%", value: "<24-Hr", colSpan: "col-span-12 md:col-span-5" },
    { label: "Saved Per Script\nProcessed", value: "$12–$18", colSpan: "col-span-12 md:col-span-7", variant: "soft-glass" },
    { label: "Decreased\nLearning Time", value: "40%", colSpan: "col-span-12 md:col-span-6" },
    { label: "Increased Learning\nEfficiency", value: "3x", colSpan: "col-span-12 md:col-span-6" },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-transparent font-['Urbanist'] overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['DentonCondensed'] text-[75px] md:text-[95px] leading-[0.95] tracking-tighter text-slate-900 font-normal py-4">
            The Future of <span className="text-[#b7a4ed] italic">Fair, Fast,</span> and <br />
            <span className="bg-gradient-to-r from-[#6d4dc8] to-[#3c59cf] bg-clip-text text-transparent italic inline-block py-2">
              Trusted Education.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-medium mt-8 max-w-2xl mx-auto leading-tight">
            AI-powered integrity and assessment that protects reputation, saves time, and improves student outcomes.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {stats.map((stat, index) => (
            <StatPill key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;