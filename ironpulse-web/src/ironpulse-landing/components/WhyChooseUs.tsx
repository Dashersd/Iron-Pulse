import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseUsFeatures } from '../data';

export const WhyChooseUs = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Static orbs - no animation */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/15 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-800/8 rounded-full blur-2xl" />

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
                scale: 1.05,
                y: -5,
              }}
              className="text-center group relative"
            >
              {/* Simplified Icon - no continuous animation */}
              <div className="mb-4 inline-block relative">
                <feature.icon className={`w-16 h-16 ${feature.color} mx-auto relative z-10`} />
                <div className={`absolute inset-0 ${feature.color} blur-xl opacity-30`} />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

