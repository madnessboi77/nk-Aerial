import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function BackgroundDoodles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[50] mix-blend-screen">
      {/* Subtle blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Faint Architectural Elements */}
      <motion.div 
        className="absolute top-[10%] left-[5%] opacity-[0.04]"
        animate={{ 
          x: mousePos.x * -0.02,
          y: mousePos.y * -0.02,
          rotate: mousePos.x * 0.01 
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="99" stroke="white" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"/>
          <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5"/>
          <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-[30%] right-[10%] opacity-[0.03]"
        animate={{ 
          x: mousePos.x * 0.03,
          y: mousePos.y * 0.03,
          rotate: mousePos.x * -0.01 
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <svg width="250" height="250" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="149" height="149" stroke="white" strokeWidth="0.5"/>
          <rect x="20.5" y="20.5" width="109" height="109" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"/>
          <path d="M 0 0 L 150 150" stroke="white" strokeWidth="0.5"/>
          <path d="M 150 0 L 0 150" stroke="white" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] left-[15%] opacity-[0.04]"
        animate={{ 
          x: mousePos.x * 0.02,
          y: mousePos.y * -0.02,
          rotate: mousePos.x * 0.005 
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 0 L 100 100 L 0 100 Z" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"/>
          <circle cx="50" cy="65" r="20" stroke="white" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-[10%] right-[20%] opacity-[0.03]"
        animate={{ 
          x: mousePos.x * -0.015,
          y: mousePos.y * 0.015,
          rotate: mousePos.x * 0.02 
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 60 Q 30 0 60 60 T 120 60" stroke="white" strokeWidth="0.5"/>
          <line x1="0" y1="60" x2="120" y2="60" stroke="white" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="60" cy="60" r="40" stroke="white" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-[60%] left-[40%] opacity-[0.04]"
        animate={{ 
          x: mousePos.x * 0.01,
          y: mousePos.y * 0.01,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
         <div className="w-[400px] h-[400px] border-[0.5px] border-dashed border-white rounded-full flex items-center justify-center">
            <div className="w-[250px] h-[250px] border-[0.5px] border-white rounded-full flex items-center justify-center">
                <div className="w-[100px] h-[100px] border-[0.5px] border-white rounded-full"></div>
            </div>
         </div>
      </motion.div>
    </div>
  );
}
