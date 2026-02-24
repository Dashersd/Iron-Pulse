import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



export const HeroSection = ({ onFaceScanTrigger }: { onFaceScanTrigger: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Animated 3D Background */}
      <motion.div
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      {/* Centered Heart Particle System Visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          {/* Core Heart Pulse Glow */}
          <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full" />

          {/* Heart Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 0
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 300],
                y: [0, (Math.random() - 0.5) * 300],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}

          {/* Static Glowing Heart Shape (Simplified) */}
          <svg
            viewBox="0 0 32 32"
            className="absolute inset-0 w-full h-full text-red-600/10 fill-current blur-sm"
          >
            <path d="M16 28.5L14.1 26.8C7.15 20.65 2.5 16.5 2.5 11.5C2.5 7.4 5.65 4.25 9.75 4.25C12.05 4.25 14.25 5.35 15.65 7.05C17.05 5.35 19.25 4.25 21.55 4.25C25.65 4.25 28.8 7.4 28.8 11.5C28.8 16.5 24.15 20.65 17.2 26.85L16 28.5Z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Brand Name with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
            transformStyle: 'preserve-3d',
          }}
          className="mb-4"
        >
          <h1
            className="text-6xl md:text-9xl font-black tracking-tight text-red-600 relative"
            style={{
              textShadow: '0 0 80px rgba(220, 38, 38, 0.8), 0 0 120px rgba(220, 38, 38, 0.4)',
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
          className="text-xl md:text-2xl text-gray-400 mb-8 tracking-[0.2em] font-light"
        >
          PULSING WITH POWER. CENTERED IN STRENGTH.
        </motion.p>

        {/* Headline with depth */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold rounded-sm transition-all relative overflow-hidden group"
          >
            Join Now
          </motion.button>
          <motion.button
            onClick={onFaceScanTrigger}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.1)',
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 text-lg font-bold rounded-sm transition-all"
          >
            Face Recognition
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
