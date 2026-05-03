import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: 'Building Modern Addresses',
    subtitle: 'Better Living',
    category: 'Aerial Properties Limited',
    description: 'Aerial Properties Limited develops contemporary residential and commercial spaces designed around comfort, quality, functionality, and long-term value.',
    button: 'Book your Dream',
    href: '/#contact',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Aerial Chowdhury Heights',
    subtitle: 'Residential',
    category: 'Aerial Properties Limited',
    description: 'A slim, modern residential tower with a clean facade, vertical composition, and efficient urban planning.',
    button: 'Book your Dream',
    href: '/#contact',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Aerial SN Viola',
    subtitle: 'Premium Living',
    category: 'Aerial Properties Limited',
    description: 'A premium residential project with bold geometry, green balconies, and a distinctive modern profile.',
    button: 'Book your Dream',
    href: '/#contact',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  },
  {
    id: 4,
    title: 'Aerial YMCA',
    subtitle: 'Commercial',
    category: 'Aerial Properties Limited',
    description: 'A contemporary commercial development with a glass-focused facade and strong corporate presence.',
    button: 'Book your Dream',
    href: '/#contact',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  }
];

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-monolit-bg">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className} custom-bullet">0${index + 1}.</span>` }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] ease-linear"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0 bg-neutral-950/40 bg-gradient-to-t from-monolit-bg/90 via-monolit-bg/40 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
                
                <div className="absolute inset-0 flex items-center justify-center w-full px-[60px] text-center">
                  <div className="max-w-4xl pt-20 flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-monolit-accent text-[11px] uppercase tracking-[0.4em] font-bold mb-4"
                    >
                      {slide.category} <span className="text-white ml-2">— {slide.subtitle}</span>
                    </motion.div>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-5xl md:text-7xl lg:text-7xl xl:text-[80px] leading-[1.1] text-white font-serif mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-gray-300 text-lg lg:text-xl mb-10 max-w-xl"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap gap-6 justify-center"
                    >
                      <Link 
                        to={slide.href}
                        onClick={(e) => {
                          if (slide.href.startsWith('/#')) {
                            const id = slide.href.split('#')[1];
                            const element = document.getElementById(id);
                            if (element) {
                                e.preventDefault();
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="inline-flex items-center justify-center bg-white text-black px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-300"
                      >
                        {slide.button}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles overrides for Pagination inside the component to keep it isolated */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination {
          text-align: right !important;
          right: 3rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: auto !important;
          z-index: 20;
        }
        .swiper-pagination-bullet {
          width: auto;
          height: auto;
          background: none;
          opacity: 0.5;
          color: white;
          font-size: 11px;
          letter-spacing: 0.2em;
          transition: all 0.3s ease;
          border-radius: 0;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          color: var(--color-monolit-accent);
        }
        @media (max-width: 1024px) {
           .swiper-pagination {
             display: flex;
             flex-direction: row;
             top: auto !important;
             bottom: 2rem !important;
             right: 50% !important;
             transform: translateX(50%) !important;
             justify-content: center;
           }
        }
      `}} />
    </section>
  );
}
