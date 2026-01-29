import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const getViewport = () => {
  if (typeof window === 'undefined') return { w: 1200, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
};

export const CTASection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const viewport = useMemo(() => getViewport(), []);

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-red-950 via-black to-black relative overflow-hidden">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220, 38, 38, 0.3) 2px, transparent 2px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 2px, transparent 2px)',
          backgroundSize: '100px 100px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* 3D Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-600 rounded-full"
          initial={{
            x: Math.random() * viewport.w,
            y: Math.random() * 500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [null, -200],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="text-4xl md:text-6xl font-black mb-6 relative"
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 20px rgba(220,38,38,0.5)',
                '0 0 40px rgba(220,38,38,0.8)',
                '0 0 20px rgba(220,38,38,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Transform Your Body.
            <br />
            Transform Your Life.
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Your journey to greatness starts today. Join IronPulse.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
          whileHover={{
            scale: 1.15,
            rotateY: 10,
            boxShadow: '0 0 60px rgba(220, 38, 38, 1), 0 30px 60px rgba(0,0,0,0.8)',
            y: -10,
          }}
          whileTap={{ scale: 0.95, rotateY: 0 }}
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 text-xl font-bold rounded-sm relative overflow-hidden group"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative z-10"
          >
            Start Your IronPulse Journey
          </motion.span>

          {/* Glowing edges */}
          <motion.div
            className="absolute inset-0 border-2 border-red-400 rounded-sm opacity-0 group-hover:opacity-100"
            animate={{
              boxShadow: [
                '0 0 10px rgba(220,38,38,0.5)',
                '0 0 30px rgba(220,38,38,1)',
                '0 0 10px rgba(220,38,38,0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      </div>
    </section>
  );
};

