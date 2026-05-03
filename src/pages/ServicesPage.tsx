import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-monolit-bg min-h-screen">
        <div className="w-full px-[60px]">
          
          <div className="mb-24">
            <SectionHeading title="Systematic Services" className="mb-4" />
            <Reveal delay={0.1}>
              <p className="text-gray-400 text-lg max-w-2xl italic">
                Architecture, interiors, construction, and visualization shaped with precision.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.1}>
                <div className="bg-monolit-card border border-white/5 p-12 hover:border-white/20 transition-colors flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] font-normal uppercase tracking-widest text-monolit-accent mb-2">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 italic leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-monolit-accent">
                        <div className="w-1.5 h-1.5 rounded-full bg-monolit-accent shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-white/10 pt-8 mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center border border-white/20 w-full py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
