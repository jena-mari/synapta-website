import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#6d4dc8] rounded-[50px] p-12 md:p-24 overflow-hidden shadow-[0_40px_100px_rgba(109,77,200,0.3)]">
          
          {/* Abstract Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />

          <div className="relative z-10 text-center flex flex-col items-center">
            <h2 className="font-['DentonCondensed'] text-[60px] md:text-[90px] leading-[0.9] text-white mb-8 tracking-tighter">
              Ready to build the <br />
              <span className="italic opacity-90">future</span> of education?
            </h2>
            
            <p className="text-purple-100 text-lg md:text-xl max-w-xl mb-12 font-medium tracking-tight">
              Join leading institutions using Synapta to protect integrity 
               and supercharge learning efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#6d4dc8] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;