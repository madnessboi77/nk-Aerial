import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ end, suffix = '' }: { end: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { label: "Featured Projects", value: 10, suffix: "+" },
    { label: "Planned Residences", value: 100, suffix: "+" },
    { label: "Years of Experience", value: 8, suffix: "+" },
    { label: "Quality Focus", value: 100, suffix: "%" },
  ];

  return (
    <section className="py-32 relative text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10 grayscale"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1430285561322-7808604715df?w=1920&q=80)' }}
      />
      
      <div className="w-full px-[60px] relative z-10">
        <SectionHeading number="02" title="Aerial at a Glance" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
          {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col gap-4 border-l border-white/10 pl-6 lg:pl-8">
                  <div className="text-5xl lg:text-7xl font-serif text-monolit-accent font-light tracking-tight">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    {stat.label}
                  </div>
                </div>
             </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
