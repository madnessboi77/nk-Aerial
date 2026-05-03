import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import sarahChenImage from '@/assets/images/regenerated_image_1777746785775.png';

const allTeam = [
  {
    id: 1,
    name: 'CHRIS SLEAT',
    role: 'Founder, Head of Product',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  {
    id: 2,
    name: 'IRENE ALVARADO',
    role: 'Founder, Head of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    quote: '"Engineering is the closest thing to magic that exists in the world."',
  },
  {
    id: 3,
    name: 'ISAAC BLANKENSMITH',
    role: 'Founder, Head of Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    quote: '"Good design is obvious. Great design is transparent."',
  },
  {
    id: 4,
    name: 'JENNIFER KLEPPER',
    role: 'Founder, Head of Operations',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    quote: '"Operations keeps the lights on, strategy keeps them shining bright."',
  },
  {
    id: 5,
    name: 'ALEX RIVERA',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=800&q=80',
    quote: '"Architecture should speak of its time and place, but yearn for timelessness."',
  },
  {
    id: 6,
    name: 'SARAH CHEN',
    role: 'Lead Interior Designer',
    image: sarahChenImage,
    quote: '"The essence of interior design will always be about people and how they live."',
  },
  {
    id: 7,
    name: 'MARCUS JOHNSON',
    role: 'Project Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    quote: '"Planning is bringing the future into the present so that you can do something about it now."',
  },
  {
    id: 8,
    name: 'EMILY DAVIS',
    role: 'Urban Planner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    quote: '"Cities have the capability of providing something for everybody, only because they are created by everybody."',
  }
];

export function Team() {
  const [showAll, setShowAll] = useState(false);
  const [selectedMember, setSelectedMember] = useState<typeof allTeam[0] | null>(null);

  const displayedTeam = showAll ? allTeam : allTeam.slice(0, 4);

  return (
    <section id="team" className="py-32 bg-monolit-bg text-white relative overflow-hidden">
      <div className="w-full px-[60px] relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-24 relative">
             <div className="absolute -top-12 -left-12 lg:-left-24 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 22h20L12 2z"></path>
                </svg>
             </div>
             <div className="absolute -bottom-12 -right-12 lg:-right-24 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
             </div>
             
             <h2 className="text-[34px] leading-[53px] font-normal not-italic no-underline uppercase tracking-widest text-white mb-6">
                Meet the Team
             </h2>
             
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] tracking-tight text-gray-300 mb-10 text-balance">
              Behind every great project is a team of people who care deeply about the details. Our team brings together creative thinkers, skilled planners, designers, engineers, and project specialists who work together to turn ideas into thoughtful, reliable results.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {displayedTeam.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1}>
              <div 
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-square overflow-hidden mb-6 bg-monolit-card">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                  <div className="absolute inset-0 bg-monolit-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase mb-2 group-hover:text-monolit-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-serif text-gray-400 text-[15px] italic">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {!showAll && (
          <Reveal className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center border border-white/20 px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              See More Members
            </button>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
               className="absolute inset-0 bg-black/80 backdrop-blur-sm"
               onClick={() => setSelectedMember(null)}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-monolit-card border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto hide-scrollbar relative">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
              </div>
              
              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-monolit-bg">
                <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-2">
                  {selectedMember.name}
                </h3>
                <p className="font-serif text-gray-400 text-lg md:text-xl italic mb-8 border-b border-white/10 pb-8">
                  {selectedMember.role}
                </p>
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-monolit-accent relative before:content-['\201C'] before:absolute before:-left-6 before:-top-4 before:text-4xl before:text-white/20 before:font-sans">
                  {selectedMember.quote}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
