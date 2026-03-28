import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Activity, Bot, LogIn, User, ArrowRight, Shield, Globe, Cpu } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { ThreeBackground } from './ThreeBackground';
import gsap from 'gsap';

interface LandingPageProps {
  onLogin: () => void;
  onGuest: () => void;
}

export function LandingPage({ onLogin, onGuest }: LandingPageProps) {
  const containerVariants: any = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-y-auto no-scrollbar">
      <ThreeBackground />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-2xl w-full flex flex-col items-center text-center"
      >
        {/* Logo Area */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <Logo size="md" glow />
        </motion.div>
        
        {/* Title Area */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12 space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
            Credentia
          </h1>
          <p className="text-cyber-blue text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-60">
            Future of AI Defense
          </p>
        </motion.div>

        {/* Action Buttons - Minimal Glass */}
        <motion.div variants={itemVariants} className="w-full max-w-[280px] md:max-w-sm flex flex-col gap-3 md:gap-4">
          <button 
            onClick={onLogin}
            className="group relative w-full bg-cyber-blue/10 backdrop-blur-md border border-cyber-blue/30 rounded-2xl py-3.5 md:py-4 px-6 transition-all hover:bg-cyber-blue/20 hover:border-cyber-blue/50"
          >
            <div className="flex items-center justify-center gap-3">
              <LogIn className="w-4 h-4 md:w-5 md:h-5 text-cyber-blue" />
              <span className="text-base md:text-lg font-bold tracking-wider uppercase">Log In / Sign Up</span>
            </div>
          </button>
          
          <button 
            onClick={onGuest}
            className="group relative w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-3.5 md:py-4 px-6 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-center gap-3">
              <User className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-white" />
              <span className="text-base md:text-lg font-bold tracking-wider uppercase text-white/40 group-hover:text-white">Guest</span>
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Status */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[10px] font-medium tracking-[0.2em] uppercase text-white/20">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-green/50" />
          <span>Neural Link Active</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <span>v4.0.0</span>
      </div>
    </div>
  );
}
