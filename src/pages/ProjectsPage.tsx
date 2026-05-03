import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Residential', 'Commercial', 'Ongoing', 'Completed'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Residential' || filter === 'Commercial') return p.type === filter;
    if (filter === 'Ongoing' || filter === 'Completed') return p.status === filter;
    return true;
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-monolit-bg min-h-screen">
        <div className="w-full px-[60px]">
          
          <div className="mb-20">
            <SectionHeading title="Our Projects" className="mb-4" />
            <Reveal delay={0.1}>
              <p className="text-gray-400 text-lg max-w-2xl italic">
                Explore selected residential and commercial developments by Aerial Properties Limited.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors rounded-full border",
                    filter === cat 
                      ? "bg-monolit-accent border-monolit-accent text-black" 
                      : "bg-transparent border-white/10 text-gray-400 hover:border-white hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.slug}
                  className="group relative overflow-hidden aspect-[4/5] cursor-pointer block bg-monolit-card"
                >
                  <Link to={`/projects/${project.slug}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[1500ms] group-hover:scale-110 ease-out"
                      style={{ backgroundImage: `url(${project.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-900/70 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="flex gap-2 mb-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-monolit-accent">
                            {project.type}
                          </p>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">&bull; {project.status}</span>
                        </div>
                        <h3 className="text-[28px] leading-[36px] md:text-[34px] md:leading-[44px] font-normal uppercase tracking-widest text-monolit-accent mb-4">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 italic mb-8 line-clamp-2">
                          {project.shortDescription}
                        </p>
                        <div className="flex items-center justify-between border-t border-white/20 pt-4">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{project.location}</span>
                          <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em] group-hover:text-monolit-accent transition-colors">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
