import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const serviceImages: Record<string, string> = {
  'residential-development': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'commercial-development': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  'project-planning': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
  'sales-client-support': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
};

export function Services() {
  const [activeTab, setActiveTab] = useState(services[0].slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const activeService = services.find(s => s.slug === activeTab)!;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = services.findIndex((s) => s.slug === currentTab);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].slug;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    if (!contentRef.current || !imageRef.current) return;
    
    // GSAP animation for content and image changes
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="services" className="py-32 lg:py-48 bg-monolit-bg relative">
      <div className="w-full px-[60px] relative z-10">
        <SectionHeading number="07" title="What We Do" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-20">
          
          {/* Vertical Navigation */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-8 lg:gap-12 scrollbar-hide shrink-0 mt-4">
            {services.map((service, idx) => (
              <button
                key={service.slug}
                onClick={() => setActiveTab(service.slug)}
                className={cn(
                  "relative text-left transition-all duration-500 whitespace-nowrap lg:whitespace-normal group",
                  activeTab === service.slug ? "opacity-100" : "opacity-30 hover:opacity-70"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-monolit-accent hidden lg:block">
                    0{idx + 1}
                  </span>
                  <h4 className={cn(
                    "font-serif text-xl sm:text-2xl transition-all duration-300",
                    activeTab === service.slug ? "text-white" : "text-white group-hover:translate-x-2"
                  )}>
                    {service.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Showcase */}
          <div className="lg:w-3/4 flex flex-col xl:flex-row gap-12">
            
            {/* Image Area */}
            <div className="w-full xl:w-1/2 aspect-[4/3] sm:aspect-video xl:aspect-[4/5] bg-monolit-card border border-white/5 relative overflow-hidden group">
              <img
                ref={imageRef}
                src={serviceImages[activeTab]}
                alt={activeService.title}
                className="w-full h-full object-cover grayscale mix-blend-lighten transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 text-white pointer-events-none">
                 <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-monolit-accent mb-2">Committed To</p>
                 <p className="text-xl font-serif">Quality Excellence</p>
              </div>
            </div>

            {/* Content Panel */}
            <div ref={contentRef} className="w-full xl:w-1/2 flex flex-col justify-center">
               <h3 className="text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] font-normal uppercase tracking-widest text-monolit-accent mb-6">
                 {activeService.title}
               </h3>
               <p className="text-gray-400 font-sans leading-relaxed mb-10 max-w-lg">
                 {activeService.description}
               </p>
               
               <ul className="space-y-6 mb-12">
                 {activeService.bullets.map((bullet, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <span className="w-6 h-[1px] bg-monolit-accent shrink-0"></span>
                     <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-300">
                       {bullet}
                     </span>
                   </li>
                 ))}
               </ul>
               
               <div className="mt-auto">
                 <Link
                   to={`/services/${activeService.slug}`}
                   className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group"
                 >
                   <span className="relative z-10">Discover More</span>
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
