import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const location = useLocation();

  const megaMenuLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Team', href: '/#team' },
    { label: 'Services', href: '/#services' },
    { label: 'Media Center', href: '/#media-center' },
    { label: 'Career', href: '/#career' },
    { label: 'Contact', href: '/#contact' },
  ];

  const featuredProjects = [
    { type: 'RESIDENTIAL', title: 'Aerial Noor', location: 'Dhaka, Bangladesh', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80' },
    { type: 'COMMERCIAL', title: 'Aerial YMCA', location: 'Dhaka, Bangladesh', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
    { type: 'RESIDENTIAL', title: 'Aerial Zinia', location: 'Dhaka, Bangladesh', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80' },
    { type: 'RESIDENTIAL', title: 'Aerial SN Viola', location: 'Dhaka, Bangladesh', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active hash based on scroll position loosely if on homepage
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'projects', 'team', 'why-aerial', 'services', 'contact'];
        let current = '/';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 200) {
            current = section === 'home' ? '/' : `/#${section}`;
          }
        }
        if (current) setActiveItem(current);
      }
    };

    if (location.pathname !== '/') {
      setActiveItem(location.pathname + location.hash);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out shrink-0',
        isScrolled ? 'bg-monolit-bg/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8 border-b border-transparent'
      )}
    >
      <div className="w-full px-6 lg:px-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="flex flex-col w-[140px] rounded-t-xl rounded-b-sm overflow-hidden border-[1.5px] border-white transition-opacity hover:opacity-80">
            <div className="bg-transparent flex justify-center items-center pt-1 pb-1.5">
              <span className="text-white font-[Georgia] italic font-bold text-[28px] leading-none tracking-tighter pr-2">Aerial</span>
            </div>
            <div className="bg-white flex justify-center items-center py-1">
              <span className="text-black text-[7px] uppercase tracking-[0.2em] font-black pl-0.5" style={{ letterSpacing: '0.22em' }}>Properties Limited</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
          {[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/#about' },
            { label: 'Project', href: '/#projects' }
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => {
                if (location.pathname === '/' && item.href.startsWith('/#')) {
                  e.preventDefault();
                  const targetId = item.href.substring(2);
                  const el = document.getElementById(targetId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', item.href);
                } else if (location.pathname === '/' && item.href === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', '/');
                }
              }}
              className={cn(
                "text-[10px] uppercase font-bold tracking-[0.2em] transition-colors hover:text-white",
                (activeItem === item.href || (item.label === 'Project' && activeItem.startsWith('/projects'))) ? "text-monolit-accent" : "text-gray-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions & mega menu button */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <button
            className="flex items-center space-x-2 text-white hover:text-monolit-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] hidden md:inline">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex flex-col md:flex-row h-screen"
          >
            {/* Left Side (Beige block for Featured Projects) */}
            <div className="hidden md:flex flex-col w-[40%] bg-[#fcf9f2] h-full p-12 lg:p-16 overflow-y-auto">
              <h3 className="text-[#a48e58] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">Featured Projects</h3>
              
              <div className="flex flex-col space-y-6 flex-1">
                {featuredProjects.map((proj, idx) => (
                  <div key={idx} className="flex gap-6 items-center group cursor-pointer">
                    <div className="w-[80px] h-[80px] overflow-hidden">
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#a48e58] text-[9px] font-bold tracking-[0.1em] uppercase mb-1">{proj.type}</span>
                      <span className="text-xl font-serif text-[#1a1a1a] mb-1">{proj.title}</span>
                      <span className="text-gray-500 text-sm">{proj.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1a1a1a]/10 pt-8 mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#a48e58] text-[9px] font-bold tracking-[0.1em] uppercase mb-4">Residential</h4>
                  <ul className="space-y-2">
                    <li><Link to="/#projects" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                    <li><Link to="/#projects" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#a48e58] text-[9px] font-bold tracking-[0.1em] uppercase mb-4">Collections</h4>
                  <ul className="space-y-2">
                    <li><Link to="/#projects" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Penthouse Collection</Link></li>
                    <li><Link to="/#projects" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Signature Collection</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side (Dark block for Navigation) */}
            <div className="w-full md:w-[60%] bg-[#080d14] h-full p-12 lg:p-20 relative flex flex-col justify-center overflow-y-auto">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-6 lg:right-12 text-gray-400 flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Close</span>
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-[#a48e58] text-[10px] font-bold tracking-[0.2em] uppercase mb-10 absolute top-20 left-12 lg:left-20">Navigation</h3>

              <nav className="flex flex-col gap-6 mt-16">
                {megaMenuLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={(e) => {
                      if (location.pathname === '/' && item.href.startsWith('/#')) {
                        e.preventDefault();
                        const targetId = item.href.substring(2);
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', item.href);
                      } else if (location.pathname === '/' && item.href === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState(null, '', '/');
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white hover:text-monolit-accent transition-colors pb-6 border-b border-white/5 w-full md:max-w-xl"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
