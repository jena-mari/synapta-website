import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    title: "Sypher",
    subtitle: "AI Plagiarism Detection",
    side: "right",
    items: [
      { title: "Advanced Plagiarism Detector", desc: "Sypher utilizes advanced AI and machine learning to detect various types of plagiarism." },
      { title: "Comprehensive Paraphrasing Detection", desc: "Sypher utilizes cutting edge AI to identify sophisticated paraphrasing techniques." },
      { title: "AI Signature Detection", desc: "Sypher identifies advanced patterns to identify unique patterns in AI-generated text." },
      { title: "Lexical & Semantic Analysis", desc: "Sypher examines factual and semantic analysis to detect both syntactical and conceptual similarities." },
      { title: "High-Order Obfuscation Detection", desc: "Sypher identifies sophisticated content manipulation." }
    ]
  },
  {
    phase: "Phase 2",
    title: "Critora",
    subtitle: "AI-Powered Academic Orientation",
    side: "left",
    items: [
      { title: "Comprehensive Assessment Marking", desc: "Critora utilizes advanced AI to upgrade diverse assessments with precision and consistency." },
      { title: "Subject-Specific Adaptations", desc: "Critora adapts to diverse academic fields including STEM and medical studies." },
      { title: "Interactive Analysis of Marked Reports", desc: "Students can access AI-driven interactive dashboards for detailed grading insights." },
      { title: "Advanced Feedback Mechanism", desc: "Critora provides detailed feedback for learning strengths and areas for improvement." },
      { title: "Fail-Safe Mechanism", desc: "Critora ensures accuracy and fairness through a multi-layered system." }
    ]
  },
  // Add Phase 3 (Axion) and Phase 4 (Nexcruit) following the same pattern...
];

const RoadmapItem = ({ title, desc, colorClass }: { title: string, desc: string, colorClass: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-5 mb-4 rounded-2xl border border-white/40 shadow-sm backdrop-blur-sm ${colorClass}`}
  >
    <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
    <p className="text-xs leading-relaxed text-slate-600">{desc}</p>
  </motion.div>
);

export default function Roadmap() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif italic text-slate-900">The Synapta</h1>
          <h2 className="text-6xl font-bold text-[#A855F7] mt-[-10px]">Roadmap</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block" />

          {phases.map((phase, pIdx) => (
            <div key={pIdx} className={`relative flex flex-col md:flex-row items-center mb-32 ${phase.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="w-full md:w-1/2 px-4 md:px-12">
                <div className={`flex items-center gap-4 mb-6 ${phase.side === 'left' ? 'md:justify-end' : ''}`}>
                  {phase.side === 'right' && <span className="px-4 py-1 bg-[#4F39F4] text-white rounded-full text-xs font-bold">{phase.phase}</span>}
                  <h3 className="text-4xl font-bold text-[#4F39F4]">{phase.title}</h3>
                  {phase.side === 'left' && <span className="px-4 py-1 bg-[#A855F7] text-white rounded-full text-xs font-bold">{phase.phase}</span>}
                </div>
                
                {phase.items.map((item, iIdx) => (
                  <RoadmapItem 
                    key={iIdx} 
                    title={item.title} 
                    desc={item.desc} 
                    colorClass={phase.side === 'right' ? 'bg-indigo-50/80' : 'bg-purple-50/80'}
                  />
                ))}
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 border-4 border-white shadow hidden md:block" />

              {/* Decorative Image Side */}
              <div className="w-full md:w-1/2 flex justify-center p-8">
                {/* Replace with your actual asset path */}
                <div className="w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50 absolute -z-10" />
                <div className="text-slate-300 italic">[Organic 3D Shape Asset]</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}