import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Globe, Palette, Zap, Sparkles } from 'lucide-react';
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingSteps = [
    { icon: Code, text: "Initializing Systems", color: "text-blue-400" },
    { icon: Palette, text: "Loading Design Assets", color: "text-purple-400" },
    { icon: Globe, text: "Connecting Services", color: "text-green-400" },
    { icon: Smartphone, text: "Optimizing Experience", color: "text-orange-400" },
    { icon: Zap, text: "Ready to Launch", color: "text-yellow-400" }
  ];

  useEffect(() => {
    const totalDuration = 6000; // 6 seconds total
    const stepDuration = totalDuration / loadingSteps.length; // 1.2 seconds per step
    const progressInterval = 50; // Update every 50ms
    const progressIncrement = 100 / (totalDuration / progressInterval); // Progress per interval

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + progressIncrement;
        
        // Update current step based on progress
        const newStep = Math.min(
          Math.floor((newProgress / 100) * loadingSteps.length),
          loadingSteps.length - 1
        );
        setCurrentStep(newStep);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [onComplete, loadingSteps.length]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || Code;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-background/95 to-primary/10 
                     flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}

            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-6 max-w-md mx-auto">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative mx-auto w-20 h-20 mb-4">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/70"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="NeuWare" 
                    className="w-8 h-8"
                  />
                </div>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
              >
                NeuWare
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-muted-foreground text-sm sm:text-base"
              >
                Building Tomorrow's Digital Solutions
              </motion.p>
            </motion.div>

            {/* Loading Icons - Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex justify-center items-center space-x-4 sm:space-x-6">
                {loadingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = index === currentStep;
                  const isPassed = index < currentStep;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isActive ? 1.2 : isPassed ? 1 : 0.8,
                        opacity: isActive ? 1 : isPassed ? 0.8 : 0.4
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                    >
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                        {/* Animated Ring for Active Icon */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-primary/50"
                            animate={{ 
                              rotate: 360,
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                              scale: { duration: 1, repeat: Infinity }
                            }}
                          />
                        )}
                        
                        {/* Pulse Effect for Active Icon */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/20"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity 
                            }}
                          />
                        )}
                        
                        {/* Icon */}
                        <IconComponent 
                          className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                            isActive ? step.color : isPassed ? 'text-primary/70' : 'text-muted-foreground/50'
                          }`} 
                        />
                        
                        {/* Checkmark for Passed Steps */}
                        {isPassed && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Step Indicator Dot */}
                      <motion.div
                        className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-primary' : isPassed ? 'bg-green-500' : 'bg-muted-foreground/30'
                        }`}
                        animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Progress Line */}
              <div className="relative mt-6 mx-auto w-48 sm:w-64 h-0.5 bg-muted-foreground/20 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (loadingSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <p className="text-foreground font-medium text-sm sm:text-base mb-2">
                {loadingSteps[currentStep]?.text || 'Loading...'}
              </p>
              <div className="flex justify-center items-center space-x-1 text-xs text-muted-foreground">
                <span>Step</span>
                <span className="font-semibold text-primary">{currentStep + 1}</span>
                <span>of</span>
                <span className="font-semibold">{loadingSteps.length}</span>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-32, 320] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 0.5 
                  }}
                />
              </div>
            </div>

            {/* Sparkle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <Sparkles className="w-4 h-4 text-primary/60" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary/60 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;



