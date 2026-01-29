import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield } from 'lucide-react';
import { membershipPlans } from '../data';

export const MembershipSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-900/20 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Membership Plans
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -20, z: -100 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0, z: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{
                scale: 1.08,
                y: -15,
                rotateY: 5,
                z: 50,
                boxShadow: '0 40px 80px rgba(220, 38, 38, 0.5)',
              }}
              className={`bg-zinc-900 p-8 rounded-sm relative overflow-hidden ${
                plan.recommended ? 'border-2 border-red-600 md:scale-105' : 'border border-zinc-800'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.recommended && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full text-sm font-bold z-20"
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.8)',
                        '0 0 10px rgba(255,255,255,0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    RECOMMENDED
                  </motion.span>
                </motion.div>
              )}

              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-800/10 opacity-0 group-hover:opacity-100"
                animate={
                  plan.recommended
                    ? {
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <motion.span
                    className="text-5xl font-black text-red-600 inline-block"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    ${plan.price}
                  </motion.span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.15 + j * 0.1 + 0.5 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, delay: j * 0.2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Shield className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#dc2626',
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-700 hover:bg-red-600 text-white py-3 font-bold rounded-sm transition-all relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>

              {/* Corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-600/30 to-transparent"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/30 to-transparent"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

