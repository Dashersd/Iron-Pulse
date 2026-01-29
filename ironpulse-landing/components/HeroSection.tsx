import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const getViewport = () => {
  if (typeof window === 'undefined') return { w: 1200, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
};

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const viewport = useMemo(() => getViewport(), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { w, h } = getViewport();
      setMousePosition({
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Animated 3D Background Layers */}
      <motion.div
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-black to-black"
        />

        {/* Animated grid pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-600 rounded-full"
          initial={{
            x: Math.random() * viewport.w,
            y: Math.random() * viewport.h,
            opacity: 0,
          }}
          animate={{
            y: [null, -100, -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Brand Name with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
            transformStyle: 'preserve-3d',
          }}
          className="mb-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tight text-red-600 relative"
            style={{
              textShadow: '0 0 80px rgba(220, 38, 38, 0.8), 0 0 120px rgba(220, 38, 38, 0.4)',
            }}
          >
            IRONPULSE
            <motion.span
              className="absolute inset-0 text-red-600 blur-xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              IRONPULSE
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Where Strength Meets Motion.
        </motion.p>

        {/* Headline with depth */}
        <motion.h2
          initial={{ opacity: 0, y: 30, z: -100 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          style={{
            transform: `translateZ(${mousePosition.y * 20}px)`,
            transformStyle: 'preserve-3d',
          }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Forge Your Body.
          <br />
          Unleash Your Power.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Transform your limits into achievements. Join a community that pushes boundaries and redefines strength.
        </motion.p>

        {/* CTA Buttons with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(220, 38, 38, 0.6), 0 20px 40px rgba(0,0,0,0.5)',
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold rounded-sm transition-all relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            Join Now
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.1)',
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 text-lg font-bold rounded-sm transition-all"
          >
            View Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

