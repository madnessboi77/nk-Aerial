import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Skills() {
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current, 
      { strokeDasharray: 500, strokeDashoffset: 500 },
      { 
        strokeDashoffset: 0, 
        duration: 2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const points = [
    "Thoughtful Planning",
    "Modern Architecture",
    "Quality Construction",
    "Customer Confidence"
  ];

  return (
    <section id="why-aerial" className="py-32 lg:py-48 bg-[#000000] relative overflow-hidden">
      <div className="w-full px-[60px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <SectionHeading number="04" title="Why Aerial" />
            <Reveal delay={0.1}>
              <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-16">
                We create modern properties shaped by planning, precision, and long-term <span className="italic text-monolit-accent">value</span>.
              </h3>
            </Reveal>

            <div className="relative">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-10 border-l border-white/10 pl-8 lg:pl-16 relative">
                  {/* Subtle scribble overlay */}
                  <svg className="absolute -left-12 top-0 w-8 h-full opacity-40" viewBox="0 0 20 200" preserveAspectRatio="none">
                    <path ref={lineRef} d="M10,0 Q15,50 5,100 T15,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-monolit-accent" />
                  </svg>
                  
                  {points.map((point, idx) => (
                    <div key={idx} className="group relative">
                      <div className="absolute -left-[37px] lg:-left-[69px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-monolit-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex items-baseline gap-6">
                        <span className="text-[10px] tracking-[0.2em] font-bold text-monolit-accent">
                          0{idx + 1}
                        </span>
                        <h4 className="text-lg lg:text-xl uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors duration-500 font-light">
                          {point}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <Reveal direction="left" delay={0.3} className="relative z-10 ml-auto w-full max-w-[600px] aspect-[3/4] lg:aspect-[4/5] bg-monolit-card overflow-hidden">
              <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1481253127861-534498168948?w=1200&q=80" 
                alt="Architecture structural detail" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten hover:mix-blend-normal hover:grayscale-0 hover:scale-[1.03] duration-[1.5s] transition-all ease-out"
              />
            </Reveal>
            
            {/* Blueprint deco box behind image */}
            <Reveal direction="up" delay={0.4} className="hidden lg:block absolute -top-12 -right-12 w-2/3 h-2/3 border border-white/10 z-0">
               <div className="w-full h-full opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
