import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 16; // ~60fps
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          
          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* NEUWARE Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <div className="neuware-loader">
                <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
                  <defs xmlns="http://www.w3.org/2000/svg">
                    <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="b">
                      <stop stopColor="hsl(var(--primary))" />
                      <stop stopColor="hsl(var(--primary) / 0.8)" offset={1} />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="c">
                      <stop stopColor="hsl(var(--primary))" />
                      <stop stopColor="hsl(var(--accent))" offset={1} />
                      <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="d">
                      <stop stopColor="hsl(var(--primary) / 0.9)" />
                      <stop stopColor="hsl(var(--primary-glow))" offset={1} />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* N */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#b)" d="M 8,8 V 56 M 8,8 L 56,56 M 56,8 V 56" className="dash" pathLength={360} />
                </svg>
                
                {/* E */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 8,8 V 56 M 8,8 H 48 M 8,32 H 40 M 8,56 H 48" className="dash" pathLength={360} />
                </svg>
                
                {/* U */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#d)" d="M 8,8 V 40 C 8,48.837 15.163,56 24,56 H 40 C 48.837,56 56,48.837 56,40 V 8" className="dash" pathLength={360} />
                </svg>
                
                {/* W */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 8,8 L 20,56 L 32,24 L 44,56 L 56,8" className="dash" pathLength={360} />
                </svg>
                
                {/* A */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#b)" d="M 8,56 L 32,8 L 56,56 M 16,40 L 48,40" className="dash" pathLength={360} />
                </svg>
                
                {/* R */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 8,8 V 56 M 8,8 H 40 C 48.837,8 56,15.163 56,24 C 56,32.837 48.837,40 40,40 H 8 M 32,40 L 56,56" className="dash" pathLength={360} />
                </svg>
                
                {/* E */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#d)" d="M 8,8 V 56 M 8,8 H 48 M 8,32 H 40 M 8,56 H 48" className="dash" pathLength={360} />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Minimal floating elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${40 + i * 10}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;








