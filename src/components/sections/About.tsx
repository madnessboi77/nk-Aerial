import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-32 lg:py-48 bg-monolit-bg px-[60px] w-full">
      <SectionHeading number="01" title="About Aerial Properties Limited" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left side Image stack */}
        <div className="relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
          <Reveal className="w-4/5 lg:w-3/4 z-10 ml-auto pt-10">
            <div className="aspect-[3/4] overflow-hidden group border border-white/5 shadow-2xl bg-monolit-card">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                alt="Architecture presentation" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>
          </Reveal>
          
          <Reveal className="absolute bottom-0 lg:bottom-10 left-0 w-2/3 lg:w-3/5 z-20" delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden group border border-white/5 shadow-xl bg-monolit-card">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" 
                alt="Construction presentation" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>
          </Reveal>
        </div>

        {/* Right side Text */}
        <div className="pt-12 lg:pt-24 lg:pl-12">
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed mb-12">
              Aerial Properties Limited is a premium real estate and property development company in Bangladesh. We believe in building modern addresses that stand the test of time, blending architectural innovation with structural integrity. Our projects are designed to provide maximum comfort, efficient spatial planning, and high long-term value for our clients.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mb-12">
            <h4 className="text-[10px] tracking-widest text-gray-500 uppercase mb-8 font-bold">Our Approach</h4>
            <ul className="space-y-6">
              {[
                "Thoughtful Planning",
                "Modern Architecture",
                "Quality Construction",
                "Customer Confidence"
              ].map((step, idx) => (
                <li key={idx} className="flex items-center gap-6 group">
                  <span className="text-[10px] tracking-widest font-bold text-monolit-accent">0{idx + 1}.</span>
                  <div className="h-px w-12 bg-white/10 group-hover:w-24 group-hover:bg-monolit-accent transition-all duration-500" />
                  <span className="text-[11px] tracking-widest uppercase text-gray-400 font-semibold group-hover:text-white transition-colors">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-white hover:text-monolit-accent transition-colors"
            >
              <span>Explore Our Projects</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monolit-accent group-hover:translate-x-2 transition-all">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
