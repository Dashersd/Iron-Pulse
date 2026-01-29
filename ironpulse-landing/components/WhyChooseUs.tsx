import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseUsFeatures } from '../data';

export const WhyChooseUs = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Choose IronPulse
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                y: -10,
                rotateY: 10,
              }}
              className="text-center group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Floating Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.3,
                  filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 1))',
                  rotateY: 180,
                }}
                className="mb-4 inline-block relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <feature.icon className={`w-16 h-16 ${feature.color} mx-auto relative z-10`} />
                <motion.div
                  className={`absolute inset-0 ${feature.color} blur-2xl opacity-50`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>

              {/* Orbiting particles */}
              <motion.div
                className="absolute top-0 left-1/2 w-2 h-2 bg-red-600 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformOrigin: '0 50px' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

