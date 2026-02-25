import React from 'react';
import Button from '../../app/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#7C5CFF] to-[#4F39F4] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-300">
        
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to Amplify <br />
            <span className="italic font-light">Learning?</span>
          </h2>
          <p className="text-purple-100 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Join the institutions transforming the educational journey from integrity to employment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#4F39F4] hover:bg-slate-50 px-10 py-4 shadow-xl"
            >
              Get Started for Free
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          The Future of Fair, Fast, and Trusted Education.
        </p>
      </div>
    </section>
  );
}