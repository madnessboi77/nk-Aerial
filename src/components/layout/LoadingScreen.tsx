import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit after 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#080d14] flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col w-[180px] rounded-t-xl rounded-b-sm overflow-hidden border-[1.5px] border-white/20 mb-8">
          <div className="bg-transparent flex justify-center items-center pt-2 pb-2.5">
            <span className="text-white font-[Georgia] italic font-bold text-[36px] leading-none tracking-tighter pr-2">Aerial</span>
          </div>
          <div className="bg-white/90 flex justify-center items-center py-1.5">
            <span className="text-black text-[9px] uppercase tracking-[0.2em] font-black pl-0.5" style={{ letterSpacing: '0.22em' }}>Properties Limited</span>
          </div>
        </div>
        
        <div className="w-[200px] h-px bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-monolit-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
          Loading {Math.round(progress)}%
        </div>
      </motion.div>
    </motion.div>
  );
}
