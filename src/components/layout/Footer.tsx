import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden flex flex-col items-center">
      <div className="w-full px-[60px] w-full flex flex-col items-center">
        
        {/* Newsletter Section */}
        <div className="text-center mb-16 w-full">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">
            Stay in the loop
          </h2>
          <p className="text-gray-300 md:text-lg mb-8">
            Get notified about property updates.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent border border-white/20 text-white rounded-full px-6 py-3 md:py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder:text-gray-500"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-8 z-10 relative">
          <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
          <span className="text-gray-600">|</span>
          <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          <span className="text-gray-600">|</span>
          <span>Aerial Properties Limited &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
      
      {/* Big Logo */}
      <div className="w-full flex flex-col items-center justify-center relative mt-8 lg:mt-16 translate-y-4">
        <h1 
          className="text-[25vw] md:text-[22vw] leading-none text-white font-[Georgia] italic font-bold tracking-tighter w-full text-center select-none"
          style={{ letterSpacing: '-0.05em', paddingRight: '0.05em' }}
        >
          Aerial
        </h1>
        <div className="flex items-center justify-center w-full px-4 sm:px-12 md:px-24 mt-6 md:mt-8 mb-4">
          <div className="h-px bg-white/20 flex-1 max-w-[200px] md:max-w-none"></div>
          <p className="text-white text-[3vw] sm:text-[2vw] md:text-xl lg:text-3xl tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium px-4 md:px-8 whitespace-nowrap">
            Properties Limited
          </p>
          <div className="h-px bg-white/20 flex-1 max-w-[200px] md:max-w-none"></div>
        </div>
      </div>
    </footer>
  );
}
