import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseUsFeatures } from '../data';

export const WhyChooseUs = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Floating high-quality orbs */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-red-800/5 rounded-full blur-[120px]"
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
          className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tighter"
        >
          WHY IRONPULSE?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {whyChooseUsFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                y: -10,
              }}
              className="text-center group relative p-6 rounded-2xl transition-all"
            >
              {/* Animated 3D Icon Container */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mb-8 inline-block relative"
              >
                <div className="relative z-10 bg-zinc-900 w-24 h-24 flex items-center justify-center rounded-2xl border border-white/5 shadow-2xl group-hover:border-red-600/50 transition-colors">
                  <feature.icon className={`w-10 h-10 ${feature.color} transition-transform duration-500 group-hover:scale-110`} />
                </div>
                {/* Dynamic Glow */}
                <motion.div
                  className={`absolute inset-0 ${feature.color.replace('text-', 'bg-')} blur-3xl opacity-20`}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors uppercase tracking-widest">{feature.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
