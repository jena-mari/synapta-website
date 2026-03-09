import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Loader2 } from 'lucide-react';

const testimonials = [
  {
    type: 'video',
    src: "https://youtu.be/skKuxzNQAMA",
    title: "What is Synapta?",
    quote: "A unified integrity + marking + retention + hiring passport platform.",
    name: "Aleksa Cvetkovic",
    role: "Founder & CEO of Synapta",
    variant: 'video'
  },
  {
    type: 'image',
    image: "/assets/yifei.png",
    quote: "SYNAPTA is extensively engineered to sit at the forefront of transforming education—bridging integrity, assessment, and real learning outcomes in one platform.",
    name: "Yifei Ren",
    role: "Curtin Lecturer",
    subtext: "PhD, Telecommunications Engineering, Curtin University",
    variant: 'purple'
  },
  {
    type: 'image',
    image: "/assets/mosharraf.png",
    quote: "The Artificial Second Brain gives lecturers real-time visibility into concept gaps—so we can fix inefficiencies before they show up in exam results and students fall behind.",
    name: "Dr. Mosharraf Hossain",
    role: "Lecturer of Finance",
    subtext: "The University of Western Australia (UWA)",
    variant: 'blue'
  },
  {
    type: 'image',
    image: "/assets/gianluca.png",
    quote: "SYNAPTA's assessment and progression feedback shows exactly where I went wrong across submissions—far beyond the brief tutor comments—so I know what to improve and why.",
    name: "Gianluca Bonfiglio",
    role: "3rd Year Student",
    subtext: "Curtin Law School / Curtin University",
    variant: 'purple'
  }
];

const Choose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden font-['Urbanist']">
      <div className="container mx-auto px-4">
        
        {/* Header - Increased Opacity and Fixed Clipping */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-['DentonCondensed'] text-[75px] md:text-[95px] leading-[1.1] tracking-tighter text-slate-900 font-normal">
            Why Choose
            <span className="relative bg-gradient-to-r from-[#8e76d9] to-[#6d4dc8] bg-clip-text text-transparent italic inline-block px-6 pb-4 -mb-4">
            Synapta?
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-800 font-bold mt-2 max-w-xl mx-auto leading-snug tracking-tight opacity-100">
            We collaborate with leading, trusted organisations to bring you <br className="hidden md:block" />
            best-in-class products and learning solutions.
          </p>
        </div>

        {/* Carousel Logic */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto h-[580px] md:h-[620px]">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform w-full max-w-[500px] 
                  ${isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-20 scale-90 blur-[6px]'}
                  ${isPrev ? '-translate-x-[70%] lg:-translate-x-[90%]' : ''}
                  ${isNext ? 'translate-x-[70%] lg:translate-x-[90%]' : ''}
                  ${isActive ? 'translate-x-0' : ''}
                `}
              >
                <div className={`bg-white rounded-[40px] p-8 md:p-10 border-[2px] shadow-[0_25px_60px_rgba(109,77,200,0.1)] h-[540px] md:h-[580px] flex flex-col justify-between transition-all
                  ${isActive ? 'border-[#b7a4ed]/50' : 'border-slate-50'}
                `}>
                  
                  {/* Media Section */}
                  <div className="rounded-[28px] overflow-hidden h-56 md:h-64 bg-slate-100 relative group shadow-inner">
                    {item.type === 'video' ? (
                      <div className="w-full h-full relative bg-slate-200">
                        {videoLoading && (
                          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-100">
                            <Loader2 className="w-8 h-8 text-[#6d4dc8] animate-spin mb-2" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Loading Interview</span>
                          </div>
                        )}
                        {isInView && (
                          <video 
                            src={item.src} 
                            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoading ? 'opacity-0' : 'opacity-100'}`}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            onCanPlayThrough={() => setVideoLoading(false)}
                          />
                        )}
                      </div>
                    ) : (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="text-left mt-6 md:mt-8 flex-grow">
                    {item.type === 'video' && <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">{item.title}</h3>}
                    <p className={`text-slate-800 font-bold leading-relaxed tracking-tight ${item.type === 'video' ? 'text-sm' : 'text-base md:text-[17px]'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end border-t border-slate-50 pt-6">
                    <div className="space-y-0.5">
                      <h4 className="bg-gradient-to-r from-[#6d4dc8] to-[#3c59cf] bg-clip-text text-transparent font-bold text-lg md:text-xl leading-none">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 font-bold text-xs md:text-sm">{item.role}</p>
                      {item.subtext && <p className="text-slate-400 text-[10px] font-medium leading-tight max-w-[180px]">{item.subtext}</p>}
                    </div>
                    
                    <button className="bg-gradient-to-r from-[#6d4dc8] to-[#8e76d9] text-white px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider hover:shadow-lg transition-all active:scale-95">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button onClick={prevSlide} className="text-slate-300 hover:text-[#6d4dc8] transition-colors">
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>
          
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex 
                  ? 'w-8 h-2 bg-[#6d4dc8]' 
                  : 'w-2 h-2 bg-slate-200'
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="text-slate-300 hover:text-[#6d4dc8] transition-colors">
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;