import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    type: 'video',
    src: "/assets/Interview.MOV", 
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

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-['DentonCondensed'] text-[75px] md:text-[95px] leading-[0.85] tracking-tighter text-slate-900 font-normal">
            Why Choose <span className="bg-gradient-to-r from-[#b7a4ed] to-[#8e76d9] bg-clip-text text-transparent italic inline-block">Synapta?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-medium mt-6 max-w-2xl mx-auto leading-tight">
            We collaborate with leading, trusted organisations to bring you best-in-class products and learning solutions.
          </p>
        </div>

        {/* Carousel Logic */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto h-[600px]">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform w-full max-w-[520px] 
                  ${isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-30 scale-90 blur-[2px]'}
                  ${isPrev ? '-translate-x-[70%] lg:-translate-x-[90%]' : ''}
                  ${isNext ? 'translate-x-[70%] lg:translate-x-[90%]' : ''}
                  ${isActive ? 'translate-x-0' : ''}
                `}
              >
                <div className={`bg-white rounded-[40px] p-8 border-[3px] shadow-2xl h-[550px] flex flex-col justify-between
                  ${isActive ? 'border-[#b7a4ed]/40' : 'border-slate-100'}
                `}>
                  
                  {/* Media Section */}
                  <div className="rounded-[25px] overflow-hidden h-60 bg-slate-100 relative group">
                    {item.type === 'video' ? (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200">
                        {/* Video Thumbnail/Icon */}
                        <div className="w-16 h-16 bg-[#6d4dc8] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                          <Play fill="currentColor" size={24} className="ml-1" />
                        </div>
                        <p className="absolute bottom-4 left-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Interview.MOV</p>
                      </div>
                    ) : (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="text-left mt-6 flex-grow">
                    {item.type === 'video' && <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>}
                    <p className={`text-slate-900 font-bold leading-snug mb-6 ${item.type === 'video' ? 'text-sm' : 'text-base'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="flex justify-between items-end border-t border-slate-50 pt-4">
                    <div>
                      <h4 className="text-[#6d4dc8] font-bold text-lg leading-none">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 font-semibold text-sm mt-1">{item.role}</p>
                      {item.subtext && <p className="text-slate-400 text-[10px] mt-1 leading-tight">{item.subtext}</p>}
                    </div>
                    <button className="bg-[#b7a4ed] text-white px-5 py-2 rounded-full text-[10px] font-bold hover:bg-[#6d4dc8] transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button onClick={prevSlide} className="text-slate-300 hover:text-[#6d4dc8] transition-all hover:scale-125">
            <ChevronLeft size={44} strokeWidth={1.5} />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#6d4dc8] w-8' : 'bg-slate-200'}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="text-slate-300 hover:text-[#6d4dc8] transition-all hover:scale-125">
            <ChevronRight size={44} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;