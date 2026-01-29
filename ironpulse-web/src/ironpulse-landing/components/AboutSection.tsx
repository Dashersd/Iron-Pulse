import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutCards } from '../data';

export const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Static background effect - no animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/8 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block" whileHover={{ scale: 1.05 }}>
            About IronPulse
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just a gym. We&apos;re a forge where determination meets transformation. Every rep, every drop
            of sweat, every breakthrough – it all happens here. Join us and discover what you&apos;re truly capable of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 30px 60px rgba(220, 38, 38, 0.4)',
              }}
              className="bg-zinc-900 p-8 rounded-sm border border-zinc-800 hover:border-red-600 transition-all relative group"
            >
              {/* Pulsing glow background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 rounded-sm blur-xl`}
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Icon with pulse effect */}
              <motion.div
                className="mb-6 relative"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <card.icon className="w-16 h-16 text-red-600 mx-auto relative z-10" />
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.1, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 relative z-10">{card.title}</h3>
              <p className="text-gray-400 relative z-10">{card.desc}</p>

              {/* Corner accent with fade */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

