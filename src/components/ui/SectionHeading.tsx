import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionHeadingProps {
  number?: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className={cn('flex flex-col gap-4 mb-16 relative', className)}>
      {number && (
        <Reveal>
          <span className="text-monolit-accent text-[10px] tracking-[0.2em] uppercase font-bold">
            {number}.
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight">
          {title}
        </h2>
      </Reveal>
      <div className="mt-4">
         <div ref={lineRef} className="w-24 h-[1px] bg-monolit-accent origin-left" />
      </div>
    </div>
  );
}
