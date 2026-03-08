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

  // Intersection Observer to Lazy-Load the Video
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
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden font-['Urbanist']">
      <div className="container mx-auto px-4">
        
        {/* Header - High Opacity & No Clipping */}
        <div className="text-center mb-20">
          <h2 className="font-['DentonCondensed'] text-[75px] md:text-[95px] leading-[0.95] tracking-tighter text-slate-900 font-normal py-4">
            Why Choose <span className="bg-gradient-to-r from-[#b7a4ed] to-[#8e76d9] bg-clip-text text-transparent italic inline-block py-2">Synapta?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-800 font-semibold mt-4 max-w-2xl mx-auto leading-tight tracking-tight">
            We collaborate with leading, trusted organisations to bring you best-in-class products and learning solutions.
          </p>
        </div>

        {/* Carousel Logic */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto h-[620px]">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform w-full max-w-[520px] 
                  ${isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-30 scale-90 blur-[4px]'}
                  ${isPrev ? '-translate-x-[75%] lg:-translate-x-[95%]' : ''}
                  ${isNext ? 'translate-x-[75%] lg:translate-x-[95%]' : ''}
                  ${isActive ? 'translate-x-0' : ''}
                `}
              >
                <div className={`bg-gradient-to-b from-white to-slate-50/50 rounded-[45px] p-10 border-[3px] shadow-[0_30px_70px_rgba(109,77,200,0.12)] h-[580px] flex flex-col justify-between transition-colors
                  ${isActive ? 'border-[#b7a4ed]/40' : 'border-slate-100'}
                `}>
                  
                  {/* Media Section */}
                  <div className="rounded-[30px] overflow-hidden h-64 bg-slate-100 relative group shadow-inner">
                    {item.type === 'video' ? (
                      <div className="w-full h-full relative bg-slate-200">
                        {videoLoading && (
                          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-100">
                            <Loader2 className="w-10 h-10 text-[#6d4dc8] animate-spin mb-2" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Preparing <br/> Interview.MOV</span>
                          </div>
                        )}
                        {/* Only render video if in view to save data/RAM */}
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
                        {!videoLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
                              <Play fill="currentColor" size={24} className="ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="text-left mt-8 flex-grow">
                    {item.type === 'video' && <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{item.title}</h3>}
                    <p className={`text-slate-800 font-semibold leading-relaxed tracking-tight ${item.type === 'video' ? 'text-sm opacity-80' : 'text-[17px]'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Footer - Final Gradient Polish */}
                  <div className="flex justify-between items-end border-t border-slate-100 pt-6">
                    <div className="space-y-1">
                      <h4 className="bg-gradient-to-r from-[#6d4dc8] to-[#3c59cf] bg-clip-text text-transparent font-bold text-xl leading-none">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 font-bold text-sm">{item.role}</p>
                      {item.subtext && <p className="text-slate-400 text-[11px] font-medium leading-tight max-w-[200px]">{item.subtext}</p>}
                    </div>
                    
                    <button className="relative group overflow-hidden bg-gradient-to-r from-[#b7a4ed] to-[#8e76d9] p-[1.5px] rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                      <div className="bg-white group-hover:bg-transparent transition-colors px-6 py-2.5 rounded-full">
                        <span className="bg-gradient-to-r from-[#6d4dc8] to-[#8e76d9] bg-clip-text text-transparent group-hover:text-white font-bold text-[11px] uppercase tracking-wider transition-colors">
                          Read More
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation - Pill Styled Dots */}
        <div className="flex items-center justify-center gap-10 mt-12">
          <button onClick={prevSlide} className="p-2 text-slate-300 hover:text-[#6d4dc8] transition-all hover:-translate-x-1">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <div className="flex items-center gap-4">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === activeIndex 
                  ? 'w-10 h-2.5 bg-gradient-to-r from-[#6d4dc8] to-[#b7a4ed] shadow-md' 
                  : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-2 text-slate-300 hover:text-[#6d4dc8] transition-all hover:translate-x-1">
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;