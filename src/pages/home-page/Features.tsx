import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../app/components/ui/GlassCard';

const problemStats = [
  { label: 'Retention Issues', value: '25%+', desc: 'First-year students don\'t return—driving nearly $9B in lost tuition revenue.' },
  { label: 'Operational Risk', value: '70%', desc: 'CEOs identify human capital deficiency as their number one strategic risk.' },
  { label: 'Skill Mismatch', value: '86%', desc: 'Employers see generation Z as the most unmotivated and hardest to work with.' },
  { label: 'Placement Rate', value: '20%+', desc: 'Job seekers feeling they don\'t have the skills required for the current market.' }
];

const phases = [
  { id: 'SYPHER', title: 'INTEGRITY', subtitle: 'Beyond text matching. We map authorship fingerprints.' },
  { id: 'CRITORA', title: 'ASSESSMENT', subtitle: 'Grading at the speed of thought.' },
  { id: 'AXION', title: 'RETENTION', subtitle: 'The AI-First Second Brain.' },
  { id: 'NEXCRUIT', title: 'EMPLOYMENT', subtitle: 'The seamless hiring support.' }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto space-y-48">
      
      {/* --- SECTION 1: PROBLEM GRID --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-20">
          <motion.h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
            The <span className="italic text-[#4F39F4]">Problem</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Education is built for the top 10%. The rest are overwhelmed by a system that hasn't changed in a century.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemStats.map((stat, i) => (
            <GlassCard key={i} className="group p-10 flex flex-col justify-between hover:border-purple-300 transition-colors duration-500">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.3em] font-black text-purple-400">
                    {stat.label}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-base mt-8 leading-relaxed font-light">
                {stat.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION 2: THE 4-PHASE SOLUTION --- */}
      <div className="relative">
        {/* Decorative Background Blur */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-5xl md:text-6xl font-serif mb-20 leading-tight">
            The <span className="italic text-[#4F39F4]">4-Phase</span> Solution
          </h2>
          
          <div className="space-y-6">
            {phases.map((phase) => (
              <motion.div 
                key={phase.id}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative overflow-hidden p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <p className="text-[#7C5CFF] text-[10px] font-black tracking-[0.4em] mb-1">
                    {phase.title}
                  </p>
                  <h3 className="text-4xl font-bold text-[#1A1A1A] tracking-tighter mb-2">
                    {phase.id}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    {phase.subtitle}
                  </p>
                </div>

                <div className="relative z-10 mt-6 md:mt-0 w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#4F39F4] group-hover:border-[#4F39F4] group-hover:text-white transition-all duration-300">
                  <svg 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}