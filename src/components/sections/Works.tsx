import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { Link } from 'react-router';

export function Works() {
  // Take first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-32 lg:py-48 bg-monolit-bg">
      <div className="w-full px-[60px]">
        <SectionHeading number="03" title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.1}>
              <Link to={`/projects/${project.slug}`} className="group relative overflow-hidden aspect-[4/5] cursor-pointer block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[1500ms] group-hover:scale-110 ease-out"
                  style={{ backgroundImage: `url(${project.heroImage})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-900/60 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-4 text-monolit-accent">
                      {project.type}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-8 line-clamp-2">
                       {project.shortDescription}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{project.location}</span>
                      <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em] group-hover:text-monolit-accent transition-colors">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-20 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center border border-white/20 px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-all duration-300"
          >
            View All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
