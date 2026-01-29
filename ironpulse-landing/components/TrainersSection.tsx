import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { trainers } from '../data';

export const TrainersSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const particles = useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        xWobble: Math.random() * 100 - 50,
        duration: 5 + Math.random() * 3,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Particle system */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-red-600/30 rounded-full"
          animate={{
            y: [0, -1000],
            opacity: [0, 1, 0],
            x: [0, p.xWobble],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          style={{
            left: p.left,
            top: '100%',
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
              {/* 3D Image container */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className={`h-64 bg-gradient-to-br ${trainer.color} flex items-center justify-center overflow-hidden relative`}
              >
                <motion.span
                  className="text-8xl font-black text-white/20 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {trainer.initials}
                </motion.span>

                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-red-600/20 to-transparent"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-32"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{trainer.name}</h3>
                <p className="text-red-600 font-semibold">{trainer.specialty}</p>

                {/* Corner glow */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/20 blur-2xl"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

