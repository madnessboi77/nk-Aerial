import { PageTransition } from '@/components/layout/PageTransition';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-40 px-[60px] w-full">
          <h2 className="text-4xl text-white">Service not found</h2>
          <Link to="/services" className="text-monolit-accent mt-4 inline-block">Back to Services</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-monolit-bg min-h-screen">
        <div className="pt-40 pb-24 w-full px-[60px]">
          
          <Reveal>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold mb-12">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-monolit-accent">{service.title}</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                  {service.title}
                </h1>
                <p className="text-2xl font-serif text-gray-300 leading-relaxed mb-12">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mb-20">
                <h3 className="text-2xl font-serif text-white mb-8">Methodology & Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="bg-monolit-card p-8 border border-white/5">
                      <span className="text-monolit-accent text-[10px] font-bold tracking-widest mb-4 block">0{idx + 1}.</span>
                      <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-4">
                        {detail.title}
                      </h4>
                      <p className="text-sm text-gray-500 italic">
                        {detail.content}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              
              <Reveal delay={0.3}>
                 <Link 
                  to="/#contact"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-monolit-accent text-black text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-colors"
                >
                  <span>Request a quote</span>
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black/50 group-hover:translate-x-2 transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="bg-monolit-card p-10 border border-white/5 shadow-2xl sticky top-32">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-6">Service Scope</h4>
                  
                  <ul className="space-y-6 mb-12">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-monolit-accent">
                        <div className="w-1.5 h-1.5 rounded-full bg-monolit-accent shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-monolit-accent block mb-2">Committed to</span>
                    <span className="text-3xl font-serif text-white">Quality Excellence</span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
