import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { programs } from '../data';

export const ProgramsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Restored premium kinetic background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
            style={{
              top: `${15 + i * 15}%`,
              width: '200%',
              left: '-50%'
            }}
            animate={{
              x: ['-25%', '25%'],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
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
          <motion.span
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            TRAINING PROGRAMS
            <motion.div
              className="absolute -inset-4 bg-red-600/5 blur-2xl -z-10 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: 'easeOut' }}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.4)',
              }}
              className="bg-zinc-900 p-10 rounded-sm border-l-4 border-red-600 group cursor-pointer relative overflow-hidden transition-all duration-500"
            >
              {/* Complex gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
              />

              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Icon with complex glow */}
                <div className="relative shrink-0">
                  <program.icon className="w-14 h-14 text-red-600 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                  <motion.div
                    className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {program.desc}
                  </p>
                </div>
              </div>

              {/* Edge light effect */}
              <motion.div
                className="absolute inset-0 border border-white/0 group-hover:border-red-600/30 transition-colors rounded-sm pointer-events-none"
              />

              {/* Selection indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
