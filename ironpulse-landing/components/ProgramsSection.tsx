import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { programs } from '../data';

export const ProgramsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '100%' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <motion.span className="relative inline-block" whileHover={{ scale: 1.05 }}>
            Training Programs
            <motion.div
              className="absolute -inset-2 bg-red-600/10 blur-xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: 'easeOut' }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.5)',
              }}
              className="bg-zinc-900 p-8 rounded-sm border-l-4 border-red-600 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon with bounce */}
              <motion.div
                className="mb-4 relative"
                whileHover={{
                  y: -5,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <program.icon className="w-12 h-12 text-red-600 relative z-10" />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors relative z-10">
                {program.title}
              </h3>
              <p className="text-gray-400 relative z-10">{program.desc}</p>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-50 transition-opacity rounded-sm"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(220,38,38,0)',
                    '0 0 20px rgba(220,38,38,0.6)',
                    '0 0 0px rgba(220,38,38,0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

