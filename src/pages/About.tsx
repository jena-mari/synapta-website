import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] text-[#1D1D1F] selection:bg-purple-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-b from-[#E0D7FF] via-[#F3E8FF] to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-serif mb-6 italic text-[#4A3AFF]">
            Born in the <br /> Library at 2AM
          </motion.h1>
          <motion.p {...fadeIn} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The gap between how learning is designed and how it actually happens became <strong>impossible to ignore.</strong>
          </motion.p>
        </div>
        
        {/* Abstract wavy lines background placeholder */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" stroke="#A78BFA" fill="transparent" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* --- MISSION STATEMENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-serif mb-12">
            Why We Created <span className="italic text-[#4A3AFF]">Synapta.</span>
          </motion.h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto italic border-l-4 border-purple-200 pl-8 text-left">
            <p>"While juggling six university units alongside full-time work, I hit a wall..."</p>
            <p>I realised the system wasn't broken; it was just rigid. It policed attendance rather than fuelling progress.</p>
          </div>
          
          <div className="mt-12">
            <span className="bg-[#4A3AFF] text-white px-6 py-2 rounded-full text-sm font-medium">
              Aleksa Cvetkovic, Founder
            </span>
          </div>
        </div>
      </section>

      {/* --- OLD WAY VS SYNAPTA WAY (Cards) --- */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-serif mb-4">
            From <span className="text-purple-800">Policing</span> to <span className="text-[#4A3AFF]">Propelling</span>
          </h2>
          <div className="flex justify-center mb-16">
             <div className="bg-gray-200 p-1 rounded-full flex text-xs font-bold uppercase tracking-widest">
                <span className="px-4 py-2">The Old Way</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm text-[#4A3AFF]">The Synapta Way</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Surveillance', 'Detection', 'Rules'].map((title, i) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                  {i === 0 ? '🛡️' : i === 1 ? '🔍' : '📜'}
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-tighter">{title}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-500 italic">
            We don't just <strong>catch cheaters</strong>. We <strong>save dropouts</strong>.
          </p>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">Architects of <span className="italic">Intelligence</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Aleksa Cvetkovic", role: "Founder", img: "https://via.placeholder.com/400x500" },
              { name: "Ted Wong", role: "Engineering", img: "https://via.placeholder.com/400x500" },
              { name: "Steven Nguyen", role: "Development", img: "https://via.placeholder.com/400x500" }
            ].map((member, i) => (
              <motion.div key={i} {...fadeIn} className="text-center">
                <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6 bg-gradient-to-t from-purple-100 to-white text-center">
        <motion.h2 {...fadeIn} className="text-6xl md:text-8xl font-serif mb-8 tracking-tighter">
          Be the <span className="text-[#4A3AFF]">Catalyst.</span>
        </motion.h2>
        <button className="bg-[#4A3AFF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
          Created by Students, for Students
        </button>
      </section>

    </div>
  );
};

export default About;