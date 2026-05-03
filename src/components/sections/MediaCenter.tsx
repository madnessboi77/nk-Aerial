import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { X, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: 'May 02, 2026',
    title: 'Aerial Properties announces new residential tower in Chattogram',
    excerpt: 'We are thrilled to unveil our latest upcoming project in the heart of Chattogram, designed to redefine luxury living and smart sustainability.',
    content: 'Aerial Properties Limited is expanding its portfolio with a new high-rise residential project in Chattogram. The development will feature state-of-the-art amenities, sustainable green living spaces, and our signature architectural blend of modernity and tradition. Early registrations for interested buyers will open next month. We believe this will set a new standard for luxury real estate in the region, bringing an unparalleled level of comfort and aesthetic appeal. Our focus remains on delivering high-quality living spaces that our clients can proudly call home.'
  },
  {
    id: 2,
    date: 'April 15, 2026',
    title: 'Sustainability Award 2026 Winner',
    excerpt: 'Aerial Heights receives the National Green Building Award for its innovative approach to eco-friendly urban development.',
    content: 'We are honored to receive the National Green Building Award for Aerial Heights. This recognition highlights our commitment to building sustainable communities that minimize environmental impact without compromising on luxury. Aerial Heights features solar-powered common areas, rainwater harvesting, and vertical gardens. This award is a testament to our dedicated team of architects, engineers, and planners who consistently push the boundaries of what is possible in eco-conscious real estate development.'
  },
  {
    id: 3,
    date: 'March 10, 2026',
    title: 'Community Outreach: CSR Initiative in Dhaka',
    excerpt: 'Our team partnered with local NGOs to provide housing support and educational materials to underprivileged families.',
    content: 'Corporate Social Responsibility is at the core of Aerial Properties. Last month, our team organized a community outreach program in Dhaka, providing essential housing support and educational resources to over 500 families. We believe in giving back to the communities where we build. This initiative is part of our long-term pledge to support sustainable community development across Bangladesh. We extend our deepest gratitude to our NGO partners and volunteers who made this event a success.'
  }
];

export function MediaCenter() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <section id="media-center" className="py-24 lg:py-32 bg-monolit-bg text-white relative">
      <SectionHeading 
        subtitle="Media Center" 
        title="Latest News & Updates" 
        align="center"
      />
      
      <div className="container mx-auto px-6 lg:px-[60px] mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <Reveal key={news.id} delay={idx * 0.1}>
              <div 
                className="bg-monolit-card border border-white/5 p-8 hover:border-white/20 transition-all cursor-pointer group h-full flex flex-col"
                onClick={() => setSelectedNews(news)}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-monolit-accent mb-4 block">
                  {news.date}
                </span>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-monolit-accent transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-400 mb-8 flex-1">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-monolit-accent transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-monolit-bg border border-white/10 w-full max-w-2xl relative p-8 sm:p-12 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedNews(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <span className="text-[10px] font-bold tracking-widest uppercase text-monolit-accent mb-4 block">
                {selectedNews.date}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-white mb-6">
                {selectedNews.title}
              </h3>
              <div className="w-12 h-px bg-white/20 mb-8" />
              <p className="text-gray-300 leading-relaxed font-sans">
                {selectedNews.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
