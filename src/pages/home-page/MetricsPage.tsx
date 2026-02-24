import React from 'react';
import GlassCard from '@components/ui/GlassCard';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: "Industry-leading identification of AI-generated vs human-written text",
    subtitle: "Real-time + 100% industry coverage",
    size: "col-span-12 md:col-span-8",
    gradient: "bg-gradient-to-r from-purple-100/50 to-white",
  },
  {
    value: "<0.2%",
    label: "False Positive Accuracy",
    size: "col-span-12 md:col-span-4",
  },
  {
    value: "100%",
    label: "Alignment with Academic Integrity Frameworks",
    size: "col-span-6 md:col-span-3",
  },
  {
    value: "20-Second",
    label: "Full Instance Analysis",
    subtext: "Real-time scanning of 10,000+ word submissions",
    size: "col-span-12 md:col-span-6",
    gradient: "bg-blue-50/50",
  },
  {
    value: "80%",
    label: "Faster Feedback Approval",
    size: "col-span-6 md:col-span-3",
  },
  {
    value: "3x",
    label: "More Detailed Feedback",
    size: "col-span-4 md:col-span-3",
    gradient: "bg-purple-50/50",
  },
  {
    value: "<75%",
    label: "Reduction in Grading Time",
    size: "col-span-8 md:col-span-6",
  },
  {
    value: "<24-Hour",
    label: "Feedback Turnaround",
    subtext: "Improves concept retention by +40%",
    size: "col-span-12 md:col-span-5",
  },
  {
    value: "$12–$18",
    label: "Saved Per Script",
    size: "col-span-12 md:col-span-7",
  },
];

export default function MetricsPage() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
          The Future of <span className="text-[#4F39F4] font-medium">Fair, Fast, and</span> <br />
          <span className="text-[#7C5CFF] italic">Trusted Education.</span>
        </h2>
        <p className="text-slate-500 mt-6 max-w-xl mx-auto">
          AI-powered integrity and assessment that protects reputation, saves time, and improves student outcomes.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-fr">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${m.size}`}
          >
            <GlassCard className={`h-full flex flex-col justify-center p-8 text-center md:text-left ${m.gradient || ''}`}>
              {m.title && <p className="text-lg font-semibold text-slate-800 leading-snug">{m.title}</p>}
              {m.value && <span className="text-3xl md:text-4xl font-bold text-[#4F39F4] mb-1">{m.value}</span>}
              {m.label && <span className="text-xs uppercase tracking-[0.15em] font-bold text-slate-400">{m.label}</span>}
              {m.subtext && <p className="text-[10px] text-slate-500 mt-2 font-medium">{m.subtext}</p>}
            </GlassCard>
          </motion.div>
        ))}

        {/* Bottom Small Visual Metrics */}
        <GlassCard className="col-span-6 flex flex-col items-center justify-center p-6 border-none bg-gradient-to-b from-purple-50 to-transparent">
             <span className="text-3xl font-bold text-purple-600">40%</span>
             <span className="text-[10px] uppercase font-bold text-slate-400">Decreased Learning Time</span>
        </GlassCard>
        <GlassCard className="col-span-6 flex flex-col items-center justify-center p-6 border-none bg-gradient-to-b from-purple-50 to-transparent">
             <span className="text-3xl font-bold text-purple-600">3x</span>
             <span className="text-[10px] uppercase font-bold text-slate-400">Increased Learning Efficiency</span>
        </GlassCard>
      </div>
    </section>
  );
}