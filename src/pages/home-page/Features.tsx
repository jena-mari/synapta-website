import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@components/ui/GlassCard';

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
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      {/* Part 1: The Problem Grid */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900">The <span className="italic">Problem</span></h2>
          <p className="text-slate-500 mt-4">Education is built for the top 10%. The rest are overwhelmed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemStats.map((stat, i) => (
            <GlassCard key={i} className="p-8 flex flex-col justify-between min-h-[200px]">
              <div className="flex justify-between items-start">
                <span className="text-4xl font-bold text-purple-900">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">
                  {stat.label}
                </span>
              </div>
              <p className="text-slate-600 text-sm mt-4 leading-relaxed">{stat.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Part 2: The 4-Phase Solution */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-16">The <span className="text-purple-600">4-Phase</span> Solution</h2>
        <div className="space-y-4">
          {phases.map((phase) => (
            <motion.div 
              key={phase.id}
              whileHover={{ x: 10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex justify-between items-center group cursor-pointer transition-all hover:shadow-xl hover:shadow-purple-100"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#4F39F4] tracking-tight">{phase.id}</h3>
                <p className="text-[#7C5CFF] text-xs font-bold tracking-[0.2em] mb-2">{phase.title}</p>
                <p className="text-slate-500 text-sm">{phase.subtitle}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#4F39F4] group-hover:text-white transition-all">
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}