import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    title: 'Consultation',
    description: 'We begin by understanding your vision, constraints, and long-term goals for the property.'
  },
  {
    title: 'Transparent Documentation',
    description: 'All legal, compliance, and architectural documentation is handled with absolute clarity.'
  },
  {
    title: 'Construction Updates',
    description: 'Consistent, honest progress reporting. You are never left wondering about the status.'
  },
  {
    title: 'Handover & Support',
    description: 'Our commitment extends beyond the keys. We ensure lasting value and ongoing support.'
  }
];

export function Testimonials() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section className="py-32 lg:py-48 bg-[#0e0e0e] relative">
      <div className="w-full px-[60px] max-w-7xl mx-auto">
        <SectionHeading number="05" title="Our Client Commitment" className="items-center text-center" />
        
        <div className="relative mt-24 lg:mt-32 max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden sm:block">
            <div ref={lineRef} className="w-full h-full bg-monolit-accent" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`md:w-1/2 flex ${isEven ? 'md:pr-16 md:justify-end text-left md:text-right' : 'md:pl-16 md:justify-start text-left'}`}>
                    <Reveal delay={0.1} direction={isEven ? 'right' : 'left'} className="max-w-sm">
                      <h4 className="text-xl md:text-2xl font-serif text-white mb-4">
                        {step.title}
                      </h4>
                      <p className="text-sm font-sans text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </Reveal>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[27px] md:static md:left-auto md:-translate-x-0 w-14 h-14 shrink-0 rounded-full border border-white/20 bg-monolit-bg-alt flex items-center justify-center -ml-[27px] md:ml-0 z-10">
                    <span className="text-[10px] font-bold text-monolit-accent">{`0${idx + 1}`}</span>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
