import React from 'react';

const Future = () => {
  const stats = [
    { 
      label: "Industry-leading identification of\nAI-generated vs human-written text\n(vs ~80% industry average)", 
      value: "", 
      colSpan: "col-span-12 md:col-span-7", 
      variant: "purple-glow" 
    },
    { 
      label: "False Positive\nAccuracy", 
      value: "<0.2%", 
      colSpan: "col-span-12 md:col-span-5" 
    },
    { 
      label: "Alignment with Academic\nIntegrity Frameworks", 
      value: "100%", 
      colSpan: "col-span-12 md:col-span-5" 
    },
    { 
      label: "Full Document Analysis\nReal-time scanning of\n10,000+ word submissions", 
      value: "20-Sec", 
      colSpan: "col-span-12 md:col-span-7", 
      variant: "blue-glow" 
    },
    { 
      label: "Fewer Grade\nAppeals", 
      value: "80%", 
      colSpan: "col-span-12 md:col-span-4" 
    },
    { 
      label: "More Detailed Feedback", 
      value: "3x", 
      isSpecial: true, 
      colSpan: "col-span-12 md:col-span-4", 
      variant: "center-gradient" 
    },
    { 
      label: "Reduction in\nGrading Time", 
      value: "<75%", 
      colSpan: "col-span-12 md:col-span-4" 
    },
    { 
      label: "Feedback Turnaround\nImproves concept\nretention by +40%", 
      value: "<24-Hr", 
      colSpan: "col-span-12 md:col-span-5" 
    },
    { 
      label: "Saved Per Script\nProcessed", 
      value: "$12–$18", 
      colSpan: "col-span-12 md:col-span-7", 
      variant: "soft-glass" 
    },
    { 
      label: "Decreased\nLearning Time", 
      value: "40%", 
      colSpan: "col-span-12 md:col-span-6",
      variant: "bottom-left"
    },
    { 
      label: "Increased Learning\nEfficiency", 
      value: "3x", 
      colSpan: "col-span-12 md:col-span-6",
      variant: "bottom-right"
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-transparent font-['Urbanist'] overflow-hidden">
      {/* Background Decor Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-synaptaPurple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-synaptaBlue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1100px] mx-auto relative z-10">
        
        {/* Headline Restoration */}
        <div className="text-center mb-16">
          <h2 className="font-['DentonCondensed'] text-[75px] md:text-[95px] leading-[0.85] tracking-tighter text-slate-900">
            The Future of <span className="text-pastelPurple italic">Fair, Fast,</span> and <br />
            <span className="bg-gradient-to-r from-synaptaPurple to-synaptaBlue bg-clip-text text-transparent italic">Trusted Education.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-medium mt-8 max-w-2xl mx-auto leading-tight">
            AI-powered integrity and assessment that protects reputation, saves time, and improves student outcomes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          {stats.map((stat, index) => (
            <StatPill key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatPill = ({ label, value, sublabel, isSpecial, colSpan, variant }: any) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'purple-glow': return "bg-gradient-to-br from-pastelPurple/20 via-white/80 to-white/80";
      case 'blue-glow': return "bg-gradient-to-bl from-synaptaBlue/15 via-white/80 to-white/80";
      case 'center-gradient': return "bg-gradient-to-t from-pastelLavender/20 via-white/80 to-white/80";
      case 'bottom-left': return "bg-gradient-to-tr from-synaptaPurple/10 via-white/80 to-white/80";
      case 'bottom-right': return "bg-gradient-to-tl from-synaptaBlue/10 via-white/80 to-white/80";
      default: return "bg-white/80";
    }
  };

  return (
    <div className={`
      ${colSpan} ${getVariantStyles()}
      backdrop-blur-2xl border border-white/90 rounded-[35px] 
      p-5 md:p-6 flex flex-col items-center justify-center text-center
      shadow-[0_10px_40px_rgba(109,77,200,0.04)]
      hover:-translate-y-1 transition-all duration-500 min-h-[180px]
    `}>
      {isSpecial ? (
        <>
          <span className="font-['DentonCondensed'] text-[80px] md:text-[100px] leading-none tracking-tight text-slate-900">
            {value}
          </span>
          <p className="text-slate-800 font-bold text-lg md:text-xl leading-tight mt-1">
            {sublabel}
          </p>
        </>
      ) : (
        <>
          {value && (
            <span className="font-['DentonCondensed'] text-[65px] md:text-[80px] leading-none tracking-tight text-slate-900">
              {value}
            </span>
          )}
          <p className="text-slate-800 font-bold text-sm md:text-[15px] leading-[1.2] whitespace-pre-line mt-2">
            {label}
          </p>
        </>
      )}
    </div>
  );
};

export default Future;