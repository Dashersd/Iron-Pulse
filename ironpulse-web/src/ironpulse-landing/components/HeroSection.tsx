import { useMemo } from 'react';
import { motion } from 'framer-motion';

const getViewport = () => {
  if (typeof window === 'undefined') return { w: 1200, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
};

export const HeroSection = () => {
  const viewport = useMemo(() => getViewport(), []);
  // Removed mouse tracking for better performance on iCore3

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Simplified background - no mouse tracking for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black">
        {/* Static grid pattern - no animation */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Reduced floating particles for performance */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-600/50 rounded-full"
          initial={{
            x: Math.random() * viewport.w,
            y: Math.random() * viewport.h,
            opacity: 0,
          }}
          animate={{
            y: [null, -80],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3, // Slower
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear', // Linear is more performant
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Brand Name - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4"
        >
          <h1
            className="text-6xl md:text-8xl font-black tracking-tight text-red-600 relative"
            style={{
              textShadow: '0 0 60px rgba(220, 38, 38, 0.6)',
            }}
          >
            IRONPULSE
          </h1>
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

        {/* Headline - simplified */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold rounded-sm transition-all"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 text-lg font-bold rounded-sm transition-all"
          >
            View Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

