import React from 'react';

const BentoGridSec = () => {
  const stats = [
    { label: "Industry-leading identification of AI-generated vs human-written text (vs ~80% industry average)", value: "", colSpan: "col-span-12 md:col-span-7", bg: "bg-gradient-to-br from-purple-100/30 to-transparent" },
    { label: "False Positive Accuracy", value: "<0.2%", colSpan: "col-span-12 md:col-span-5" },
    { label: "Alignment with Academic Integrity Frameworks", value: "100%", colSpan: "col-span-12 md:col-span-5" },
    { label: "Full Document Analysis\nReal-time scanning of 10,000+ word submissions", value: "20-Second", colSpan: "col-span-12 md:col-span-7", bg: "bg-gradient-to-bl from-blue-100/20 to-transparent" },
    { label: "Fewer Grade Appeals", value: "80%", colSpan: "col-span-12 md:col-span-4" },
    { label: "More Detailed Feedback", value: "3x", colSpan: "col-span-12 md:col-span-4", bg: "bg-gradient-to-t from-blue-100/30 to-transparent" },
    { label: "Reduction in Grading Time", value: "<75%", colSpan: "col-span-12 md:col-span-4" },
    { label: "Feedback Turnaround\nImproves concept retention by +40%", value: "<24-Hour", colSpan: "col-span-12 md:col-span-5" },
    { label: "Saved Per Script", value: "$12–$18", colSpan: "col-span-12 md:col-span-7", bg: "bg-gradient-to-tr from-purple-100/20 to-transparent" },
    { label: "Decreased Learning Time", value: "40%", colSpan: "col-span-12 md:col-span-6" },
    { label: "Increased Learning Efficiency", value: "3x", colSpan: "col-span-12 md:col-span-6" },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-transparent font-sans">
      <div className="container max-w-[1100px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-[70px] md:text-[90px] leading-[0.9] tracking-tight text-slate-900">
            The Future of <span className="text-purple-400 italic font-medium">Fair, Fast,</span> and <br />
            <span className="text-indigo-600">Trusted Education.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium mt-6 max-w-2xl mx-auto tracking-tight">
            AI-powered integrity and assessment that protects reputation, saves time, and improves student outcomes.
          </p>
        </div>

        {/* Bento-style Metrics Grid */}
        <div className="grid grid-cols-12 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`
                ${stat.colSpan} ${stat.bg || 'bg-white/60'} 
                backdrop-blur-xl border border-slate-100 rounded-[40px] 
                p-10 flex flex-col items-center justify-center text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.02)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]
                hover:translate-y-[-2px] transition-all duration-500
              `}
            >
              {stat.value && (
                <span className="font-serif text-[60px] md:text-[75px] leading-none text-slate-900 mb-3 tracking-tighter">
                  {stat.value}
                </span>
              )}
              <p className="text-slate-800 font-bold text-[13px] uppercase tracking-[0.15em] leading-snug whitespace-pre-line max-w-[280px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGridSec;