import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { trainers } from '../data';

export const TrainersSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Reduced particles for iCore3 performance
  const particles = useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        xWobble: Math.random() * 100 - 50,
        duration: 10 + Math.random() * 5, // Slower = less CPU
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Optimized particle system - reduced for performance */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-red-600/20 rounded-full"
          animate={{
            y: [0, -600], // Reduced distance
            opacity: [0, 0.6, 0], // Reduced opacity
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear', // Linear is more performant
          }}
          style={{
            left: p.left,
            top: '100%',
            willChange: 'transform, opacity',
          }}
        />
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Meet Our Trainers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{
                y: -15,
                rotateY: 10,
                rotateX: 5,
                boxShadow: '0 40px 80px rgba(220, 38, 38, 0.5)',
              }}
              className="bg-zinc-900 rounded-sm overflow-hidden group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image container - simplified for performance */}
              <div
                className={`h-64 bg-gradient-to-br ${trainer.color} flex items-center justify-center overflow-hidden relative`}
              >
                <span className="text-8xl font-black text-white/20 relative z-10">
                  {trainer.initials}
                </span>

                {/* Static gradient overlay - no animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-600/10 to-transparent" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{trainer.name}</h3>
                <p className="text-red-600 font-semibold">{trainer.specialty}</p>

                {/* Static corner glow - no animation */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/15 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

