import { PageTransition } from '@/components/layout/PageTransition';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  
  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-40 px-[60px] w-full">
          <h2 className="text-4xl text-white">Project not found</h2>
          <Link to="/projects" className="text-monolit-accent mt-4 inline-block tracking-[0.2em] text-[10px] uppercase font-bold">Back to Projects</Link>
        </div>
      </PageTransition>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <PageTransition>
      <div className="bg-monolit-bg min-h-screen">
        {/* Full-screen Hero */}
        <div className="relative h-[80vh] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
            style={{ backgroundImage: `url(${project.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-monolit-bg via-transparent to-monolit-bg/50" />
          
          <div className="absolute inset-0 w-full px-[60px] flex flex-col justify-end pb-24">
            <Reveal>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-monolit-accent">{project.title}</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-white font-serif mb-6">
                {project.title}
              </h1>
            </Reveal>
          </div>
        </div>

        {/* Content */}
        <div className="w-full px-[60px] py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Meta data */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="bg-monolit-card p-12 border border-white/5 shadow-xl flex flex-col gap-6">
                  <div>
                    <h5 className="text-[14px] font-bold tracking-widest uppercase text-[#b3b3b3] mb-2">Project Type</h5>
                    <p className="text-sm font-semibold text-white">{project.type}</p>
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold tracking-widest uppercase text-[#b3b3b3] mb-2">Status</h5>
                    <p className="text-sm font-semibold text-white">{project.status}</p>
                  </div>
                  
                  {project.details.map((detail, idx) => (
                    <div key={idx}>
                      <h5 className="text-[14px] font-bold tracking-widest uppercase text-[#b3b3b3] mb-2">{detail.label}</h5>
                      <p className="text-sm font-semibold text-white">{detail.value}</p>
                    </div>
                  ))}
                  
                  <div className="pt-8 mt-2 border-t border-white/5">
                    <Link to="/#contact" className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-monolit-accent hover:border-monolit-accent hover:text-black transition-all w-full">
                      Send Inquiry
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Description */}
            <div className="lg:col-span-8 lg:pl-12">
              <Reveal delay={0.1}>
                <p className="text-2xl font-serif text-white leading-relaxed mb-12">
                  {project.shortDescription}
                </p>
                <p className="text-gray-400 italic leading-loose mb-16">
                  {project.overview}
                </p>
              </Reveal>

              {/* Details grid */}
              <div className="mb-20">
                <Reveal delay={0.2}>
                   <h3 className="text-xl font-serif text-white mb-8">Design Highlights</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                     {project.highlights.map((highlight, idx) => (
                       <li key={idx} className="flex gap-4">
                         <span className="text-monolit-accent font-serif">&bull;</span>
                         <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {project.gallery.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="overflow-hidden bg-monolit-card aspect-[4/3]">
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left text-[11px] uppercase tracking-[0.2em] font-bold text-white">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="group flex items-center gap-4 hover:text-monolit-accent transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monolit-accent group-hover:-translate-x-2 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span>Previous Project</span>
              </Link>
            ) : <div />}

            <Link to="/projects" className="px-8 py-4 bg-monolit-card border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
              Back to Projects
            </Link>

            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`} className="group flex items-center gap-4 hover:text-monolit-accent transition-colors">
                <span>Next Project</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monolit-accent group-hover:translate-x-2 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
